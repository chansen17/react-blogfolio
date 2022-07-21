import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollTopWidget from './components/ScrollTopWidget';
import ScrollRestore from './components/ScrollRestore';
import { posts } from './data/posts';

import Homepage from './pages/Homepage';
import PostView from './pages/PostView';
import Footer from './components/Footer';
import Projects from './pages/Projects';
import About from './pages/About';
import ProjectView from './pages/ProjectView';

export default function App() {
  return (
    <div className="min-h-screen w-full pt-36">
    <ScrollTopWidget />
    <Router>
      <ScrollRestore />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Homepage posts={posts} />} />
          <Route path="/projects" element={<Projects posts={posts} />} />
          <Route path="/about" element={<About posts={posts} />} />
          <Route path="/post/view/:slug" element={<PostView />} />
          <Route path="/project/view/:slug" element={<ProjectView />} />
        </Routes>
      </main>
    </Router>
    <Footer />
    </div>
  )
}
