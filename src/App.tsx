// components
import Hero from './components/Hero';
import './components/Navbar';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <h1 className='text-4xl'>Hello World</h1>
      </main>
    </>
  );
}

export default App;
