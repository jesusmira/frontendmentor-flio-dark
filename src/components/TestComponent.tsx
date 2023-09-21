interface Props{
    image: string,
    comment: string,
    name: string,
    title: string
}
export const TestComponent = ({image, comment, name, title}:Props) => {
  return (
        <figure className="rounded-lg space-y-3  flex flex-col  bg-dark-blue-testimonials shadow-lg pt-10 pb-8   px-6 md:px-8">
            <blockquote className="leading-5 text-xs md:text-sm  md:leading-6 font-Open-Sans">
                <p >{comment}</p>   
            </blockquote>
            <figcaption className="flex items-center space-x-4  text-[0.75rem] leading-[1rem] ">
                <img src={image} alt="" className="w-h-6 h-6 rounded-full object-cover" />
                <div className="flex-auto text-[0.65rem] leading-[1rem]">
                    <p className="font-bold">{name}</p>        
                    <p>
                        {title}
                    </p>
                </div>
            </figcaption>
        </figure>
  )
}
