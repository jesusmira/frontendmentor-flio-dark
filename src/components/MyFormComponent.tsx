interface Props{   
    placeholder:string;
    error:string;
    button2:string;    
}
export const MyFormComponent = ({placeholder, error, button2}:Props) => {


  return (
    <form id="myform" className=" w-full mt-8 md:px-10 grid grid-cols-1  md:gap-8 md:grid-cols-3 text-sm " noValidate>
          <div className="md:col-span-2 block">
            <input type="email" id="myemail" name="myemail" required className=" peer shadow appearance-none w-full rounded-full  py-4 px-12 text-dark-blue-footer leading-tight focus:outline-none  mb-2" placeholder={placeholder} />
            <span className="invisible peer-placeholder-shown:!invisible peer-invalid:visible  text-light-red text-xs pl-12 font-bold ">{error}</span>
          </div>
        <button  
                className=" py-4 px-10 bg-blue-cta hover:bg-cyan-cta rounded-full h-fit text-sm font-Open-Sans font-bold" >
                  {button2}
        </button>
    </form>
  )
}
