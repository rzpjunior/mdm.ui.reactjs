import React from "react";
import { Card, CardFooter, Col, CardBody, Row } from 'reactstrap';
import { useHistory } from 'react-router-dom';

import users from '../../assets/users-solid.svg'
import RouterCustom from "../utils/routerCustom";

const link_patern = [
    { to: "/Dashboard" },
    { to: "/Organisation" }
]

function Organisation() {
    const history = useHistory()

    function handlerClickDestination(destination) {
        history.push(destination)
    }

    return (
        <div className="dashboard-container">
            <RouterCustom link={link_patern} className="text-left" />
            <Row>
                <Col sm="3">
                    <Card className="container-card-dashboard" onClick={() => handlerClickDestination("/customer")} >
                        <CardBody>
                            <img src={users} className="card-image" />
                        </CardBody>
                        <CardFooter className="card-text-footer">Customer</CardFooter>
                    </Card>
                </Col>
                <Col sm="3">
                    <Card className="container-card-dashboard" onClick={() => handlerClickDestination("/product")}>
                        <CardBody>
                            <img src={users} className="card-image" />
                        </CardBody>
                        <CardFooter className="card-text-footer">Product</CardFooter>
                    </Card>
                </Col>
                <Col sm="3">
                    <Card className="container-card-dashboard" onClick={() => handlerClickDestination("/vendor")}>
                        <CardBody>
                            <img src={users} className="card-image" />
                        </CardBody>
                        <CardFooter className="card-text-footer">Vendor</CardFooter>
                    </Card>
                </Col>
            </Row>
        </div >
    )
}

export default Organisation;
