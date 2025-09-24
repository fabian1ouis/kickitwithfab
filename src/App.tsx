import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import BlogPost from './pages/BlogPost';

const HomePage: React.FC = () => (
  <>
    <Hero />
    <Categories />
    <BlogSection />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/categories" element={<HomePage />} />
            <Route path="/blog" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;