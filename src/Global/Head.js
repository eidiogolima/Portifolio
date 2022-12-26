import React from 'react'
import Test from './Test';

function Head(props) {
  React.useEffect(() => {
    document.title = props.title;
    document
      .querySelector("meta[name='description']")
      .setAttribute('content', props.description);
  }, [props]);

  

  return (
    <>
    <Test/>
    

    
    </>
  )
}

export default Head