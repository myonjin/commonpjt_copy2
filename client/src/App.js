// import logo from "./logo.svg";
// import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Counter from './pages/apply/Counter'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import store from './store/store'


// function reducer(state, action) {
//   if (action.type == 'up') {
//     return { ...state, value: state.value + action.step }
//   }
//   return state
// }

// const initialState = { value: 0 }
// const store = createStore(reducer, initialState)

function App() {
  const Apply = React.lazy(() => import("./pages/apply/Apply"));

  const renderLoader = () => <p>Loading</p>;

  return (
    <Router>
      <Provider store={store}>
        <Counter />
        {/* <Suspense fallback={renderLoader()}>
        <Routes>
          <Route path="/" element={<Apply />} />
        </Routes>
      </Suspense> */}
      </Provider>
    </Router >
  );
}

export default App;
