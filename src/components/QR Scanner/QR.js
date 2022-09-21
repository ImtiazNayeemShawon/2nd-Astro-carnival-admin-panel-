import React from "react";
import Html5QrcodePlugin from "../QR Scanner/Plugin";
import ResultContainerPlugin from "../QR Scanner/Result";
import './QR.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      decodedResults: [],
    };

    // This binding is necessary to make `this` work in the callback.
    this.onNewScanResult = this.onNewScanResult.bind(this);
  }

  render() {
    return (
      <div className="Qr">
        <section className="Qr-section">
          <p> Scan your QR here </p>
          <br />
        
          <Html5QrcodePlugin
            fps={10}
            qrbox={250}
            disableFlip={false}
            qrCodeSuccessCallback={this.onNewScanResult}
          />
          <ResultContainerPlugin results={this.state.decodedResults} />
        </section>
      </div>
    );
  }

  onNewScanResult(decodedText, decodedResult) {
    console.log("App [result]", decodedResult);

    // let decodedResults = this.state.decodedResults;
    // decodedResults.push(decodedResult);
    this.setState((state, props) => {
      state.decodedResults.push(decodedResult);
      return state;
    });
  }
}

export default App;
