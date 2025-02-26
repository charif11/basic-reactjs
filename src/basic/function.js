// Arrow Function
const increment = (n) => ++n;
const decrement = n => --n;
const line = () => {
  console.log("---------------------------------")
}
const print = (fname, lname) => console.log(fname + " " + lname);

print("charif", "hayiningoh");
line();
console.log(increment(1))
console.log(decrement(1))
line();
