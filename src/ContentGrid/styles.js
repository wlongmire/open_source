import styled from 'styled-components';

export const Modal = styled.button`
  position: absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background: rgba(0,0,0, 0.8)
`;

export const ModalButton = styled.button`
  width: 25%;
  height: 25%;
  border:0.1em solid white;
  border-radius:0.12em;
  font-family: 'Courier New', Courier, monospace;
  box-sizing: border-box;
  text-decoration:none;
  font-weight:300;
  color:#FFFFFF;
  text-align:center;
  transition: all 0.2s;
  background: black;
  border-radius: 10px;
  font-size: 2em;
  

  @media (max-width: 768px) {
    width: 50%;
    height: 20%;
  }

  &:hover {
    border: 0.3em solid white;
  }
`;

export const Container = styled.div`
  height:100%;
  display:flex;
  flex-direction: column;
  background-color: ${props => {
    const value = "red";
    console.log(props.bgColor);
    return(props.bgColor || "white");
  }}
`;

export const Mosaic = styled.div`
  display:grid;
  box-sizing: border-box;
  height:100%;

  padding: 0.2em;
  grid-gap: 0.2em;

  grid-template-rows: ${props => `repeat(${props.rows}, 1fr)`};
  grid-template-columns: ${props => `repeat(${props.cols}, 1fr)`};
  
  @media (max-width: 768px) {
    grid-template-rows: ${props => `repeat(${props.m_rows}, 1fr)`};
    grid-template-columns: ${props => `repeat(${props.m_cols}, 1fr)`};
  }
`
export const Item = styled.div`
  background-color: ${props => props.bgColor || "grey"};
  color: ${props => props.color || "white"};
  display:flex;
  align-items: center;
  justify-content: center;
`
export const Module = styled(Item)`
  grid-row: ${props => `${props.row_range.start} / ${props.row_range.end}`}; //1 / 5;
  grid-column: ${props => `${props.col_range.start} / ${props.col_range.end}`};//1 / 2;

  @media (max-width: 768px) {
    grid-row: ${props => `${props.m_row_range.start} / ${props.m_row_range.end}`};//3 / 7;
    grid-column: ${props => `${props.m_col_range.start} / ${props.m_col_range.end}`};//1 / 4;
  }
`

export const Image = styled.a`
  overflow: hidden;
`