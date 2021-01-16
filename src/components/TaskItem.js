import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteTask } from '../actions/tasks';
import { editTask } from '../actions/tasks';

import Modal from 'react-bootstrap/Modal';



const TaskItem = ({editTask, deleteTask, task: { _id, task_by, task_for, deadline, label, main_task, date } }) => {
    const [show, setShow] = useState(false);
    const [task, setTask] = useState(main_task);
    const [editDeadline, setEditDeadline] = useState(deadline);
    const [taskBy, setTaskBy] = useState(task_by);
    const [taskFor, setTaskFor] = useState(task_for);
    const [taskLabel, setTaskLabel] = useState(label);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleForm = () => {
        if (task == "" || taskBy == "" || taskBy == "" || taskFor == "" || taskLabel == "") {
            return;
        } else {
            let id=_id;
            
            let formData = {
                "task_by": taskBy,
                "task_for": taskFor,
                "deadline": deadline,
                "label": taskLabel,
                "main_task": task
            }
            console.log(formData, id)
            editTask(formData, id)
        }
    }


    return (
        <div className="row" style={{ borderTop: 'solid 1px #e8e8e8', borderBottom: 'solid 1px #e8e8e8', padding: 10, marginLeft: 0, width: '100%' }}>
            <div className="col-md-2" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <input type="checkbox" />
                <span className="star-icon fa fa-pencil" onClick={handleShow}/>
                <span className="star-icon fa fa-times" onClick={e => deleteTask(_id)} />
            </div>
            <div className="col-md-8" style={{ textAlign: 'left' }}>{main_task}<br />
                <span className="label label-default">{label}</span>
            </div>
            <div className="col-md-2" style={{ textAlign: 'left' }}>
                {/* <span className="label" style={{background: 'red',height: '25px',padding: '0px 5px',borderRadius: '20px',color: 'white'}}>Delete</span>
                <span className="label ">Edit</span> */}
                <img className="user_img" src="https://pbs.twimg.com/profile_images/819317428979171328/afIdoE9C_400x400.jpg" />

            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Task By</label>
                        <input name="taskBy" type="text" className="form-control" value={taskBy}
                            onChange={e => setTaskBy(e.target.value)}
                            id="task_by" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Task For</label>
                        <input name="taskFor" type="text" className="form-control" value={taskFor}
                            onChange={e => setTaskFor(e.target.value)}
                            id="task_for" />
                        {/* <input type="text" className="form-control" id="task_for" /> */}
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Task Deadline Date</label>
                        <input name="deadline" type="date" className="form-control" value={editDeadline}
                            onChange={e => setEditDeadline(e.target.value)}
                            id="deadline" />
                        {/* <input type="date" className="form-control" id="deadline" /> */}
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Task Label</label>
                        <input name="taskLabel" type="text" className="form-control" value={taskLabel}
                            onChange={e => setTaskLabel(e.target.value)}
                            id="task_label" />
                        {/* <select className="form-control" id="task_label"></select> */}
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Task</label>
                        <textarea name="task" type="text" className="form-control" value={task}
                            onChange={e => setTask(e.target.value)}
                            id="task" ></textarea>
                        {/* <textarea className="form-control" id="task"></textarea> */}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={handleClose}>
                        Close
                            </button>
                    <button onClick={handleForm}>
                        Save Changes
                            </button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

TaskItem.PropTypes = {
    task: PropTypes.object.isRequired,
    deleteTask: PropTypes.func.isRequired,
    editTask: PropTypes.func.isRequired,

}
const mapStateToProps = (state) => ({
    tasks: state.tasks,
})
export default connect(mapStateToProps, { deleteTask, editTask })(TaskItem);