function sum(...args) {
  let nums = Array.from(args);
  let sum = 0;
  return nums.reduce((acc, el) => {
    return acc + el;
  });

}

Function.prototype.myBind = function(context) {
  let bindTimeArgs = Array.from(arguments).slice(1);
  let that = this;
  return function() {
    let callTimeArgs = Array.from(arguments);
    that.call(context, ...bindTimeArgs.concat(callTimeArgs));
  }
}; 

Function.prototype.myBind = function (context) {
  let bindTimeArgs = Array.from(arguments).slice(1);
  let that = this;
  return function () {
    let callTimeArgs = Array.from(arguments);
    that.apply(context, bindTimeArgs.concat(callTimeArgs));
  }
}; 

function curriedSum(numArgs) {
  let numbers = [];
  function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      return numbers.reduce((acc, el) => acc + el);
    } else {
      return _curriedSum;
    }
  } return _curriedSum;
}

function sum(args) {
  let nums = Array.from(args);
  return nums.reduce((acc, el) => acc + el);
}

Function.prototype.curry = function(numArgs) {
  let args = [];
  let that = this;
  function _curry (arg) {
    args.push(arg);
    if (numArgs === args.length) {
      return that.apply(that, args);  
    } else {
      return _curry;
    }
  } return _curry;
 };