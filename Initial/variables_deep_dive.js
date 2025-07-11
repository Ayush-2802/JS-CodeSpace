// ===== JAVASCRIPT VARIABLES - COMPREHENSIVE GUIDE =====

console.log("=== JAVASCRIPT VARIABLES DEEP DIVE ===\n");

// ===== 1. VARIABLE DECLARATION KEYWORDS =====
console.log("1. VARIABLE DECLARATION KEYWORDS:");
console.log("-----------------------------------");

// var - function-scoped, can be redeclared and updated
var name = "Alice";
console.log("var name:", name);

// let - block-scoped, can be updated but not redeclared
let age = 25;
console.log("let age:", age);

// const - block-scoped, cannot be updated or redeclared
const PI = 3.14159;
console.log("const PI:", PI);

console.log("\n");

// ===== 2. VARIABLE HOISTING =====
console.log("2. VARIABLE HOISTING (JavaScript's unique behavior):");
console.log("--------------------------------------------------");

// Unlike Python/Java, JavaScript "hoists" variable declarations
console.log("hoistedVar before declaration:", hoistedVar); // undefined (not error!)
var hoistedVar = "I'm hoisted!";
console.log("hoistedVar after assignment:", hoistedVar);

// let and const are hoisted but in "temporal dead zone"
try {
    console.log("hoistedLet:", hoistedLet); // This will throw an error
} catch (error) {
    console.log("Error accessing hoistedLet:", error.message);
}
let hoistedLet = "I'm also hoisted but inaccessible";

console.log("\n");

// ===== 3. SCOPE DIFFERENCES =====
console.log("3. SCOPE DIFFERENCES:");
console.log("--------------------");

// Function scope vs Block scope
function scopeDemo() {
    if (true) {
        var functionScoped = "I'm function-scoped";
        let blockScoped = "I'm block-scoped";
        const alsoBlockScoped = "I'm also block-scoped";
    }
    
    console.log("functionScoped outside if:", functionScoped); // Works!
    
    try {
        console.log("blockScoped outside if:", blockScoped); // Error!
    } catch (error) {
        console.log("Error accessing blockScoped:", error.message);
    }
    
    try {
        console.log("alsoBlockScoped outside if:", alsoBlockScoped); // Error!
    } catch (error) {
        console.log("Error accessing alsoBlockScoped:", error.message);
    }
}
scopeDemo();

console.log("\n");

// ===== 4. VARIABLE MUTABILITY =====
console.log("4. VARIABLE MUTABILITY:");
console.log("-----------------------");

// var and let can be reassigned
var mutableVar = "Initial value";
mutableVar = "Changed value";
console.log("mutableVar after change:", mutableVar);

let mutableLet = 10;
mutableLet = 20;
console.log("mutableLet after change:", mutableLet);

// const cannot be reassigned
const immutableConst = "Cannot change";
try {
    immutableConst = "Trying to change"; // This will throw an error
} catch (error) {
    console.log("Error changing const:", error.message);
}

// BUT: const objects and arrays can have their contents modified
const person = { name: "John", age: 30 };
person.age = 31; // This works!
console.log("Modified const object:", person);

const numbers = [1, 2, 3];
numbers.push(4); // This works!
console.log("Modified const array:", numbers);

console.log("\n");

// ===== 5. DYNAMIC TYPING =====
console.log("5. DYNAMIC TYPING (unlike Java, like Python):");
console.log("---------------------------------------------");

let dynamicVar = 42;
console.log("dynamicVar as number:", dynamicVar, "- type:", typeof dynamicVar);

dynamicVar = "Now I'm a string!";
console.log("dynamicVar as string:", dynamicVar, "- type:", typeof dynamicVar);

dynamicVar = true;
console.log("dynamicVar as boolean:", dynamicVar, "- type:", typeof dynamicVar);

dynamicVar = { name: "Object" };
console.log("dynamicVar as object:", dynamicVar, "- type:", typeof dynamicVar);

dynamicVar = null;
console.log("dynamicVar as null:", dynamicVar, "- type:", typeof dynamicVar);

console.log("\n");

// ===== 6. UNDEFINED vs NULL =====
console.log("6. UNDEFINED vs NULL:");
console.log("--------------------");

let undefinedVar;
console.log("undefinedVar:", undefinedVar, "- type:", typeof undefinedVar);

let nullVar = null;
console.log("nullVar:", nullVar, "- type:", typeof nullVar);

console.log("undefinedVar == null:", undefinedVar == null); // true (loose equality)
console.log("undefinedVar === null:", undefinedVar === null); // false (strict equality)

console.log("\n");

// ===== 7. VARIABLE NAMING CONVENTIONS =====
console.log("7. VARIABLE NAMING CONVENTIONS:");
console.log("-------------------------------");

// Valid variable names
let validName1 = "Valid";
let $validName = "Valid with $";
let _validName = "Valid with underscore";
let validName2023 = "Valid with numbers";

// Common conventions
let camelCase = "JavaScript convention";
let snake_case = "Python-like (less common in JS)";
let PascalCase = "Usually for constructors/classes";

console.log("Naming conventions demonstrated");

console.log("\n");

// ===== 8. CLOSURES AND VARIABLE CAPTURE =====
console.log("8. CLOSURES AND VARIABLE CAPTURE:");
console.log("---------------------------------");

function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log("counter1():", counter1()); // 1
console.log("counter1():", counter1()); // 2
console.log("counter2():", counter2()); // 1 (separate closure)
console.log("counter1():", counter1()); // 3

console.log("\n");

// ===== 9. GLOBAL VARIABLES =====
console.log("9. GLOBAL VARIABLES:");
console.log("-------------------");

// Variables declared outside functions are global
var globalVar = "I'm global with var";
let globalLet = "I'm global with let";
const globalConst = "I'm global with const";

// In browsers, var creates properties on window object
// In Node.js, this behavior is different
console.log("Global variables declared");

console.log("\n");

// ===== 10. TEMPORAL DEAD ZONE =====
console.log("10. TEMPORAL DEAD ZONE:");
console.log("-----------------------");

function temporalDeadZoneDemo() {
    console.log("Start of function");
    
    // This works - var is hoisted and initialized with undefined
    console.log("varVariable:", varVariable);
    
    // This would throw ReferenceError - let is hoisted but not initialized
    // console.log("letVariable:", letVariable);
    
    var varVariable = "var value";
    let letVariable = "let value";
    
    console.log("After declarations - var:", varVariable, "let:", letVariable);
}
temporalDeadZoneDemo();

console.log("\n");

// ===== 11. VARIABLE BEST PRACTICES =====
console.log("11. VARIABLE BEST PRACTICES:");
console.log("----------------------------");

// Use const by default
const defaultChoice = "Use const when possible";

// Use let when you need to reassign
let counter = 0;
counter = 1; // Reassignment needed

// Avoid var in modern JavaScript
console.log("Modern JS: prefer const, then let, avoid var");

console.log("\n");

// ===== 12. COMPARISON WITH PYTHON AND JAVA =====
console.log("12. COMPARISON WITH PYTHON AND JAVA:");
console.log("------------------------------------");

console.log("JavaScript vs Python vs Java:");
console.log("- JS: Dynamic typing (like Python)");
console.log("- JS: Hoisting (unique to JS)");
console.log("- JS: Block scoping with let/const (like Java)");
console.log("- JS: Function scoping with var (different from both)");
console.log("- JS: No type declarations (like Python, unlike Java)");

console.log("\n=== END OF VARIABLES DEEP DIVE ===");
