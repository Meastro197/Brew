import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './componets/Header.jsx'; // Fixed spelling
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
        <Route path="/" element={<Navigate to="/drinks" replace />} />
        
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