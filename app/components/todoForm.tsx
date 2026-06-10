import { useState } from "react"

type todoFormType = {
    onCreate : (
        todo: string,
        date: string
    )=> void;

}
export default function TodoForm({onCreate}:todoFormType){

    const [todoInputs, setTodos] = useState({
        todo:'',
        date:''
    });

    const {todo, date} = todoInputs;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setTodos({
            ...todoInputs,
            [e.target.name] : e.target.value
        })
        console.log(todoInputs)
    }

    const onSubmit = ()=>{
        if(!todo.trim()) return;
        onCreate(todo, date);
        setTodos({
            todo:'',
            date:''
        })
    }
    
    return(
        <div className="flex gap-3 mb-6 p-10 border border-gray-600 rounded">
            <input className="border border-gray-300 p-2 rounded"
                type="text" 
                name="todo" 
                value={todo} 
                placeholder="할 일을 입력하세요"
                onChange={onChange}
             />
             <input className="border border-gray-300 p-2 rounded"
                type="date" 
                name="date"
                value={date}
                onChange={onChange}
             />
             <button className="bg-pink-400 text-white px-4 rounded"
                onClick={onSubmit}
             >add</button>
        </div>
    )
}