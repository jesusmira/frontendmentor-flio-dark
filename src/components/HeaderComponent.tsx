interface Props{
    image: string,
    title: string,
    description: string,
    button1: string
}


export const HeaderComponent = ({ image, title, description, button1 }:Props) => {
  return (
    <section className="flex flex-col items-center text-center">
            <img src={image} alt="" className="  mx-auto flex  justify-center sm:w-3/4 md: max-w-3xl sm:mb-6"/>
            <h1 className="text-2xl md:text-4xl md:leading-[3.5rem]  sm:px-5 font-Raleway font-bold flex md:max-w-2xl mx-auto">
                {title}
            </h1>            
            <p className=" flex md:text-lg sm:text-sm md:justify-between md:max-w-2xl md:mx-auto md:px-16 mt-6 sm:px-10 font-Open-Sans">
                {description}
            </p>
            <button className="mt-6 bg-blue-cta hover:bg-cyan-cta  py-2  rounded-full px-16 font-Open-Sans">{button1}</button>           
        </section>
  )
}
