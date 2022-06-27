import React from "react";

export const Person = (props) => {
  return (
    <>
      {!props ? (
        <p>Not found</p>
      ) : (
        <div>
          <p>
            <strong>Name: </strong>
            {props.name}
          </p>
          <p>
            <strong>Age: </strong>
            {props.age}
          </p>
          <p>
            <strong>Hair Color: </strong>
            {props.hairColor}
          </p>
          <p>
            <strong>Eye Color: </strong>
            {props.eyeColor}
          </p>
        </div>
      )}
    </>
  );
};
