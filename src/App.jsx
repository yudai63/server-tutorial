import { useState } from "react";

export default function App() {
  const [story, setStory] = useState("");

  const generateStory = async () => {
    const name = document.querySelector("input[type='text']").value || "Bob";
    const unit = document.querySelector("input[type='radio']:checked").value || "us";

    const response = await fetch(`.netlify/functions/randomStory?name=${name}&unit=${unit}`);
    const data = await response.json();
    setStory(data.story);
  };

  return (
    <>
      <div>
        <label htmlFor="customname">Enter custom name:</label>
        <input type="text" placeholder=""  />
      </div>
      <div>
        <label htmlFor="us">US</label>
        <input type="radio" name="unit" value="us" defaultChecked />
        <label htmlFor="uk">UK</label>
        <input type="radio" name="unit" value="uk"  />
      </div>
      <div>
        <button onClick={generateStory}>Generate random story</button>
      </div>
      {story && <p>{story}</p>}
    </>
  );
}
