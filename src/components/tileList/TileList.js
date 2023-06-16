import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({data}) => {
  return (
    <div>
      {data.map((info, index) => {
        const title = info["name"];
        const {name, ...rest} = info; 
        const description = rest;
        return(
          <Tile title={title} description={description} key={index}/>
        );
      })}
    </div>
  );
};
