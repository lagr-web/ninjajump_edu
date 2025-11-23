import World from "./World";
import Light from "./objects/Light";
import Wall from "./objects/Wall";
import Ninja from "./objects/Ninja";
import Props from "./objects/Props";

class Main {
  constructor() {

    const headline = document.createElement("header");
    headline.id = "headline";
    headline.innerHTML =
      " THE FORMER <span style='color:#9b1010ff'>RED</span> NINJA WRAPS IT UP ";
    document.body.appendChild(headline);


    this.world = new World({
      showCameraPos: false,
      setCameraPos: [0.1, 0.7, 8],
      showGrid: false,
      showAxes: false,
      ambientLight: true,
      orbitControl: false,
      showFloor: true,
      floorColor: 0xfff000,
    }); //end world


const ninja = new Ninja(this.world, {
model: "../assets/little_yellow.glb",
position: [0.1, 0.55, 3.5], //x,y,z
rotationY: 0.3,
scale: [0.4, 0.4, 0.4],
sound: "juhu.mp3",
}); 


this.world.renderer.setAnimationLoop((time) =>
this.world.animation(time, ninja.mixer)
);


new Wall(this.world, {
color: 0xfff000,
size: [50, 10],
pos: [0, 4, -2],
rotation: 0,
});


new Light(this.world, {

  color:0xffffff,
  strength:200

});


const katus = new Props(this.world, {
model: "../assets/kaktus.glb",
position: [-1, 0.05, 1.5], //x,y,z
rotationY: 1.5,
scale: [0.8, 0.8, 0.8],
});

const stones = new Props(this.world, {
model: "../assets/stones.glb",
position: [1, 1, 1.5], //x,y,z
rotationY: 1.5,
scale: [0.8, 0.8, 0.8],
});


this.world.renderer.domElement.addEventListener("click", (event) => {
ninja.jump();
}); //6



  } //end constructor
} //end class

export default Main;
