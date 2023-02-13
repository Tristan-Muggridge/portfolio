interface IProps {
    buttonText: string
    disabled?: boolean
    // onClick(): void
}

export default function ({buttonText, disabled}: IProps) {
    return (
        <button 
        disabled={!disabled}
        type="submit" 
        className={`outline rounded-full px-6 my-8 w-fit mx-auto ${disabled == false ? 'outline-red-100 text-red-100' : 'outline-green-100 text-green-100'}`}>
            {buttonText}
        </button>
    )
}