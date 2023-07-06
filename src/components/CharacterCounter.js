import CharacterCount from "./CharacterCount";
import TextInput from "./TextInput";
import FamilyCount from "./FamilyCount";
import {useEffect, useState} from "react";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {initTodoListState, tempListState, textStateFamily, textStateSelectorFamily} from "../store";
import {buf} from "../api";

export default function CharacterCounter() {
    const [id,setId] = useState(0);
    const [text,setText] = useRecoilState(textStateFamily(id));
    const tempSelector = textStateSelectorFamily(id);
    const totalList = useRecoilValue(tempListState);
    const initList = useRecoilValue(initTodoListState);
    const setInitList = useSetRecoilState(initTodoListState);
    useEffect(()=>{
        setInitList(initList[0])
    },[])
    // 获取 set 函数
    const setMyState = useSetRecoilState(tempSelector);
    const onChange = (event)=>{
        setText(event.target.value);
    }
    const onChangeTextFamily = (event)=>{
        setText(event.target.value);
    }
    const onChangeId = (event) => {
        //注意这里id为number，如果设置type为text的时候，因此需要转换，否则会感觉第一次没有生效
        setId(Number(event.target.value));
    };
    return (
        <div>
            <TextInput />
            <CharacterCount />
            <br/>
            设置id值：
            <input type="number" value={id} onChange={onChangeId}></input>
            <br/>
            设置id:{id}的内容
            <input text="text" value={text} onChange={(event)=>{setMyState(event.target.value)}}/>
            <FamilyCount id={id}/>
            <div onClick={()=>{
                setInitList({
                    id: "111" + Date.now().valueOf(),
                    value: "初始化数据1" + Date.now().valueOf()
                });
            }}>向initList中设值</div>
            <div>
                {JSON.stringify(totalList)}
            </div>
        </div>
    );
}


