// MAP THE DEBRIS
// Return a new array that transforms the elements' average altitude into their
// orbital periods (in seconds).
// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
//
// You can read about orbital periods on Wikipedia.
//
// The values should be rounded to the nearest whole number. The body being
// orbited is Earth.
// The radius of the earth is 6367.4447 kilometers, and the GM value of earth
// is 398600.4418 km3s-2.
//
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/map-the-debris


const orbitalPeriod = (arr) => {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const getOrbitalPeriod = (obj) => {
    const thirdPowerA = ((earthRadius + obj.avgAlt) ** 3 );
    const orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(thirdPowerA / GM));
    return {
              name: obj.name,
              orbitalPeriod: orbitalPeriod
            };
  };

  return arr.map(obj => getOrbitalPeriod(obj));
}

module.exports = orbitalPeriod;
