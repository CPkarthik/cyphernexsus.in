import React from 'react';
import { Shield, Code, Lock, Database } from 'lucide-react';

export function Services() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Expertise</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-16">
            We offer comprehensive cybersecurity services and training programs to help
            organizations and individuals build strong security foundations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <Shield className="w-12 h-12 text-blue-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Security Assessment
            </h2>
            <p className="text-gray-600 mb-4">
              Comprehensive evaluation of your systems and infrastructure to identify
              vulnerabilities and potential security risks.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Penetration Testing</li>
              <li>• Vulnerability Assessment</li>
              <li>• Security Architecture Review</li>
              <li>• Risk Analysis</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <Code className="w-12 h-12 text-blue-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Secure Development
            </h2>
            <p className="text-gray-600 mb-4">
              Implementation of secure coding practices and security-first development
              methodologies.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Secure Code Review</li>
              <li>• Security Testing</li>
              <li>• DevSecOps Integration</li>
              <li>• Security Training for Developers</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <Lock className="w-12 h-12 text-blue-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Incident Response
            </h2>
            <p className="text-gray-600 mb-4">
              Rapid response and recovery services for security incidents and breaches.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• 24/7 Incident Response</li>
              <li>• Malware Analysis</li>
              <li>• Forensic Investigation</li>
              <li>• Recovery Planning</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <Database className="w-12 h-12 text-blue-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Security Training
            </h2>
            <p className="text-gray-600 mb-4">
              Comprehensive security training programs for organizations and individuals.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Security Awareness Training</li>
              <li>• Technical Security Workshops</li>
              <li>• Customized Training Programs</li>
              <li>• Certification Preparation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}