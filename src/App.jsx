const App = () => {
    const socialLinks = [
        {
            name: "Github",
            link: "https://github.com"
        },
        {
            name: "Frontend Mentor",
            link: "https://www.frontendmentor.io/"
        },
        {
            name: "Linkedin",
            link: "https://www.linkedin.com"
        },
        {   
            name: "Twitter",
            link: "https://twitter.com"
        }, 
        {
            name: "Instagram",
            link: "https://www.instagram.com"
        }
    ]

    return (
        <section className="w-full min-h-[100vh] flex items-center justify-center bg-[#141414] p-[0.65rem] md:p-0">
            <div className="px-[2.575rem] py-[1.65rem] rounded-[0.75rem] bg-[#1f1f1f] flex flex-col gap-[1.2rem] justify-center items-center text-neutral-200 text-center max-w-[325px] w-full">
                <img 
                    src="/images/avatar-jessica.jpeg" 
                    alt="jessica" 
                    className="w-[70px] h-[70px] rounded-[50%]"
                />
                <div className="flex flex-col items-center justify-center w-full">
                    <h1 className="text-[1.5rem] font-[700]">Jessica Randall</h1>
                    <span className="text-[0.9rem] font-[500] text-[#c4f82a]">London, United Kingdom</span>
                </div>
                <div className="flex flex-col justify-center items-center gap-[0.85rem] w-full">
                    <h2 className="text-[0.825rem] font-[500] text-neutral-200">
                        "Front-developer and avid reader."
                    </h2>
                    {socialLinks.map((link) => (
                        <a
                            key={`social-link-${link.name}`}
                            href={link.link}
                            className="text-[0.8rem] font-[700] bg-[#333333] rounded-[0.35rem] w-full p-[0.55rem] hover:bg-[#c4f82a] hover:text-[#1f1f1f] transition-all"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
} 

export default App