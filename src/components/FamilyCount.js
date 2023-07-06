import {useRecoilValue, useSetRecoilState} from "recoil";
import {textStateSelectorFamily} from "../store";

/**
 * 这个是为了测试一系列的atomFamily函数和 selectorFamily函数做的测试用例，可以存系列的atom数据，并通过id获取数据的值
 * */
export default function FamilyCount({id}) {
    const {text,length}=useRecoilValue(textStateSelectorFamily(id));
    return <>
        <br/>
        Character Family text is {text}, Count id={id}: {length}
    </>;
}
