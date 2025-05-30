  import { BrowserRouter, Routes, Route } from 'react-router-dom';
  import Header from './componets/Header.jsx';
  import BrewMenu from './componets/BrewMenu.jsx';
  import BrewDesserts from './componets/BrewDesserts.jsx';
  function Layout({ children }) {
    return (
      <>
        <Header />
        {children}
      </>
    );
  }

  function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/drinks"
            element={
              <Layout>
                <BrewMenu/>
              </Layout>
            }
          />
          
          <Route
            path="/desserts"
            element={
              <Layout>
                <BrewDesserts/>
              </Layout>
            }
          />

        </Routes>
      </BrowserRouter>
    );
  }

  export default App;
