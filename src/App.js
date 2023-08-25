// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css";

// import CardDetail from "./components/CardDetail";
// import Card from "./components/Card";
// import NotFound from "./components/NotFound";

// function App() {
//   const [showContainer, setShowContainer] = useState(true);
//   return (
//     <Router>
//       <div className="container">
//         {showContainer && (
//           <div>
//             <div className="title">LIST SOCIAL CARD</div>
//           </div>
//         )}
//         <Routes>
//           <Route path="" element={<Card />} />
//           <Route
//             path="/Detail"
//             element={<CardDetail setShowContainer={setShowContainer} />}
//           />
//           <Route path="/notFound" element={<NotFound />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import CardDetail from "./components/CardDetail";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";

function App() {
  const [showContainer, setShowContainer] = useState(true);
  return (
    <Router>
      <div className='App'>
        {showContainer && (
          <div className='container'>
            <div className='title'>LIST SOCIAL CARD</div>
            <Navbar />
          </div>
        )}
        <Routes>
          <Route
            path='/'
            element={<Card setShowContainer={setShowContainer} />}
          />
          <Route
            path='/NotFound'
            element={<NotFound />}
          />
          <Route
            path='/Detail'
            element={<CardDetail setShowContainer={setShowContainer} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
