import ButtonAppBar from './components/Nav/ButtonAppBar';
// import ActionAreaCard from './components/ActionAreaCard/ActionAreaCard'
import CircularIndeterminate from './components/CircularIndeterminate/CircularIndeterminate';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import '../src/routes/MainLayout';
import { routes } from '../src/routes/MainLayout';


const ActionAreaCard = React.lazy(() => import('./components/ActionAreaCard/ActionAreaCard'));
console.log(routes.path)
function App() {

  return (
    <div className="App">
      <Router>
        <ButtonAppBar />
        <Suspense fallback={
          <div> Loading...<CircularIndeterminate /></div>}>
          {/* <CircularIndeterminate /> */}
          <Routes>
            <Route path={routes.path} element={[
              <ActionAreaCard />]} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
