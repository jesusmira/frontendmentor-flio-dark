interface Props{
    items:{
        box: string; 
        path: string;
    }[];
}
export const Social = ({items}:Props) => {
  return (
    <ul className="inline-flex  items-start sm:justify-center">
        {
            items.map((item, index) => 
            <li key={index}>
                <a href="#" className="group border rounded-full mr-2 hover:border-cyan-cta  h-8 w-8 flex items-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox={item.box} className=" h-4 w-4 m-2  group-hover:fill-cyan-cta fill-white">
                        <path d={item.path}/>
                    </svg>
                </a>
            </li>)
        }

    </ul>
  )
}
