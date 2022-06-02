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
      <div>
        <h2>{recipe.title}</h2>
        <img src={recipe.image} alt={recipe.title} />
      </div>
      <Info>
        <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}> Instructions </Button>
        <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}> Ingredients </Button>

        {activeTab === 'instructions' && (
        <div>
          <h3 dangerouslySetInnerHTML={{ __html: recipe.summary }} />
          <h3 dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
        </div>
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
    margin-top: 5rem;
    margin-bottom: 5rem;

    display: flex;
    .active {
        border-bottom: 2px solid #ffc107;
    }
    h2{
        margin-bottom: 2rem;   
    }
    li{
        font-size: 1.5rem;
        list-style: none;
        line-height: 2rem;
    }
    ul{
        margin-top: 2rem;
    }
`;
const Button = styled.button`
    background: linear-gradient(35deg, #25064a, #890091);
    color: #fff;
    padding: 0.5rem 1.5rem;
    border-radius: 18px;
    outline: none;
    border: none;
    cursor: pointer;
    margin-top: 2rem;
    &:active{
        background: #D0FE00;
    }

`;

const Info = styled.div`
    margin-left: 4rem;    
`;
export default Recipe;
