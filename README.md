# Authentication_Assignment
For Client-Side

Created A table of User details wherein added a customers table and roles table in DB. Customer table columns - name, website, address. Role columns - name, key (must be from enum), description. Each user can belong to one customer and have one role and have Shown customer name and role name for each user in UI using angular(replacing TypeScript) Also, Add a new page to UI - Customers. Implement CRUD for customers in UI and integrate with API. There should be a button against each customer entry in UI saying "Show Users". Clicking on that should show users associated with that customer. One can perform CRUD for users from this page.

For BackEnd-Side

Implemented the previous API application(NodeJS and Postgres) by replacing it with Loopback 4 keeping the functionalities same.

HOW TO RUN

1.For BackEnd-Side

Inside folder 'server-side' run npm install npm start

2.Client-Side Inside folder 'client-side' run npm install ng serve

Run client on http://localhost:4200.

Server is available @ http://localhost:3000.
