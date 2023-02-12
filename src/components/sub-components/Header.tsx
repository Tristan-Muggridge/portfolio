
interface IProps {
    content: string
}

export default function ({content}: IProps) {
    return( 
        <h2 className='flex items-center gap-2 py-16 text-center text-4xl font-medium w-fit mx-auto'> 					
            <div className='h-0.5 w-4 bg-neutral-300 translate-y-1/2'></div>
            { content } 
            <div className='h-0.5 w-4 bg-neutral-300 translate-y-1/2'></div>
        </h2>
    )
}