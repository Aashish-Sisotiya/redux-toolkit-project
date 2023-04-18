import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchSingleCocktail } from "../Redux/Features/CocktailSlice";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../Components/Layout";
import SpinnerAnim from "../Components/Shared/SpinnerAnim";

const ProductDetails = () => {
  const [modifendCocktail, setmodifendCocktail] = useState([]);
  const { loading, cocktail } = useSelector((state) => ({ ...state.app }));
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchSingleCocktail({ id }));
  }, [dispatch, id]);

  useEffect(() => {
    if (cocktail.length > 0) {
      const {
        strDrink,
        strDrinkThumb,
        strAlcoholic,
        strCategory,
        strGlass,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      } = cocktail[0];
      const ingredients = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      ];
      const newCocktail = {
        name: strDrink,
        img: strDrinkThumb,
        info: strAlcoholic,
        category: strCategory,
        glass: strGlass,
        ingredients: ingredients,
      };
      // console.log(newCocktail);
      setmodifendCocktail(newCocktail);
    } else {
      setmodifendCocktail(null);
    }
  }, [id, cocktail]);

  if (!modifendCocktail) {
    return <h2>No Cocktail Details</h2>;
  } else {
    const { name, img, info, category, glass, ingredients } = modifendCocktail;
    return (
      <>
        {loading ? (
          <SpinnerAnim />
        ) : (
          <Layout>
            <div className="container mt-4">
              <Link to="/" className="btn btn-info">
                GO BACK
              </Link>
              <div className="row mt-4">
                <div className="col-md-5">
                  <img src={img} alt={name} height={300} width={400} />
                </div>
                <div className="col-md-5">
                  <h2>Name : {name}</h2>
                  <p className="mt-1">Category : {category}</p>
                  <p>Info : {info}</p>
                  <p>Glass : {glass}</p>
                  <p>Ingredients : {ingredients + " ,"}</p>
                </div>
              </div>
            </div>
          </Layout>
        )}
      </>
    );
  }
};

export default ProductDetails;
