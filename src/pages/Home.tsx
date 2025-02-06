import React from 'react';
import { Shield, Lock, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
            alt="Cybersecurity"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Secure Your Future in Cybersecurity
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Join Cypher Nexus to master the art of cybersecurity through hands-on
            internships and expert mentorship.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/opportunity-nexus"
              className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              Explore Internships
            </Link>
            <Link
              to="/connect-with-us"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-gray-900 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Training</h3>
              <p className="text-gray-600">
                Learn from industry professionals with real-world experience
              </p>
            </div>
            <div className="text-center p-6">
              <Lock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Practical Skills</h3>
              <p className="text-gray-600">
                Hands-on experience with the latest security tools and techniques
              </p>
            </div>
            <div className="text-center p-6">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">
                Join a network of cybersecurity professionals and enthusiasts
              </p>
            </div>
            <div className="text-center p-6">
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Certification</h3>
              <p className="text-gray-600">
                Earn recognized certificates upon program completion
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}