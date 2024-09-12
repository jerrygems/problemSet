"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var memberss = [
    { name: 'Aman Makhija', age: 20 },
    { name: 'Himanshu Jangid', age: 40 },
    { name: 'Vijay Sahu', age: 41 },
    { name: 'Rakesh Srivastav', age: 17 },
    { name: 'Chandraprakash Sharma', age: 17 },
    { name: 'Kartik Dhawan', age: 45 },
    { name: 'Hardik Dhawan', age: 51 }
];
// 1. get first name of everyone 
var some = _.map(memberss, function (member) { return member.name.split(" ")[0]; });
console.log(some);
// 2. last name uppercase 
console.log(_.map(memberss, function (member) { return member.name.split(" ")[1].toUpperCase(); }));
// 3 age between
var ageBetween = _.filter(memberss, function (member) { return member.age >= 41 && member.age <= 60; });
console.log(ageBetween);
// 4 get person with max age
console.log(_.max(_.map(memberss, function (member) { return member.age; })));
// 5 avg
var ages = _.map(memberss, function (member) { return member.age; });
var added = _.sum(ages) / ages.length;
console.log(added);
// 6 divider 
function divider() {
    var newobj = {
        young: _.filter(memberss, function (member) { return member.age < 35; }),
        old: _.filter(memberss, function (member) { return member.age > 60; }),
        noage: _.filter(memberss, function (member) { return member.age === undefined || member.age === null; })
    };
    console.log(newobj);
}
divider();
// 7 at indexes 
var newMember = { name: "test", age: 21 };
var members = _.concat(_.slice(memberss, 0, 2), [newMember], _.slice(memberss, 2));
console.log(members);
