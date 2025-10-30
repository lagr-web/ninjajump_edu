import World from "./World";
import Light from "./objects/Light";
import Wall from "./objects/Wall";
import Ninja from "./objects/Ninja";
import Props from "./objects/Props";

class Main {

  constructor() {

     console.log("Initialize ready");

    this.ninja = document.createElement("div");
    this.ninja.id = "ninja";
    document.body.appendChild(this.ninja);

    let ninjaImg = document.createElement("img");
    ninjaImg.src = "./assets/ninja.png";
    this.ninja.appendChild(ninjaImg);
    

  } //end constructor
} //end class

export default Main;
