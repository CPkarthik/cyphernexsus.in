import React from 'react';
import { Briefcase, Users, Award, Rocket } from 'lucide-react';

export function Careers() {
  const jobs = [
    {
      title: 'Senior Security Engineer',
      department: 'Security Operations',
      location: 'Remote',
      type: 'Full-time',
    },
    {
      title: 'Security Researcher',
      department: 'Research & Development',
      location: 'Remote',
      type: 'Full-time',
    },
    {
      title: 'Security Training Specialist',
      department: 'Education',
      location: 'Hybrid',
      type: 'Full-time',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Join Our Mission
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Be part of a team that's shaping the future of cybersecurity. We're
            always looking for talented individuals to join our mission.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Briefcase className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Meaningful Work</h2>
            <p className="text-gray-600">
              Make a real impact in the cybersecurity landscape
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Great Team</h2>
            <p className="text-gray-600">
              Work with passionate and talented professionals
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Growth</h2>
            <p className="text-gray-600">
              Continuous learning and career development
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Rocket className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Innovation</h2>
            <p className="text-gray-600">
              Work with cutting-edge security technologies
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-8">Open Positions</h2>
          <div className="space-y-6">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="border-b border-gray-200 last:border-0 pb-6 last:pb-0"
              >
                <div className="flex flex-wrap justify-between items-start gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {job.title}
                    </h3>
                    <div className="space-y-1">
                      <p className="text-gray-600">
                        Department: {job.department}
                      </p>
                      <p className="text-gray-600">Location: {job.location}</p>
                      <p className="text-gray-600">Type: {job.type}</p>
                    </div>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}