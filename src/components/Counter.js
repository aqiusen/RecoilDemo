import {useRecoilState} from "recoil";
import {countState} from "../store";
import {useEffect} from "react";
import {produce} from "immer"

export default function Counter() {
    const [info, setInfo]=useRecoilState(countState)
    useEffect(() => {
        console.log(JSON.stringify(info))
    }, [info]);

    return <>
        name:{info.name},
        count:{info.count}
        <button onClick={() => {
            // info.count++;
            // 这里分离info为一个新的对象，否则没有变化
            setInfo({...info});
            // 这里通过immer库形成了一个info的镜像，然后在镜像上做加法操作
            const newInfo = produce(info,draft=>{
                draft.count++

            })
            // 这里分离info为一个新的对象，否则没有变化
            setInfo(newInfo);
        }
        }>改变atom
        </button>
    </>
}
