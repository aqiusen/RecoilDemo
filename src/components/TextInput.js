import {useRecoilState} from "recoil";
import {textState} from '../store/index'
export default function TextInput() {
    // 使用Recoil hooks ，类似useState函数的使用方法
    // setText方法，自带的
    const [text, setText] = useRecoilState(textState);
    const onChange = (event) => {
        setText(event.target.value);
    };
    return (
        <div>
            <input type="text" value={text} onChange={onChange} />
            <br/>
            Echo: {text}
        </div>
    );
}
