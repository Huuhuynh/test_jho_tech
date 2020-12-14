import logo from './logo.svg';
import './App.css';
import Sidebar from './containers/sidebar';
import Section from './containers/section';
import Footer from './containers/footer';
import Header from './containers/header';
import ButtonBox from './components/buttonBoxs';
import BoxDate from './components/boxDate';
import Advertisement from './containers/advertisement';
import icon_price_table from './components/icons/icon_price_table.png'
import icon_chart from './components/icons/icon_chart.png'
import icon_news from './components/icons/icon_news.png'
import icon_media from './components/icons/icon_media.png'

const dataIcon = [
  {
    name: icon_price_table,
    text: 'Bảng giá'
  },
  {
    name: icon_chart,
    text: 'Biểu đồ'
  },
  {
    name: icon_news,
    text: 'Tin tức'
  },
  {
    name: icon_media,
    text: 'Media'
  }
]

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
      <div style={{ flexDirection: 'row', display: 'flex' }}>
        {dataIcon.map((item) =>
          <ButtonBox iconName={item?.name} textItem={item?.text} />
        )}
        <BoxDate />
      </div>

    </div>
  );
}

export default App;
