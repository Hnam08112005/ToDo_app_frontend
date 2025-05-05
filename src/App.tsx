import {useEffect, useState} from 'react';
import logo from './logo.svg';
import ToDo from './components/ToDo';
import './utils/HandleApi';
import {getAllToDo, addToDo, deleteToDo,updateTodo,updateMode} from './utils/HandleApi';

function voidFunction() {}



function App() {
  const [toDo, setToDo] = useState<any>([]);
  const [text, setText] = useState<string>('');
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [updateId, setUpdateId] = useState<string>('');

  useEffect (() => {
    getAllToDo(setToDo);
  }, []);


  

  return (
    <div className="App">
      <div className="container">
        <h1>ToDo App</h1>
      </div> 
      <div className="top">
        <input 
        type="text" 
        placeholder='Add ToDos...'
        value={text}
        onChange={(e) => setText(e.target.value)}/>

        <div className="add" 
        onClick={isUpdating?
        ()=> updateTodo(updateId,setUpdateId,setIsUpdating,text,setText,setToDo):
        () =>addToDo(text,setText,setToDo)}>
        {isUpdating? "Update" : "Add"} 
        </div>
      </div>
      <div className="list">
        {toDo.map((item: any,index :any) => <ToDo key={item._id} text= {item.text}  updateMode={()=>updateMode(item._id,item.text,setIsUpdating,setUpdateId,setText)} deleteToDo= {()=>deleteToDo(item._id,setToDo)} />)}
      </div>
    </div>
  );
}

export default App;
