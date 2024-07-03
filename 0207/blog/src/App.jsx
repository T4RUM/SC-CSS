import Navbar from "./components/Navbar/Navbar";
import BlogContent from "./components/BlogContent/BlogContent";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />

      <div className="containerBlog">
        <BlogContent />
        <BlogContent />
        <BlogContent />
        <BlogContent />
        <BlogContent />
        <BlogContent />
      </div>
      <div className="container-footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
