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
    ModalFooter
} from 'reactstrap';

function ModalCreateData({ isOpen, isClose }) {

    const [dataSet, setData] = useState([])

    function handleAddRow() {
        const item = {
            name: "",
            type: "",
            lengthValue: "",
            PK: false,
            AI: false,
            null: false
        };
        setData([...dataSet, item])
    };
    function handleRemoveSpecificRow(idx) {
        const rows = [...dataSet]
        rows.splice(idx, 1)
        setData(rows)
    }

    return (
        <Modal isOpen={isOpen} className="modal-dialog-centered modal-lg">
            <ModalHeader>
                <h3 className="label-create-new-dataset">Create New Data Set</h3>
            </ModalHeader>
            <ModalBody>
                <Row>
                    <Col md={10}>
                        <Form inline>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Label for="datasetName" className="mr-sm-2">Dataset Name</Label>
                                <Input type="text" name="datasetName" id="datasetName" />
                            </FormGroup>
                        </Form>
                    </Col>
                    <Col>
                        <Button color="primary" onClick={handleAddRow}>Add Row</Button>
                    </Col>
                </Row>
                <br></br>
                <table className='table table-bordered table-hover'>
                    <thead>
                        <tr>
                            <th className="text-center">Name</th>
                            <th className="text-center">Type</th>
                            <th className="text-center">LengthValues</th>
                            <th className="text-center">PK</th>
                            <th className="text-center">AI</th>
                            <th className="text-center">Null</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataSet.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        <div className='form-group'>
                                            <input className='form-control' type='text' />
                                        </div>
                                    </td>
                                    <td>
                                        <div className='form-group'>
                                            <input className='form-control' type='text' />
                                        </div>
                                    </td>
                                    <td>
                                        <div className='form-group'>
                                            <input className='form-control' type='text' />
                                        </div>
                                    </td>
                                    <td>
                                        <div className='form-group'>
                                            <input type='checkbox' />
                                        </div>
                                    </td>
                                    <td>
                                        <div className='form-group'>
                                            <input type='checkbox' />
                                        </div>
                                    </td>
                                    <td>
                                        <div className='form-group'>
                                            <input type='checkbox' />
                                        </div>
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-outline-danger btn-sm"
                                            onClick={() => handleRemoveSpecificRow(index)}
                                        >
                                            Remove
                                      </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" style={{ marginRight: 10 }} className="button-size">Save</Button>
                <Button outline color="secondary" className="button-size" onClick={isClose}>Cancel</Button>
            </ModalFooter>
        </Modal>
    )
}

export default ModalCreateData;