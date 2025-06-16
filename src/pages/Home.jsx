import SideNavMenu from "../components/side-nav-menu/SideNavMenu";
import TextReveal from "../components/text-reveal/TextReveal";
// import ScrollToTopButton from "../components/scroll-button/ScrollToTopButton";

const Home = () => (
  <section className="home" id="home">
    <TextReveal />
    <SideNavMenu />
    {/* <ScrollToTopButton /> */}
  </section>
);

export default Home;
