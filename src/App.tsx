import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ExploreDishes from "./components/ExploreDishes";
import DownloadSection from "./components/DownloadSection";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

function App() {
  const path = typeof window !== "undefined" ? window.location.pathname : "/";
  const isRoot = path === "/" || path === "";

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {isRoot ? (
          <>
            <HeroSection />
            <ExploreDishes />
            <DownloadSection />
          </>
        ) : (
          <NotFound />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
