import React from 'react';
import Stars from './components/Stars';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <div className='App'>
      <Stars count={2} />
    </div>
  );
};

export default App;
