interface IProps {
    buttonText: string
    // onClick(): void
}

export default function ({buttonText}: IProps) {
    return (
        <button type="submit" className='outline outline-neutral-300 rounded-full px-6 my-8 text-neutral-300 w-fit mx-auto'>{buttonText}</button>
    )
}