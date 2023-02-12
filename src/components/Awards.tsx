import { useContext } from "react";
import Content from "../classes/Content"
import LanguageContext from "./Context/LanguageContext";
import Header from "./sub-components/Header";
import Refs from "../Refs";

export default function () {
    const language = useContext(LanguageContext);
    
    return (
    <section ref={ Refs.awards } className='w-full px-4'>
        <Header content={ new Content("Awards", "賞品")[language]} />
		
        <div className='mx-auto max-w-lg p-6 rounded-md bg-neutral-300 text-neutral-700 flex flex-col gap-2 transition-all'>
            <a href="https://events.microfocus.com/en-au-img-forum" target='_blank'>
                <img className="mx-auto h-full w-full rounded-md" src={`https://media.licdn.com/dms/image/D4E2DAQELKk0Lnp1cMQ/profile-treasury-image-shrink_1920_1920/0/1663218885860?e=1676707200&v=beta&t=m74CbQH4oqvqnLsO2d9Rca2Hpq9k97tBk_reryM3G0s`} alt="" />
            </a>
            <h3 className='font-semibold text-center'> {new Content('Technology Excellence', 'テクノロジー・エクセレンス')[language]} </h3>
            <h5 className='font-semibold text-center'>
            { new Content(`
                    Integrating Content Manager & USQHub Platform for Compliant Records Retention and Access
                `, `
                    コンテンツマネージャーとUSQHubプラットフォームの統合により、コンプライアンスに準拠した記録保持とアクセスを実現
                `)[language]
            }
            </h5>
            <p className='text-center'>
                { new Content(`
                    USQ integrated Content Manager to streamline requests and approvals whilst meeting the university’s legislative record-keeping compliance obligations for high-value and high-risk content.
                `, `
                    USQはContent Managerを統合してリクエストと承認を合理化し、高価値でリスクの高いコンテンツに対する大学の法的記録保持の義務を満たしました。
                `)[language]}
            </p>
        </div>
    </section>
)}