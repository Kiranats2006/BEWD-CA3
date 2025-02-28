# BEWD-CA3

## Authentication system for employee portal

### installation and setting it up
please type in `npm i` before you run the project

### running the project:
use `node index.js` or `nodemon index.js` to run the server

### Testing on POSTMAN
- For the login route testing:
        
        POST: http://localhost:8080/login
        BODY(raw):    
                    {
                    "id":"E12345",
                    "password": "securePass"
                    } 
- For the dashboard route testing:
        
        GET: http://localhost:8080/dashboard
        Authorization: 'Auth type' and enter the valid token recieved  from the post route.