import { useState } from "react";

const cardData = [
  {
    question: "What is a closure in JavaScript?",
    answer:
      "A closure is when a function remembers variables from its lexical scope even after the outer function has finished executing.",
  },
  {
    question: "What is the difference between == and === in JavaScript?",
    answer:
      "`==` compares values after type coercion, while `===` compares both value and type strictly.",
  },
  {
    question: "What does the `useState` hook do in React?",
    answer:
      "It allows you to create and manage local state in functional components.",
  },
  {
    question: "What is the purpose of `key` in React lists?",
    answer:
      "Keys help React identify which items have changed, are added, or are removed. They must be unique among siblings.",
  },
  {
    question: "What is hoisting in JavaScript?",
    answer:
      "Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope during compilation.",
  },
  {
    question: "Explain the difference between `var`, `let`, and `const`.",
    answer:
      "`var` is function-scoped, while `let` and `const` are block-scoped. `const` also prevents reassignment.",
  },
  {
    question: "What does `Array.from()` do?",
    answer: "It creates a new array from an iterable or array-like object.",
  },
  {
    question: "What is a controlled component in React?",
    answer:
      "A component where form input is fully controlled by React state using `value` and `onChange`.",
  },
  {
    question: "What does `e.preventDefault()` do?",
    answer:
      "It prevents the default behavior of the browser, like stopping a form from reloading the page on submit.",
  },
  {
    question: "What is a React fragment (`<>...</>`) used for?",
    answer:
      "It lets you return multiple elements without adding extra nodes to the DOM.",
  },
  {
    question: "What is the virtual DOM in React?",
    answer:
      "The virtual DOM is a lightweight in-memory representation of the real DOM. React uses it to efficiently update the UI by comparing the current and previous versions and applying only the necessary changes.",
  },
  {
    question: "What is the difference between props and state in React?",
    answer:
      "Props are read-only and passed from parent to child components, while state is local and managed within a component. State can change over time; props cannot.",
  },
];

function App() {
  return (
    <div className="app">
      <h1>Flash Cards</h1>
      <FlashCards />
    </div>
  );
}

function FlashCards() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="cards">
      {cardData.map((data, index) => (
        <Card
          key={index}
          cardData={data}
          index={index}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      ))}
    </div>
  );
}

function Card({ cardData, index, activeIndex, setActiveIndex }) {
  const isActive = activeIndex === index;

  function handleIsActive() {
    if (isActive) setActiveIndex(null);
    else setActiveIndex(index);
  }

  return (
    <div className="card" onClick={handleIsActive}>
      <div className={`content ${isActive ? "active" : ""}`}>
        <div className="front-side">
          <h2>Question</h2>
          <h3>{cardData.question}</h3>
        </div>

        <div className="back-side">
          <h2>Answer</h2>
          <h3>{cardData.answer}</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
