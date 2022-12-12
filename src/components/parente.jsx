import React from "react";
import { FilhoComProps } from "./utils/utils";

export default function Parente(props) {
  return (
    <div>
      <h1>
        {props.name} {props.sobrenome}
      </h1>
      <h2>Filhos</h2>
      <ul>{FilhoComProps(props)}</ul>
    </div>
  );
}
