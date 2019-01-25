

// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travellog: []
};
// ======================
function turnLeft(rover) {
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case "N":
    rover.direction = "W";
    break;
    case "W":
    rover.direction = "S";
    break;
    case "S":
    rover.direction = "E";
    break;
    case "E":
    rover.direction = "N";
    break;
    default:
    rover.direction;

  }
console.log("facing: " + rover.direction)
return rover;
}


function turnRight(rover){
  console.log("turnRight was called!");
    switch (rover.direction) {
      case "N":
      rover.direction = "E";
      break;
      case "E":
      rover.direction = "S";
      break;
      case "S":
      rover.direction = "W";
      break;
      case "W":
      rover.direction = "N";
      break;
      default:
      rover.direction;

    }
  console.log("facing: " + rover.direction)
  return rover;
  }


function moveForward(rover) {
  console.log("moveForward was called")
    if (rover.direction == "N" && rover.y > 0) {
    rover.y = rover.y-1;
    }
    else if (rover.direction == "S" && rover.y < 9) {
    rover.y = rover.y+1;
    }
    else if (rover.direction == "W" && rover.x > 0) {
    rover.x = rover.x-1;
  }
    else if (rover.direction == "E" && rover.x < 9) {
    rover.x = rover.x+1;
    }
    else { console.log("you've reached a border of sorts!")}
    console.log(" Your new coordinates are (" + rover.x+","+rover.y + ")" )

    var a = rover.x;
    var b = rover.y;
    rover.travellog.push([a, b]);

    return rover;
    }



function moveBackward(rover) {
  console.log("moveBackward was called")
    if (rover.direction == "N" && rover.y < 9) {
    rover.y = rover.y+1;
    }
    else if (rover.direction == "S" && rover.y  > 0) {
    rover.y = rover.y-1;
    }
    else if (rover.direction == "W" && rover.x > 0) {
    rover.x = rover.x+1;
    }
    else if (rover.direction == "E" && rover.x < 9) {
    rover.x = rover.x-1;
    }
    else { console.log("you've reached a border of sorts!")}
    console.log(" Your new coordinates are (" + rover.x+","+rover.y + ")" )

    var a = rover.x;
    var b = rover.y;
    rover.travellog.push([a, b]);
    return rover;
    }

function userCommands(string) {
  for (var i = 0; i < string.length; i++) {
    switch(string[i]) {
        case "f":
        moveForward(rover);
        break;
        case "r":
        turnRight(rover);
        break;
        case "l":
        turnLeft(rover);
        break;
        case "b":
        moveBackward(rover)
        break;
        }
      }
      return rover;
}

  var teststring = 'rffffbllbbbrrbflffrfrfflfrfllfbffrrflffrfllff'

  //userCommands(teststring)
