import React from "react";
import { Card, CardFooter, Col, CardBody } from 'reactstrap';
import { useHistory } from 'react-router-dom';

import users from '../../assets/users-solid.svg'

function Dashboard() {
    const history = useHistory();
    function handlerClickDestination(destination) {
        history.push(destination)
    }

    return (
        <div className="dashboard-container">
            <div class='row'>
                <Col sm="3">
                    <Card className="container-card-dashboard" onClick={() => handlerClickDestination("/organisation")} >
                        <CardBody>
                            <img src={users} className="card-image" />
                        </CardBody>
                        <CardFooter className="card-text-footer">Organisation</CardFooter>
                    </Card>
                </Col>
                <Col sm="3">
                    <Card className="container-card-dashboard" onClick={() => handlerClickDestination("/businessRule")} >
                        <CardBody>
                            <img src={users} className="card-image" />
                        </CardBody>
                        <CardFooter className="card-text-footer">Business Rule</CardFooter>
                    </Card>
                </Col>
            </div>
        </div>
    )
}

export default Dashboard;