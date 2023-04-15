function greetingPromise(name) {
  return new Promise((resolve, reject) => resolve(`Hello ${name}`));
}

console.log(greetingPromise("Aditya"));