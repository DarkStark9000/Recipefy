import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles } from 'react-icons/gi';
import { RiRestaurant2Fill } from 'react-icons/ri';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function Category() {
  return (
    <List>
      <Slink to="/cuisine/Italian">
        <FaPizzaSlice />
        <h4>Italian</h4>
      </Slink>
      <Slink to="/cuisine/American">
        <FaHamburger />
        <h4>American</h4>
      </Slink>
      <Slink to="/cuisine/Thai">
        <GiNoodles />
        <h4>Thai</h4>
      </Slink>
      <Slink to="/cuisine/Indian">
        <RiRestaurant2Fill />
        <h4>Indian</h4>
      </Slink>
    </List>
  );
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
    `;

const Slink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
    margin-right: 1rem;

    text-decoration: none;

    background: linear-gradient(35deg, #A9CF00, #FFE900);
    width: 5rem;
    height: 5rem;

    cursor: pointer;
    transform: scale(0.8);

    color: #5200b7;
    h4{ 
      font-size: 0.8rem;
    }
    svg{
      font-size: 1.4rem;
    } 
    &.active{
      background: linear-gradient(35deg, #2c2c2c, #595959);
      h4{
        color: #fff; 
      }
      svg{
        color: #fff; 
      } 
    }
`;
export default Category;
