# team-23
Social Good Organization : The Nudge Foundation

## Frontend
Tech Stack: ReactJS, Redux, Bootstrap
Procedure to run the react server:  
``cd frontend/thenudge``  
``yarn install``  
``Replace API link in file serverLink.j``  
``yarn start``.  
  
  Project Structure  
  src  
    -components  
    -pages  
    -{config and common files}
  public
    -public and static files
    
    
  Major Modules  
    1. Personalized DashBoard for Students Admin Recruiters Trainer  
    2. User State and Batch State Persistence for Users using Redux  
    3. Allotment of Slots by the Admin  
    4. Job Portal Accesible to the all the Users and actions available as per role  
    5. Students are able to access the system and choose the slot of their choosing.
  
## Backend
Tech Stack: NodeJS, Express, MongoDB
Procedure to run the node server:  
``cd backend``  
``npm install``  
``node app.js``.  
  
  Project Structure  
  models - This contains the Database Schema Files for the Current Application
  routes - This contains all the API routes which can be called from frontend to fetch the required data.
  app.js - This is the main starting point of the server and is runned on the 3000 port.
    
    
  Major Modules  
    1. Having a Common Login and Registration modules for all the entities(Student, Teacher, Admin, Recruiter) 
    2. Having different routes for each entity, which helps in identifying the functionalities related to that Entity.
    3. Automatic Allotment of the Teachers to the Batches  
    4. Having a Single portal for both Training and Placement Procedure
    5. Students alloted to the batches based on First Come first Serve Basis
  
This file will be giving a summary to our project for CFG 2020.
