import CharacterCount from "./CharacterCount";
import TextInput from "./TextInput";
import FamilyCount from "./FamilyCount";
import {useState} from "react";
import {useRecoilState} from "recoil";
import {textStateFamily} from "../store";

export default function CharacterCounter() {
    const [id,setId] = useState(0);
    const [text,setText] = useRecoilState(textStateFamily(id));
    const onChangeTextFamily = (event)=>{
        setText(event.target.value);
    }
    const onChangeId = (event) => {
        setId(event.target.value);
    };
    return (
        <div>
            <TextInput />
            <CharacterCount />
            <br/>
            设置id值：
            <input type="text" value={id} onChange={onChangeId}></input>
            <br/>
            设置id:{id}的内容
            <input text="text" value={text} onChange={onChangeTextFamily}/>
            <FamilyCount id={id}/>
        </div>
    );
}


