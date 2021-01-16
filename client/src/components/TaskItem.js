import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteTask } from '../actions/tasks';


const TaskItem = ({deleteTask,task:{ _id, task_by,  task_for, deadline, label, main_task, date}}) => {
    console.log(_id)
        return (
            <div className="row" style={{ borderTop: 'solid 1px #e8e8e8', borderBottom: 'solid 1px #e8e8e8', padding: 10, marginLeft: 0, width: '100%' }}>
            <div className="col-md-2" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <input type="checkbox" />
                <span className="star-icon fa fa-pencil" />
                <span className="star-icon fa fa-times" onClick = {e => deleteTask(_id)} />
            </div>
            <div className="col-md-8" style={{ textAlign: 'left' }}>{main_task}<br />
            <span className="label label-default">{label}</span>
            </div>
            <div className="col-md-2" style={{ textAlign: 'left' }}>
                {/* <span className="label" style={{background: 'red',height: '25px',padding: '0px 5px',borderRadius: '20px',color: 'white'}}>Delete</span>
                <span className="label ">Edit</span> */}
                <img className="user_img" src="https://pbs.twimg.com/profile_images/819317428979171328/afIdoE9C_400x400.jpg" />

            </div>
        </div>
        )
            }
    
    TaskItem.PropTypes = {
        task: PropTypes.object.isRequired,
        deleteTask: PropTypes.func.isRequired
    }
    const mapStateToProps = (state) =>({
        tasks: state.tasks,
    })
    export default connect(mapStateToProps, { deleteTask })(TaskItem);