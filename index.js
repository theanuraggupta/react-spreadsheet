import { createRoot } from 'react-dom/client';
import './index.css';
import * as React from 'react';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, ColumnsDirective, RangesDirective, RangeDirective, RowsDirective, RowDirective, CellsDirective, CellDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { defaultData } from './data';


/**
 * Default Spreadsheet sample
 */
function Default() {
    let spreadsheet;
    const boldRight = { fontWeight: 'bold', textAlign: 'right' };
    const bold = { fontWeight: 'bold' };
    function onCreated() {
        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:F1');
        spreadsheet.numberFormat('$#,##0.00', 'F2:F31');
    }
    return (<div className='control-pane'>
            <div className='control-section spreadsheet-control'>
                <SpreadsheetComponent openUrl='https://services.syncfusion.com/react/production/api/spreadsheet/open' saveUrl='https://services.syncfusion.com/react/production/api/spreadsheet/save' ref={(ssObj) => { spreadsheet = ssObj; }} created={onCreated.bind(this)}>
                    <SheetsDirective>
                        <SheetDirective name="Car Sales Report">
                            <RangesDirective>
                                <RangeDirective dataSource={defaultData}></RangeDirective>
                            </RangesDirective>
                            <RowsDirective>
                                <RowDirective index={30}>
                                    <CellsDirective>
                                        <CellDirective index={4} value="Total Amount:" style={boldRight}></CellDirective>
                                        <CellDirective formula="=SUM(F2:F30)" style={bold}></CellDirective>
                                    </CellsDirective>
                                </RowDirective>
                            </RowsDirective>
                            <ColumnsDirective>
                                <ColumnDirective width={180}></ColumnDirective>
                                <ColumnDirective width={130}></ColumnDirective>
                                <ColumnDirective width={130}></ColumnDirective>
                                <ColumnDirective width={180}></ColumnDirective>
                                <ColumnDirective width={130}></ColumnDirective>
                                <ColumnDirective width={120}></ColumnDirective>
                            </ColumnsDirective>
                        </SheetDirective>
                    </SheetsDirective>
                </SpreadsheetComponent>
            </div>
        </div>);
}
export default Default;

const root = createRoot(document.getElementById('sample'));
root.render(<Default />);