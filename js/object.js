let user = {
    name: "John",
    age: 30,
}

console.log(user.name);
console.log("age" in user)

let test = {};
user["the test"] = true;

console.log(user["the test"]);

function makeUser(name, age) {
    return {
        name: name,
        age: age,
    }
}

let user = makeUser("CSD", 27);
console.log(user.name)

let test1 = { name: "csd" };
let test2 = test1;
test2.name = 'sd';
console.log(test1)

let user = {
    name: "csd",
};

test = user
user = null;
console.log(test);