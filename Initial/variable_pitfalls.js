// ===== VARIABLE PITFALLS AND BEST PRACTICES =====

console.log("=== VARIABLE PITFALLS AND BEST PRACTICES ===\n");

// ===== 1. COMMON PITFALLS =====
console.log("1. COMMON PITFALLS:");
console.log("------------------");

// Pitfall 1: Accidental globals (forgetting to declare)
function createAccidentalGlobal() {
    accidentalGlobal = "Oops! I'm global"; // Missing var/let/const
    let properLocal = "I'm properly local";
}
createAccidentalGlobal();
console.log("accidentalGlobal is accessible globally:", accidentalGlobal);

// Pitfall 2: var in loops
console.log("\nPitfall: var in loops");
var functions = [];
for (var i = 0; i < 3; i++) {
    functions.push(function() {
        return i; // This will always return 3!
    });
}
console.log("All functions return:", functions.map(f => f())); // [3, 3, 3]

// Fixed with let
var betterFunctions = [];
for (let j = 0; j < 3; j++) {
    betterFunctions.push(function() {
        return j; // This captures the correct value
    });
}
console.log("Fixed with let:", betterFunctions.map(f => f())); // [0, 1, 2]

// Pitfall 3: Modifying const objects incorrectly
console.log("\nPitfall: Understanding const with objects");
const person = { name: "John", age: 30 };
// person = { name: "Jane" }; // This would throw an error
person.name = "Jane"; // This is fine
console.log("Modified const object:", person);

console.log("\n");

// ===== 2. BEST PRACTICES =====
console.log("2. BEST PRACTICES:");
console.log("-----------------");

// Best Practice 1: Use const by default
console.log("✅ Use const by default:");
const PI = 3.14159;
const MAX_USERS = 100;
const API_ENDPOINTS = {
    users: "/api/users",
    posts: "/api/posts"
};

// Best Practice 2: Use let when reassignment is needed
console.log("✅ Use let for reassignment:");
let counter = 0;
let userName = "guest";
let isLoggedIn = false;

// Simulate state changes
counter++;
userName = "john_doe";
isLoggedIn = true;

console.log("Updated values:", { counter, userName, isLoggedIn });

// Best Practice 3: Meaningful variable names
console.log("✅ Use meaningful names:");
// Bad
let d = new Date();
let u = users.filter(user => user.active);

// Good
const currentDate = new Date();
const activeUsers = users.filter(user => user.active);

// Best Practice 4: Declare variables close to where they're used
console.log("✅ Declare variables close to usage:");
function processOrder(order) {
    // Validate first
    if (!order || !order.items) {
        return null;
    }
    
    // Declare calculation variables when needed
    let subtotal = 0;
    for (const item of order.items) {
        subtotal += item.price * item.quantity;
    }
    
    // Declare tax calculation when needed
    const taxRate = 0.08;
    const tax = subtotal * taxRate;
    const total = subtotal + tax;
    
    return { subtotal, tax, total };
}

// Mock data for demonstration
const users = [
    { name: "Alice", active: true },
    { name: "Bob", active: false },
    { name: "Charlie", active: true }
];

const sampleOrder = {
    items: [
        { name: "Widget", price: 10, quantity: 2 },
        { name: "Gadget", price: 15, quantity: 1 }
    ]
};

console.log("Order total:", processOrder(sampleOrder));

console.log("\n");

// ===== 3. VARIABLE PATTERNS =====
console.log("3. COMMON VARIABLE PATTERNS:");
console.log("---------------------------");

// Pattern 1: Default values with logical OR
console.log("Pattern: Default values");
function greetUser(name) {
    const userName = name || "Guest"; // Default value
    console.log(`Hello, ${userName}!`);
}
greetUser(); // Uses default
greetUser("Alice"); // Uses provided name

// Pattern 2: Nullish coalescing (modern approach)
function greetUserModern(name) {
    const userName = name ?? "Guest"; // Only null/undefined trigger default
    console.log(`Hello, ${userName}!`);
}
greetUserModern(""); // Empty string is preserved
greetUserModern(null); // Uses default

// Pattern 3: Computed property names
console.log("\nPattern: Computed property names");
const propertyName = "dynamicProp";
const obj = {
    staticProp: "static",
    [propertyName]: "dynamic", // Computed property name
    [`${propertyName}_2`]: "also dynamic"
};
console.log("Object with computed properties:", obj);

// Pattern 4: Variable swapping without temp variable
console.log("\nPattern: Variable swapping");
let x = 1, y = 2;
console.log("Before:", { x, y });
[x, y] = [y, x]; // Destructuring assignment
console.log("After:", { x, y });

// Pattern 5: Multiple variable declaration
console.log("\nPattern: Multiple declarations");
let firstName = "John",
    lastName = "Doe",
    age = 30,
    isActive = true;

console.log("Multiple variables:", { firstName, lastName, age, isActive });

console.log("\n");

// ===== 4. DEBUGGING VARIABLES =====
console.log("4. DEBUGGING VARIABLES:");
console.log("----------------------");

// Useful debugging techniques
const debugData = {
    user: "alice",
    score: 85,
    level: 3
};

// Technique 1: Console.log with labels
console.log("Debug data:", debugData);

// Technique 2: Console.table for objects/arrays
console.table(debugData);

// Technique 3: Checking variable types
console.log("Variable types:");
console.log("typeof debugData.user:", typeof debugData.user);
console.log("typeof debugData.score:", typeof debugData.score);
console.log("Array.isArray(debugData):", Array.isArray(debugData));

// Technique 4: JSON.stringify for complex objects
const complexObject = {
    nested: { deep: { value: "hidden" } },
    array: [1, 2, { inner: "object" }]
};
console.log("Complex object:", JSON.stringify(complexObject, null, 2));

console.log("\n");

// ===== 5. MEMORY CONSIDERATIONS =====
console.log("5. MEMORY CONSIDERATIONS:");
console.log("------------------------");

// Variables hold references to objects
const obj1 = { value: 42 };
const obj2 = obj1; // Same reference
const obj3 = { ...obj1 }; // New object with copied properties

obj1.value = 100;
console.log("obj1.value:", obj1.value); // 100
console.log("obj2.value:", obj2.value); // 100 (same reference)
console.log("obj3.value:", obj3.value); // 42 (different object)

// Cleaning up references
let largeData = new Array(1000000).fill(0);
console.log("Large array created");
largeData = null; // Allow garbage collection
console.log("Large array reference cleared");

console.log("\n=== END OF PITFALLS AND BEST PRACTICES ===");
