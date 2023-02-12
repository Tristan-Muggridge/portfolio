import { useContext } from "react";

import Content from "../classes/Content"

import LanguageContext from "./Context/LanguageContext";
import Header from "./sub-components/Header";
import Button from "./sub-components/Button";
import Refs from "../Refs";

export default function () {
    const language = useContext(LanguageContext);
    
    return (
    <section ref={ Refs.contact } className='w-full px-4'>
        <Header  content={new Content("Contact", "連絡")[language]} />

        <form action="" method="post" className='flex flex-col gap-1 text-neutral-700 transition-all translate-y-[100vw]'>
            <label className="text-neutral-300 font-semibold " htmlFor="name"> {new Content("Name", "名前")[language]} </label>
            <input className="p-2 m-0 rounded-md" type="text" id="name" placeholder={new Content("Full Name", "姓名")[language]} />
            
            <label className="text-neutral-300 font-semibold mt-4" htmlFor="email"> {new Content("Contact Email", "メール")[language]} </label>
            <input className="p-2 m-0 rounded-md" type="text" id="email" placeholder={new Content("Contact Email", "メール")[language]} />
            
            <label className="text-neutral-300 font-semibold mt-4" htmlFor="message"> {new Content("Inquiry", "メッセージ")[language]} </label>
            <textarea className="p-2 m-0 rounded-md" rows={8} id="message" placeholder={new Content("", "")[language]} />

            <Button buttonText={new Content("Submit", "サブミット")[language]} />
        </form>
    </section>		
)}