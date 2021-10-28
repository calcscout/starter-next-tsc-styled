import styled from 'styled-components';
import { QUERIES } from 'constants/constants';

const IconButton = styled.button`
  display: inline-block;
  border: none;
  padding: 1rem 2rem;
  margin: 0;
  text-decoration: none;
  background-color: var(--color-blue-main);
  color: var(--color-white);
  font-family: sans-serif;
  font-size: 1rem;
  line-height: 1;
  cursor: pointer;
  text-align: center;
  transition: background-color 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-transform: uppercase;

  &:hover,
  &:focus {
    background-color: var(--color-blue-main-hover);
  }

  &:focus {
    outline: 1px solid #fff;
    outline-offset: -1px;
  }

  &:active {
    transform: scale(0.99);
  }
  @media ${QUERIES.smUp} {
    font-size: 1.2rem;
  }
  @media ${QUERIES.mdUp} {
    font-size: 1.3rem;
  }
  @media ${QUERIES.lgUp} {
    font-size: 1.4rem;
  }
`;

export default IconButton;
