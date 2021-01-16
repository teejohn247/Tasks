import React, { Fragment } from 'react';




const Navbar = () => {
    return ( 
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav" style={{ background: '#036 !important' }}>
          <a className="navbar-brand" href="index.html">Start Bootstrap</a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
                  <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboard">
                      <a className="nav-link" href="index.html">
                          <i className="fa fa-fw fa-dashboard" />
                          
                          <span className="nav-link-text">Test</span>

                      </a>
                  </li>
                  <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Charts">
                      <a className="nav-link" href="charts.html">
                          <i className="fa fa-fw fa-area-chart" />
                          <span className="nav-link-text">Test</span>
                      </a>
                  </li>
                  <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Tables">
                      <a className="nav-link" href="tables.html">
                          <i className="fa fa-fw fa-table" />
                          <span className="nav-link-text">Test</span>
                      </a>
                  </li>
                  <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Components">
                      <a className="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseComponents" data-parent="#exampleAccordion">
                          <i className="fa fa-fw fa-wrench" />
                          <span className="nav-link-text">Test</span>
                      </a>
                      
                  </li>
                  <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Example Pages">
                      <a className="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseExamplePages" data-parent="#exampleAccordion">
                          <i className="fa fa-fw fa-file" />
                          <span className="nav-link-text">Example Pages</span>
                      </a>
                      <ul className="sidenav-second-level collapse" id="collapseExamplePages">
                          <li>
                              <a href="#">Login Page</a>
                          </li>
                          <li>
                              <a href="#">Registration Page</a>
                          </li>
                          <li>
                              <a href="#">Forgot Password Page</a>
                          </li>
                          <li>
                              <a href="#">Blank Page</a>
                          </li>
                      </ul>
                  </li>
         
                  <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Link">
                      <a className="nav-link" href="#">
                          <i className="fa fa-fw fa-link" />
                          <span className="nav-link-text">Test</span>
                      </a>
                  </li>
              </ul>
              <ul className="navbar-nav sidenav-toggler">
                  <li className="nav-item">
                      <a className="nav-link text-center" id="sidenavToggler">
                          <i className="fa fa-fw fa-angle-left" />
                      </a>
                  </li>
              </ul>
              <ul className="navbar-nav ml-auto">
                  <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle mr-lg-2" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="fa fa-fw fa-envelope" />
                          <span className="d-lg-none">Messages
                           <span className="badge badge-pill badge-primary">12 New</span>
                          </span>
                          <span className="indicator text-primary d-none d-lg-block">
                              <i className="fa fa-fw fa-circle" />
                          </span>
                      </a>
                  </li>
                  <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle mr-lg-2" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="fa fa-fw fa-bell" />
                          <span className="d-lg-none">Alerts
                           <span className="badge badge-pill badge-warning">6 New</span>
                          </span>
                          <span className="indicator text-warning d-none d-lg-block">
                              <i className="fa fa-fw fa-circle" />
                          </span>
                      </a>
                  </li>
                  <li className="nav-item">
                      <form className="form-inline my-2 my-lg-0 mr-lg-2">
                          <div className="input-group">
                              <input className="form-control" type="text" placeholder="Search for..." />
                              <span className="input-group-append">
                                  <button className="btn btn-primary" type="button">
                                      <i className="fa fa-search" />
                                  </button>
                              </span>
                          </div>
                      </form>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" data-toggle="modal" data-target="#exampleModal">
                          <i className="fa fa-fw fa-sign-out" />Logout</a>
                  </li>
              </ul>
          </div>
      </nav>
    )
}

export default Navbar;