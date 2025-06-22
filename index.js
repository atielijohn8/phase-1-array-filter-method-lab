// Code your solution here

// Array of driver names
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

// 1. findMatching function
function findMatching(drivers, name) {
  return drivers.filter(driver => 
    driver.toLowerCase() === name.toLowerCase()
  );
}

// 2. fuzzyMatch function
function fuzzyMatch(drivers, letters) {
  return drivers.filter(driver =>
    driver.toLowerCase().startsWith(letters.toLowerCase())
  );
}

// 3. matchName function
function matchName(drivers, name) {
  return drivers.filter(driver => 
    driver.name === name
  );
}