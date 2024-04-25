-- Create All Tables for certi-trax db 

DROP TABLE IF EXISTS orgs CASCADE;
DROP TABLE IF EXISTS branches CASCADE;
DROP TABLE IF EXISTS sections CASCADE;
DROP TABLE IF EXISTS teams CASCADE;
DROP TABLE IF EXISTS individuals CASCADE;
DROP TABLE IF EXISTS ind_cert_status CASCADE;
DROP TABLE IF EXISTS ind_task_status CASCADE;
DROP TABLE IF EXISTS certifications CASCADE;
DROP TABLE IF EXISTS cert_tasks CASCADE;

CREATE TABLE orgs (
  org_id serial PRIMARY KEY,
  org_name varchar
);

CREATE TABLE branches (
  branch_id serial PRIMARY KEY,
  branch_name varchar,
  org_id integer REFERENCES orgs (org_id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE sections (
  section_id serial PRIMARY KEY,
  section_name varchar,
  org_id integer REFERENCES orgs (org_id) ON UPDATE CASCADE ON DELETE CASCADE,
  branch_id integer REFERENCES branches (branch_id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE teams (
  team_id serial PRIMARY KEY,
  team_name varchar,
  org_id integer REFERENCES orgs (org_id) ON UPDATE CASCADE ON DELETE CASCADE,
  branch_id integer REFERENCES branches (branch_id) ON UPDATE CASCADE ON DELETE CASCADE,
  section_id integer REFERENCES sections (section_id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE individuals (
  ind_id serial PRIMARY KEY,
  ind_name varchar,
  ind_position varchar,
  ind_title varchar,
  org_id integer REFERENCES orgs (org_id) ON UPDATE CASCADE ON DELETE CASCADE,
  branch_id integer REFERENCES branches (branch_id) ON UPDATE CASCADE ON DELETE CASCADE,
  section_id integer REFERENCES sections (section_id) ON UPDATE CASCADE ON DELETE CASCADE,
  team_id integer REFERENCES teams (team_id) ON UPDATE CASCADE ON DELETE CASCADE,
  ind_auth_level integer DEFAULT 0 NOT NULL CHECK (ind_auth_level >= 0 AND ind_auth_level <= 5)
);

CREATE TABLE certifications (
  cert_id serial PRIMARY KEY,
  cert_name varchar
);

CREATE TABLE cert_tasks (
  cert_task_id serial PRIMARY KEY,
  cert_name varchar
);

CREATE TABLE ind_cert_status (
  ind_cert_status_id serial PRIMARY KEY,
  ind_id integer REFERENCES individuals (ind_id) ON UPDATE CASCADE ON DELETE CASCADE,
  cert_id integer REFERENCES certifications (cert_id) ON UPDATE CASCADE ON DELETE CASCADE,
  is_cert_complete boolean,
  percent_cert_complete numeric(3, 2)
);

CREATE TABLE ind_task_status (
  ind_task_status_id serial PRIMARY KEY,
  cert_task_id integer REFERENCES cert_tasks (cert_task_id) ON UPDATE CASCADE ON DELETE CASCADE,
  ind_id integer REFERENCES individuals (ind_id) ON UPDATE CASCADE ON DELETE CASCADE,
  is_task_passed boolean,
  date_last_tested date,
  ind_task_feedback text
);

