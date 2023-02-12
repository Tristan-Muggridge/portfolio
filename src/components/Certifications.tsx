import { useContext } from "react";
import Content from "../classes/Content"
import LanguageContext from "./Context/LanguageContext";
import Header from "./sub-components/Header";

import Refs from "../Refs"; 

import jpf from '../assets/jpf.png'
import itil from '../assets/itil.png'
import aws from '../assets/aws.png'


export default function () {
    const language = useContext(LanguageContext);
	
	const Certification = (title: string, issuedDate: string, issuedBy: string, img: string, url: string) => {
		return (
			<div className='w-80 md:grow p-4 rounded-md font-medium text-lg bg-neutral-300 text-neutral-700'>
				<a href={url} target="_blank" rel="noopener noreferrer">
					<img className="h-60 mx-auto mb-4 rounded-md" src={img} alt="" />
				</a>
				<div className='h-40 flex flex-col justify-between'>
				<h3 className='font-semibold text-2xl text-center'>{title}</h3>
					<div className='text-left md:text-center'>
						<p>{new Content("Issue Date: ", "発行日：")[language]}{issuedDate}</p>
						<p>{new Content("Issued By: ", "発行：")[language]}{issuedBy}</p>
					</div>
				</div>
			</div>
		)
	}
    
	return (
        <section ref={Refs.certifications}>
			<Header content={new Content("Certifications", "資格")[language]} />

			<div className='transition-all flex flex-row justify-evenly flex-wrap gap-4 px-4 translate-x-[100vw]'>
				{
					Certification(
						new Content("JLPT N2", "日本語能力試験N2")[language],
						new Content("August 2022", "2022年8月")[language],
						new Content("The Japan Foundation", "国際交流基金")[language],
						jpf,
						""
					)
				}
				{
					Certification(
						new Content("AWS Certified Solutions Architect - Associate", "AWS 認定ソリューションアーキテクト – アソシエイト")[language],
						new Content("In Progress", "発行日：不明")[language],
						new Content("Amazon", "Amazon")[language],
						aws,
						""
					)
				}
				{
					Certification(
						new Content("ITIL® 4 Foundation Course", "ITIL® 4 基礎コース")[language],
						new Content("November 2021", "2021年11月")[language],
						new Content("ITSM Hub", "ITSM Hub")[language],
						itil,
						"https://www.credly.com/badges/25d58a48-b216-4d7c-a38a-370da953fae9?source=linked_in_profile"
					)
				}
			</div>
		</section>
    )
}