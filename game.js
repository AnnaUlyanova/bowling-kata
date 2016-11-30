// Score 119:
//
var frames1 = [
  [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
]
//
// Score 141:
//
var frames2 = [
  [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
]

var frames3 = [
  [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [6, 4, 5]
]

function bowlingScore(frames) {
 var score = 0;
  for (var i = 0; i < frames.length; i++) {
    var currentFrame = frames[i];
    if (strike(currentFrame)) {
      score += 10 + nextTwo(frames, i);
    }
    else if (spare(currentFrame)) {
      score += 10 + nextOne(frames, i);
    }
    else {
      score += currentFrame[0] + currentFrame[1];
    }
  }
  return score;
}

function strike(frame) {
  if (frame[0] === 10) {
    return true;
  } else {
    return false;
  }
}

function spare(frame) {
  return frame[0] + frame[1] === 10 && !strike(frame)
}

function nextOne(frames, index) {
  var current = frames[index];
  if (current.length === 3) {
    return current[2];
  }

  var next1 = frames[index+1];
  return next1[0];
}

function nextTwo(frames, index) {
  var current = frames[index];
  if (current.length === 3) {
    return current[1] + current[2];
  }

  var next1 = frames[index+1];
  var next2 = frames[index+2]
  if (strike(next1)) {
    return next1[0] + next2[0];
  } else {
    return next1[0] + next1[1];
  }
}


console.log("test 1", bowlingScore(frames1) === 119);
console.log("test 2", bowlingScore(frames2) === 141);
console.log("test 3", bowlingScore(frames3) === (119 - 8 + 15));

// console.log(strike([10,0]))
// console.log(spare([10,0]))
