import styled from 'styled-components';

export const Container = styled.div`
  height:100%;
  display:flex;
  flex-direction: column;
  
`
export const Header = styled.header`
  box-sizing: border-box;
  background-color: black;
  text-transform: uppercase;
  font-family: 'Courier New', Courier, monospace;
  font-size:1em;
  color:white;
  display:flex;
  align-items: center;
  z-index: 1000;
  justify-content: space-between;

  p {
    padding-left: 2em;
  }
`