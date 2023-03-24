const obj = {
  fname: "Harshita",
  lname: "Joshi",
};

function fullName(state, city) {
  console.log(this.fname + " " + this.lname + " " + state + " " + city);
}
//case 1
const bindMethd = fullName.bind(obj);
//bindMethd();

// case 2
//bindMethd("Hld");

//case 3
const bindMethod3 = fullName.bind(obj, "uttarakhand");
//bindMethod3("hld");

Function.prototype.myBind = function (...args) {
  const obj = this;
  const outerParams = args.slice(1);
  return function (...params) {
    obj.apply(args[0], [...params, ...outerParams]);
  };
};

const bindMethd2 = fullName.myBind(obj, "uttarakhand");
bindMethd2("hld");
