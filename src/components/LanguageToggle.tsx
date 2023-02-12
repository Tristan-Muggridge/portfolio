import { useContext, useRef } from "react";
import Content from "../classes/Content"
import LanguageContext from "./Context/LanguageContext";

interface IProps {onClick():void}

export default function ({onClick}: IProps) {
    const language = useContext(LanguageContext);
    const label = new Content("English", "日本語");
    
    const activeLanguage:any = useRef(null);
    const inactiveLanguage:any = useRef(null);

    const handleOnClick = () => {
        onClick();
    }

    return (
        <div className='fixed right-2 bottom-20'>
            <span ref={activeLanguage}
            className={`transform-all relative p-3 w-5 text-neutral-300 font-medium rounded-full select-none z-10 ${label[language] == "English" ? 'bg-blue-500' : 'bg-red-500'}`} 
            onClick={handleOnClick}> {label[language] == "English" ? "English" : "日本語"} </span>
            
            <span ref={inactiveLanguage}
            className={`transform-all relative p-3 w-5 text-neutral-700 font-medium rounded-full right-4 top-5 select-none z-0 ${label[language] == "English" ? 'bg-blue-100 text-neutral-700' : 'bg-red-100 text-neutral-700'}`} 
            onClick={handleOnClick}> {label[language] == "English" ? "日本語" : "English"} </span>
        </div>
)}