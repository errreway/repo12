// This is a simple JavaScript file with a few examples.

// 1. Basic Function:
function greet(name) {
    return `Hello, ${name}!`;
  }
  
  console.log(greet("World")); // Output: Hello, World!
  const numbers = [1, 2, 3, 4, 5];
  
  // Filter for even numbers:
  const evenNumbers = numbers.filter(num => num % 2 === 0);
  addEventListenerq

  addEventListenera
  addEventListeneraa
  addEventListeneraaa
  addEventListeneraaaa


  console.log(evenNumbers); // Output: [2, 4]
  
  // 3. Object Creation:
  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
  };
  4
  5
  5
  6
  66
  6

  
  console.log(person.firstName);
  
  function fetchUserData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const userData = { name: "Jane", age: 25 };
        resolve(userData);
      }, 2000); // Simulate a 2-second delay
    });
  }
  
  fetchUserData()
    .then(data => {
      console.log("User data:", data); // Output: User data: { name: "Jane", age: 25 }
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
  