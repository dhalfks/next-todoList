import { todoType } from "../type/todotype"
import TodoItem from "./todoitem";

type todoPrintProps = {
    todos : todoType[];
    onRemove: (id: number)=> void
    onToggle: (id: number)=> void
}

export default function TodoPrint({todos, onRemove, onToggle}: todoPrintProps){
    return(
        <div className="space-y-3 bg-pink-50 p-4 rounded-xl shadow">
            <ul>
                {
                    <li>
                        {
                            todos.map(item => (
                             <TodoItem 
                                item={item} 
                                key={item.id} 
                                onRemove={onRemove} 
                                onToggle={onToggle} 
                            />
                         )) 
                        }
                           
                    </li>
                }
            </ul>
        </div>
    )
}