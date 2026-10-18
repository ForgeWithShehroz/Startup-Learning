import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useRef, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
const Manager = () => {
    const ref = useRef();
    const passwordRef = useRef();
    const [isEditing, setIsEditing] = useState(false) ;
    const [form, setform] = useState({ site: "", username: "", password: "" });
    const [passwordArray, setPasswordArray] = useState([]);


    const getPasswords = async () => {
        let req = await fetch("http://localhost:5000");
        let passwords = await req.json()
        console.log(passwords)
        setPasswordArray(passwords);

    }


    useEffect(() => {
        getPasswords()


    }, [])

    const copyText = (text) => {
        toast('Copied to Clipboard!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        navigator.clipboard.writeText(text);
    }

    const showPassword = () => {
        passwordRef.current.type = "text";
        if (ref.current.src.includes("icons/eyecross.png")) {
            ref.current.src = "icons/eye.png";
            passwordRef.current.type = "password";
        } else {
            ref.current.src = "icons/eyecross.png"
            passwordRef.current.type = "text";
        }
    }

    const savePassword = async () => {
        if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {
    
            // ✅ UPDATE MODE
            if (isEditing) {
    
                await fetch("http://localhost:5000", {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(form)
                });
    
                setPasswordArray(passwordArray.map(item =>
                    item.id === form.id ? form : item
                ));
    
                setIsEditing(false);
                setform({ site: "", username: "", password: "" });
    
                toast("Password updated!", { theme: "light" });
                return;
            }
    
            // ✅ CREATE MODE
            const newEntry = { ...form, id: uuidv4() };
    
            await fetch("http://localhost:5000", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newEntry)
            });
    
            setPasswordArray([...passwordArray, newEntry]);
            setform({ site: "", username: "", password: "" });
    
            toast("Password saved!", { theme: "light" });
    
        } else {
            toast("Length of inputs must > 3", { theme: "dark" });
        }
    };



    const deletePassword = async (id) => {
        let c = confirm("Do you really want to delete this password?");
        if (c) {
            console.log("Deleting password with this id ", id, typeof id);
            setPasswordArray(passwordArray.filter((i) => i.id != id));
            // localStorage.setItem("passwords", JSON.stringify(passwordArray.filter((i) => { i.id != id })));

            await fetch("http://localhost:5000", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) })

        }


    }
    const editPassword = (id) => {
        console.log("Editing password with id ", id);
    
        const item = passwordArray.find(i => i.id === id);
        if (!item) return;
    
        setform(item);
        setIsEditing(true);
    };
    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value });
    }
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className="fixed inset-0 -z-10 min-h-screen w-screen bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
            <div className="p-2 pt-4 pb-10 md:p-40 md:py-15 md:mycontainer">
                <h1 className='text-4xl font-bold text-center'>
                    <span className="text-green-500">&lt;</span>
                    <span>Pass</span>
                    <span className="text-green-500">OP/&gt;</span>
                </h1>
                <p className="text-green-900 text-center text-lg">Your own Password Manager</p>
                <div className="flex flex-col p-4 gap-8 items-center text-black ">
                    <input value={form.site} onChange={handleChange} placeholder='Enter website URL' type="text" className='rounded-full border border-green-500 p-4 py-1  w-full' name="site" id="site" />
                    <div className="flex md:flex-row flex-col w-full justify-between gap-8">
                        <input value={form.username} onChange={handleChange} placeholder='Enter Username' type="text" className='rounded-full border border-green-500 p-4 py-1  w-full' name="username" id="username" />
                        <div className="relative">
                            <input value={form.password} ref={passwordRef} onChange={handleChange} placeholder='Enter Password' type="password" className='rounded-full border border-green-500 p-4 py-1  w-full' name="password" id="password" />
                            <span className="absolute right-0.75 top-1 cursor-pointer" onClick={showPassword}>
                                <img ref={ref} src="icons/eye.png" alt="eye" width={26} className='p-1' />
                            </span>
                        </div>

                    </div>
                    <button onClick={savePassword} className='flex justify-center items-center border hover:cursor-pointer border-green-600 bg-green-400 px-8 py-2 w-fit gap-2 rounded-full hover:bg-green-300'>
                        <lord-icon
                            src="https://cdn.lordicon.com/efxgwrkc.json"
                            trigger="hover">
                        </lord-icon>Save
                    </button>
                </div>
                <div className="passwords">
                    <h2 className='font-bold text-2xl py-4'>Your Passwords</h2>
                    {passwordArray.length === 0 && <div>No passwords to show</div>}
                    {passwordArray.length !== 0 &&
                        <table className="table-auto w-full rounded-md overflow-hidden mb-10">
                            <thead className='bg-green-800 text-white '>
                                <tr className=''>
                                    <th className='py-2'>Site</th>
                                    <th className='py-2'>Username</th>
                                    <th className='py-2'>Password</th>
                                    <th className='py-2'>Actions</th>
                                </tr>
                            </thead>
                            <tbody className='bg-[#c6f6d5]'>
                                {passwordArray.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className=' text-center  py-2 border border-white'>
                                                <div className="flex justify-center items-center">
                                                    <a href="" target='_blank'>{item.site}</a>
                                                    <div className="lordIconsCopy size-7 cursor-pointer" onClick={() => { copyText(item.site) }}>
                                                        <lord-icon
                                                            style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                            src="https://cdn.lordicon.com/iykgtsbt.json"
                                                            trigger="hover" >
                                                        </lord-icon>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='text-center  py-2 border border-white'>
                                                <div className="flex justify-center items-center">
                                                    <a href="" target='_blank'>{item.username}</a>
                                                    <div className="lordIconsCopy size-7 cursor-pointer" onClick={() => { copyText(item.username) }}>
                                                        <lord-icon
                                                            style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                            src="https://cdn.lordicon.com/iykgtsbt.json"
                                                            trigger="hover" >
                                                        </lord-icon>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='text-center  py-2 border border-white'>
                                                <div className="flex justify-center items-center">
                                                    <a href="" target='_blank'>{item.password}</a>
                                                    <div className="lordIconsCopy size-7 cursor-pointer" onClick={() => { copyText(item.password) }}>
                                                        <lord-icon
                                                            style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                            src="https://cdn.lordicon.com/iykgtsbt.json"
                                                            trigger="hover" >
                                                        </lord-icon>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='justify-center py-2 border border-white text-center'>
                                                <span className='cursor-pointer mx-1' onClick={() => { editPassword(item.id) }}>
                                                    <lord-icon
                                                        src="https://cdn.lordicon.com/gwlusjdu.json"
                                                        trigger="hover"
                                                        style={{ "width": "25px", "height": "25px" }}>
                                                    </lord-icon>
                                                </span>
                                                <span className='cursor-pointer mx-1' onClick={() => { deletePassword(item.id) }}>
                                                    <lord-icon
                                                        src="https://cdn.lordicon.com/skkahier.json"
                                                        trigger="hover"
                                                        style={{ "width": "25px", "height": "25px" }}>
                                                    </lord-icon>
                                                </span>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>}
                </div>
            </div>

        </>

    )
}

export default Manager
