import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Internships } from './pages/Internships';
import { Contact } from './pages/Contact';
import { Careers } from './pages/Careers';
import { Auth } from './pages/Auth';
import { LearningHub } from './pages/LearningHub';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-expertise" element={<Services />} />
            <Route path="/opportunity-nexus" element={<Internships />} />
            <Route path="/connect-with-us" element={<Contact />} />
            <Route path="/join-the-mission" element={<Careers />} />
            <Route path="/secure-access-portal" element={<Auth />} />
            <Route path="/learning-hub" element={<LearningHub />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;