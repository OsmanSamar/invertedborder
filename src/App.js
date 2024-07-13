import ContentSection from "./component/ContentSection";
import Footer from "./component/Footer";
// import Inverted from "./component/Inverted";
import Navbar from "./component/Navbar";
import ProcessIAction from "./component/ProcessIAction";
import TableHeader from "./component/TableHeader";
import Testimonils from "./component/Testimonils";

function App() {
  return (
    <>
      <Navbar />
      <TableHeader />
      <div className="w-full bg-[#061130] py-10">
        <ContentSection />
      </div>
      <Testimonils />
      <ProcessIAction />
      <div
        className="w-full px-0 lg:px-5 2xl:px-40 py-10 lg:py-0 
       bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#05174e] to-[#030a1c] "
      >
        <Footer />
      </div>
    </>
  );
}

export default App;
