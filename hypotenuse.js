//Functions inside function - Hypotenuse
function hypotenuse(a, b) {
  function square(x) {
    return x * x;
  }
  let sqrA = square(a);
  let sqrB = square(b);
  return sqrA + sqrB;
}

let n1 = prompt('Enter the first leg: ');
let n2 = prompt('Enter the secoond leg: ');
console.log(`The hypotenuse of ${n1} and ${n2} is ${hypotenuse(n1, n2)}`);
