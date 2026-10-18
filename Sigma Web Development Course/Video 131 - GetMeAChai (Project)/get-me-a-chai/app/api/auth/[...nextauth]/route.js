import NextAuth from 'next-auth'
import GitHubProvider from "next-auth/providers/github";
import mongoose, { connect } from 'mongoose';
import User from '@/models/User';
import Payment from '@/models/Payment';
import connectDB from '@/db/connectDb';

// Connect to MongoDB once at the file level to avoid multiple connection overhead
if (mongoose.connection.readyState === 0) {
    mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/chai");
}

export const authoptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile }) {
            if (account.provider === "github") {
                await connectDB()
                // BUG FIX: profile.email contains the GitHub email, not the global email parameter
                const userEmail = profile.email || user.email; 
                
                // BUG FIX: Added 'await' so it doesn't return a pending promise
                const currentUser = await User.findOne({ email: userEmail });
                
                if (!currentUser) {
                    const newUser = new User({
                        email: userEmail,
                        username: userEmail.split("@")[0]
                    });
                    await newUser.save();
                }
                return true;
            }
            return false;
        },

        // FIX: The session callback MUST live inside the callbacks object
        async session({ session, token }) {
            // BUG FIX: GitHub sessions query by email, not session.user.username (which doesn't exist yet)
            const dbUser = await User.findOne({ email: session.user.email });
            
            if (dbUser) {
                session.user.username = dbUser.username;
                session.user.name = dbUser.username;
            }

            // 🚀 WHERE TO USE CONSOLE.LOG:
            // This will print the complete modified session object into your TERMINAL
            console.log("=== NEXT-AUTH SESSION OBJECT ===");
            console.log(JSON.stringify(session, null, 2)); 
            console.log("================================");

            return session;
        } 
    },
    secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authoptions);
export { handler as GET, handler as POST };
