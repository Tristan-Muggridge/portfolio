
class Refs {
    static certifications: React.MutableRefObject<null> | null
    static skills: React.MutableRefObject<null> | null
    static awards: React.MutableRefObject<null> | null
    static testimonials: React.MutableRefObject<null> | null
    static contact: React.MutableRefObject<null> | null

    static scrollToRef = (ref: any) => {
        ref.current.scrollIntoView({behavior: 'smooth'});
        console.debug(ref)
    } 
}

export default Refs;