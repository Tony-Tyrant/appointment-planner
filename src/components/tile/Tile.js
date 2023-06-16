import React from "react";

export const Tile = ({title, description}) => {
  return (
    <div className="tile-container">
      <p className="tile-title">{title}</p>
      {Object.values(description).map(item => {
        return (
          <p className="tile">{item}</p>
        );
      })}
      <br/>
      <br/>
    </div>
  );
};
