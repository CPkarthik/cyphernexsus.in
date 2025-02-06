import React from 'react';
import { BookOpen, Shield, Code, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Internships() {
  const internships = [
    {
      icon: Shield,
      title: 'Security Operations',
      description: 'Learn to monitor, detect, and respond to security threats in real-time.',
      duration: '12 weeks',
      price: '₹1199',
    },
    {
      icon: Code,
      title: 'Secure Development',
      description: 'Master secure coding practices and application security testing.',
      duration: '10 weeks',
      price: '₹999',
    },
    {
      icon: Database,
      title: 'Digital Forensics',
      description: 'Investigate cyber incidents and perform detailed forensic analysis.',
      duration: '8 weeks',
      price: '₹799',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Internship Programs
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Gain hands-on experience in cybersecurity through our structured
            internship programs. Learn from industry experts and build your career.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {internships.map((internship, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-8 flex flex-col"
            >
              <internship.icon className="w-12 h-12 text-blue-600 mb-6" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {internship.title}
              </h2>
              <p className="text-gray-600 mb-6 flex-grow">
                {internship.description}
              </p>
              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-semibold">{internship.duration}</span>
                </div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-gray-600">Price:</span>
                  <span className="font-semibold">{internship.price}</span>
                </div>
                <Link
                  to="/secure-access-portal"
                  className="block w-full bg-blue-600 text-white text-center py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why Choose Our Internships?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Practical Experience
              </h3>
              <p className="text-gray-600">
                Work on real-world projects and gain hands-on experience in
                cybersecurity.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Expert Mentorship
              </h3>
              <p className="text-gray-600">
                Learn directly from industry professionals with years of experience.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Career Support
              </h3>
              <p className="text-gray-600">
                Get guidance on career paths and job opportunities in cybersecurity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}