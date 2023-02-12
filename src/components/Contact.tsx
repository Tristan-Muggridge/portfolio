import { useContext, useState } from "react";
import emailjs from '@emailjs/browser';


import Content from "../classes/Content"

import LanguageContext from "./Context/LanguageContext";
import Header from "./sub-components/Header";
import Button from "./sub-components/Button";
import Refs from "../Refs";

export default function () {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const language = useContext(LanguageContext);

    const sendEmail = async (e: any) => {
        e.preventDefault();

        const templateParams = {
            from_name: name,
            from_email: email, 
            message: message
        }

        const request = await emailjs.send('service_9uy7cpb', 'template_0t7rcye', templateParams, 'R0o787fR03PiaIMB3')

        setName("");
        setEmail("");
        setMessage("");
    }

    return (
    <section ref={ Refs.contact } className='w-full px-4'>
        <Header  content={new Content("Contact", "連絡")[language]} />

        <form onSubmit={sendEmail} className='flex flex-col gap-1 text-neutral-700 transition-all'>
            <label className="text-neutral-300 font-semibold " htmlFor="name"> {new Content("Name", "名前")[language]} </label>
            <input value={name} onInput={(e:any) =>setName(e.target.value)} className="focus:outline focus:outline-blue-500 p-2 m-0 rounded-md" type="text" id="name" placeholder={new Content("Full Name", "姓名")[language]} />
            
            <label className="text-neutral-300 font-semibold mt-4" htmlFor="email"> {new Content("Contact Email", "メール")[language]} </label>
            <input value={email} onInput={(e:any) =>setEmail(e.target.value)} className="focus:outline focus:outline-blue-500 p-2 m-0 rounded-md" type="email" id="email" placeholder={new Content("Contact Email", "メール")[language]} />
            
            <label className="text-neutral-300 font-semibold mt-4" htmlFor="message"> {new Content("Inquiry", "メッセージ")[language]} </label>
            <textarea value={message} onInput={(e:any) =>setMessage(e.target.value)} className="focus:outline focus:outline-blue-500 p-2 m-0 rounded-md" rows={8} id="message" placeholder={new Content("", "")[language]} />

            <Button buttonText={new Content("Submit", "サブミット")[language]} />
        </form>
    </section>		
)}