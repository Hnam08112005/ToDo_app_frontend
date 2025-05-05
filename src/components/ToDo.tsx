import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { BiEdit } from 'react-icons/bi'
const BiEditIcon = BiEdit as unknown as React.FC<React.SVGProps<SVGSVGElement>>;
const AiFillDeleteIcon = AiFillDelete as unknown as React.FC<React.SVGProps<SVGSVGElement>>;

type Props = {
  text: string;
  updateMode: any;
  deleteToDo: any;
}

const ToDo = ({text, updateMode, deleteToDo}:Props) => {
  return (
    <div className="todo">
        <div className="text">{text}</div>
        <div className="icons">
          <BiEditIcon className='icon' onClick={updateMode}/>
          <AiFillDeleteIcon className='icon' onClick={deleteToDo}/>
        </div>
    </div>
  )
}


export default ToDo

