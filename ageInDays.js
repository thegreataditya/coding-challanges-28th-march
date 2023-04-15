function ageInDays(person, logResult) {
  let fullName = `${person.firstname} ${person.lastname}`;
  let age = person.age * 365;

  logResult(fullName, age);
}

ageInDays({ firstname: "Aditya", lastname: "Tiwari", age: 16 }, (fn, age) => {
  console.log(`The person's full
name is ${fn} and their age in days is ${age}.`);
});
