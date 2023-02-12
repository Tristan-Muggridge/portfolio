import { useContext } from "react";
import Content from "../classes/Content"
import LanguageContext from "./Context/LanguageContext";

const accent = {
	ENG: "text-blue-500", JPN: "text-red-500"
}

export default function () {
    const language = useContext(LanguageContext);

    return (
        <section className="min-h-[100vh] md:min-h-[95vh] flex items-center px-4">
            <div className='flex flex-col gap-2'>
                <p> { new Content("Hi, my name is", "我が名は")[language] } </p>
                <h2 className={`text-4xl md:text-6xl self-start font-semibold ${accent[language]}`} > { new Content("Tristan Muggridge", "マグリジ トリスタン")[language] } </h2>
                <h4 className='text-2xl md:text-5xl opacity-70'> { new Content("I bring dreams to life through code", "発展で夢がお叶いしています")[language] } </h4>

                <p className='opacity-60 max-w-[30rem]'>
                    { 
                        new Content(
                            `I'm a fullstack engineer with a passion for turning ideas into a reality. 
                            Currently I'm working with the University of Southern Queensland to deliver business and student facing products.`, 
                            `フルスタックエンジニアとしてユーザーの夢が実現しています。
                            現在サザンクイーンズランド大学で経営だけじゃなく学生向けの発展しています。`
                        )[language]
                    }
                </p>
            </div>
        </section>
    )
}