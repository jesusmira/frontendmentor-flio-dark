
interface Props {
      logo: string,
      navbar: 
        {
          name: string,
          href: string
        }[]
}

export const Nav = ({logo, navbar}:Props) => {
  return (
        <nav className="flex flex-row items-center justify-between w-full mx-auto p-9 md:p-14">
            <img src={logo} alt="" className="w-24 md:w-40"/>
            <ul className="flex flex-row gap-3 md:gap-10 tracking-wider">
              {
                navbar.map(({name, href}) => (
                  <li key={name}><a href={href} className="inline-block md:text-paragraph text-xs hover:underline tracking-wide hover:font-bold hover:tracking-normal ">{name }</a></li>
                ))
              }
            </ul>
        </nav>   
  )
}
