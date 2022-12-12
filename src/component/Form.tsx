import React, { Fragment, useState } from "react";
import { text } from "stream/consumers";
interface ITodo {
    text: string,
    complete: boolean
}
function Form(): JSX.Element {
    const [value, setValue] = useState<string>("");
    const [todos, setTodos] = useState<ITodo[]>([]);

    const handler = (e: React.SyntheticEvent) => {
        e.preventDefault();
        addTodo(value);
        setValue("");
    }
    const addTodo = (text: string) => {
        const newTodos: ITodo[] = [...todos, { text, complete: false }];
        setTodos(newTodos);

    }
    const completeTodd = (index: number): void => {
        const newTodos: ITodo[] = [...todos]
        newTodos[index].complete = !newTodos[index].complete
        setTodos(newTodos);
    }

    return (
        <Fragment>
            <form onSubmit={handler}>
                <input type="txt" value={value} required onChange={(e) => {
                    setValue(e.target.value)
                }} />
                <button>Add Todo</button>
            </form>
            <section>
                {todos.map((todo: ITodo) => {
                    return<Fragment>
                        <div>{todo.text}</div>
                        <button type="button" onClick={() => completeTodd(0)}>{todo.complete? "incomplete": "complete"}</button>
                    </Fragment>
                })}
            </section>
        </Fragment>

    )
}

export default Form;
