// import { useState } from "react";
// import "./App.css";

function List(props) {
  return props.dataShow.map(item => <li key={item} > {item }</li> )
}


export default List;
