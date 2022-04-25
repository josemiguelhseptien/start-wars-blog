import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">React Boilerplate</span>
      </Link>
      <div>
        <div className="d-flex">
          <input
            value={store.userInput}
            onChange={(e) => {
              actions.typeFunction(e.target.value);
            }}onKeyUp={(e)=>{actions.clearSearch0(e)}}
            className="form-control"
            placeholder="search"
            data-bs-toggle="dropdown" aria-expanded="false"
          />

          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={(e) => {
              actions.clearSearch(e);
            }}
          >
            <i className="fas fa-backspace"></i>
          </button>
        </div>
        <div>
          <ul className="ulList list-group"
         
        
         >
            {store.searchBar.map((element, index) => {
              return (
                <option
                  className="list-group-item list-group-item-action"
                  key={index}
                  onClick={() => {
                    <Link
                      to={{
                        pathname: `/details${element.entity}/${element.name}`,
                        state: element,
                      }}
                    ></Link>;
                  }}
                >
                  {element.name}
                </option>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="ml-auto">
        <Link to="/demo">
          <button className="btn btn-primary">
            Check the Context in action
          </button>
        </Link>

        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown button
          </button>

          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {store.favorites.map((favorite, index) => {
              return (
                <li key={index}>
                  <Link
                    to={{
                      pathname: `/details${favorite.entity}/${favorite.name}`,
                      state: favorite,
                    }}
                  >
                    {favorite.name}
                  </Link>
                  <button
                    className="btn btn-outline-danger"
                    onClick={(e) => {
                      actions.removeFavorite(favorite, index);
                    }}
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
