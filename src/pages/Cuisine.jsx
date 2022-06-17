import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  const params = useParams();

  const getRecipes = async (name) => {
    const URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_RECEIPE_API_KEY}&number=8&cuisine=${name}`;

    const response = await fetch(URL);
    const data = await response.json();

    setCuisine(data.results);
  };

  useEffect(() => {
    getRecipes(params.type);
  }, [params.type]);

  return (
    <Grid animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
      {cuisine.map((item) => (
        <Card key={item.id}>
          <Link to={`/recipe/${item.id}`}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
          </Link>
        </Card>
      ))}
    </Grid>
  );
}

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 18px;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;
export default Cuisine;
