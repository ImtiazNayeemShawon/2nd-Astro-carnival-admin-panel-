import React from "react";
import "./QR.css";
import { Button } from "@mui/material";

function filterResults(results) {
  let filteredResults = [];
  for (var i = 0; i < results.length; ++i) {
    if (i === 0) {
      filteredResults.push(results[i]);
      continue;
    }

    if (results[i].decodedText !== results[i - 1].decodedText) {
      filteredResults.push(results[i]);
    }
  }
  return filteredResults;
}

class ResultContainerTable extends React.Component {
  render() {
    const results = filterResults(this.props.data);
    return (
      <table className="Qrcode-result-table">
        <thead>
          <tr>
            <td>Result</td>
          </tr>
        </thead>
        <tbody>
          {results.map((result, i) => {
            console.log(result);
            return (
              <tr key={i}>
                <td>{i}</td>
                <td>{result.decodedText}</td>
                <td>{result.result.format.formatName}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

class ResultContainerPlugin extends React.Component {
  render() {
    let results = filterResults(this.props.results);
    return (
      <div className="Result-container">
        <div className="Result-section">
          <Button> 
          <ResultContainerTable data={this.props.results} />
          </Button>
        </div>
      </div>
    );
  }
}

export default ResultContainerPlugin;
