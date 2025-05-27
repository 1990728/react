import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

const RedirectComponent = () => {
  const location = useLocation();

  useEffect(() => {
    // Replace with your target domain
    const targetDomain = 'https://mtinpad.com/r?';
    // Construct new URL with current path and query parameters
    const newUrl = `${targetDomain}${location.pathname}${location.search}`;
    // Perform redirect
    window.location.replace(newUrl);
  }, [location]);

  return <div>...</div>;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Catch-all route that handles any path */}
        <Route path="/*" element={<RedirectComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
