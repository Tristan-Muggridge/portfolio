import { useState, useContext } from "react";
import Content from "../classes/Content"
import LanguageContext from "./Context/LanguageContext";
import Header from "./sub-components/Header";
import Refs from "../Refs";


import JavaScript from '../assets/JavaScript.svg'
import TypeScript from '../assets/TypeScript.svg'
import NextJs from '../assets/NextJs.svg'
import NodeJs from '../assets/NodeJs.svg'
import React from '../assets/React.svg'
import HTML5 from '../assets/HTML5.svg'
import CSS3 from '../assets/CSS3.svg'
import Tailwind from '../assets/Tailwind.svg'
import dotNET from '../assets/dotNET.svg'
import CSharp from '../assets/CSharp.svg'
import MongoDB from '../assets/MongoDB.svg'
import PostgreSQL from '../assets/PostgreSQL.svg'
import Prisma from '../assets/Prisma.svg'
import AWS from '../assets/AWS.svg'
import Graphql from '../assets/Graphql.svg'
import Jest from '../assets/Jest.svg'
import VisualStudio from '../assets/VisualStudio.svg'
import Python from '../assets/Python.svg'

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
                    {name: "JavaScript", image: JavaScript, tags: ["front", "back"]},
                    {name: "TypeScript", image: TypeScript, tags: ["front", "back"]},
                    {name: "NextJs", image: NextJs, tags: ["back"]},
                    {name: "NodeJs", image: NodeJs, tags: ["back"]},
                    {name: "React", image: React, tags: ["front"]},
                    {name: "HTML5", image: HTML5, tags: ["front"]},
                    {name: "CSS3", image: CSS3, tags: ["front"]},
                    {name: "Tailwind", image: Tailwind, tags: ["front"]},
                    {name: ".NET", image: dotNET, tags: ["back"]},
                    {name: "CSharp", image: CSharp, tags: ["back"]},
                    {name: "MongoDB", image: MongoDB, tags: ["back"]},
                    {name: "PostgreSQL", image: PostgreSQL, tags: ["back"]},
                    {name: "Prisma", image: Prisma	, tags: ["back"]},
                    {name: "AWS", image: AWS, tags: ["back"]},
                    {name: "Graphql", image: Graphql, tags: ["back"]},
                    {name: "Jest", image: Jest, tags: ["back"]},
                    {name: "VisualStudio", image: VisualStudio, tags: []},
                    {name: "Python", image: Python, tags: ["back"]},
            ].filter( skill => skillFilter.length > 0 ? skillFilter.includes(skill.tags[0]) : true ).map( skill => {
                return (
                    <div className='w-auto inline-block relative p-6 rounded-md bg-neutral-300 text-neutral-700'>
                        <img className="h-24 w-full rounded-md" src={skill.image} alt="" />
                        <h3 className='font-semibold text-center'>{skill.name}</h3>
                    </div>
                )
            })
        }
        </div>
    </section>
)}















