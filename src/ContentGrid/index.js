import React, { useState } from 'react';

import ContentPicker from './ContentPicker';

import {Modal, ModalButton, Container, Mosaic, Module} from './styles';

const ContentGrid = (props)=> {
  const [playing, setPlaying] = useState(false);
  const { headline, modules, rows, cols, m_rows, m_cols, gap_color } = props;

  console.log("color: ",props);

  return(<Container>
    <Mosaic rows={rows} m_rows={m_rows} cols={cols} m_cols={m_cols} gap_color={gap_color}>
      {
        modules.map(module=> {
          return <Module row_range={module.row_range} col_range={module.col_range} m_row_range={module.m_row_range} m_col_range={module.m_col_range}>
            <ContentPicker {...module} playing={playing}/>
          </Module>
        })
      }
    </Mosaic>

    <div>
      {!playing && <Modal>
        <ModalButton onClick={()=> {
          setPlaying(true);
        }}>
          {headline}
        </ModalButton>
      </Modal>
      }
    </div>
  </Container>);
}

export default ContentGrid;