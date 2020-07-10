import React from 'react';
import ReactDom from 'react-dom';
import Home from './components/Home/home';

function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

ReactDom.render(<App />, document.getElementById('root'));
