// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    if (blocks > 42) {
      return blocks - 42;
    } else {
      return 42 - blocks;
    }
  }
 
  // distanceFromHqInFeet is not defined

  function distanceFromHqInFeet(blocks) {
    const distanceInBlocks = Math.abs(blocks - 42);
    const distanceInFeet = distanceInBlocks * 264;
    return distanceInFeet;
  }
  
  module.exports = {
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice
  };
  
// distanceTravelledInFeet

  function distanceTravelledInFeet(start, destination) {
    const distance = Math.abs(start - destination);
    const feetPerBlock = 264; // there are 264 feet in a block
    const distanceInFeet = distance * feetPerBlock;
  
    return distanceInFeet;
  }

  // FarePrice is calculated.
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let fare;
  
    if (distance <= 400) {
      fare = 0;
    } else if (distance > 400 && distance <= 2000) {
      fare = (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      fare = 25;
    } else {
      fare = 'cannot travel that far';
    }
  
    return fare;
  }
  
  
