function isObject(element) {
  return typeof element == "object";
  // return true or false 
}

function isArray(element) {
  return Array.isArray(element);
  // return true or false 
}

function deepCopy(element) {
  let copyElement;

  if (isObject(element)) {
   copyElement = {};
  } else if (isArray(element)) {
   copyElement = [];
  } else {
    return element;
  }

  for (key in element) {

    if (isObject(element[key])) {
     copyElement[key] = deepCopy(element[key]);
    } 
    else if (isArray(element[key])) {
     copyElement.push(element[key]);
    } 
    else {
     copyElement[key] = element[key];
    }    
  }

  return copyElement;
}




// const user = {
//   id: 101,
//   email: 'jack@dev.com',
//   personalInfo: {
//       name: 'Jack',
//       address: {
//           line1: 'westwish st',
//           line2: 'washmasher',
//           city: 'wallas',
//           state: 'WX'
//       }
//   }
// }
const user = {
  id: 101,
  email: 'jack@dev.com',
  personalInfo: {
      name: 'Jack',
      address: {
        country: 'USA',
          coordinates:1
      }
  }
}

console.log('original', user);

// const copy = {...user};
const copy = deepCopy(user);

copy.personalInfo.name = "Daniel";
copy.id = "007";

user.personalInfo.address.country = "Brasil";

copy.personalInfo.address.coordinates = [11,22,33];

console.log('copy:', copy)

console.log('original after modified: .state:', user);
