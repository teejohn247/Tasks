import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { getTasks } from '../actions/tasks';
import { postTasks } from '../actions/tasks';
import Spinner from './layout/Spinner';
import TaskItem from './TaskItem';
import { setAlert } from '../actions/alert';
import Modal from 'react-bootstrap/Modal';




const Dashboard = ({ postTasks, getTasks, tasks: { tasks, loading, success } }) => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [task, setTask] = useState('');
    const [deadline, setDeadline] = useState('');
    const [taskBy, setTaskBy] = useState('');
    const [taskFor, setTaskFor] = useState('');
    const [taskLabel, setTaskLabel] = useState('');
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
    }

    useEffect(() => {
        getTasks();
    }, []);

    const handleForm = async() => {
        if (task == "" || taskBy == "" || taskBy == "" || taskFor == "" || taskLabel == "") {
        dispatch(setAlert('One or more input fields is empty', 'danger'))
            
            return;
        } else {
            
            
            let formData = {
                "task_by": taskBy,
                "task_for": taskFor,
                "deadline": deadline,
                "label": taskLabel,
                "main_task": task
            }
            console.log(formData)
            await postTasks(formData)
        
            setShow(false)
            setTask('');
            setDeadline('');
            setTaskBy('');
            setTaskFor('');
            setTaskLabel('');
        }
    }


    return (
        <Fragment>
            { tasks === null || loading ? (
                <Spinner />
            ) : (
                    <Fragment>

                        <div className="content-wrapper">
                            <div className="container-fluid">
                                {/* Breadcrumbs*/}
                                {/* <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="#">Dashboard</a>
                                    </li>
                                    <li className="breadcrumb-item active">My Dashboard</li>
                                </ol> */}
                                <div className="grid-container">
                                    <div className="menu">
                                        <aside id="sidebar" className="nano">
                                            <div className="nano-content">
                                                <div><button type="button" onClick={handleShow} className="btn add-task btn-primary"><span> </span>ADD TASK<span> </span></button></div>
                                                <div className="separator" />
                                                <div className="menu-segment">
                                                    <ul className="all_links">
                                                        <li><span className="gx-link"><i className="fa fa-fw fa-star" /><span className="starred">Starred</span></span></li>
                                                        <li><span className="gx-link"><i className="fa fa-fw fa-clock-o" /><span className="starred">Priority</span></span></li>
                                                        <li><span className="gx-link"><i className="fa fa-fw  fa-check-circle-o" /><span className="starred">Done</span></span></li>
                                                        <li><span className="gx-link"><i className="fa fa-fw fa-share-square-o" /><span className="starred">Deleted</span></span></li>
                                                        <li><span className="gx-link"><i className="fa fa-fw fa-trash-o" /><span className="starred">Deleted</span></span></li>
                                                    </ul>
                                                </div>
                                                <div className="separator" />
                                                <h6 style={{textAlign:'left', margin:'15px'}}>Labels</h6>
                                                <div className="menu-segment">
                                                    <ul className="all_links">
                                                        <li><span className="gx-link"><i className="dot-1" /><span className="starred">HTML</span></span></li>
                                                        <li><span className="gx-link"><i  className="dot-2" /><span className="starred">CSS</span></span></li>
                                                        <li><span className="gx-link"><i  className="dot-3" /><span className="starred">REACT</span></span></li>
                                                        <li><span className="gx-link"><i  className="dot-4" /><span className="starred">JQUERY</span></span></li>
                                                    </ul>
                                                </div>
                                                <div className="bottom-padding" />
                                            </div>
                                        </aside>
                                    </div>
                                    <div className="main">
                                        <br></br>
                                        {tasks.map(task => (
                                            <TaskItem key={task._id} task={task} />
                                        ))}
                                    </div>

                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Add Task</Modal.Title>
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
                                                <input name="deadline" type="date" className="form-control" value={deadline}
                                                    onChange={e => setDeadline(e.target.value)}
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

                            </div>
                        </div>
                    </Fragment>
                )}
        </Fragment>
    )
  }

    Dashboard.PropTypes = {
        postTasks: PropTypes.func.isRequired,
        getTasks: PropTypes.func.isRequired,
        tasks: PropTypes.object.isRequired,

    }
    const mapStateToProps = (state) => ({
        tasks: state.tasks,
    })
    export default connect(mapStateToProps, { postTasks, getTasks })(Dashboard);