
type InfoBoxProps = {

    children: React.ReactNode;

    className?: string;

};


export default function InfoBox({ children, className = "" }: InfoBoxProps) {

    return (

        <div className={`${className} custom-scrollbar bg-transparent rounded-[1rem] border-l-[1px] border-t-[1px] border-white  text-white text-[0.7rem] sm:text-[0.8rem] md:text-[0.8rem] lg:text-[1rem] p-4 overflow-x-hidden break-words

            max-w-[15rem] sm:max-w-[15rem] md:max-w-[20rem] lg:max-w-[25rem]

            max-h-[15rem] sm:max-h-[15rem] md:max-h-[10rem] lg:max-h-[15rem] `}>
            {children}
        </div>

    );

}