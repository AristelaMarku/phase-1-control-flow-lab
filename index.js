function scuberGreetingForFeet(feet){
  if (feet <= 400) return "This one is on me!";
  else if (feet < 2500 && feet > 2000) return "I will gladly take your thirty bucks.";
  else if (feet > 2500) return "No can do.";
}
function ternaryCheckCity(city){
  let result;
  result=city==="NYC"?"Ok, sounds good.":"No go."
  return result
// Write your code here!
}

function switchOnCharmFromTip(tips){
  // Write your code here!
  switch(tips){
    case 'generous':
      return "Thank you so much."
    case 'not as generous':
       return 'Thank you.'
      default:
        return 'Bye.'
  }
}