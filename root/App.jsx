import 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import routes from './routes';

function App() {
  return (
    <Router>

      <Routes>
        {routes.map(({ path, element, layout: Layout = ({ children }) => <>
              {children}
            </> }, idx) => (
          <Route key={idx} path={path} element={<Layout>{element}</Layout>} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
