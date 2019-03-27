
const PersonModel=require('./model/person.js');


const person = new PersonModel({
    name: '赵六',
    sn:'123456781333',
    age: 29
});
person.save();



