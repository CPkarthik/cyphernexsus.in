import React from 'react';
import { BookOpen, CheckCircle, Lock } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import { Link } from 'react-router-dom';

export function LearningHub() {
  const { user } = useAuthStore();

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Access Denied
          </h2>
          <p className="text-gray-600 mb-6">
            Please sign in to access the Learning Hub.
          </p>
          <Link
            to="/secure-access-portal"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Sign In
          </Link>
        </div>
      </div>
    );
  }

  const modules = [
    {
      title: 'Introduction to Cybersecurity',
      description: 'Learn the fundamentals of cybersecurity and basic concepts.',
      progress: 100,
      status: 'completed',
    },
    {
      title: 'Network Security',
      description: 'Understanding network protocols and security measures.',
      progress: 60,
      status: 'in-progress',
    },
    {
      title: 'Web Application Security',
      description: 'Learn about common web vulnerabilities and how to prevent them.',
      progress: 0,
      status: 'locked',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Learning Hub</h1>
          <p className="mt-2 text-gray-600">
            Track your progress and access your learning materials.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <div className="flex items-start justify-between mb-4">
                {module.status === 'completed' ? (
                  <CheckCircle className="w-6 h-6 text-green-500" />
                ) : module.status === 'locked' ? (
                  <Lock className="w-6 h-6 text-gray-400" />
                ) : (
                  <BookOpen className="w-6 h-6 text-blue-600" />
                )}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {module.title}
              </h3>
              <p className="text-gray-600 mb-4">{module.description}</p>

              {module.status !== 'locked' && (
                <div className="mb-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${module.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    {module.progress}% Complete
                  </p>
                </div>
              )}

              <button
                className={`w-full py-2 px-4 rounded-md ${
                  module.status === 'locked'
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                } transition-colors`}
                disabled={module.status === 'locked'}
              >
                {module.status === 'completed'
                  ? 'Review'
                  : module.status === 'locked'
                  ? 'Locked'
                  : 'Continue'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}