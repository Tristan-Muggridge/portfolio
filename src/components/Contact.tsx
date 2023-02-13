import { useContext, useEffect, useState } from "react";
import emailjs from '@emailjs/browser';


import Content from "../classes/Content"

import LanguageContext from "./Context/LanguageContext";
import Header from "./sub-components/Header";
import Button from "./sub-components/Button";
import Refs from "../Refs";

export default function () {
    const [canSubmit, setCanSubmit] = useState(false);
    const [emailSent, setEmailSent] = useState(false);
    const [somethingWentWrong, setSomethingWentWrong] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const language = useContext(LanguageContext);

    useEffect(()=>{
        if (name.length > 3, email.length > 5, message.length > 10) setCanSubmit(true);
    }, [name, email, message])

    const sendEmail = async (e: any) => {
        e.preventDefault();

        const templateParams = {
            from_name: name,
            from_email: email, 
            message: message
        }

        const request = await emailjs.send('service_9uy7cpb', 'template_0t7rcye', templateParams, 'R0o787fR03PiaIMB3')

        if (request.status == 200) {
            setName("");
            setEmail("");
            setMessage("");

            setCanSubmit(false);
            setEmailSent(true);
        }

        else {
            setSomethingWentWrong(true);
            setCanSubmit(false);
            setEmailSent(false);    
        }
    }

    return (
    <section ref={ Refs.contact } className='w-full px-4 overflow-hidden relative'>
        <Header  content={new Content("Contact", "連絡")[language]} />
        <div>
            <form onSubmit={sendEmail} className={`duration-700 flex flex-col gap-1 text-neutral-700 transition-all ${!emailSent && somethingWentWrong==false ? '' : '-translate-x-[150%]'}`}>
                <label className="text-neutral-300 font-semibold " htmlFor="name"> {new Content("Name", "名前")[language]} </label>
                <input value={name} onInput={(e:any) =>setName(e.target.value)} className="focus:outline focus:outline-blue-500 p-2 m-0 rounded-md" type="text" id="name" placeholder={new Content("Full Name", "姓名")[language]} />
                
                <label className="text-neutral-300 font-semibold mt-4" htmlFor="email"> {new Content("Contact Email", "メール")[language]} </label>
                <input value={email} onInput={(e:any) =>setEmail(e.target.value)} className="focus:outline focus:outline-blue-500 p-2 m-0 rounded-md" type="email" id="email" placeholder={new Content("Contact Email", "メール")[language]} />
                
                <label className="text-neutral-300 font-semibold mt-4" htmlFor="message"> {new Content("Inquiry", "メッセージ")[language]} </label>
                <textarea value={message} onInput={(e:any) =>setMessage(e.target.value)} className="focus:outline focus:outline-blue-500 p-2 m-0 rounded-md" rows={8} id="message" placeholder={new Content("", "")[language]} />

                <Button disabled={canSubmit} buttonText={new Content("Submit", "サブミット")[language]} />
            </form>
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 ${somethingWentWrong ? 'absolute' : 'hidden'}">
                <div className={`text-center duration-700 transition-all text-2xl break-keep`}>                    
                    <div className={somethingWentWrong ? 'duration-700 transition-all' : 'translate-x-[150%]'}>
                        <p> 
                            {new Content('Something went wrong! Please use the below email address to contact me.', '何かが間違っていました! 下記のメールアドレスにご連絡ください。')[language]}
                        </p> 
                        <a className="underline" href="mailto:muggridge.dev@gmail.com"> muggridge.dev@gmail.com </a>
                    </div>
                    <div className={emailSent && !somethingWentWrong ? 'duration-700 transition-all' : 'translate-x-[150%]'}>
                        <p> 
                            {new Content('Thank you for your inquiry, I look forward to getting back to you shortly!', 'メール送っていただいてありがとうございました。近日中にお返事できることを楽しみにしています。')[language]}
                        </p> 
                    </div>
                </div>
            </div>
        </div>
    </section>		
)}