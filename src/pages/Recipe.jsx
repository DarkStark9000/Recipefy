/* eslint-disable no-console */
/* eslint-disable react/no-danger */
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function Recipe() {
  const params = useParams();

  const [recipe, setRecipe] = useState({});
  const [activeTab, setActiveTab] = useState('instructions');

  const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_RECEIPE_API_KEY}`);
    const details = await data.json();

    setRecipe(details);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.id]);

  return (
    <DetailWrap>
      <div className="imgBox">
        <h2>{recipe.title}</h2>
        <img src={recipe.image} alt={recipe.title} />
      </div>
      <Info>
        <div className="buttonBox">
          <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}> Instructions </Button>
          <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}> Ingredients </Button>
        </div>
        {activeTab === 'instructions' && (
        <div className="recipeBox" dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
        )}
        {activeTab === 'ingredients' && (
          <ul>
            {recipe.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>
                <span>{ingredient.original}</span>
              </li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrap>
  );
}

const DetailWrap = styled(motion.div)`
    margin: 2rem 0;
    display: flex; 
    align-items: flex-start;
    justify-content: center;
    column-gap: 4rem;
    
    .imgBox{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
          }
    .recipeBox {
      font-weight: 500;
      font-size: 1rem;
      text-align: justify;; 
    }

    .buttonBox {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 2rem;
    }
 
`;
const Button = styled.button`
    margin: 1rem;
    background: linear-gradient(35deg, #25064a, #890091);
    color: #fff;
    padding: 0.5rem 1.5rem;
    border-radius: 18px;
    outline: none;
    border: none;
    cursor: pointer; 
`;

const Info = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 60rem;
    height: 100%;
    max-height: 60rem;
    overflow: auto;
    
`;
export default Recipe;
