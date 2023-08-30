// import logo from './logo.svg';
// import logo from './logo.svg';
// App.js
// import React from 'react';
// import { SheetProvider } from './SheetContext';
// import Sheet from './Sheet';
// import Cell from './components/Cell';
// import './App.css';
// import Cell from './components/Cell';

// import './App.css';
// import './styles.css';
// App.js


// const App = () => {
//   return (
//     <SheetProvider>
//       <Sheet />
//     </SheetProvider>
//   );
// };

// export default App;



import React from 'react';
import './App.css';
import './components/Cell.css';
import './components/Row.css';
import './components/Sheet.css';
import Sheet from './components/Sheet';
import { SheetProvider } from './components/SheetContext';

function App() {
  return (
    <SheetProvider>
      {/* <h1>EX Sheet</h1> */}
      <div className="App">
        <Sheet />
      </div>
    </SheetProvider>
  );
}

export default App;




