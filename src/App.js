import { useEffect, useState } from "react";
import "./App.css";
import Selection from "./component/Selection";
import {dataFetch,getData, Sort, Search, dataSearched } from "./common";

function App() {
  const [data, setData] = useState();
  const [valueSelected, setValueSelected] = useState("");
  const [valueColumn, setValueColumn] = useState("");


  useEffect(()=>{
    const getDataResults = async()=> {
    let dataResults = await getData();
    setData(dataResults.results);
    }
    getDataResults();
  },[])
  
  const getValueSelectedHandler = (value, column) => {
    setValueColumn(column);
    setValueSelected(value);
    if (value === "sort") {
      Sort(column);
      setData(dataFetch);
    }
  };

  const searchHandler = (valueSearched) => {
    Search(valueSearched, valueColumn);
    setData(dataSearched);
  };

  return (
    <div className="App">
      <table id="table">
        <thead>
          <tr>
            <th hidden={valueColumn === "title" && valueSelected === "hide"}>
              <Selection
                getValueSelected={getValueSelectedHandler}
                onSearch={searchHandler}
                column="title"
              />
              <span>Title</span>
            </th>
            <th hidden={valueColumn === "overview" && valueSelected === "hide"}>
              <Selection
                getValueSelected={getValueSelectedHandler}
                onSearch={searchHandler}
                column="overview"
              />
              <span>Overview</span>
            </th>
            <th
              hidden={valueColumn === "popularity" && valueSelected === "hide"}
            >
              <Selection
                getValueSelected={getValueSelectedHandler}
                onSearch={searchHandler}
                column="popularity"
              />
              <span>Popularity</span>
            </th>
            <th
              hidden={
                valueColumn === "release_date" && valueSelected === "hide"
              }
            >
              <Selection
                getValueSelected={getValueSelectedHandler}
                onSearch={searchHandler}
                column="release_date"
              />
              <span>Release date</span>
            </th>
            <th
              hidden={
                valueColumn === "vote_average" && valueSelected === "hide"
              }
            >
              <Selection
                getValueSelected={getValueSelectedHandler}
                onSearch={searchHandler}
                column="vote_average"
              />
              <span>Vote average</span>
            </th>
            <th
              hidden={valueColumn === "vote_count" && valueSelected === "hide"}
            >
              <Selection
                getValueSelected={getValueSelectedHandler}
                onSearch={searchHandler}
                column="vote_count"
              />
              <span>Vote Count</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, key) => (
              <tr key={key}>
                <td
                  hidden={valueColumn === "title" && valueSelected === "hide"}
                >
                  {item.title}
                </td>
                <td
                  hidden={
                    valueColumn === "overview" && valueSelected === "hide"
                  }
                >
                  {item.overview}
                </td>
                <td
                  hidden={
                    valueColumn === "popularity" && valueSelected === "hide"
                  }
                >
                  {item.popularity}
                </td>
                <td
                  hidden={
                    valueColumn === "release_date" && valueSelected === "hide"
                  }
                >
                  {item.release_date}
                </td>
                <td
                  hidden={
                    valueColumn === "vote_average" && valueSelected === "hide"
                  }
                >
                  {item.vote_average}
                </td>
                <td
                  hidden={
                    valueColumn === "vote_count" && valueSelected === "hide"
                  }
                >
                  {item.vote_count}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
