import logo from './logo.svg';
import './App.css';
import Sidebar from './containers/sidebar';
import Section from './containers/section';
import Footer from './containers/footer';
import Header from './containers/header';
import ButtonBox from './components/buttonBoxs';
import Advertisement from './containers/advertisement';

function App() {
  return (
    <div className="sb-nav-fixed">
      <Header />
      <div style={{
        backgroundColor: "#FFFFFF", width: "100%",
        height: 58
      }}></div>
      <div id="layoutSidenav">
        <Sidebar />
        <div id="layoutSidenav_content">
          <Section />
          {/* <Footer /> */}
        </div>
        <Advertisement />
      </div>
      <ButtonBox />
    </div>
  );
}

export default App;
