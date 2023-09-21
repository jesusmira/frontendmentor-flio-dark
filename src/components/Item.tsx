interface Props {
    "image": string,
    "title": string,
    "description": string

}

export const Item = ({image, title, description}:Props) => {
    
  return (
        <div className="space-y-3 text-center flex flex-col justify-end  ">
            <img src={image} alt="" className="mx-auto"/>
            <h1 className="font-bold  text-lg md:text-xl font-Raleway">{title}</h1>
            <p className="text-sm  md:leading-6 font-Open-Sans md:mx-12" >
                {description}
            </p>
        </div>
  )
}
