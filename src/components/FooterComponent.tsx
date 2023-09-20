interface Props{
    column1: {
        icon: string;
        text: string;
    };
    column2: { 
        icon: string; 
        text: string; 
    }[];
    column3: string[][]; 
    column5: { 
        box: string; 
        path: string; 
    }[];
}

import { Info } from "./footer/Info";
import { Lists } from "./footer/Lists";
import { Social } from "./footer/Social";
export const FooterComponent = ({column1, column2, column3, column5}:Props) => {
  return (
    <div className="grid md:grid-flow-col-dense mt-7 md:justify-around sm:gap-y-6">
        <div>
            <Info {...column1} myWith="w-80" />
        </div>
        <div>
            {
                column2.map((item, index) => <Info {...item} key={ index }/>)
            }
        </div>
        {
            column3.map((item, index) => <Lists list={ item } key={ index }/>)
        }
            <Social items={column5} />
       
    </div>
  )
}
