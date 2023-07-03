import {atom, selector} from "recoil";
//  selector 函数可以作为定义的一个处理函数，get函数能做转换，其实也能做过滤函数用
// 里面的get参数可以用来获取其他state的数据
export const charCountState=selector({
    key: 'charCountState', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
        const text=get(textState);
        return text.length;
    },
});
// 思考下这个为什么会有selector ，我直接在UI中获取数据之后做filter，然后展示不是也能做到这个效果
// 类似Vue 中的计算函数 computed，封装了逻辑，并且能方便的访问state中的数据
export const todoListCountState=selector({
    key: 'todoListCountState', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
        const list=get(todoListState).filter((item) => !!item.isComplete);
        return list.length;
    },
});

// 类似原来的state数据
export const textState=atom({
    key: 'textState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
});

export const todoListState=atom({
    key: "TodoList",
    default: []
})
