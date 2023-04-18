import React, { useEffect, useState } from "react"; 
import { useDispatch, useSelector } from "react-redux";
import { fetchCocktails } from "../Redux/Features/CocktailSlice";
import SpinnerAnim from "../Components/Shared/SpinnerAnim";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { loading, cocktails, error } = useSelector((state) => ({
    ...state.app,
  }));
  const [modifiedCocktail, setModifiedCocktail] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCocktails());
  }, []);

  useEffect(() => {
    if (cocktails) {
      const newCocktails = cocktails.map((item) => {
        const { idDrink, strDrink, strDrinkThumb, strGlass, strAlcoholic } =
          item;
        return {
          id: idDrink,
          name: strDrink,
          img: strDrinkThumb,
          info: strAlcoholic,
          glass: strGlass,
        };
      });

      setModifiedCocktail(newCocktails);
    } else {
      setModifiedCocktail([]);
    }
  }, [cocktails]);

  if (loading) {
    return <SpinnerAnim />;
  }
  if (!cocktails) {
    return <h2>No Cocktail found with this name</h2>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div className="container">
      <div className="row">
        {modifiedCocktail.map((item) => (
          <div className="col-md-3 mt-3 " key={item.id}>
            <div className="card" style={{ width: "18rem" }}>
              <img src={item.img} className="card-img-top" alt={item.name} />
              <div className="card-body">
                <h5 className="card-title"> {item.name}</h5>
                <h5 className="card-text">{item.glass}</h5>
                <p className="card-text">{item.info}</p>
                <Link to={`/products/${item.id}`} className="btn btn-primary">
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
