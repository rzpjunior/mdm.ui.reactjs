import React, { Component } from 'react';
import ReactDataGrid from 'react-data-grid';

class CustomDataGrid extends Component {

    constructor(props) {
        super(props)
        this.state = {
            rows: this.props.rows,
            columns: this.props.columns,
            selectedIndexes: []
        }
    }
    onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
        this.setState(state => {
            const rows = state.rows.slice();
            for (let i = fromRow; i <= toRow; i++) {
                rows[i] = { ...rows[i], ...updated };
            }
            console.log(rows)
            return { rows };
        });
    };

    onRowsSelected = rows => {
        this.setState({
            selectedIndexes: this.state.selectedIndexes.concat(
                rows.map(r => r.rowIdx)
            )
        });
    };

    onRowsDeselected = rows => {
        let rowIndexes = rows.map(r => r.rowIdx);
        this.setState({
            selectedIndexes: this.state.selectedIndexes.filter(
                i => rowIndexes.indexOf(i) === -1
            )
        });
    };

    render() {
        const { columns, rows, selectedIndexes } = this.state;
        return (
            <div>
                <div className="text-left" style={{ marginLeft: 10, fontSize: 12 }}>
                    <label>{rows.length} items, {selectedIndexes.length} selected</label>
                </div>
                <div>
                    <ReactDataGrid
                        columns={columns}
                        rowGetter={i => rows[i]}
                        rowsCount={rows.length}
                        enableCellSelect={true}
                        
                        onGridRowsUpdated={this.onGridRowsUpdated}
                        rowSelection={{
                            showCheckbox: true,
                            enableShiftSelect: true,
                            onRowsSelected: this.onRowsSelected,
                            onRowsDeselected: this.onRowsDeselected,
                            selectBy: {
                                indexes: selectedIndexes
                            }
                        }}
                    />
                </div>
            </div>

        )
    }

}

export default CustomDataGrid;