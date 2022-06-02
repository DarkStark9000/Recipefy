/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { motion } from 'framer-motion';
import '@splidejs/splide/dist/css/splide.min.css';

function Veg() {
  const [veg, setVeg] = useState([]);

  const getVeg = async () => {
    const localStorageCheck = localStorage.getItem('veg');
    if (localStorageCheck) {
      setVeg(JSON.parse(localStorageCheck));
    } else {
      const URL = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_RECEIPE_API_KEY}&diet=vegetarian&number=9`;

      const response = await fetch(URL);
      const data = await response.json();
      setVeg(data.recipes);
      localStorage.setItem('veg', JSON.stringify(data.recipes));
    }
  };

  useEffect(() => {
    getVeg();
  }, []);

  return (
    <div>
      <h2>Vegetarian Dishes</h2>
      <Wrapper>
        <Splide options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: '2rem',
        }}
        >
          {veg.map((recipe) => (
            <SplideSlide key={recipe.id}>
              <Card>
                <Link to={`/recipe/${recipe.id}`}>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
                </Link>
              </Card>
            </SplideSlide>
          ))}
        </Splide>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled(motion.div)`
    margin: 36px 26px 0px 26px; 
    `;

const Card = styled(motion.div)`
    min-height: 20rem;
    border-radius: 18px;
    position: relative; 

    overflow: hidden;

    img {
      width: 100%;
      height: 70%;
      border-radius: 18px;
      position: absolute;
      left: 0;
      object-fit: cover;
    }
    p {
      z-index: 4;
      color: #fff;
      position: absolute;
      bottom: 24%;
      left: 4%;
      width: 90%;
      text-align: center; 
      font-weight: 500;
      font-size: 1rem;
      letter-spacing: 0.5px;
      height: 40%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    `;

const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    border-radius: 18px;
    width: 100%;
    height: 70%; 
    background: linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9));
`;

export default Veg;
