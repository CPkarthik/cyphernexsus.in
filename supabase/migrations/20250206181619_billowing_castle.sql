/*
  # Initial Schema Setup for Cypher Nexus

  1. New Tables
    - `profiles`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `name` (text)
      - `phone` (text)
      - `occupation` (text)
      - `organization` (text)
      - `role` (text)
      - `created_at` (timestamptz)
    
    - `internships`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `domain` (text)
      - `tasks` (jsonb)
      - `price` (numeric)
      - `status` (text)
      - `created_at` (timestamptz)
    
    - `applications`
      - `id` (uuid, primary key)
      - `intern_id` (uuid, references profiles)
      - `internship_id` (uuid, references internships)
      - `domain` (text)
      - `details` (jsonb)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create profiles table
CREATE TABLE profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  name text,
  phone text,
  occupation text,
  organization text,
  role text DEFAULT 'intern' CHECK (role IN ('admin', 'intern')),
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id)
);

-- Create internships table
CREATE TABLE internships (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  domain text NOT NULL,
  tasks jsonb NOT NULL DEFAULT '[]'::jsonb,
  price numeric NOT NULL DEFAULT 0,
  status text DEFAULT 'locked' CHECK (status IN ('locked', 'unlocked')),
  created_at timestamptz DEFAULT now()
);

-- Create applications table
CREATE TABLE applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  intern_id uuid REFERENCES profiles NOT NULL,
  internship_id uuid REFERENCES internships NOT NULL,
  domain text NOT NULL,
  details jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE internships ENABLE ROW LEVEL SECURITY;
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view their own profile"
  ON profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile"
  ON profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

-- Internships policies
CREATE POLICY "Anyone can view internships"
  ON internships
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Admins can manage internships"
  ON internships
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE user_id = auth.uid()
      AND role = 'admin'
    )
  );

-- Applications policies
CREATE POLICY "Users can view their own applications"
  ON applications
  FOR SELECT
  TO authenticated
  USING (
    intern_id IN (
      SELECT id FROM profiles
      WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Users can create applications"
  ON applications
  FOR INSERT
  TO authenticated
  WITH CHECK (
    intern_id IN (
      SELECT id FROM profiles
      WHERE user_id = auth.uid()
    )
  );