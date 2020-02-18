import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import CustomDataGrid from '../utils/customDataGrid';
import imageSave from '../../assets/save-regular.svg';
import imageAdd from '../../assets/plus-solid.svg';
import imageDelete from '../../assets/trash-alt-regular.svg';
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
    Select
} from 'reactstrap';
import RouterCustom from "../utils/routerCustom";

const link_patern = [
    { to: "/Dashboard" },
    { to: "/Business Rule" }
]

const nameTools = [
    { nameTool: 'Add' },
    { nameTool: 'Edit' },
    { nameTool: 'Remove' }
]

function BusinessRule() {

    const history = useHistory()

    function handlerClickDestination(destination) {
        history.push(destination)
    }

    const [datasetSelectionNames, setDatasetSelectionNames] = useState([
        { datasetSelectionName: 'Customer' },
        { datasetSelectionName: 'Product' },
        { datasetSelectionName: 'Vendor' }
    ]);

    const [attributeSelectionNames, setAttributeSelectionNames] = useState([
        { attributeSelectionName: 'Color' },
        { attributeSelectionName: 'Style' },
        { attributeSelectionName: 'Class' },
        { attributeSelectionName: 'Country' }
    ]);

    const [domainSelectionNames, setDomainSelectionNames] = useState([
        {domainSelectionNames: 'Customer'},
        {domainSelectionNames: 'Product'},
        {domainSelectionNames: 'Vendor'}
    ]);

    const columns = [
        { key: "Priority", name: "Priority", editable: true },
        { key: "Excluded", name: "Excluded", editable: true },
        { key: "Name", name: "Name", editable: true },
        { key: "Description", name: "Description", editable: true },
        { key: "Expression", name: "Expression", editable: true },
        { key: "Status", name: "Status", editable: true }
    ]
    const rows = [
        { Priority: "Task 1", Excluded: "asdasd", Name: "asdas", Description: "Task 1", Expression: "asdsa", Status: "asb" },
        { Priority: "Task 1", Excluded: "asdasd", Name: "asdas", Description: "Task 1", Expression: "asdsa", Status: "asb" },
    ];

    const arrayOfTools = [
        { image: imageSave, nameTool: nameTools[0].nameTool },
        { image: imageAdd, nameTool: nameTools[1].nameTool },
        { image: imageDelete, nameTool: nameTools[2].nameTool },
    ]

    function onPressToolsHandler(nameTool) {
        if (nameTool === nameTools[0].nameTool) {
            alert(nameTool)
        } else if (nameTool === nameTools[1].nameTool) {
            alert(nameTool)
        } else if (nameTool === nameTools[2].nameTool) {
            alert(nameTool);
        }
    }

    return (
        <div>
            <div className="body-padding-2half">
                <RouterCustom link={link_patern} className="text-left" />
                <label className="label-text-lg">Business Rule</label>
                <form>
                    <Col md='3'>
                        <FormGroup>
                            <Label for='Domain'>Domain</Label>
                            <select className='form-control' name='domainSelect'>
                                {domainSelectionNames.map((dom, i) => {
                                    return(
                                    <option id={i}>{dom.domainSelectionNames}</option> 
                                    )
                                })}
                            </select>
                        </FormGroup>
                        <FormGroup>''
                            <Label for='DataSet'>DataSet</Label>
                            <select className='form-control' name='datasetSelect'>
                                {datasetSelectionNames.map((ds, i) => {
                                    return (
                                        <option id={i}>{ds.datasetSelectionName}</option>
                                    )
                                })}
                            </select>
                        </FormGroup>
                        <FormGroup>
                            <Label for='Attribute'></Label>
                            <select className='form-control' name='attributeSelect'>
                                {attributeSelectionNames.map((attr, i) => {
                                    return (
                                        <option id={i}>{attr.attributeSelectionName}</option>
                                    )
                                })}
                            </select>
                        </FormGroup>
                    </Col>
                    <div style={{paddingBottom: 70}}>
                        {arrayOfTools.map((item) => {
                            return (
                                <div className="tools-container" key={item.nameTool}>
                                    <img src={item.image} className="image-tools-lg" onClick={() => onPressToolsHandler(item.nameTool)} />
                                    <br />
                                    <label className="text-tools">{item.nameTool}</label>
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        <CustomDataGrid columns={columns} rows={rows} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default BusinessRule;