
# Netflix Gpt
- create React App
- Configured Tailwind
- Header
- Login form
- Routing
- sign in form
- form validation
- useRef hook
- firebase setup
- crate signup  user account   
- implement sign in user api
- created redux store with userSlice
- Implemented Sign Out
- Update Profile
- BugFix : Sign up user displayName and profile picture update
- Bugfix : If the user is not logged in Redrict /browse to Login and vice versa
- Unsubscribe to the onAuthStateChanged callback
- Add hardcoded values to the constants files

# for form where large number of fields than use "formik.org library"
# regex for email and password validation
# features
    -Login and signup
      - Singn In /Signup PAGE
      - REDIRECT TO BROWSER PAGE

    -Browse(after authentication)
      -Headers
      -MainMovies
          -Trailers
          -Title and Description
          - Movies sugghestion
            - MoviesList *N
         

    -NetflixGpt
      -searchbar
      -Movie suggestions

# Firebase setup
  - after setup you go on web => 
# Manage user (show the user name)
  - with the help of manage user  and in manage user we go to the update a user profile 
# Optional chaining (?.) -> when we try to access the any object must use the optional channing , it reduces the error .

// Problem
  1- if a user not logged in then it does't go to any page just writing the path
  2- when a user is logged in then it goes on the browse page but after 

// Todo:
  => Always use strings in one file you can exports those strings use way.
  => Always use const with strings.