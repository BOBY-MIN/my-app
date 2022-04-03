import React, { createContext, Dispatch, useContext, useReducer } from "react";

// 다른 컴포넌트에서도 사용할 수 있도록 export
export interface Todo {
    id: number;
    text: string;
    done: boolean;
}

const TodosStateContext = createContext<Todo[] | undefined>(undefined);

interface Action {
    attr: 
        { type: 'CREATE'; text: string }
        |
        { type: 'TOGGLE'; id: number }
        |
        { type: 'REMOVE'; id: number }
}

const TodosDispatchContext = createContext<Dispatch<Action> | undefined>(
    undefined
);

function todosReducer(state: Todo[], action: Action): Todo[] {
    const actionAttr = action.attr;
    
    switch (actionAttr.type) {
        case 'CREATE':
            const nextId = Math.max(...state.map(todo => todo.id)) + 1;
            return state.concat({
                id: nextId
                ,text: actionAttr.text
                ,done: false
            });
        case 'TOGGLE':
            return state.map(todo =>
                    todo.id === actionAttr.id ? { ...todo, done: !todo.done} : todo
                );
        case 'REMOVE':
            return state.filter(todo => todo.id !== actionAttr.id);
        default:
            throw new Error('Unhandled action');
    }
}


export function TodosContextProvider({ children }: { children: React.ReactNode }) {
    const [todos, dispatch] = useReducer(todosReducer, [
        {
            id: 1
            ,text: 'Context API 배우기'
            ,done: true
        }
        ,{
            id: 2
            ,text: 'TypeScript 배우기'
            ,done: true
        }
        ,{
            id: 3
            ,text: 'TypeScript 와 Context API 함께 사용하기'
            ,done: false
        }
    ]);

    return (
        // Dispatch<Action> 객체를 내부 컴포넌트에서 불러 사용하도록 함.
        <TodosDispatchContext.Provider value={dispatch}>
            {/* Todo[] 객체를 내부 컴포넌트에서 불러 사용하도록 함. */}
            <TodosStateContext.Provider value={todos}>
                {/* App.tsx에서 전달하는 자식 태그들 그대로 사용(TodoForm, TodoList) */}
                {children}
            </TodosStateContext.Provider>
        </TodosDispatchContext.Provider>
    )
}

export function useTodosState() {
    const state = useContext(TodosStateContext);
    if (!state) throw new Error('TodosProvider not found');
    return state;
}

export function useTodosDispatch() {
    const dispatch = useContext(TodosDispatchContext);
    if (!dispatch) throw new Error('TodosProvider not found');
    return dispatch;
}