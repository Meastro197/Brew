import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header.jsx';  // Fixed typo in "components"
import BrewMenu from './components/BrewMenu.jsx';
import BrewDesserts from './components/BrewDesserts.jsx';
import BrewJuice from './components/BrewJuice.jsx';

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
        {/* Redirect root to /drinks */}
        <Route path="/" element={<Navigate to="/drinks" replace />} />
        
        {/* All routes use the Layout component */}
        <Route path="/drinks" element={<Layout><BrewMenu /></Layout>} />
        <Route path="/desserts" element={<Layout><BrewDesserts /></Layout>} />
        <Route path="/juices" element={<Layout><BrewJuice /></Layout>} />

        {/* Optional: 404 catch-all route */}
        <Route path="*" element={<Layout><div>404 - Page Not Found</div></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;