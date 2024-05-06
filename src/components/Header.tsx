import { Component } from "solid-js";

const Header: Component = () => {
  return (
    <header class=' bg-gray-800 text-white p-4'>
      <div class='grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-8'>
        <div class='size-32 rounded-lg bg-gray-800'>
          <img class='size-32' src='logo.jpeg' alt='two ravens' />
        </div>
        <div class='h-32 rounded-lg bg-gray-800 justify-start text-left align-middle'>
          <h1 class='p-4 text-6xl align-middle text-white font-bold'>
            Huginn and Muninn
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
