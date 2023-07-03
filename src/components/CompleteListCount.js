import {useRecoilValue} from "recoil";
import {todoListCountState} from "../store";

export default function CompleteListCount() {
    const count=useRecoilValue(todoListCountState);
    return <>
        ToDoList Complete Count: {count}
    </>;
}
