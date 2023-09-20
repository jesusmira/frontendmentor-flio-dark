interface Props {
    "image": string,
    "title": string,
    "description": string

}

export const Item = ({image, title, description}:Props) => {
    
  return (
        <div className="space-y-3 text-center flex flex-col justify-end  ">
            <img src={image} alt="" className="mx-auto"/>
            <h1 className=" text-subtitle">{title}</h1>
            <p className="text-paragraph md:mx-12" >
                {description}
            </p>
        </div>
  )
}
