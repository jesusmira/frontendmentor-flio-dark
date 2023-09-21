interface Props {
    image: string;
    title: string;
    description1: string;
    description2: string;
    more: string;
    icon: string;
}

export const ProductComponent = ({image, title, description1, description2, more, icon}:Props) => {
  return (
    <>
    <div  >
        <img src={image} alt="imagen2" />
    </div>
    <div className="mt-8">
        <h1 className="text-lg md:text-4xl font-Raleway font-bold text-left md:mr-44">{title}</h1>
        <p className="mt-6 text-sm  md:leading-6 font-Open-Sans">{description1}</p>
        <p className="mt-4 text-sm  md:leading-6 font-Open-Sans">{description2}</p>
        <a href="#" className="inline-flex mt-4 text-sm  md:leading-6 font-Open-Sans text-cyan-cta border-b-2 pb-2">{more}<img src={icon} alt="icon-arrow" className="ml-2 w-4 "/></a>
    </div>
    </>
  )
}
