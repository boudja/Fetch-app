import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";

const renderData = (data) => {
  return (
    <>
      <div>
        <img src="./image/agifly_logo.png" alt="agifly-logo"></img>
      </div>
      <div className="container lists-container">
        {Object.keys(data).map((keyName, i) => (
          <div key={i}>
            {<h4>{keyName}</h4>}
            <table className="table table-striped">
              {Object.keys(data[keyName]).map((keyName2, index) => (
                <tbody>
                  <tr>
                    {<th scope="row">{keyName2}</th>}
                    <td>{data[keyName][keyName2]}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        ))}
      </div>
    </>
  );
};
const App = () => {
  const body = {
    answers: {
      1: 1,
      2: 1,
      3: 1,
      6: 2,
      7: 1,
      8: 2,
      9: 3,
      10: 0,
      11: 1,
      12: 1,
      13: 0,
      14: 1,
      15: 1,
      16: 3,
      17: 2,
      18: 2,
      19: 2,
      20: 1,
      21: 0,
      g23: 25000,
      e23: 4000,
      p23: 0,
    },
  };
  useEffect(() => {
    axios
      .post("https://poc.cjh.agifly.cloud/poc/test", body)
      .then(function (res) {
        setdata(res.data.data);
      });
  }, []);
  const [data, setdata] = useState(null);
  return (
    <div className="App">
      {data === null ? <p>Loading...</p> : renderData(data)}
    </div>
  );
};

export default App;
