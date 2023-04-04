import React from 'react';
import { useSelector } from 'react-redux';

function TodoItem() {
    const todos = useSelector((state) => state.allTodos.todos)

    return (
        <>
            {
                todos.length > 0 ?
                    todos.map((todo, index) => {
                        return (
                            <div className="col-12 d-flex justify-content-around mt-1">
                                <div className="w-100 ms-1">
                                    <h3 className="text-start">{todo.todo_name}</h3>
                                    <p className="text-start">This is todo 1</p>
                                </div>
                                <button className="btn btn-success">EDIT</button>
                                <button className="btn btn-danger mx-1">DELETE</button>
                                <button className="btn btn-primary">COMPLETE</button>
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