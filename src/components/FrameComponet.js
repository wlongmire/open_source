import React from 'react';

const FrameComponent = () => {
  return (<div class="page">
    <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
      width="450px"
      height="1000px"
      className="frame" />
    <Iframe url="http://webcache.googleusercontent.com/search?q=cache:https://www.phillymag.com/news/2021/07/10/philly-inferiority-complex/"
      width="450px"
      height="1000px"
      className="frame" />
  </div>);
}

export default FrameComponent;