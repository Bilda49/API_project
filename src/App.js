import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState(1);
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");
  const [species, setSpecies] = useState("");
  const handler = async (charNumber) => {
    let response = await fetch(
      `https://rickandmortyapi.com/api/character/${number}`
    );
    let data = await response.json();
    setName(data);
    setNumber(number + 1);
    setImage(`https://rickandmortyapi.com/api/character/avatar/${number}.jpeg`);
    setLocation(data.origin.name);
    setSpecies(data.species);
  };
  useEffect(() => {
    handler();
  }, []);

  return (
    <div className="mainDiv">
      <div className="about">
        <p className="aboutP">
          Rick and Morty is an American adult animated science-fiction sitcom
          created by Justin Roiland and Dan Harmon for Cartoon Network's
          nighttime programming block Adult Swim. It is distributed
          internationally by Warner Bros. Television Distribution.
        </p>
        <p className="aboutP">
          The series follows the misadventures of Rick Sanchez, a cynical mad
          scientist, and his good-hearted but fretful grandson Morty Smith, who
          split their time between domestic life and interdimensional adventures
          that take place across an infinite number of realities, often
          traveling to other planets and dimensions through portals and on
          Rick's flying saucer.{" "}
        </p>
        <p className="aboutP">
          The general concept of Rick and Morty relies on two conflicting
          scenarios: domestic family drama, and an alcoholic grandfather
          dragging his grandson into hijinks.
        </p>
      </div>
      <div className="characterDiv">
        <img className="img" src={image}></img>
        <h1>
          <br />
          {name.name}
        </h1>
        <h2> № : {number - 1}</h2>
        <p>location : {location}</p>
        <p>species : {species}</p>
      </div>
      <button className="buttons" onClick={() => handler()}>
        Next
      </button>
    </div>
  );
};

export default App;
