import {atom, atomFamily, selector, selectorFamily} from "recoil";
import {getTodosFromAPI, setTodosFromAPI} from "../api";
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
    default: "", // default value (aka initial value)
});

export const todoListState=atom({
    key: "TodoList",
    default: []
})


// 类似原来的state数据
export const textStateFamily=atomFamily({
    key: 'textState', // unique ID (with respect to other atoms/selectors)
    default: (id) => {
        return ""
    }, // default value (aka initial value)
});

export const textStateSelectorFamily=selectorFamily({
    key: 'textStateSelectorFamily', // unique ID (with respect to other atoms/selectors)
    get: (id) => ({get}) => {
        const text=get(textStateFamily(id));
        return {text, length: text.length};
    },
    // 可选 set  这里如果是atomFamily，那么set函数写法需要改成set(textStateFamily(id), newValue)
    // 如果是atom ，写法应该是这样：set(textState, newValue)
    set: id => ({set}, newValue) =>
        set(textStateFamily(id), "append text:" + newValue)
});

export const tempListState=atom({
    key: "tempTodoList",
    default: []
})

export const initTodoListState=selector({
    key: "initTodoListState",
    get: async ({get}) => {
        try {
            const response=await getTodosFromAPI();
            return response;
        } catch (error) {
            throw error;
        }
    },
    set: ({set, get}, newValue) => {
        set(tempListState, [...get(tempListState), newValue])
    }
})

export const countState=atom({
    key: "countState",
    default: {
        name: "test1",
        count: 1
    },
    effects: [
        ({node, onSet}) => {
             // node.key 就是我们设置的key，onSeth函数中的新老参数就是监听的数据
            onSet((newValue, oldValue) => {
                    console.debug(node.key + "----" + 'new ：',newValue ,"  old:",oldValue)
                }
            )
        }
    ]
    // dangerouslyAllowMutability:true //默认是关闭的，，表示不允许赋值，打开，允许直接修改定义的值
})
