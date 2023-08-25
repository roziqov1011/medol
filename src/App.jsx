import './App.scss';
import Company from './components/Company/Company';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Production from './components/Production/Production';
import Services from './components/Services/Services';

function App() {
  return (
      <>
      <Header/>
      <Hero/>
      <Production/>
      <Services/>
      <Company/>
      </>
  );
}

export default App;
