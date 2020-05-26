import React from 'react';
import './App.scss';
import { BrowserRouter, Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { Button } from 'react-bootstrap';

const App = () => {

    const isAuthenticated = true;
    var username = "reactUser";
    const props={myBaseURL:process.env.BASE_URL_REACT};

    const Dashboard = (props) => {
        return (
            <span>Dashboard_application1</span>
        )
    }

    const Contacts = (props) => {
        return (
            <span>Contacts_application1</span>
        )
    }

    const getMoreX = (props) => {
        return (
            <span>getMoreX_application1</span>
        )
    }


    const getMoreY = (props) => {
        return (
            <span>getMoreY_application1</span>
        )
    }


    return (
        <BrowserRouter basename={props.myBaseURL}>
            

            <div className="container-fluid" style={{ overflow: "hidden" }}>
                <div className="row">
                    {isAuthenticated &&
                        <nav className="bg-light sidebar">
                            <div className="sidebar-sticky">
                                <ul className="nav flex-column" id="sidebarnav">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Contacts">Contacts</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link dropdown-toggle" data-toggle="collapse" data-target="#More" to="/">More</Link>
                                        <ul className="collapse nav border pl-3" id="More">
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/GetMore/GetMoreX">GetMoreX</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/GetMore/GetMoreY">GetMoreY</Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    }

                    <main role="main" className={` ${isAuthenticated ? 'main-view' : ''} px-4`}>
                        <div className="pt-3 pb-2 mb-3">
                            <Switch>
                                <Route path="/home" component={Dashboard} />
                                <Route path="/Contacts" component={Contacts} />
                                <Route path="/GetMore/GetMoreX" component={getMoreX} />
                                <Route path="/GetMore/GetMoreY" component={getMoreY} />
                                <Route path="/">
                                    {<Redirect to={"/home"} />}
                                </Route>
                            </Switch>
                        </div>
                    </main>
                </div>
            </div>
        </BrowserRouter >
    )

}
export default App;