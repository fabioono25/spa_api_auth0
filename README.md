# SPA + API + Auth0

The objective is provide an example about how to use a solution provided by a SPA Page (constructed with AngularJS) + REST API (using Node.js). For the entire process of authentication and authorization, we'll use [Auth0](https://auth0.com), that provides these features as services. The origem of data isn't the fundamental thing here, so we focused in authentication, authorization and features related to controlling of rules.

You can see in action here: https://youtu.be/RZxmlw1Bb2E

After cloning the solution, run these steps:

1º Go to directory API, open a command prompt and run the command (start de API):

```sh
node server or

nodemon server

as you wish ;p
```

2º Go to directory SPA, open a new command prompt and run the command (start de SPA):

```sh
node index or

nodemon index

as you wish ;p
```

3º Open the address http://localhost:3000/ in the browser and enjoy the ride!

user: fabioono25@gmail.com
password: admin123
access: both for basic customers and hot customers

user: ono.job@gmail.com
password: user123
access: only for basic customers

### Auth0 Configuration

Definition of the scopes in Auth0:
![](https://github.com/fabioono25/spa_api_auth0/blob/master/images/api_scopes.PNG)

Rules configuration inside Auth0:
![](https://github.com/fabioono25/spa_api_auth0/blob/master/images/rules.PNG)

Defining the rules inside API:
![](https://github.com/fabioono25/spa_api_auth0/blob/master/images/rules2.PNG)

Token expired:
![](https://github.com/fabioono25/spa_api_auth0/blob/master/images/postman2.PNG)

Return ok (token valid):
![](https://github.com/fabioono25/spa_api_auth0/blob/master/images/postman3.PNG)


### Walking Through the Pages (Video)

https://youtu.be/RZxmlw1Bb2E
