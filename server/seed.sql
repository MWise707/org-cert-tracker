INSERT INTO orgs (org_name) VALUES 
  ('army-eod'),
  ('hospital'),
  ('accounting-firm'),
  ('law-firm'),
  ('aviaition-company'),
  ('construction-company');

INSERT INTO branches (branch_name, org_id) VALUES 
  ('707-eod', 1),
  ('787-eod', 1),
  ('757-eod', 1),
  ('759-eod', 1),
  ('734-eod', 1);

INSERT INTO sections (section_name, org_id, branch_id) VALUES 
  ('1st Platoon', 1, 1),
  ('2nd Platoon', 1, 1),
  ('3rd Platoon', 1, 1),
  ('HQ Platoon', 1, 1);

INSERT INTO teams (team_name, org_id, branch_id, section_id) VALUES 
  ('Team 1', 1, 1, 1),
  ('Team 2', 1, 1, 1),
  ('Team 3', 1, 1, 1);

INSERT INTO individuals (ind_name, ind_position, ind_title, org_id, branch_id, section_id, team_id, ind_auth_level) VALUES 
  ('John Doe', 'Team Leader', 'Staff Seargeant', 1, 1, 1, 1, 0),
  ('Jane Doe', 'Team Member', 'Sergeant', 1, 1, 1, 1, 0),
  ('John Smith', 'Team Member', 'Sergeant', 1, 1, 1, 1, 0);

INSERT INTO certifications (cert_name) VALUES 
  ('EOD Team Leader Certified'),
  ('EOD Basic Bdge'),
  ('EOD Senior Bdge'),
  ('EOD Master Bdge');

INSERT INTO cert_tasks (cert_name) VALUES 
  ('EOD-Task 1'),
  ('EOD-Task 2'),
  ('EOD-Task 3'),
  ('EOD-Task 4');

INSERT INTO ind_cert_status (ind_id, cert_id, is_cert_complete, percent_cert_complete) VALUES 
  (1, 1, true, 100),
  (1, 2, true, 100),
  (1, 3, true, 100),
  (1, 4, true, 100),
  (2, 1, true, 100),
  (2, 2, true, 100),
  (2, 3, true, 100),
  (2, 4, true, 100),
  (3, 1, true, 100),
  (3, 2, true, 100),
  (3, 3, true, 100),
  (3, 4, true, 100);

INSERT INTO ind_task_status (cert_task_id, ind_id, is_task_passed, date_last_tested, ind_task_feedback) VALUES 
  (1, true, 1, '2020-01-01', 'Great job!'),
  (2, true, 1, '2020-01-01', 'Great job!'),
  (3, true, 1, '2020-01-01', 'Great job!'),
  (4, true, 1, '2020-01-01', 'Great job!');