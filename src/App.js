import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Get current path and query parameters
    const currentPath = window.location.pathname;
    const searchParams = window.location.search;
    
    // Set your target domain
    const targetDomain = 'https://mtinpad.com';
    
    // Create the full destination URL
    const destination = `${targetDomain}/r?${currentPath}${searchParams}`;
    
    // Perform the redirect
    window.location.replace(destination);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      
    </div>
  );
}

export default App;
