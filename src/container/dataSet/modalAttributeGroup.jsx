import React, { useState } from 'react';
import {
    Modal,
    Row,
    Table,
    ModalBody,
    Button,
    Col,
    FormGroup,
    Form,
    ModalHeader,
    Label,
    Input,
    ModalFooter,
    Collapse,
    Card,
    CardBody
} from 'reactstrap';
import { FormControl } from 'react-bootstrap';

function ModalAttributeGroup({ isOpen, isClose }) {

    const [isOpenAttribute, setIsOpenAttribute] = useState(false);
    const toggleAttribute = () => setIsOpenAttribute(!isOpenAttribute);

    const [isOpenDataset, setIsOpenDataset] = useState(false);
    const toggleDataset = () => setIsOpenDataset(!isOpenDataset);

    const [dataAttributes, setAttributes] = useState([
        { attributeName: "Color" },
        { attributeName: "Class" },
        { attributeName: "Style" },
        { attributeName: "Country" },
        { attributeName: "Stock" },
    ]);

    const [dataSelected, setDataSeleceted] = useState([]);

    function addDataSelected(valueSelected) {
        const data = [...dataSelected];
        data.push({ attributSelected: valueSelected })
        setDataSeleceted(data)
    }

    return (
        <Modal isOpen={isOpen} className="modal-dialog-centered">
            <ModalHeader>
                <h2>Add Atribute Group</h2>
            </ModalHeader>
            <ModalBody>
                <form action="">
                    <FormGroup>
                        <Label for='attrName'>Name</Label>
                        <FormControl type='text' name='attrName'></FormControl>
                    </FormGroup>
                    <Button color="primary" onClick={toggleAttribute} style={{ marginBottom: '1rem' }}>Attribute</Button>
                    <Collapse isOpen={isOpenAttribute}>
                        <div className='row'>
                            <Col>
                                <FormGroup>
                                    <Label for="exampleSelectMulti">Available</Label>
                                    <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                                        {dataAttributes.map((attr, i) => {
                                            return (
                                                <option id={i} onDoubleClick={() => addDataSelected(attr.attributeName)}>{attr.attributeName}</option>
                                            )
                                        })}
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label for="exampleSelectMulti">Selected</Label>
                                    <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                                        {dataSelected.map((data, index) => {
                                            return (
                                                <option id={index}>{data.attributSelected}</option>
                                            )
                                        })}
                                    </Input>
                                </FormGroup>
                            </Col>
                        </div>
                    </Collapse><br></br>
                    <Button color="primary" onClick={toggleDataset} style={{ marginBottom: '1rem' }}>Dataset</Button>
                    <Collapse isOpen={isOpenDataset}>
                        <div className='row'>
                            <Col>
                                <FormGroup>
                                    <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                        </div>
                    </Collapse>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" style={{ marginRight: 10 }} className="button-size">Save</Button>
                <Button outline color="secondary" className="button-size" onClick={isClose}>Cancel</Button>
            </ModalFooter>
        </Modal>
    )
}

export default ModalAttributeGroup;