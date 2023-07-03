import {useSetRecoilState} from "recoil";
import {todoListState} from "../store";
import {useState} from "react";

export default function TodoItemCreator() {
    // react中的hook
    const [inputValue, setInputValue] = useState('');
    // export function useSetRecoilState<T>(recoilState: RecoilState<T>): SetterOrUpdater<T>;
    // 返回来的是一个函数，用于修改state中的数据
    const setTodoList = useSetRecoilState(todoListState);

    const addItem = () => {
        // 参数是上一次数据的值，这里用来拼接成新的值
        setTodoList((oldTodoList) => [
            ...oldTodoList,
            {
                id: getId(),
                text: inputValue,
                isComplete: false,
            },
        ]);
        // 清空输入数据
        setInputValue('');
    };

    const onChange = ({target: {value}}) => {
        setInputValue(value);
    };

    return (
        <div>
            <input type="text" value={inputValue} onChange={onChange} />
            <button onClick={addItem}>Add</button>
        </div>
    );
}

// utility for creating unique Id
let id = 0;
function getId() {
    return id++;
}
