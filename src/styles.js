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
    color: ${props => props.background || "pink"};
  }

  #header_controls a.inactive {
    color: rgba(255, 255, 255, 0.2);
    cursor: auto;
  }

  #header_controls {
    display:flex;
    padding: 0.5em;
  }

  img {
    cursor: pointer;
  }

  p {
    padding-left: 2em;
    color: white;
    cursor: default;
    &:hover {
      color: ${props => props.background || "white"}
    }
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
    color: ${props => props.background || "pink"};;
    padding: 0.5em;
    margin-right: 0.5em;
    transition: color background-color 0.5s;

    &.active {
      background: ${props => props.background || "pink"};;
      color: black;
    }
  }
`

export const AttributeSection = styled.div`
  padding: 0.5em;
  padding-top: 2em;
  max-width:500px;
  
  h3 {
    text-transform: uppercase;
    color: ${props => props.background || "pink"};
    font-size: 1.4em;
    margin-bottom:0.5em;
  }

  section:nth-child(1) {
    img {
      margin-left: 1em;
    }
    
    p {
      margin-left: 1em;
      font-size: 1.1em;
    }
  }

  section:nth-child(2) {
    margin-top:3em;

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
        font-size: 1.2em;
        color: white;//${props => props.background || "pink"};
        text-decoration: none;
        display:block;
        padding: 0.2em;

        &.atTitle {
          color: ${props => props.background || "pink"};
          &:hover {
            background-color: ${props => props.background || "pink"};
            color:white
          }
        }

        &.atAuthor {
          color: white;
          &:hover {
            background-color: white;
            color:${props => props.background || "pink"};
          }
        }
      }
    }
  }
`