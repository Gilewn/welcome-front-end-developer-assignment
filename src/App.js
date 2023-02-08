import { useState } from 'react';

import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar';
import Transfers from './components/Main/Transfers/Transfers';

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <Header onShowSidebar={setShowSidebar} />
      <Sidebar showSidebar={showSidebar} onHideSidebar={setShowSidebar} />
      <main>
        <Transfers />
      </main>
    </>
  );
};

export default App;
