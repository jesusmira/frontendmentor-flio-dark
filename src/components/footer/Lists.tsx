interface Props{
    list: string[];
}
export const Lists = ({list}:Props) => {
  return (
    <ul className="flex  flex-col space-y-4 mb-4 sm:ml-3">
        {
            list.map((item, index) => <li className=" inline-flex tracking-wide hover:font-bold hover:tracking-normal" key={index}>
              {item}
            </li>)
        }
    </ul>
  )
}
