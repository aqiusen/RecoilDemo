import {useRecoilState} from "recoil";
import {todoListState} from "../store";
import TodoItem from "./TodoItem"
import TodoItemCreator from "./TodoItemCreator";
import CompleteListCount from "./CompleteListCount";
import {useEffect, useState} from "react";
export default function TodoList() {
    const [noCompleteList,setNoCompleteList] = useState([])
    const [todoList] = useRecoilState(todoListState);
    console.log("enter todo list");
    // 第二种处理方式，没有用到state函数，而是用了react中的hooks
    useEffect(()=>{
        console.log("enter it")
        setNoCompleteList(todoList.filter(item=>!item.isComplete))
    },[todoList])
    return <>
        <TodoItemCreator/>
        {
            todoList.map((todoItem)=>{
                return <TodoItem key={todoItem.id}  item={todoItem}/>
            })
        }
        <CompleteListCount/>
        <div>No Completed List Count : {noCompleteList.length}</div>
    </>
}
