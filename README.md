# Capstone2.5 - Frontend
Political Informant Application - React Front-End

## ToDo:
- List tasks here

## Technical Overview
Front-end of Full-Stack Application using React to create a Single-Page-Application allowing easy access to relevent Congressional Member information.

### Tech Stack
- React
- Redux - store user info if logged in
- React-Bootstrap

Deployed via Netlify: [Political Informant App](https://tranquil-quokka-0aa89d.netlify.app/)

### General Flow
- Front-End will have a nav bar at top + 2 distinct windows
- Nav bar
  - Home link: returns to main state display
  - User link: shows a user page if logged in user
    - User page shows list of all congressional members user is subed to as well as relevant data for each
  - Signup link: if no user logged in, show signup link - shows form to create username + password for app
  - Login/Loggout link: handles user login - shows page to input username/password / handles user loggout - returns to homepage
- Window 1: Search Bar
  - Handles searching for any Congressional Member by name
    - If member name exists: displays Member information page
    - else shows alert saying member not found
- Window 2: Congress Display
  - Shows a collection of states to choose from. When a state is selected the display will update to show all congressional members for that state. It will have an option to return to the state display
  - Once a member is selected, The display will show the selected member's info with an option to return to the member display
    - Will have option for user to subscribe to member if logged in
    
### React Router Schema
T B D
