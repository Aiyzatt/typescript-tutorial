/* クラス, コンストラクタ */
class Student {
  fullName: string;
  constructor (
    public firstName: string,
    public middleInitial: string,
    public lastName: string,
  ) {
    this.fullName = firstName + " "  + middleInitial + " " + lastName;
  }
}

/* インターフェース */
interface Person {
  firstName: string;
  middleInitial: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.middleInitial + " " + person.lastName;
}

const user = new Student("Jane", "M", "User");

document.body.textContent = greeter(user);