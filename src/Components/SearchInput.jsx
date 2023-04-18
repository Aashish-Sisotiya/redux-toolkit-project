import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { fetchSearchCocktails } from "../Redux/Features/CocktailSlice";

const SearchInput = () => {
  const searchTerm = useRef();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = () => {
    const searchText = searchTerm.current.value;
    dispatch(fetchSearchCocktails({ searchText }));
  };

  return (
    <>
      <div className="d-flex flex-cloumn align-items-center justify-content-center">
        <form onSubmit={handleSubmit}>
          <div className="mb-3 mt-3">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Search Here"
              style={{ width: "250px" }}
              ref={searchTerm}
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchInput;
