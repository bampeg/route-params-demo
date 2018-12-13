import React from "react";
import { Link } from "react-router-dom";

export default function Comp(props) {
  console.log(props)
  return (
    <div>
      {`Component number ${props.match.params.num}`}
      <br/>
      <Link to="/">Back</Link>
    </div>
  );
}
