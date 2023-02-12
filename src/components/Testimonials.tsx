import { useContext, useState } from "react";
import Content from "../classes/Content"
import LanguageContext from "./Context/LanguageContext";
import Header from "./sub-components/Header";
import Refs from "../Refs";

import vee from '../assets/vee.jfif'
import kaye from '../assets/kaye.jfif'
import kay from '../assets/kay.webp'
interface ITestimonial {
    avatar: string,
    name: string,
    position: string,
    content: string[]
}

const Testimonial = ({avatar, name, position, content}:ITestimonial) => {
    return (
        <div className='relative left-1/2 -translate-x-1/2 flex flex-col gap-4 w-full'>
            <div className='mx-auto max-w-4xl p-6 rounded-md bg-neutral-300 text-neutral-700 flex flex-col gap-2'>
                <img className="my-8 outline outline-neutral-700 drop-shadow-md mx-auto h-40 w-auto rounded-full" src={avatar} alt="" />
                <h3 className='font-semibold text-center text-2xl'>{name}</h3>
                <h5 className='font-semibold text-center'>{position}</h5>
                {
                    content.map(string => <p className='text-center'>{string}</p>)
                }
            </div>
        </div>
    )
}

export default function () {
    const language = useContext(LanguageContext);
    
    const [active, setActive] = useState(0);

    const Testimonials = [
        {
            avatar:vee,
            name:'Vee Ferreira',
            position: new Content('Team Leader - USQHub (UniSQ)', 'チームリーダー - USQHub (サザンクイーンズランド大学)')[language],
            content:[
                new Content(`
                    It cannot be overstated how great it was to have Tristan on the USQHub team and how valuable his contributions were to us and the University. From the start, Tristan proved himself as someone who was very keen, eager to learn, and willing to work hard to produce quality solutions. He took on every challenge I was able to throw at him and he never shied away from a difficult assignment. His work on the Content Manager integration is a shining example of what he can achieve when put to the task. It was a very difficult assignment, but he was up to the challenge and produced a solution that has tangibly saved the University many thousands of dollars and counting.
                `, `
                    トリスタンがUSQHubチームに加わったことがどれだけ素晴らしいことか、そして彼の貢献が我々と大学にとってどれだけ貴重なものであったかは、いくら強調してもしすぎることはないでしょう。トリスタンは最初から、非常に熱心で学ぶことに熱心で、質の高いソリューションを生み出すために努力を惜しまない人であることを証明してくれました。彼は、私が投げかけることができるすべてのチャレンジに挑戦し、困難な課題から決して逃げませんでした。コンテンツ・マネージャーとの統合に関する彼の仕事は、仕事を任されたときに彼が何を達成できるかを示す輝かしい一例です。非常に難しい課題でしたが、彼はその課題に取り組み、大学に何千ドルも節約させるソリューションを提供しました。
                `)[language],
                
                new Content(`
                Tristan worked on many more projects while in the USQHub team and they were all delivered as requested (usually even better) and on time. We were even able to package up some of his work and share it with the Ivanti community.
                `, 
                `
                TristanはUSQHubチームにいる間、さらに多くのプロジェクトに携わりましたが、それらは全てリクエスト通り（通常はそれ以上）、時間通りに納品されました。彼の仕事の一部はパッケージ化され、Ivantiのコミュニティで共有することもできました。
                `)[language],
                new Content(`
                It's been great to work with Tristan, he was a breeze to manage and such a bright and genuine addition to the team. I'm so happy that he's been able to move on to bigger and better things.
                `, 
                `
                トリスタンと一緒に仕事ができてよかったです。彼は管理しやすく、明るく純粋で、チームに加わることができました。彼がより大きな、より良い仕事に移ることができ、とてもうれしく思っています。
                `)[language],
            ]
        },
        {
            avatar:kaye,
            name:'Kaye England',
            position:'Manager - Enterprise Information Management Services (UniSQ)',
            content:[
                new Content(`
                    I have been working with Tristan on a collaborative project integrating two systems. Tristan has been working on updating the script to the original integration so that it can handle multiple scenarios. This will be transformative for the integration and mean that we will be more effective and efficient in our work processes. Tristan is a great communicator and is easy to work with. I would highly recommend Tristan as he displays initiative, excellence and great troubleshooting skills in all that he does.
                `, `
                私は、2つのシステムを統合する共同プロジェクトでTristanと仕事をしています。トリスタンは、複数のシナリオに対応できるように、オリジナルの統合スクリプトを更新する作業を行っています。これは統合にとって大きな変革であり、私たちの作業プロセスをより効果的かつ効率的にすることを意味します。トリスタンは素晴らしいコミュニケーターで、一緒に仕事をするのが簡単です。トリスタンは主体性、卓越性、そして優れたトラブルシューティングのスキルをすべてにおいて発揮してくれるので、私はトリスタンを強く推薦します。
                `)[language]
            ]
        },
        {
            avatar:kay,
            name:'Kay Graham',
            position:'ICT Support Officer - Client Services (UniSQ)',
            content:[
                new Content(`
                    I worked with Tristan in a small team whilst he was still studying and juggling work. His dedication to both his work and study is to be commended. Tristan's Positive attitude along side his knowledge and initiative will strengthen with experience. He is always willing to put his hand up to assist colleagues and offer options if needed. he is a team player but also works incredibly well on his own. He communicates well and is proactive and dependable, a true asset to any team.
                `, `
                トリスタンがまだ勉強と仕事を両立していた頃、私は小さなチームで一緒に働きました。彼の仕事と勉強の両方に対する献身的な姿勢は賞賛に値します。トリスタンの前向きな姿勢、そして彼の知識と自発性は、経験を積むことでさらに強化されるでしょう。彼は常に手を挙げて同僚を助け、必要であれば選択肢を提供します。彼はチームプレーヤーであると同時に、自分自身でも非常によく働きます。コミュニケーション能力に優れ、積極的で頼りになる、チームにとっての真の財産です。
                `)[language]
            ]
        }
    ]

    return (
    <section ref={Refs.testimonials} className='w-full px-4'>
        <Header content={new Content("Testimonials", "表彰状")[language]}/>
        <div className="relative flex flex-col gap-2 bg-neutral-700 transition-all">
            <div className="absolute flex flex-row justify-center items-end z-10 mt-4 gap-1 w-full">            
            {
                Testimonials.map((card, index: number) => { return (
                    <button
                    key={'testimonial-button-'+index}
                    onClick={()=>setActive(index)} 
                    className={`border border-neutral-700 rounded-full p-1.5 ${active==index?"bg-neutral-700":""}`} />
                )})
            }

            </div>
            {
                Testimonial(Testimonials[active])
            }   
        </div>
    </section>
)}