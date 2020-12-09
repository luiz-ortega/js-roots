// purposeless condition

function isMaleOverAge(age, gender) {
  // if (age >= 18 && gender === "M") {
  //   return true;
  // } else {
  //   return false;
  // }

  return age >= 18 && gender === "M";
}

console.log(isMaleOverAge(18, "F"));

// Always return positive

let name = "Johny";

// if (!(name.trim() === "")) {
//   console.log("valid name 1");
// }

if (name.trim() !== "") {
  console.log("valid name 1");
}

if (name.trim() !== "" && name.trim().length >= 3) {
  console.log("valid name 2");
}

// function isValidName(name) {
//   return name.trim() !== "" && name.trim().length >= 3;
// }

function isValidName(name) {
  return name.trim() !== "" && name.trim().length >= 3;
}

if (isValidName(name)) console.log(true);
