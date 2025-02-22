import Footer from "./components/Footer";
import Header from "./components/Header";
import Screens from "./screens";

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
    </main>
  );
}

export default App;
