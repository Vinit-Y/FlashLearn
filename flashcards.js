const collections = {
  javascript: {},
  java: {},
};

let nextId = 1;

function generateId() {
  return `flashcard_${nextId++}`;
}

function getCollections() {
  return collections;
}

function getRandomFlashcard(collectionData) {
  const flashcardIds = Object.keys(collectionData);
  const randomIndex = Math.floor(Math.random() * flashcardIds.length);
  const randomFlashcardId = flashcardIds[randomIndex];
  return collectionData[randomFlashcardId];
}

// Add demo data for JavaScript flashcards
collections.javascript[generateId()] = {
  question: 'What is closure in JavaScript?',
  answer: 'A closure is a function that has access to its outer function\'s scope.',
};

collections.javascript[generateId()] = {
  question: 'What is the difference between `==` and `===` in JavaScript?',
  answer: '`==` checks for value equality with type coercion, while `===` checks for value equality without type coercion (strict equality).',
};

collections.javascript[generateId()] = {
  question: 'What are the different ways to create objects in JavaScript?',
  answer: 'There are several ways to create objects in JavaScript, including object literals, constructor functions, and the Object.create() method.',
};

collections.javascript[generateId()] = {
  question: 'What is event bubbling and event capturing in JavaScript?',
  answer: 'Event bubbling refers to the propagation of an event from the target element up to its ancestors. Event capturing is the opposite, where the event is captured from the top of the DOM hierarchy down to the target element.',
};

collections.javascript[generateId()] = {
  question: 'What is the purpose of the `this` keyword in JavaScript?',
  answer: 'The `this` keyword refers to the object to which the currently executing code belongs. Its value is determined by how a function is called (the execution context).',
};

collections.javascript[generateId()] = {
  question: 'What is a callback function in JavaScript?',
  answer: 'A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed or at a specified time.',
};

collections.javascript[generateId()] = {
  question: 'What are higher-order functions in JavaScript?',
  answer: 'Higher-order functions are functions that can accept other functions as arguments or return functions as output. They enable powerful functional programming paradigms in JavaScript.',
};


// Add Demo data for Java flashcards
collections.java[generateId()] = {
  question: 'What is the main difference between an interface and an abstract class in Java?',
  answer: 'An interface can only declare method signatures and constants, while an abstract class can also provide method implementations and instance variables.',
};

collections.java[generateId()] = {
  question: 'What is method overloading in Java?',
  answer: 'Method overloading allows a class to have multiple methods with the same name but different parameter lists.',
};

collections.java[generateId()] = {
  question: 'What is method overriding in Java?',
  answer: 'Method overriding allows a subclass to provide a specific implementation of a method that is already defined in its superclass.',
};

collections.java[generateId()] = {
  question: 'What is the difference between checked and unchecked exceptions in Java?',
  answer: 'Checked exceptions are checked at compile time, whereas unchecked exceptions are not. Checked exceptions must be caught or declared to be thrown, whereas unchecked exceptions do not have this requirement.',
};

collections.java[generateId()] = {
  question: 'What is the difference between an ArrayList and a LinkedList in Java?',
  answer: 'ArrayList is implemented as a resizable array, while LinkedList is implemented as a doubly linked list. ArrayList provides fast random access, while LinkedList provides fast insertion and deletion operations.',
};

collections.java[generateId()] = {
  question: 'What is the purpose of the static keyword in Java?',
  answer: 'The static keyword is used to declare members (variables and methods) that belong to the class itself, rather than to instances of the class. Static members can be accessed directly using the class name, without the need to create an instance of the class.',
};

collections.java[generateId()] = {
  question: 'What is the difference between `==` and `.equals()` in Java?',
  answer: '`==` is used to compare the references of two objects, while `.equals()` is used to compare the contents or values of two objects. For comparing the contents of objects, `.equals()` method should be overridden in the class definition.',
};

export {
  collections,
  getRandomFlashcard,
  getCollections
};
