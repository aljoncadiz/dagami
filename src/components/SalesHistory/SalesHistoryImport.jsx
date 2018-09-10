import React, { Component } from 'react'

export default class SalesHistoryImport extends Component {

  constructor(props){
    super(props);
    this.readFile = this.readFile.bind(this);
  }

  readFile(e) {
    let input = e.target;
    if (input.files && input.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        let fileData = e.target.result;
        let fileName = input.files[0].name;
        input.setAttribute("data-title", fileName);  
        let binary = "";
        let bytes = new Uint8Array(fileData);
        var length = bytes.byteLength;
          for (let i = 0; i < length; i++) {
            binary += String.fromCharCode(bytes[i]);
          }
        this.props.onFileUpload(binary);
      }
      reader.readAsArrayBuffer(input.files[0]);
    }  
  }

  handleImportClick(){
    document.getElementById('inputFile').click()
  }

  render() {
    return (
      <div className="row m-b-1">
        <div className="col-sm-6">          
          <div className="form-group inputDnD">
            <label className="sr-only">File Upload</label>
            <input type="file" accept=".xls,.xlsx,.xlsx" 
              className="form-control-file text-primary font-weight-bold" 
              id="inputFile" 
              onChange={this.readFile} 
              data-title="Drag and drop a file" />
          </div>
        </div>
        <div className="col-sm-6 pt-2">
          <button type="button" className="btn btn-primary btn-block" onClick={ this.handleImportClick }>Upload File</button>
          <button type="button" className="btn btn-success btn-block">Export File</button>
        </div>
      </div>
    )
  }
}
