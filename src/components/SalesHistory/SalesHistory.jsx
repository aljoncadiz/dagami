import React, { Component } from 'react';
import SalesHistoryImport from './SalesHistoryImport';
import XLSX from 'xlsx';

export default class SalesHistory extends Component {
    constructor(props)
    {
        super(props);

        this.state = {
            sheets: []
        }
    }

    onFileUpload(file) {
        var workbook = XLSX.read(file, {type: 'binary', cellDates:true, cellStyles:true});

        workbook.SheetNames.forEach(sheet => {
            var worksheet = workbook.Sheets[sheet];
            var data = XLSX.utils.sheet_to_json(worksheet, {header:1, defval: null});
        });


    }

  render() {

    return (
      <div className="container mt-4">
        <SalesHistoryImport
        onFileUpload = {this.onFileUpload}
        />
      </div>
    )
  }
}
