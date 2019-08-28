import React from "react"

const TopEvents = () =>{
  const handleFooter =(value,e) =>{
    e.preventDefault();
      alert(value)
  };
  return (
    <a href="/" onClick={e => handleFooter("back to home",e)}>
     Back to home
    </a>
  );
}
export default TopEvents;
