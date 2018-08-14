/**
 * The objective of this API is provide controlling about pre-defined rules
 * for this context, we're not concerned about origin of the data. Because of this, 
 * we're using a customer.json
 * Furthermore, we're indending to provide controller of this features:
 * - control about authentication token (with expiration time)
 * - control about authorization, through rules
 * Both of the features above were configured inside Auth0
 */

const express = require('express')
const app = express()
const jwt = require('express-jwt')
const jwks = require('jwks-rsa')
const jwtAuthz = require('express-jwt-authz');
const fs = require('fs')

const port = process.env.PORT || 8080

//using a middleware to validate JWT token
const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: "https://fabioono25.auth0.com/.well-known/jwks.json"
    }),
    audience: 'http://api.example.com/customer',
    issuer: "https://fabioono25.auth0.com/",
    algorithms: ['RS256']
})

app.use(jwtCheck)

//an API with no authentication/authorization feature
app.get('/authorized', (req, res) => { 
    res.send('Secured Resource')
})

//get the normal customers (rule used for all users)
app.get('/customers', jwtCheck, jwtAuthz(['read:customers']), (req, res) => {
    fs.readFile('customers.json', 'utf8', function (err, data) {
        if (err) throw err; // we'll not consider error handling for now
        const obj = JSON.parse(data);
        obj.customers.filter(e => e.status !== 'hot')
    });
})

//get the hot customers (rule used for one specific user)
app.get('/hotcustomers', jwtCheck, jwtAuthz(['read:hot-customers']), (req, res) => {
    fs.readFile('customers.json', 'utf8', function (err, data) {
        if (err) throw err; // we'll not consider error handling for now
        const obj = JSON.parse(data);
        obj.customers.filter(e => e.status === 'hot')
    });
})

app.listen(port)