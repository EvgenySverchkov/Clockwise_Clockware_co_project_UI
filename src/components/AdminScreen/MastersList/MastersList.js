import React from 'react';
import MasterItem from "./MasterItem";

function MastersList(props){
  return (
    <ul style={{listStyle: "none"}}>{
      props.mastersArr.map((item)=><MasterItem key={item.id+1} masterObj = {item}/>)
    }</ul>
  );
}

export default MastersList;