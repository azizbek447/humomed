import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routes';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Router>
          <Routes>
            {routes.map((route, idx) => {
              const Layout = route.layout;

              return (
                <Route
                  key={idx}
                  path={route.path}
                  element={
                    <Layout>
                      {route.element}
                    </Layout>
                  }
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
