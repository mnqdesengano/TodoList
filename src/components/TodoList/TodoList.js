import React from 'react';
import TodoCreate from '../TodoCreate/TodoCreate';
import TodoItem from '../TodoItem/TodoItem';

function TodoList() {
    return (
        <>
            <main>
                <div className="w-50 mx-auto mt-2">
                    <div className="card card-shadow py-3">
                        <TodoCreate />
                        <hr />
                        <div className="container-fluid">
                            <div className="row">
                                <TodoItem />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default TodoList;