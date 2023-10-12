import { useState } from "react";
import { Counter } from "./components/Counter/Counter";
import { PostList } from "./components/PostList/PostList";

function App() {
  const [showCounter, setShowCounter] = useState<boolean>(false);

  return (
    <>
      <h1>Test in react</h1>
      <h2>Vite + React + Vitest + testing library</h2>
      <p>Unit tests with vitest and react</p>
      <h2>Playwright</h2>
      <p>End to end test with playwright</p>
      <h2>Counter</h2>
      <button onClick={() => setShowCounter((value) => !value)}>
        Show counter
      </button>
      {showCounter && <Counter />}
      <h2>Post List</h2>
      <PostList />
    </>
  );
}

export default App;
