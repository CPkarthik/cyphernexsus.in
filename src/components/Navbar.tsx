import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, BookOpen, Users, Mail, Briefcase } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

export function Navbar() {
  const { user, signOut } = useAuthStore();

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold">Cypher Nexus</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link
                to="/our-expertise"
                className="flex items-center space-x-1 hover:text-blue-400 transition-colors"
              >
                <BookOpen className="h-4 w-4" />
                <span>Services</span>
              </Link>

              <Link
                to="/opportunity-nexus"
                className="flex items-center space-x-1 hover:text-blue-400 transition-colors"
              >
                <Users className="h-4 w-4" />
                <span>Internships</span>
              </Link>

              <Link
                to="/join-the-mission"
                className="flex items-center space-x-1 hover:text-blue-400 transition-colors"
              >
                <Briefcase className="h-4 w-4" />
                <span>Careers</span>
              </Link>

              <Link
                to="/connect-with-us"
                className="flex items-center space-x-1 hover:text-blue-400 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>Contact</span>
              </Link>

              {user ? (
                <>
                  <Link
                    to="/learning-hub"
                    className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Learning Hub
                  </Link>
                  <button
                    onClick={() => signOut()}
                    className="text-red-400 hover:text-red-500 transition-colors"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <Link
                  to="/secure-access-portal"
                  className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}