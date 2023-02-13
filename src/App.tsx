import { useEffect, useRef, useState} from 'react'
import Navigation from './components/Navigation';
import About from './components/About';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Awards from './components/Awards';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import LanguageToggle from './components/LanguageToggle';
import LanguageContext from './components/Context/LanguageContext';

import Languages from './classes/Languages';
import Refs from './Refs';

export default function () {		
	const [displayLanguage, setDisplayLanguage] = useState(Languages.ENG)

	Refs.certifications = useRef(null);
	Refs.skills = useRef(null);
	Refs.awards = useRef(null);
	Refs.testimonials = useRef(null);
	Refs.contact = useRef(null);

	useEffect(()=>{
		const refs = [
			Refs.certifications,
			Refs.skills,
			Refs.awards,
			Refs.testimonials,
			Refs.contact,
		]

		const callback = (entries: any, observer: any) => {
			entries.forEach((entry: any) => {
				if (entry.isIntersecting) {
					if (entry.target.children.length > 0) {
						entry.target.children[entry.target.children.length-1].classList.remove("translate-x-[100%]")
						entry.target.children[entry.target.children.length-1].classList.remove("-translate-x-[100%]")
						entry.target.children[entry.target.children.length-1].classList.remove("translate-y-[100%]")
						entry.target.children[entry.target.children.length-1].classList.remove("blur-2xl")
					}

				}
			})
		}

		let options = {
			rootMargin: '0px',
			threshold: 0.6
		}

		let observer = new IntersectionObserver(callback, options);

		refs.forEach((ref, index) => {
			const element = ref?.current as unknown as Element
			if (element && element.children) {
				
				element.children[element.children.length-1].classList.add("duration-500")
			
				index < refs.length-1 
					? element.children[element.children.length-1].classList.add( index%2==0? "translate-x-[100%]":"-translate-x-[100%]")
					: element.children[element.children.length-1].classList.add( "translate-y-[100%]")

				element.children[element.children.length-1].classList.add("blur-2xl")

				observer.observe(element);
			}
		})
	}, [])
	
	return (

		<div className="App text-neutral-300 font-Shippori bg-neutral-700">
			<LanguageContext.Provider value={displayLanguage}>
				<Navigation />
				<main className='max-w-[1024px] mx-auto overflow-hidden'>
					<About />
					<Certifications />
					<Skills />
					<Awards />
					<Testimonials />
					<Contact />
					<LanguageToggle onClick={()=>setDisplayLanguage( displayLanguage == Languages.ENG ? Languages.JPN : Languages.ENG )}/>	
				</main>
			</LanguageContext.Provider>
		</div>
  )
}