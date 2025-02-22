import Footer from "./components/Footer";
import Header from "./components/Header";
import Screens from "./screens";
import Desert from "@/assets/desert.svg";

function App() {
  return (
    <main className="flex flex-col min-h-svh items-center">
      <Header />
      <div className="w-full max-w-screen-sm flex-1 grid items-center px-4">
        <Screens />
        <span
          className="fixed top-2/3 right-1/2 -translate-y-1/2 z-30 left-1/2"
          id="confettiReward"
        />
      </div>
      <Footer />
      <img
        className="fixed top-0 -translate-x-1/2 -translate-y-1/2 h-2/3 left-1/2 -z-[-1] opacity-10 pointer-events-none"
        src="/bg.svg"
        alt=""
      />
      <img
        className="fixed bottom-0 z-[-1] min-w-[668px] opacity-10 right-0 w-full h-auto object-cover pointer-events-none"
        src={Desert}
        alt=""
      />
    </main>
  );
}

export default App;
