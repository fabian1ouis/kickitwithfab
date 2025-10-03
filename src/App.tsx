import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import AnimatedCategories from './components/AnimatedCategories';
import AnimatedBlogSection from './components/AnimatedBlogSection';
import AnimatedFooter from './components/AnimatedFooter';
import About from './pages/About';
import Contact from './pages/Contact';
import BlogPost from './pages/BlogPost';
import Admin from './pages/Admin';
import AdminPosts from './pages/AdminPosts';
import FloatingActionButton from './components/FloatingActionButton';

const HomePage: React.FC = () => (
  <>
    <HeroSlider />
    <AnimatedCategories />
    <AnimatedBlogSection />
  </>
);

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Routes>
            {/* Admin Routes */}
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/posts" element={<AdminPosts />} />
            
            {/* Public Routes */}
            <Route path="/*" element={
              <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
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
                <AnimatedFooter />
                <FloatingActionButton />
              </div>
            } />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;