import React, { useState, useReducer } from 'react';
import RouterCustom from '../utils/routerCustom';
import { Row, Col, Button } from 'reactstrap';
import { useHistory, useLocation } from 'react-router-dom';

import imageRefresh from '../../assets/sync-solid.svg';
import imageSave from '../../assets/save-regular.svg';
import imageAdd from '../../assets/plus-solid.svg';
import imageDelete from '../../assets/trash-alt-regular.svg';
import imageFind from '../../assets/search-solid.svg';
import imageAttribute from '../../assets/button-plus.svg';
import CustomDataGrid from '../utils/customDataGrid';

// Tools Modal Import
import ModalFindDuplicate from './modalFindDuplicate';
import ModalAttributeGroup from './modalAttributeGroup';
import ModalInsertData from './modalInsertData';
import { Alert } from 'antd';



const nameTools = [
    { nameTool: "Refresh" },
    { nameTool: "Save" },
    { nameTool: "Add" },
    { nameTool: "Delete" },
    { nameTool: "Find Duplicate" },
    { nameTool: "Group Attribute" },
]
function DataSet() {

    //const Modal Tool
    const [isShowFindDuplicate, setModalFindDuplicateOpen] = useState(false)
    const [isShowAttributeGroupOpen, setModalAttributeGroupOpen] = useState(false)
    const [isShowInsertData, setModalInsertData] = useState(false)
    const [rows, setRowsState] = useState([])

    const paternPayload = useLocation().state.patern
    const link_patern = [
        { to: "/Dashboard" },
        { to: "/Organisation" },
        { to: paternPayload },
        { to: "/DataSet" }
    ]
    const history = useHistory()

    function handlerClickDestination(destination) {
        history.push(destination)
    }

    const columns = [
        { key: "customerID", name: "CustomerID", editable: true },
        { key: "FirstName", name: "FirstName", editable: true },
        { key: "LastName", name: "LastName", editable: true },
        { key: "Address", name: "Address", editable: true },
        { key: "CreateDate", name: "CreateDate", editable: true },
        { key: "CreateBy", name: "CreateBy", editable: true }
    ]

    // const rows = [
    //     { customerID: "Task 1", FirstName: "asdasd", LastName: "asdas", Address: "Task 1", CreateDate: "asdsa", CreateBy: "asb" },
    //     { customerID: "Task 1", FirstName: "asdasd", LastName: "asdas", Address: "Task 1", CreateDate: "asdsa", CreateBy: "asb" },
    // ];

    const arrayOfTools = [
        { image: imageRefresh, nameTool: nameTools[0].nameTool },
        { image: imageSave, nameTool: nameTools[1].nameTool },
        { image: imageAdd, nameTool: nameTools[2].nameTool },
        { image: imageDelete, nameTool: nameTools[3].nameTool },
        { image: imageFind, nameTool: nameTools[4].nameTool },
        { image: imageAttribute, nameTool: nameTools[5].nameTool }
    ]


    function onPressToolsHandler(nameTool) {
        if (nameTool === nameTools[0].nameTool) {
            alert(nameTool)
        } else if (nameTool === nameTools[1].nameTool) {
            alert(nameTool)
        } else if (nameTool === nameTools[2].nameTool) {
            const newRows = [...rows]
            newRows.push({ customerID: "", FirstName: "", LastName: "", Address: "", CreateDate: "", CreateBy: "" })
            alert(newRows)
            setRowsState(newRows)
        } else if (nameTool === nameTools[3].nameTool) {
            alert("Delete?")
        } else if (nameTool === nameTools[4].nameTool) {
            setModalFindDuplicateOpen(nameTool);
        } else if (nameTool === nameTools[5].nameTool) {
            setModalAttributeGroupOpen(nameTool);
        }
    }

    return (
        <div>
            <div className="color-gray-container">
                {arrayOfTools.map((item) => {
                    // if (index <= 3) {
                    //     return (
                    // <div className="tools-container" key={item.nameTool} style={{marginRight : 5}}>
                    //     <img src={item.image} className="image-tools" onClick={() => onPressToolsHandler(item.nameTool)} />
                    //     <br />
                    //     <label className="text-tools">{item.nameTool}</label>
                    // </div>
                    //     )
                    // }
                    return (
                        <div className="tools-container" key={item.nameTool}>
                            <img src={item.image} className="image-tools-lg" onClick={() => onPressToolsHandler(item.nameTool)} />
                            <br />
                            <label className="text-tools">{item.nameTool}</label>
                        </div>
                    )
                })}
                <div className="float-right">
                    <Button color="primary" style={{ marginRight: 10, marginTop: 5, width: 100 }} onClick={() => handlerClickDestination("/organisation")}>Back</Button>
                </div>
            </div>
            <RouterCustom link={link_patern} className="text-left"
                style={{ paddingTop: 10, marginLeft: 15 }} />
            <div className="body-padding-2half">
                <label className="label-text-lg">Dataset Name</label>
            </div>
            <div style={{ marginLeft: 30 }}>
                <CustomDataGrid columns={columns} rows={rows} />
            </div>
            {/* Tools Modal */}
            <ModalFindDuplicate isOpen={isShowFindDuplicate} isClose={() => setModalFindDuplicateOpen(!isShowFindDuplicate)} />
            <ModalAttributeGroup isOpen={isShowAttributeGroupOpen} isClose={() => setModalAttributeGroupOpen(!isShowAttributeGroupOpen)} />
            <ModalInsertData isOpen={isShowInsertData} isClose={() => setModalInsertData(!isShowInsertData)} />
        </div>
    )
}

export default DataSet;