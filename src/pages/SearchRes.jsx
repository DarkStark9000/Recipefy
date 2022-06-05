import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

function SearcheRes() {
  const [searchres, setSearchRes] = useState([]);
  const params = useParams();

  const getSearchRes = async (name) => {
    const URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_RECEIPE_API_KEY}&query=${name}&number=12`;

    const response = await fetch(URL);
    const data = await response.json();
    setSearchRes(data.results);
  };

  useEffect(() => {
    getSearchRes(params.search);
  }, [params.search]);

  return (
    <Grid>
      {searchres.map((item) => (
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

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
    `;

const Card = styled.div`
    img{
        width: 70%;
        height: 70%;
        border-radius: 18px;
    }
    h4{
        text-align: center;
        padding: 1rem; 
    }
    `;
export default SearcheRes;
