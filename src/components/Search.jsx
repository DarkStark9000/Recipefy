import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Search() {
  const [recipeSearch, setRecipeSearch] = useState('');
  const navigate = useNavigate();

  const searchHandler = (e) => {
    e.preventDefault();
    navigate(`/searchres/${recipeSearch}`);
  };

  return (
    <FormStyle onSubmit={searchHandler}>
      <FaSearch />
      <input onChange={(e) => setRecipeSearch(e.target.value)} type="text" value={recipeSearch} />
    </FormStyle>
  );
}

const FormStyle = styled.form`
    margin: 2rem;
    position: relative;
    width: 100%;
    height: 1.5rem;
    input{
        border: none;
        background: linear-gradient(35deg, #25064a, #890091);
        font-size: 1.5rem;
        color: #fff;
        padding: 0.4rem 2.4rem;
        border-radius: 18px;
        outline: none;
        width: 100%;
    }
    svg{
        position: absolute;
        top: 50%;
        left: 2%;
        transform: translate (100%, -50%);
        color: #D0FE00;
    }
`;
export default Search;
