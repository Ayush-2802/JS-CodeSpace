// ===== PRACTICAL VARIABLE EXAMPLES =====

console.log("=== PRACTICAL VARIABLE EXAMPLES ===\n");

// ===== 1. SHOPPING CART EXAMPLE =====
console.log("1. SHOPPING CART EXAMPLE:");
console.log("-------------------------");

// Using different variable types appropriately
const TAX_RATE = 0.08; // const for constants
let cartTotal = 0; // let for values that change
let itemCount = 0; // let for counters

// Shopping cart items (const array, but contents can change)
const shoppingCart = [];

// Function to add item to cart
function addToCart(itemName, price) {
    const item = { // const for object that won't be reassigned
        name: itemName,
        price: price,
        id: Date.now() // Simple ID generation
    };
    
    shoppingCart.push(item);
    itemCount++;
    cartTotal += price;
    
    console.log(`Added ${itemName} ($${price}) to cart`);
}

// Add some items
addToCart("Laptop", 999.99);
addToCart("Mouse", 29.99);
addToCart("Keyboard", 79.99);

console.log("Cart contents:", shoppingCart);
console.log("Item count:", itemCount);
console.log("Subtotal:", cartTotal);
console.log("Tax:", cartTotal * TAX_RATE);
console.log("Total:", cartTotal + (cartTotal * TAX_RATE));

console.log("\n");

// ===== 2. USER PROFILE EXAMPLE =====
console.log("2. USER PROFILE EXAMPLE:");
console.log("------------------------");

// Demonstrating object mutation with const
const userProfile = {
    username: "john_doe",
    email: "john@example.com",
    age: 28,
    isActive: true,
    preferences: {
        theme: "dark",
        notifications: true
    }
};

console.log("Original profile:", userProfile);

// We can modify properties of const objects
userProfile.age = 29; // Birthday!
userProfile.preferences.theme = "light";
userProfile.lastLogin = new Date().toISOString();

console.log("Updated profile:", userProfile);

console.log("\n");

// ===== 3. LOOP VARIABLES AND SCOPE =====
console.log("3. LOOP VARIABLES AND SCOPE:");
console.log("----------------------------");

// Classic var problem in loops
console.log("var in loops (problematic):");
for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log("var i:", i); // Will print 3, 3, 3
    }, 100);
}

// let fixes the problem
console.log("let in loops (correct):");
for (let j = 0; j < 3; j++) {
    setTimeout(() => {
        console.log("let j:", j); // Will print 0, 1, 2
    }, 200);
}

console.log("\n");

// ===== 4. CONFIGURATION OBJECT =====
console.log("4. CONFIGURATION OBJECT:");
console.log("------------------------");

// Using const for configuration that shouldn't change
const appConfig = {
    apiUrl: "https://api.example.com",
    maxRetries: 3,
    timeout: 5000,
    features: {
        darkMode: true,
        notifications: true,
        analytics: false
    }
};

// Using let for runtime configuration that might change
let currentTheme = appConfig.features.darkMode ? "dark" : "light";
let userLanguage = "en";

console.log("App config:", appConfig);
console.log("Current theme:", currentTheme);
console.log("User language:", userLanguage);

// Changing runtime config
currentTheme = "light";
userLanguage = "es";

console.log("Updated theme:", currentTheme);
console.log("Updated language:", userLanguage);

console.log("\n");

// ===== 5. FUNCTION PARAMETERS AND VARIABLES =====
console.log("5. FUNCTION PARAMETERS AND VARIABLES:");
console.log("------------------------------------");

function processUserData(userData) {
    // Parameters are like local let variables
    const processedData = { ...userData }; // Spread operator to copy
    
    // Local variables
    let validationErrors = [];
    let isValid = true;
    
    // Validate email
    if (!processedData.email || !processedData.email.includes('@')) {
        validationErrors.push("Invalid email");
        isValid = false;
    }
    
    // Validate age
    if (processedData.age < 0 || processedData.age > 150) {
        validationErrors.push("Invalid age");
        isValid = false;
    }
    
    // Add computed fields
    processedData.isValid = isValid;
    processedData.errors = validationErrors;
    processedData.processedAt = new Date().toISOString();
    
    return processedData;
}

// Test the function
const rawUserData = {
    name: "Alice",
    email: "alice@example.com",
    age: 25
};

const processedUser = processUserData(rawUserData);
console.log("Processed user data:", processedUser);

console.log("\n");

// ===== 6. VARIABLE DESTRUCTURING =====
console.log("6. VARIABLE DESTRUCTURING:");
console.log("-------------------------");

// Object destructuring
const student = {
    name: "Bob",
    age: 20,
    grade: "A",
    subjects: ["Math", "Physics", "Chemistry"]
};

// Extract variables from object
const { name, age, grade } = student;
console.log("Destructured:", name, age, grade);

// Array destructuring
const colors = ["red", "green", "blue"];
const [primary, secondary, tertiary] = colors;
console.log("Array destructured:", primary, secondary, tertiary);

// With default values
const { height = 180, weight = 70 } = student; // student doesn't have these
console.log("With defaults:", height, weight);

console.log("\n");

// ===== 7. VARIABLE SWAPPING =====
console.log("7. VARIABLE SWAPPING:");
console.log("--------------------");

let a = 10;
let b = 20;
console.log("Before swap - a:", a, "b:", b);

// JavaScript way (using destructuring)
[a, b] = [b, a];
console.log("After swap - a:", a, "b:", b);

console.log("\n");

// ===== 8. ENVIRONMENT VARIABLES SIMULATION =====
console.log("8. ENVIRONMENT VARIABLES SIMULATION:");
console.log("------------------------------------");

// Simulating environment-based configuration
const NODE_ENV = "development"; // In real apps, this comes from process.env
const isDevelopment = NODE_ENV === "development";
const isProduction = NODE_ENV === "production";

// Configuration based on environment
const config = {
    database: {
        host: isDevelopment ? "localhost" : "prod-db.example.com",
        port: isDevelopment ? 5432 : 5432,
        ssl: !isDevelopment
    },
    logging: {
        level: isDevelopment ? "debug" : "error",
        console: isDevelopment
    }
};

console.log("Environment:", NODE_ENV);
console.log("Config:", config);

console.log("\n=== END OF PRACTICAL EXAMPLES ===");
