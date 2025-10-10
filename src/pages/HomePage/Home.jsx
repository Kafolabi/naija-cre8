import Agenda from "./Agenda";
import Features from "./Features";
import MainHome from "./MainHome";
import Characteristics from "./Characteristics";
import Register from "./Register";
import Contact from "./Contact";

function Home() {
  return (
    <>
      <MainHome />
      <Features />
      <Agenda />
      <Characteristics />
      <Register />
      <Contact />
    </>
  );
}

export default Home;
