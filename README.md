# BookStoreAngularWebApp
# How to run this Project:

# Setting up the DB
Use Azure Data Studio to check the db structure.

## Connecting in Azure Data Studio:
--> New Connection, then type:

    Connection Type: 
    Microsoft SQL Server
    Server = localhost, 1433
    Auth type = SQL login
    user = sa
    Password = Password_2_Change_4_Real_Cases_&

    rest things :) = Default
    
## Getting Started
  ### 0. Requirements
  You'll need to have installed:
  #### .Net
  ```bash
  .NET 6.0 or higher
  ```
  To check your .NET version you can run:
  ```bash
  dotnet --list-sdks
  ```
  <br />
   ###  Clone the github project
  To Get Started, clone the github project to your own machine
  ```bash
  git clone https://github.com/Qaisarm/BookStoreAngularWebApp.git
  ```
  Inside the BookStore.UI folder, run:
  ```bash
  dotnet restore
```
 ## Setting Up Entity Framework
  Now that you have a Database Server setted up, you need to add the tables to the Database.
  First make sure that you have *.NET Entity Framework tools* installed.
  ```bash
  dotnet tool install --global dotnet-ef
  ```
  Verify that it has been installed correctly by running
  ```bash
  dotnet ef
  ```
  You should get something that looks like this:
  ```bash
  _/\__
               ---==/    \\
         ___  ___   |.    \|\
        | __|| __|  |  )   \\\
        | _| | _|   \_/ |  //|\\
        |___||_|       /   \\\/\\

Entity Framework Core .NET Command-line Tools 2.1.3-rtm-32065

<Usage documentation follows, not shown.>

  ```
  Now that you have installed this tool, you need to create a migration by running:
  *Note: You´ll have to run this next two commands everytime you change a model to update the database.
  ```bash
  dotnet ef migrations add InitialMigration
  ```
 Now that you have a migration file, update the database.
   ```bash
    dotnet ef database update
```
###  Setting Up Front End
On the client folder, make sure that you have installed all the modules needed:
 ```bash
  npm install
  ```

Lastly to start the front end server, run:
 ```bash
  ng serve --o
  ```
so the angular front end will be running and can be tested

