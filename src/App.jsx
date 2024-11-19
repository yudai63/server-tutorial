import { useState } from "react";

export default function App() {
  const [showStory, setShowStory] = useState(false);
  const [story, setStory] = useState("");
  const [customName, setCustomName] = useState("");
  const [selectedUnit, setSelectedUnit] = useState("us");

  const handleRadioChange = (event) => {
    setSelectedUnit(event.target.value);
  };

  const generateStory = async () => {
    const response = await fetch(`/api/randomStory?name=${customName}&unit=${selectedUnit}`);
    const data = await response.json();
    setStory(data.story);
    setShowStory(true);
  };

  return (
    <>
      <div>
        <label htmlFor="customname">Enter custom name:</label>
        <input
          type="text"
          value={customName}
          onChange={(e) => setCustomName(e.target.value)}
          placeholder=""
        />
      </div>
      <div>
        <label htmlFor="us">US</label>
        <input
          type="radio"
          value="us"
          checked={selectedUnit === "us"}
          onChange={handleRadioChange}
        />
        <label htmlFor="uk">UK</label>
        <input
          type="radio"
          value="uk"
          checked={selectedUnit === "uk"}
          onChange={handleRadioChange}
        />
      </div>
      <div>
        <button onClick={generateStory}>Generate random story</button>
      </div>
      {showStory && <p>{story}</p>}
    </>
  );
}
