import styled from 'styled-components';

const IconButton = styled.button`
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
  outline: 0;
  border: 0;
  margin: 0;
  margin-left: 0px;
  border-radius: 0;
  padding: 0;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  vertical-align: middle;
  -moz-appearance: none;
  -webkit-appearance: none;
  -webkit-text-decoration: none;
  text-decoration: none;
  color: inherit;
  text-align: center;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  font-size: 1.5rem;
  padding: 12px;
  border-radius: 50%;
  overflow: visible;
  color: rgba(0, 0, 0, 0.54);
  -webkit-transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  /* margin-left: 12px; */
  color: inherit;
  padding: 8px;
  font-size: 1.75rem;
  & > svg {
    fill: var(--text-primary);
  }
  &:hover {
    /* background-color: var(--color-gray-800); */
  }
  &:hover > svg {
    fill: var(--text-secondary);
  }
`;

export default IconButton;