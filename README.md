# Capstone2.5 - Frontend
Political Informant Application - React Front-End - Mobile-First UI Structure

### Use-case and audiance
Responsive, intuitive web app built primarily for use on a smartphone or other hand-held device. Single-Page-Application allowing easy access to relevent Congressional Member information. Simplifying the way we understand how our Politians represent us. Capstone includes congressional member lookup for most recent congress + user login to store subscribed members for quick lookup. Anyone wanting to have a quick informational lookup of US Congress Members would enjoy using this app.

## ToDo:
- Write out Routes for app
- Setup ENV + API requests
  - API Routes created
  - ENV variable for baseURL needed on Netlify
- Design base app container
- Flesh out components

## Technical Overview
Front-end of Full-Stack Application using React to create a 

### Tech Stack
- React
- React-Bootstrap

Deployed via Netlify: [Political Informant App](https://tranquil-quokka-0aa89d.netlify.app/)

## General Flow
Front-End will have a nav bar at top + 2(3) distinct windows
### Nav bar
  - Home link: returns to main state display
  - Subs link: Only displays if user logged in - redirects to subs page
    - Subs page shows list of all congressional members user is subed to as well as relevant data for each
  - Signup link: if no user logged in, show signup link - shows form to create username + password for app
  - Login/Logout link: 
    - Login: shows page to input username/password - Returns to homepage
    - Logout: only shows if user logged in - redirects to Homepage + discards user data + jwt token
  - Light / Dark mode toggle
    - toggles between two main styles for app
------
### Window 1: Member Display
  - Initially not displayed on app load. Gradual fade transition with Congress Display slide transition.
  - Updates on successful search OR Congress Display selects a different member. Fade In/Out transition.
  - Shows basic stats + photo
  - allow for a user to sub
    - if logged in, show sub button
    - if no user, show message "Login to sub to [member name]"
 ------
 ### Window 2: Congress Display
  - Shows a collection of states to choose from. 
  - When a state is selected the display will update to show all congressional members for that state. 
    - It will have an option to return to the state display
  - Transitions in/out between states / members / other displays
  - Once a member is selected, it will trigger the Member Display Window to show/update
    - Slide transition down to make room for Member Display.
    - Will have option for user to subscribe to member if logged in
------

clicking on the Subs Link will route to the "/subs" route and will display a different Window
### Subbed Member Display
  - Renders a Member Display for each subbed member of user
  - Only available if user is loged in, otherwise it is disabled and an alert will be shown to the user
-----

clicking on the Signup Link / Login Link will route to the /signup or /login route. Both will display the a form
  - /signup will ask for username and password twice to ensure accuracy
  - /login will ask for username and password
    
## React Router Schema
- "/"
  - NavBar
  - CongressDisplay
- "/:memberID"
  - NavBar
  - MemberDisplay - Rendered via Outlet
  - CongressDisplay
- "/subs"
  - NavBar
  - SubbedMemberDisplay

## Stretch Goals
### Search Bar
Window 0: Search Bar
  - Renders between Nav bar and Member Display
  - Handles searching for any Congressional Member by name
    - If member name exists: displays Member information page
    - If multiple matches:
      - Show matching members in groups of states 
    - search button icon changes from magnifying glass <--> loading circle 
      - On success turns green before fading to default
      - On failure turns red before fading to default
    - else shows alert saying member not found
  - Requires
    - Backend work
