// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker2 {
  constructor(attr) {
    this.length = attr.length;
    this.width = attr.width;
    this.height = attr.height;
  }

  volume() {
    let vol = this.length * this.width * this.height;
    return `The volume of this cuboid is ${vol}`;
  }

  surfaceArea() {
    let sArea = 2 *(this.length * this.width + this.length * this.height + this.width * this.height);
    return `The surface area of this cuboid is ${sArea}`;
  }
};

const cuboid2 = new CuboidMaker2({
    length: 4, 
    width: 5, 
    height: 5});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

//having class named the same as the object constructor we created in prototypes produced an error, to show that I can properly create classes and new objects I've made these into CuboidMaker2. 


// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker2 {
    constructor(attr){
        super(attr);
    }

    cubeVolume(){
        return this.length * this.height * this.width;
    }

    cubeSurfaceArea(){
        return 6*Math.pow(this.width ,2);
    }
}

const cube = new CubeMaker({
    height: 2,
    width: 2,
    length: 2
});

console.log(cube.cubeVolume());
console.log(cube.cubeSurfaceArea());