import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  const cardComponent = robots.map((user, index) => {
    return (
      <Card
        id={robots[index].id}
        name={robots[index].name}
        username={robots[index].username}
        email={robots[index].email}
        key={robots[index].id}
      />
    );
  });
  // wrap in curly braces so that the value of cardComponent is
  // evaluated
  return <div>{cardComponent}</div>;
};
export default CardList;
