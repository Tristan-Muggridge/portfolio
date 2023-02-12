import { useContext, useEffect, useState } from 'react';
import {SiGithub, SiLinkedin, SiSpotify} from 'react-icons/si'

import Content from '../classes/Content'
import LanguageContext from './Context/LanguageContext';
import Refs from '../Refs';

let scrolltop:number = 0;

export default function () {

	const language = useContext(LanguageContext);

	const [showNav, setShowNav] = useState(false);

	useEffect(() => {
		const handleScroll = (event: any) => {
			setShowNav(scrolltop > document.documentElement.scrollTop)
			scrolltop = document.documentElement.scrollTop;
		};
	  
		window.addEventListener('scroll', handleScroll);
	
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};	 

	}, [])

    return (
        <nav className={`${showNav ? 'top-0' : '-top-[100%]'} sticky hidden md:flex w-full h-[5vh] bg-neutral-700 drop-shadow-lg z-10 transition-all`}>
			<div className='max-w-[1024px] mx-auto px-4 w-full flex items-center justify-between text-lg relative'>
				<span className='text-2xl font-semibold'>
				<h1> {new Content("Tristan Muggridge", "マグリジ・トリスタン")[language]} </h1>
				<div className='w-1/2 absolute flex gap-6 '>
                    {
                        [
                            {url: 'https://github.com/Tristan-Muggridge',           icon: <SiGithub name="github" className='animate-pulse rounded-full text-4xl p-2 opacity-70 hover:border hover:opacity-100 hover:border-neutral-300 hover:text-neutral-300'/>},
                            {url: 'https://www.linkedin.com/in/tristan-muggridge/', icon: <SiLinkedin name='linkedin' className='animate-pulse rounded-full text-4xl p-2 opacity-70 hover:border hover:border-blue-500 hover:text-blue-100 hover:border-blue-500 focus:text-blue-100'/>},
                            {url: '',                                               icon: <SiSpotify name='Spotify' className='animate-pulse rounded-full text-4xl p-2 opacity-70 hover:border hover:border-green-100 hover:text-green-100'/>},
                        ].map( (element, index) => <a key={index} className='rounded-full bg-neutral-700 drop-shadow-md' href={element.url}> {element.icon} </a>)
                    }
                </div>

				</span>
				<div className='flex'>
					<ul className='flex gap-6 list-none'>
						{
							[
								{ref: Refs.certifications, content: new Content("Certifications", "資格")[language]},
                                {ref: Refs.skills, content: new Content("Skills", "スキル")[language]},
								{ref: Refs.awards, content: new Content("Awards", "賞品")[language]} ,
                                {ref: Refs.contact, content: new Content("Contact", "連絡")[language]},
							].map( (link, index: number) => <li 
															onClick={()=> Refs.scrollToRef(link.ref) } 
															key={index} 
															className='cursor-pointer'> {link.content} 
															</li> )
						}
					</ul>
				</div>
			</div>
		</nav>
    )
}