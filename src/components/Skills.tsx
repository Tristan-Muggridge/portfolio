import { useState, useContext } from "react";
import Content from "../classes/Content"
import LanguageContext from "./Context/LanguageContext";
import Header from "./sub-components/Header";
import Refs from "../Refs";

export default function () {
    const language = useContext(LanguageContext);
    
    const [skillFilter, setSkillFilter] = useState<string[]>([]);	

	const handleSkillFilterClick = (filter: string) => {
		!skillFilter.includes(filter)
			? setSkillFilter([...skillFilter, filter]) 
			: setSkillFilter(skillFilter.filter(e => e != filter))

			console.debug(skillFilter)
	}

    return (
    <section className='w-full px-4' ref={ Refs.skills }>
        <Header content={ new Content("Skills", "スキル")[language] } />

        
        <div className='flex flex-col items-center gap-4 text-neutral-300'>
            <button 
            onClick={()=>handleSkillFilterClick("front")} 
            className={`w-3/4 rounded-md text-lg ${!skillFilter.includes("front") ? 'bg-neutral-300  text-neutral-700' : language == "ENG" ? 'bg-blue-500' : 'bg-red-500'}`}> 
                {new Content("FrontEnd", "フロントエンド")[language]} 
            </button>
            <button 
            onClick={()=>handleSkillFilterClick("back")} 
            className={`w-3/4 rounded-md text-lg ${!skillFilter.includes("back") ? 'bg-neutral-300  text-neutral-700' : language == "ENG" ? 'bg-blue-500' : 'bg-red-500'}`}> 
            {new Content("BackEnd", "バックエンド")[language]}
            </button>
        </div>
        
        <div className='transition-all -translate-x-[100vw] flex justify-center flex-wrap mt-8 gap-1'>
        {
            [
                    {name: "JavaScript", tags: ["front", "back"]},
                    {name: "TypeScript", tags: ["front", "back"]},
                    {name: "NextJs", tags: ["back"]},
                    {name: "NodeJs", tags: ["back"]},
                    {name: "React", tags: ["front"]},
                    {name: "HTML5", tags: ["front"]},
                    {name: "CSS3", tags: ["front"]},
                    {name: "Tailwind", tags: ["front"]},
                    {name: ".NET", tags: ["back"]},
                    {name: "CSharp", tags: ["back"]},
                    {name: "MongoDB", tags: ["back"]},
                    {name: "PostgreSQL", tags: ["back"]},
                    {name: "Prisma"	, tags: ["back"]},
                    {name: "AWS", tags: ["back"]},
                    {name: "Graphql", tags: ["back"]},
                    {name: "Jest", tags: ["back"]},
                    {name: "VisualStudio", tags: []},
                    {name: "Python", tags: ["back"]},
            ].filter( skill => skillFilter.length > 0 ? skillFilter.includes(skill.tags[0]) : true ).map( skill => {
                return (
                    <div className='w-auto inline-block relative p-6 rounded-md bg-neutral-300 text-neutral-700'>
                        <img className="h-24 w-full rounded-md" src={`src/assets/${skill.name}.svg`} alt="" />
                        <h3 className='font-semibold text-center'>{skill.name}</h3>
                    </div>
                )
            })
        }
        </div>
    </section>
)}















