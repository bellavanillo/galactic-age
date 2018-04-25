export class Birthdate {
  constructor(age) {
    this.age = age;
  }
  secondsAge(age){
    let yearSeconds = (age * 31536000);
    return yearSeconds;
  }
  ageMecury(age){
    let mecuryAge = (Math.floor(age/0.24));
    return mecuryAge;
  }
}
