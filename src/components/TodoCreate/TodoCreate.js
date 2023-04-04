import React, { useState, useEffect } from 'react';
import { setTodos, getTodo } from '../../redux/actions/todoActions';
import { useDispatch, useSelector } from 'react-redux';

function TodoCreate() {
    const dispatch = useDispatch();
    const [todoTitle, setTodoTitle] = useState('');
    const [todoDescription, setTodoDescription] = useState('');
    const singleTodo = useSelector((state) => state.getTodo)
    const todos = useSelector((state) => state.allTodos.todos)

    const updateTodo = () => {
        const newTodo = [...todos];
        let idn = newTodo.findIndex((todo) => todo.isEdit == 1)

        if (idn != -1) {
            const updateTodo = newTodo.at(idn);
            updateTodo.todo_name = todoTitle;
            updateTodo.description = todoDescription;
            updateTodo.isEdit = 0;
            newTodo.splice(idn, 1, updateTodo);
            dispatch(setTodos(newTodo));

            const single = {
                id: -2,
                todo_name: null,
                description: null,
                isEdit: 0,
                isComplete: 0,
            };
            dispatch(getTodo(single));
            console.log(singleTodo);
        }
    }

    const addTodo = () => {
        const newTodo = [...todos];

        newTodo.push({
            id: Math.floor(Math.random() * 20000),
            todo_name: todoTitle,
            description: todoDescription,
            isEdit: 0,
            isComplete: 0,
        })
        dispatch(setTodos(newTodo));
        setTodoTitle('');
        setTodoDescription('');
    }
    useEffect(() => {

        if (singleTodo.todo_name != null) {
            setTodoTitle(singleTodo.todo_name);
            setTodoDescription(singleTodo.description);
            console.log(singleTodo);
        }

    }, [singleTodo]);
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h1>Todo List</h1>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <input
                                type="text"
                                name="title"
                                id="title"
                                value={todoTitle}
                                onChange={(e) => setTodoTitle(e.target.value)}
                                className="form-control"
                                placeholder="Enter title" />
                        </div>
                    </div>
                    <div className="col-12 mt-1">
                        <div className="form-group">
                            <input
                                type="text"
                                name="description"
                                id="description"
                                value={todoDescription}
                                onChange={(e) => setTodoDescription(e.target.value)}
                                className="form-control"
                                placeholder="Enter description" />
                        </div>
                    </div>
                    <div className="col-12 mt-2 d-flex justify-content-end">

                        {
                            singleTodo.todo_name == null ?
                                <button onClick={() => addTodo()} className="btn btn-primary">ADD</button>
                                :
                                <button onClick={() => updateTodo()} className="btn btn-success">UPDATE</button>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default TodoCreate;