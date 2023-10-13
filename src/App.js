import { useState } from 'react';
import './App.css';
import axios from 'axios';

//defaultkey: fca_live_8FdPyp64BEEdgEPM5iclsz2N0MCVCqKxTs9SQ9ot

const URL = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_8FdPyp64BEEdgEPM5iclsz2N0MCVCqKxTs9SQ9ot&currencies=GBP%2CEUR&base_currency=EUR"


function App() {
  const [eur, setEur] = useState(0);
  const [gbp, setGbp] = useState(0);
  const [rate, setRate] = useState(0);
  const [rateE,setRateE] = useState(0);
  
  const convert = (e) => {
    e.preventDefault()
    axios.get(URL)
      .then((response) => {
        const json = response.data
        setRate(json.data.GBP);
        setGbp(eur * json.data.GBP);
        setRateE(json.data.EUR)
      }).catch (error => {
        alert(error)
      })
  }
  
  return (
    <div id="container">
      <form onSubmit={convert}>     
        <div>
          <h3>Currency Calculator</h3>
          <label>Eur </label>&nbsp;
          <input type="number" step="0.01"
          value={eur} onChange={e => setEur(e.target.value)} />
          <div>
          <output>{rateE}€ = {rate}£</output>
          </div>
        </div>
        <div>
          <button>Calculate</button>
        </div>
        <div>
          <label>Gbp = </label>
          <output>{gbp.toFixed(2)}£</output>
        </div>
        <div>

        </div>
      </form>
    </div>
  );
}

export default App;
