import ContentSection from "./component/ContentSection";
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
      {/* <Inverted /> */}
    </>
  );
}

export default App;
