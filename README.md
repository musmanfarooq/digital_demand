# Digital Demand Dashboard
## Getting Started
* Git
* Node js v18+
* Visual Studio Code or any other IDE

## Project Setup
1. Clone this project [https://github.com/musmanfarooq/digital_demand.git](https://github.com/musmanfarooq/digital_demand.git)
2. Open the workspace from the VS Code
   * Click on Files
   * Click on Open Workspace form files
   * And choose digital-dashboard. code.workspace files present in the root
3. Navigate to the client folder by selecting it from the terminal to run this command in the terminal
  ```bash
  cd client
  ```
4. Install dependencies
  ```bash
  npm install 
  ```
5. Now navigate to the server folder by using the VS Code terminal or use this 
  ```bash
  cd server
  ```
6. Install dependencies
  ```bash
  npm install 
  ```
7. Environment Variables
   * In server folder create a ```.env ``` file and paste these
  ```bash
  PORT = 8080 
  LocalUrl = 

  #ENV FOR MYSQL DATABASE CONNECTION

  USERNAME = 
  PASSWORD = 
  DATABASE = 
  SQLPORT = 

  ```
 * In client folder create a ```.env.local``` file and paste these 
  ```bash
  NEXT_PUBLIC_API_URL = "http://localhost:8080/"

  ```

7. Setting up DataBase
  * MySQL is needed for the Database
  * Fill the Following fields in the ```.env``` file according to your MySQL
  ```bash

  USERNAME = 
  PASSWORD = 
  DATABASE = 
  SQLPORT = 

  ```
  * Run the command to setup the Database
    ```bash
    npm run migrate
    ```
## Project Startup
1. Use the following command to run the client folder
   ```bash
   npm run dev
   ```
   * Create a new account from the dashboard
2. Use these commands in the server folder to run the server
   ```bash
   npm run build
   npm run dev
   ```
