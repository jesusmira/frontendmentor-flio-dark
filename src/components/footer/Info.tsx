interface Props{
    icon: string;
    text: string;
    myWith?: string;
}
export const Info = ({icon, text, myWith=""}:Props ) => {
  const layoutClasses = `mb-4 flex  text-sm  md:leading-6 font-Open-Sans mx-2.5 sm:pr-3 ${myWith}`;
  return (
      <p className={layoutClasses}>
          <img src={icon} alt="" className="mr-5 mt-1 h-4 w-4"/>
          {text}
      </p>
  )
}
