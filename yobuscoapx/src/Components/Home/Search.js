import React from 'react'
import '../css/Search.css';

const Search = () => {
  return (
    <>
      <div className="search">
          <div className="container input-group">
            <span className="input-group-text" id="inputGroup-sizing-default"><i className="bi bi-search"></i></span>
            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
            placeholder="Servicio, puesto, trabajo"/>
            <select className="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
              <option defaultValue>Todo el país</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3..</option>
            </select>
            <button className="btn btn-outline-secondary" type="button">Buscar</button>
          </div>
      </div>
    </>
  );
}

export default Search;