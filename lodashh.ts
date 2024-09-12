import * as _ from "lodash";


interface Member {
    name: string;
    age: number;
}

const memberss:Member[] = [
    { name: 'Aman Makhija', age: 20 },
    { name: 'Himanshu Jangid', age: 40 },
    { name: 'Vijay Sahu', age: 41 },
    { name: 'Rakesh Srivastav', age: 17 },
    { name: 'Chandraprakash Sharma', age: 17 },
    { name: 'Kartik Dhawan', age: 45 },
    { name: 'Hardik Dhawan', age: 51 }
];


// 1. get first name of everyone 
const some = _.map(memberss,member=>member.name.split(" ")[0])
console.log(some)
// 2. last name uppercase 
console.log(_.map(memberss, member => member.name.split(" ")[1].toUpperCase()));
// 3 age between
const ageBetween = _.filter(memberss, member => member.age >= 41 && member.age <= 60);
console.log(ageBetween)


// 4 get person with max age
console.log(_.max(_.map(memberss,member=>member.age)))

// 5 avg
var ages = _.map(memberss,member=>member.age)
var added = _.sum(ages)/ages.length
console.log(added)


// 6 divider 
function divider() {
    var newobj= {
        young: _.filter(memberss,member => member.age < 35),
        old: _.filter(memberss,member => member.age > 60),
        noage: _.filter(memberss,member => member.age === undefined || member.age === null)
    }
    console.log(newobj)
}
divider()

// 7 at indexes 

var newMember = {name:"test",age:21}
var members = _.concat(_.slice(memberss, 0, 2), [newMember], _.slice(memberss, 2));
console.log(members)

// 8 extract first and second element
// var f1name = ""
// var f1age = ""
// var f2name = ""
// var f2age = ""
// var [,{f1name, f1age }] = memberss[0]
// var [,{f2name, f2age }] = memberss[1]

// console.log(f1name,f2name,f1age,f2age)

// 9 create a new array adding a new memb at 0
var newarr = [77,...ages]
console.log(newarr)

// 10 extract properties of object using destructuring 
console.log(members.forEach(({ name, age }) => console.log(`${name} :: ${age}`)))

// 11 
// var js_object = members.map((obj) => {
//     obj["testname"] = obj["name"]
//     delete obj["name"]
// })
// console.log(js_object)

// 12 
console.log(_.map(memberss, ({ name: testname, age }) => ({ age, testname })));
