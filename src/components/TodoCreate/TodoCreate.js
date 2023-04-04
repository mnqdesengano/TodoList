import React from 'react';

function TodoCreate() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h1>Todo List</h1>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <input type="text" name="title" id="title" className="form-control" placeholder="Enter title" />
                        </div>
                    </div>
                    <div className="col-12 mt-1">
                        <div className="form-group">
                            <input type="text" name="description" id="description" className="form-control"
                                placeholder="Enter description" />
                        </div>
                    </div>
                    <div className="col-12 mt-2 d-flex justify-content-end">
                        <button className="btn btn-primary">ADD</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TodoCreate;