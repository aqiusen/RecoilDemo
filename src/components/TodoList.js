import {useRecoilState} from "recoil";
import {todoListState} from "../store";
import TodoItem from "./TodoItem"
import TodoItemCreator from "./TodoItemCreator";
import CompleteListCount from "./CompleteListCount";
export default function TodoList() {
    const [todoList] = useRecoilState(todoListState);
    debugger
    return <>
        <TodoItemCreator/>
        {
            todoList.map((todoItem)=>{
                return <TodoItem key={todoItem.id}  item={todoItem}/>
            })
        }
        <CompleteListCount/>
    </>
}
