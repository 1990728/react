import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Get current path and remove leading slash
    const currentPath = window.location.pathname;
    const pathWithoutSlash = currentPath.slice(1); // removes the first character
    
    // Get query parameters (including the ? if present)
    const searchParams = window.location.search;
    
    // Construct the destination URL
    const targetDomain = 'https://mtinpad.com';
    const destination = `${targetDomain}/r?${pathWithoutSlash}${searchParams.replace('?', '&')}`;
    
    // Perform redirect
    window.location.replace(destination);
  }, []);

  return (
    <div style={{ padding: '20px', fontSize: '1.2rem' }}>
      
    </div>
  );
}

export default App;
