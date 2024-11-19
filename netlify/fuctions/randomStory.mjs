export async function handler(event, context) {
    function randomValueFromArray(array) {
      const random = Math.floor(Math.random() * array.length);
      return array[random];
    }
  
    const xItems = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
    const yItems = ["the soup kitchen", "Disneyland", "the White House"];
    const zItems = [
      "spontaneously combusted",
      "melted into a puddle on the sidewalk",
      "turned into a slug and crawled away"
    ];
  
    const xItem = randomValueFromArray(xItems);
    const yItem = randomValueFromArray(yItems);
    const zItem = randomValueFromArray(zItems);
    const customName = event.queryStringParameters && event.queryStringParameters.name ? event.queryStringParameters.name : "Bob";
    
    let temperature = 94; 
    let weight = 300; 
  
    if (event.queryStringParameters && event.queryStringParameters.unit === "uk") {
      temperature = (temperature - 32) * 5 / 9; 
      weight = weight / 14; 
  
    const story = `It was ${temperature} degrees outside, so ${xItem} went for a walk. When they got to ${yItem}, they stared in horror for a few moments, then ${zItem}. ${customName} saw the whole thing, but was not surprised — ${xItem} weighs ${weight} stones, and it was a hot day.`;
  
    return {
      statusCode: 200,
      body: JSON.stringify({ story })
    };
  }
}