// Problem 1
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

const total = salaries.John + salaries.Ann + salaries.Pete;
console.log(total);

// Problem 2
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(menu) {
  menu.width = 400;
  menu.height = 600
}

multiplyNumeric(menu);
console.log(menu)

// Problem 3

function checkEmailId(str) {
  const atIndex = str.toLowerCase().indexOf('@');
  const dotIndex = str.toLowerCase().indexOf('.');

  if (atIndex === -1 || dotIndex === -1) {
    return false;
  }

  if (atIndex > dotIndex) {
    return false;
  }

  if (atIndex + 1 === dotIndex) {
    return false;
  }

  return true;
}

// Problem 4
function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.substring(0, maxlength - 3) + '...';
  } else {
    return str;
  }
}
console.log(truncate("What I'd like to tell on this topic is:", 20)); // Output: "What I'd like to te..."
console.log(truncate("Hi everyone!", 20)); // Output: "Hi everyone!"

// Problem 5
let styles = ["James", "Brennie"];
console.log(styles); // Output: ["James", "Brennie"]
styles.push("Robert");
console.log(styles); // Output: ["James", "Brennie", "Robert"]
const middleIndex = Math.floor(styles.length / 2);
styles[middleIndex] = "Calvin";
console.log(styles); // Output: ["James", "Calvin", "Robert"]
const removedValue = styles.shift();
console.log(removedValue); // Output: "James"
console.log(styles); // Output: ["Calvin", "Robert"]
styles.unshift("Rose", "Regal");
console.log(styles); // Output: ["Rose", "Regal", "Calvin", "Robert"]
