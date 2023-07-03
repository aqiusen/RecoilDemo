import {useRecoilState, useRecoilValue} from "recoil";
import {charCountState, textState} from "../store";

export default function CharacterCount() {
    const count=useRecoilValue(charCountState);
    const [text, setText]=useRecoilState(textState);
    return <>
        Character Count: {count} ------从Recoil 获取的数据 {text}
        <div onClick={() => {
            setText("555")
        }
        }>change To 555
        </div>
    </>;
}
