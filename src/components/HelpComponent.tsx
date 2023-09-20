import { MyFormComponent } from "./MyFormComponent";

interface Props{
  title:string;
  description:string;
  form1:{
    placeholder:string;
    error:string;
    button2:string;
  }
}


export const HelpComponent = ({title, description, form1}:Props) => {
  return (
    <div className="rounded-lg  flex flex-col bg-dark-blue-testimonials shadow-lg pt-10 pb-8  px-5 md:px-8 items-center md:mx-36">
      <h1 className="text-xl font-Raleway font-bold  md:text-4xl">{title}</h1>
      <p className="text-paragraph md:mx-14 text-center mt-7">{description}</p>
      <MyFormComponent {...form1 }/>
    </div>
  )
}
