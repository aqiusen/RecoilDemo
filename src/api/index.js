export let buf=[];
export const getTodosFromAPI=() => {
    return Promise.resolve([
        {
            id: "111" ,
            value: "初始化数据1"
        }
    ])
}
export const setTodosFromAPI=(list) => {
    buf=[...buf, ...list];
}
