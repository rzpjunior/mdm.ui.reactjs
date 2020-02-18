import React, { useState } from 'react';
import { Row, Col, Card } from 'reactstrap'
import buttonPlus from '../../assets/button-plus.svg'
import arrowRight from '../../assets/arrow-circle-right-solid.svg'
import ModalCreateData from './modalCreateData';
import { useHistory } from 'react-router-dom';


function BodyDomain({ patern }) {
    const [isShow, setModalCreateOpen] = useState(false)
    const history = useHistory()
    const [dataEntites, setEntites] = useState([
        { entity_name: "Entity Name", date: "01/01/2020" },
        { entity_name: "Entity Nam", date: "01/01/2020" },
        { entity_name: "Entity Na", date: "01/01/2020" },
        { entity_name: "Entity N", date: "01/01/2020" },
        { entity_name: "Entity", date: "01/01/2020" },
        { entity_name: "Entit", date: "01/01/2020" },
        { entity_name: "Enti", date: "01/01/2020" },
        { entity_name: "Ent", date: "01/01/2020" },
    ])

    function handlerClickDestination(destination) {
        history.push(destination, { patern })
    }

    
    return (
        <div>
            <div className="body-padding-2half">
                <Row>
                    <label className="label-text-lg">Create New Dataset</label>
                    <img src={buttonPlus} className="image-button-plus" onClick={() => (setModalCreateOpen(!isShow))} />
                </Row>
                <Row style={{ marginTop: 20 }}>
                    {dataEntites.map((item, index) => {
                        return (
                            <Col sm="3" id={index} className='cardSpace'>
                                <Card className="card-entity" onClick={() => handlerClickDestination("/DataSet")}>
                                    <Row className="card-row-entity">
                                        <Col sm="10" className="entity-col-10">
                                            <Card className="card-body-entity">
                                                <label className="entity-title">{item.entity_name}</label>
                                                <label className="entity-date">Create Date:{item.date}</label>
                                            </Card>
                                        </Col>
                                        <Col sm="2" className="entity-col-2">
                                            <img src={arrowRight} className="image-arrow" />
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </div>
            <ModalCreateData
                isOpen={isShow}
                isClose={() => setModalCreateOpen(!isShow)} />
        </div>
    )

}

export default BodyDomain;