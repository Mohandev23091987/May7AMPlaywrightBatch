let personname="Ravi";

let address="India";
console.log(personname);

function add(a, b) {
    return a + b;
}

// Make function "HOT"
for (let i = 0; i < 1000000; i++) {
    add(10, 20);
}

console.log("Done");
