import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Get current path and query parameters
    const currentPath = window.location.pathname;
    const searchParams = window.location.search;
    
    // Set your target domain
    const targetDomain = 'https://mtinpad.com/r?';
    
    // Create the full destination URL
    const destination = `${targetDomain}${currentPath}${searchParams}`;
    
    // Perform the redirect
    window.location.replace(destination);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      
    </div>
  );
}

export default App;
