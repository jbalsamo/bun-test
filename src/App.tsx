import { Component } from "solid-js";
import Header from "./components/Header";
import Main from "./components/Main";

const App: Component = () => {
  return (
    <div class=' dark:bg-gray-800 dark:text-white'>
      <div>
        <Header />
      </div>
      <div>
        <Main />
      </div>
    </div>
  );
};

export default App;
