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

  #header_title {
    display:flex;
    align-items:center;
  }

  #header_controls a {
    display: flex;
    align-items:center;
    padding: 0.1em;
    font-size: 1.5em;
    color: grey;
    transition: color 1s;
    
  }

  #header_controls a:hover {
    color: #ffc0cb;
  }

  #header_controls {
    display:flex;
    padding: 0.5em;
  }

  p {
    padding-left: 2em;
  }
`

export const MenuSliderStyle = styled.div`
  background:black;
  color: white;
  padding: 2em;
  z-index: 10000;
  height:100%;
  overflow-y: scroll;
  
  #homeLink {
    color: purple;
    transition: color 1s;
  }

  #homeLink:hover {
    color: pink;
  }
`

export const FootnoteSection = styled.div`
  padding: 1em;
  margin: 1em 0 0 0;
  background: ${props => props.background || "pink"};

  h3 {
    font-size: 1.6em;
    color:black;
    padding: 0px;
    margin: 0px;
    text-transform: uppercase;
    z-index: 30;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    width:100%;
    z-index: 100;
  }

  a {
      display:block;
      width:100%;
      padding: 0.4em;
      margin: 0.2em;
      text-decoration: none;
      color: black;
      font-size: 1rem;
      background: rgba(255,255,255, 0);
      transition: 500ms background;
    }

    a:hover {
      background: rgba(255,255,255, 1);
      color:black;
    }
`;