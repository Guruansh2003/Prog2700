//Go button is calling function
function selectingACreature() {
    
    //grabs the value of the  option selected in the slect box
    let selectedCreature =document.getElementById("creatureSelector").Value;


    //costume variable gathering information based on slection
    let costume;


 //Uses the option selected and runs all susccessfuly
 switch (selectedCreature) {
  case "Wizard":
    costume ="Wizard should wear pointy hats and carry wands!";
    break;
  case "Dragon":
    costume ="Wizard should wear pointy hats and carry wands!";
    break;
  case "Fariy":
    costume ="Fairies should wear sparkly dresses and spread glitter magic!";
    break;
  case "Unicorn":
    costume ="Unicorns should wear horned headbands and have rainbow-colored manes!";
    break;
  default:
    costume ="Hmm, I'm not sure what costume to give to this guest.";
  
  }
  
//output the custome info on the webpage.
  document.getElementById("root").innerHTML=costume;
}
