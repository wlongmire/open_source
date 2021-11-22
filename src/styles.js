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

  background-color: black;
  background-image: linear-gradient(0deg, transparent 10%, rgba(30,30,30,0.5) 180%);
  background-size: 10px 10px;
  
  #homeLink {
    color: purple;
    transition: color 1s;
  }

  #homeLink:hover {
    color: pink;
  }

  h3 {
    font-size: 3em;
    margin: 0;
    margin-bottom:0.2em;
  }
`

export const FootnoteSection = styled.div`
  padding: 1em;
  margin: 1em 0 0 0;
  background: ${props => props.background || "pink"};
  max-width: 500px;
  
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

export const MenuHeader = styled.header`
  display:flex;
  text-transform: uppercase;

  a {
    text-decoration: none;
    font-weight: bold;
    color: pink;
    padding: 0.5em;
    margin-right: 0.5em;
    transition: color background-color 0.5s;

    &.active {
      background: pink;
      color: black;
    }
  }
`

export const AttributeSection = styled.div`
  padding: 0.5em;
  padding-top: 2em;
  
  h3 {
    text-transform: uppercase;
    color: royalblue;
    font-size: 1.5em;
    margin-bottom:0.5em;
  }

  section:nth-child(2) {
    margin-top:3em;
  }

  h4 {
    font-size: 1em;
    padding:0;
    margin:0;
  }

  ul {
    list-style: none;
    padding-inline-start: 1em;
  }

  li {
    padding-bottom: 1em;

    a {
      font-size: 1.3em;
      color: cornflowerblue;
      text-decoration: none;
    }

    p {
      padding-top:0.2em;
      margin:0;
      margin-block-start: 0;
      margin-block-end: 0;
    }
  }
`