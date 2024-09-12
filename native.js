const members = [
    { name: 'Aman Makhija', age: 20 },
    { name: 'Himanshu Jangid', age: 40 },
    { name: 'Vijay Sahu', age: 41 },
    { name: 'Rakesh Srivastav', age: 17 },
    { name: 'Chandraprakash Sharma', age: 17 },
    { name: 'Kartik Dhawan', age: 45 },
    { name: 'Hardik Dhawan', age: 51 }
];

// 1 firstname
const FirstName = members.map(member => member.name.split(" ")[0])
function FirstN() {
    return FirstName;
}

// 2 uppercase
const UpperLastName = members.map(member => member.name.split(" ")[1].toUpperCase())
function LastName() {
    return UpperLastName;
}

// 3 ages
const Ages = members.map(member => member.age)
function ageBtwn() {

    const ageBetween41To60 = []
    for (let i = 0; i < Ages.length; i++) {

        if (Ages[i] >= 41 && Ages[i] <= 60) {

            ageBetween41To60.push(Ages[i])
        }
    }
    return ageBetween41To60;

}

// 4 average
function averageAge() {
    const sum = 0;
    for (let i = 0; i < Ages.length; i++) {
        sum = sum + Ages[i];
    }
    return sum / Ages.length;
}

// 5 maxage
function maxage() {
    return Math.max(...Ages)
}

// 6 divider
function divider() {
    return {
        young: members.filter(member => member.age < 35),
        old: members.filter(member => member.age > 60),
        noage: members.filter(member => member.age === undefined || member.age === null)
    }
}
// 7 at the 2nd
var named = "test test"
var age = 22

members.unshift({ "name": named, "age": age })

// 8 adder
function adder(name, age) {
    members.push({ "name": name, "age": age })
}
adder(named, age)

// 9 extraction of first and second ele
var f1name = ""
var f1age = ""
var f2name = ""
var f2age = ""
var { "name": f1name, "age": f1age } = members[0]
var { "name": f2name, "age": f2age } = members[1]

// 10 destructuring
members.forEach(({ name, age }) => console.log(`${name} :: ${age}`))

// 11 renaming
var js_object = members.map((obj) => {
    obj["testname"] = obj["name"]
    delete obj["name"]
})

// 12 destructure any property of an object and use spread operator to get remaining properties in an object
members.map(({testname,age})=>({age,...testname}))

// 13 a one liner 
var testt = members.map(members=> { return {...members,age:members.age+1} })
 
// 14 reduce array and object
members.reduce((acc,member)=>acc+member.age,0)
Ages.reduce((acc,cv)=>cv+acc,0)
