import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar';
import Transfers from './components/Main/Transfers/TransfersList/Transfers';

const App = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <main>
        <Transfers />
      </main>
    </>
  );
};

export default App;
