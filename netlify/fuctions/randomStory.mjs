export default async(event) => {
    const randomValueFromArray = (array) => {
      const random = Math.floor(Math.random() * array.length);
      return array[random];
    };
  
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
    const name = event.queryStringParameters?.name || "Bob";
    const unit = event.queryStringParameters?.unit || "us";
    
    let temperature = 94; 
    let weight = 300; 
  
    if (unit === "uk") {
        temperature = (((temperature - 32) * 5) / 9).toFixed(2);
        weight = (weight / 14).toFixed(2);
    }
  
    const story = `It was ${temperature} degrees outside, so ${xItem} went for a walk. When they got to ${yItem}, they stared in horror for a few moments, then ${zItem}. ${name} saw the whole thing, but was not surprised — ${xItem} weighs ${weight}${unit==="uk" ? "stones":"pounds"}, and it was a hot day.`;
  
    return new Response(JSON.stringify({story}),{
        headers:{"Content-Type":"application/json"},
    });
};