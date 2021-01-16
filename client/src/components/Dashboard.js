import React, { Fragment, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
// import {Button} from 'react-bootstrap';




const Dashboard = () => {
    const [show, setShow] = useState(false);

  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Fragment>
      
                <div className="content-wrapper">
                    <div className="container-fluid">
                        {/* Breadcrumbs*/}
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="#">Dashboard</a>
                            </li>
                            <li className="breadcrumb-item active">My Dashboard</li>
                        </ol>
                        <div className="grid-container">
                            <div className="menu">
                                <aside id="sidebar" className="nano">
                                    <div className="nano-content">
                                        <div><button type="button" onClick={handleShow} className="btn add-task btn-primary"><span> </span>ADD TASK<span> </span></button></div>
                                        <div className="separator" />
                                        <div className="menu-segment">
                                            <ul>
                                                <li><span className="gx-link"><i className="icon icon-star" /><span>Starred</span></span></li>
                                                <li><span className="gx-link">
                                                    <a href="#">
                                                        <i className="fa fa-fw fa-table" />
                                                        <span>Starred</span></a></span></li><a href="#">
                                                </a>
                                            </ul>
                                        </div>
                                        <div className="separator" />
                                        <div className="bottom-padding" />
                                    </div>
                                </aside>
                            </div>
                            <div className="main">
                                <div className="row" style={{ borderTop: 'solid 1px #e8e8e8', borderBottom: 'solid 1px #e8e8e8', padding: 10, marginLeft: 0, width: '100%' }}>
                                    <div className="col-md-2" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                        <input type="checkbox" />
                                        <span className="star-icon fa fa-star" />
                                    </div>
                                    <div className="col-md-8" style={{ textAlign: 'left' }}>Test<br />
                                        <span className="label label-default">Default Label</span>
                                        <span className="label label-default" style={{ backgroundColor: '#f5222d' }}>HTML</span>
                                    </div>
                                    <div className="col-md-2" style={{ textAlign: 'left' }}>
                                        <img className="user_img" src="https://pbs.twimg.com/profile_images/819317428979171328/afIdoE9C_400x400.jpg" />
                                    </div>
                                </div>
                            </div>
                            
                        <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                        <Modal.Footer>
                            <button onClick={handleClose}>
                            Close
                            </button>
                            <button onClick={handleClose}>
                            Save Changes
                            </button>
                        </Modal.Footer>
                        </Modal>
                        </div>
                    
                    </div>
                </div>
        </Fragment>
    )
}

export default Dashboard;