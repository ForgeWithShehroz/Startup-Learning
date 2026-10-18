import Image from "next/image";

export default function Home() {
  return (
    <div>
      <form className="text-center border-2 bg-amber-600 text-white ">
        <label htmlFor="firstname">First name: </label>
        <input className="text-white border rounded  border-black my-3" type="text" name="firstname" id="firstname" required />
        <br />

        <label htmlFor="lastname">Last name: </label>
        <input type="text" className="text-white border rounded  border-black my-3" name="lastname" id="lastname" required />
        <br />

        <label htmlFor="email">Email: </label>
        <input className="text-white border rounded  border-black my-3" type="email" name="email" id="email" required />
        <br />

        <label htmlFor="password">Password: </label>
        <input className="text-white border rounded  border-black my-3" type="password" name="password" id="password" required />
        <br />

        <input type="submit" value="Login!" />
      </form>
    </div>
  );
}
