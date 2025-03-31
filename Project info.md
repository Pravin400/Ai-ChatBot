before starting we need to create an project

    -initially we create and api key of an gemini to acces the some service of the that 
    API key is used to keep track of the request and response 
    
    -APIs use keys to track how many requests are being made.

    -An API key is a unique identifier used to authenticate and authorize requests made to an API. It helps control access, improve security, and monitor usage.

**1. command :-**
    **npm init -y**

    - this command creates the package.json .
    - for that need to choose path of the backend folder .
    - and write this command in backend folder so this adds the package.json file .
    - need a package.json file to manage dependencies, scripts, and configurations.
    - npm init -y this '-y' helps to setup project without answering questions .

**2. Create the index.js file to write the server code** 

**3. Then install express using command**

    **npm i express**

    -Express.js is a fast, lightweight, and flexible web framework for Node.js. It simplifies building web applications and APIs.
    -Without Express, handling HTTP requests in pure Node.js is more complex.

**Note: when once server is start is never stop till we not stop it (command node./index.js)**

    -after stating the backend so it shows the output on port 3000


***for using the services of the google gemini we install the google library***
write command on the backend cmd
    npm i @google/generative-ai