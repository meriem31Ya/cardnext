export type setTodos={
    setTodos: React.Dispatch<React.SetStateAction<todoType[]>>

}
export type todoType ={
    id: number,
    title: string,
    date: string,
    checked: boolean
}
export type propsType = { todos: todoType[] }
export type propsItems={
    todos: todoType[],
    setTodos:  React.Dispatch<React.SetStateAction<todoType[]>>
}
export type propItem= todoType & {
    setTodos: React.Dispatch<React.SetStateAction<todoType[]>>
}


