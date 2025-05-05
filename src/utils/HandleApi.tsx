import axios from 'axios';

const REACT_BASE_URL='https://todo-app-backend-4e0h.onrender.com'; // Có cách nào lưu ko 

if (!REACT_BASE_URL) {
    throw new Error('REACT_BASE_URL is not defined');
}

const getAllToDo = async(setToDo:any) => {
    
    axios
    .get(REACT_BASE_URL)
    .then(({data}) => {
        console.log('data --->', data);
        setToDo(data);    
    })
    .catch((error) => {  
      console.error('Error fetching todos:', error);
    });
}


const addToDo = async (text:string,setText:any,setToDo:any) => {
    if (!text) {
        alert('Please enter a todo item.');
        return;
    }
    axios
    .post(REACT_BASE_URL, {text})
    .then(({data}) => {
        console.log('data --->', data);
        setText('');
        getAllToDo(setToDo);   
    })
}

const deleteToDo = async (_id:string,setToDo:any) => {
    if (!_id) {
        alert('Please enter a todo item.');
        return;
    }
    axios
    .delete(REACT_BASE_URL, {data: { _id: _id }})
    .then(({data}) => {
        console.log('data --->', data);
        getAllToDo(setToDo);   
    })
}



const updateTodo = async (updateId:string,setUpdateId:any,setIsUpdating:any,text:string,setText:any,setToDo:any) => {
    if (!text) {
        alert('Please enter a todo item.');
        return;
    }
    axios
    .put(REACT_BASE_URL, {_id:updateId,text:text})
    .then(({data}) => {
        console.log('data --->', data);
        setText('');
        setUpdateId('');  
        setIsUpdating(false);
        getAllToDo(setToDo);
    })
    .catch((error) => {  
        console.error('Error fetching todos:', error);
    });
}



const updateMode = async (_id:string,text:string,setIsUpdating:any,setUpdateId:any,setText:any) => {
    setIsUpdating(true);
    setUpdateId(_id);
    setText(text);
  }


export {getAllToDo, addToDo, deleteToDo, updateTodo, updateMode};

// module.exports  return reference to the object that is being exported.
// exports creates a new object and assigns it to the module.exports property.

