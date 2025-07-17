import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { privateRoutes, publicRoutes } from './routes';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {


  return (
    <>
      <div className='overflow-x-hidden'>
        <Router>
          <Routes>
            {[...publicRoutes, ...privateRoutes].map((route, idx) => {
              const ElementLayout = route.layout;
              const element = route.component;

              return (
                <Route
                  key={idx}
                  path={route.path}
                  element={<ElementLayout>{element}</ElementLayout>}
                />
              );
            })}
          </Routes>
        </Router>
      </div>
      <ScrollToTopButton />
    </>
  );
}

export default App;
