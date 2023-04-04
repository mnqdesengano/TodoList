import React, { useEffect } from 'react';
import { setTodos, getTodo } from '../../redux/actions/todoActions';
import { useSelector, useDispatch } from 'react-redux';

function TodoItem() {
    const todos = useSelector((state) => state.allTodos.todos)
    const singleTodo = useSelector((state) => state.getTodo)

    const dispatch = useDispatch();

    const editTodo = index => {
        //Update the previous selection
        const newTodo = [...todos];

        let idn = newTodo.findIndex((todo) => todo.isEdit == 1)

        if (idn != -1) {
            const updateTodo = newTodo.at(idn);
            updateTodo.isEdit = 0;
            newTodo.splice(idn, 1, updateTodo);
        }

        const todo = newTodo.at(index);
        todo.isEdit = 1;
        dispatch(getTodo(todo));
        newTodo.splice(index, 1, todo);
        dispatch(setTodos(newTodo));
    }

    const completeTodo = index => {
        const newTodo = [...todos];
        const todo = newTodo.at(index);

        todo.isComplete = 1;
        newTodo.splice(index, 1, todo);

        dispatch(setTodos(newTodo));
    }

    const deleteTodo = index => {
        const newTodo = [...todos];
        console.log("Before Deletion", newTodo);
        newTodo.splice(index, 1);
        console.log("After Deletion", newTodo);

        dispatch(setTodos(newTodo));
    }

    useEffect(() => {

    }, [singleTodo]);
    return (
        <>
            {
                todos.length > 0 ?
                    todos.map((todo, index) => {
                        return (
                            <div className="col-12 d-flex justify-content-around mt-1">
                                <div className="w-100 ms-1">

                                    {
                                        todo.isComplete == 1 ?
                                            <h3 className="text-start text-decoration-line-through">{todo.todo_name}</h3>
                                            :
                                            <h3 className="text-start ">{todo.todo_name}</h3>
                                    }
                                    <p className="text-start">{todo.description}</p>
                                </div>
                                {
                                    todo.isEdit == 0 ?
                                        <button className="btn btn-success" onClick={() => editTodo(index)}>EDIT</button>
                                        :
                                        <button disabled className="btn btn-success" onClick={() => editTodo(index)}>EDIT</button>
                                }
                                <button onClick={() => deleteTodo(index)} className="btn btn-danger mx-1">DELETE</button>


                                {
                                    todo.isComplete == 0 ?
                                        <button onClick={() => completeTodo(index)} className="btn btn-primary">COMPLETE</button>
                                        :
                                        <button disabled onClick={() => completeTodo(index)} className="btn btn-primary">COMPLETE</button>
                                }

                            </div>
                        )
                    })
                    :
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
            }
        </>
    );
}

export default TodoItem;