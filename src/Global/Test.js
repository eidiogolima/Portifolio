import React from 'react';
import ReactGA from 'react-ga'; 

const Test = () => {

  React.useEffect(()=>{
    ReactGA.pageview(window.location.pathname);
  },[]);
  return (
    <>
      
    </>
  );
};

export default Test;
