import React, { useState } from 'react';
import CustomDataGrid from '../utils/customDataGrid';
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

function ModalInsertData({ isOpen, isClose }) {

    const columns = [
        { key: "customerID", name: "CustomerID", editable: true },
        { key: "FirstName", name: "FirstName", editable: true },
        { key: "LastName", name: "LastName", editable: true },
        { key: "Address", name: "Address", editable: true },
        { key: "CreateDate", name: "CreateDate", editable: true },
        { key: "CreateBy", name: "CreateBy", editable: true }
    ]
    const rows = [
        { customerID: "Task 1", FirstName: "asdasd", LastName: "asdas", Address: "Task 1", CreateDate: "asdsa", CreateBy: "asb" },
        { customerID: "Task 1", FirstName: "asdasd", LastName: "asdas", Address: "Task 1", CreateDate: "asdsa", CreateBy: "asb" },
    ];

    return (
        <Modal isOpen={isOpen} className="modal-dialog-centered modal-lg">
            <ModalHeader>
                <h2>Add</h2>
            </ModalHeader>
            <ModalBody>
            <CustomDataGrid columns={columns} rows={rows} />
            </ModalBody>
            <ModalFooter>
                <Button color="primary" style={{ marginRight: 10 }} className="button-size">Save</Button>
                <Button outline color="secondary" className="button-size" onClick={isClose}>Cancel</Button>
            </ModalFooter>
        </Modal>
    )
}

export default ModalInsertData;