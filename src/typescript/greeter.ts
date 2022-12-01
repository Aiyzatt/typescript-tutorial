function greeter(person: string) {
  return "Hello, " + person;
}

// const user = "Futo Horio";
const user = ["Futo Horio", 1, 2];

document.body.textContent = greeter(user);