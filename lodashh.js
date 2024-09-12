"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
// 8 extract first and second element
// var f1name = ""
// var f1age = ""
// var f2name = ""
// var f2age = ""
// var [,{f1name, f1age }] = memberss[0]
// var [,{f2name, f2age }] = memberss[1]
// console.log(f1name,f2name,f1age,f2age)
// 9 create a new array adding a new memb at 0
var newarr = __spreadArray([77], ages, true);
console.log(newarr);
// 10 extract properties of object using destructuring 
console.log(members.forEach(function (_a) {
    var name = _a.name, age = _a.age;
    return console.log("".concat(name, " :: ").concat(age));
}));
// 11 
// var js_object = members.map((obj) => {
//     obj["testname"] = obj["name"]
//     delete obj["name"]
// })
// console.log(js_object)
// 12 
console.log(_.map(memberss, function (_a) {
    var testname = _a.name, age = _a.age;
    return ({ age: age, testname: testname });
}));
// 13 
var updatedMembers = _.map(members, function (member) {
    return __assign(__assign({}, member), { age: member.age + 1 });
});
console.log(updatedMembers);
// 14 
var totalAge = _.reduce(members, function (acc, member) { return acc + member.age; }, 0);
console.log(totalAge);
