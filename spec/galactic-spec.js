import { Birthdate } from './../src/galactic.js';


describe('Birthdate', function(){
  it('should calculate the age of someone into seconds', function(){
    let birthdate = new Birthdate();
    expect(birthdate.secondsAge(15)).toEqual(473040000);
  });
  it('should calculate the age of someone on Mercury', function(){
    let birthdate= new Birthdate();
    expect(birthdate.ageMecury(15)).toEqual(61);
  });
});
