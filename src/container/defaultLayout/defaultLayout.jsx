import React, { Suspense, Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import { Switch, Route, Redirect } from 'react-router-dom';
import routes from '../../routes/routes';
import '../../styles/styles.css';
import '../../css/sb-admin-2.css';
import '../../vendor/fontawesome-free/css/all.min.css';

class DefaultLayout extends Component {

    render() {
        return (
            //Page Wrapper
            <div id='wrapper'>
                <ul className='navbar-nav bg-gradient-primary sidebar sidebar-dark accordion' id='accordionSidebar'>
                    <a className='sidebar-brand d-flex align-items-center justify-content-center' href="">
                        <div className="sidebar-brand-icon rotate-n-15">
                            <i className="fas fa-database"></i>
                        </div>
                        <div className="sidebar-brand-text mx-3">MDM</div>
                    </a>

                    <hr className="sidebar-divider my-0"></hr>

                    <li className="nav-item">
                        <a className="nav-link" href="index.html">
                            <i className="fas fa-fw fa-tachometer-alt"></i>
                            <span>Dashboard</span></a>
                    </li>
                    <div class="sidebar-heading">
                        Organization
                    </div>
                    <li class="nav-item">
                        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                            <i class="fas fa-fw fa-cog"></i>
                            <span>Domain</span>
                        </a>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                            <div class="bg-white py-2 collapse-inner rounded">
                                <h6 class="collapse-header">Custom Components:</h6>
                                <a class="collapse-item" href="buttons.html">Buttons</a>
                                <a class="collapse-item" href="cards.html">Cards</a>
                            </div>
                        </div>
                    </li>
                    <hr className="sidebar-divider my-0"></hr>
                    <li className="nav-item">
                        <a className="nav-link" href="index.html">
                            <i className="fas fa-fw fa-tachometer-alt"></i>
                            <span>Business Rule</span></a>
                    </li>

                    <hr class="sidebar-divider d-none d-md-block"></hr>

                    <div class="text-center d-none d-md-inline">
                        <button class="rounded-circle border-0" id="sidebarToggle"></button>
                    </div>
                </ul>

                <div id='content-wrapper' className='d-flex flex-column'>
                    <div id='content'>
                        <nav className='navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow'>
                            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                                <i className="fa fa-bars"></i>
                            </button>

                            <form className='d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search'>
                                <div className='input-group'>
                                    <input type="text" className="form-control bg-light border-0 small" placeholder="Search for organization, dataset and more..." aria-label="Search" aria-describedby="basic-addon2"></input>
                                    <div class="input-group-append">
                                        <button class="btn btn-primary" type="button">
                                            <i class="fas fa-search fa-sm"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <ul class="navbar-nav ml-auto">

                                <div class="topbar-divider d-none d-sm-block"></div>

                                <li class="nav-item dropdown no-arrow">
                                    <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span class="mr-2 d-none d-lg-inline text-gray-600 small">User</span>
                                        <img class="img-profile rounded-circle" src="https://source.unsplash.com/QAB-WJcbgJk/60x60"></img>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                                        <a class="dropdown-item" href="#">
                                            <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Profile
                                        </a>
                                        <a class="dropdown-item" href="#">
                                            <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Settings
                                        </a>
                                        <a class="dropdown-item" href="#">
                                            <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Activity Log
                                        </a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                            <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Logout
                                        </a>
                                    </div>
                                </li>

                            </ul>
                        </nav>

                        <div class="container-fluid">
                            <Suspense fallback={<div className="animated fadeIn pt-1 text-center">Loading...</div>}>
                                <Switch>
                                    {routes.map((route, idx) => {
                                        return route.component ? (
                                            <Route
                                                key={idx}
                                                path={route.path}
                                                name={route.name}
                                                render={props => (
                                                    <route.component {...props} />
                                                )} />
                                        ) : (null);
                                    })}
                                    <Redirect from="/" to="/Dashboard" />
                                </Switch>
                            </Suspense>
                        </div>

                    </div>

                    <footer class="sticky-footer bg-white">
                        <div class="container my-auto">
                            <div class="copyright text-center my-auto">
                                <span>Copyright &copy; Your Website 2019</span>
                            </div>
                        </div>
                    </footer>

                </div>


            </div>
        )
    }
}


export default DefaultLayout;