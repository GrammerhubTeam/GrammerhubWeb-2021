// import Header from "../components/Header";
import HeaderNavbar from "../components/Navbar/HeaderNavbar";
import Footer from "../components/Footer/Footer";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD",
};

const Layout = (props) => (
  <div style={layoutStyle}>
    <HeaderNavbar />
    {/* <Header /> */}
    {props.children}
    <Footer />
  </div>
);

export default Layout;
