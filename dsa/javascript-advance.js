// polyfill for bind

const obj = {
  fname: "Harshita",
  lname: "Joshi",
};

const obj2 = {
  fname: "John",
  lname: "Doe",
};

function getFullName(state, country) {
  console.log(this.fname + " " + this.lname + " " + state + " " + country);
}

//const newFunc = getFullName.bind(obj2);

Function.prototype.myBind = function (...args) {
  const funcToRun = this;
  const reference = args[0];
  const params = args.slice(1);
  return function (...arg) {
    funcToRun.apply(reference, [...params, ...arg]);
  };
};

const newFunc = getFullName.myBind(obj2);
newFunc("UK", "India");
