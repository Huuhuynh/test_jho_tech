import logo from './logo.svg';
import './App.css';
import Sidebar from './containers/sidebar';
import Section from './containers/section';
import Footer from './containers/footer';
import Header from './containers/header';

function App() {
  return (
    <div className="sb-nav-fixed">
      <Header/>
      <Header/>

      <div id="layoutSidenav">
        <Sidebar/>
        <div id="layoutSidenav_content">
          <main>
          </main>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
