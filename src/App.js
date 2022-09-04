import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import CompanyUsers from './components/CompanyUsers/CompanyUsers';
import Rewards from './components/Rewards/Rewards';
import Payouts from './components/Payouts/Payouts';
import BetterDeal from './components/BetterDeal/BetterDeal';
import Coins from './components/Coins/Coins';
import Reviews from './components/Reviews/Reviews';
import Service from './components/Service/Service';
import Footer from './components/Footer/Footer';



function App() {
  return (
   <div>
      <Header />
      <Hero />
      <CompanyUsers />
      <Rewards />
      <Payouts />
      <BetterDeal />
      <Reviews />
      <Coins />
      <Service />
      <Footer />
   </div>
  );
}

export default App;

 