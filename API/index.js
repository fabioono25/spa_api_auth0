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

     //Read JSON from relative path of this file
     fs.readFile('customers.json' , 'utf8', (err, data) => {
         //Handle Error
        if(!err) {
          //Handle Success
           console.log("Success"+data);
          // Parse Data to JSON and Filter different from hot
           var jsonObj = JSON.parse(data)
           const ret = jsonObj.customers.filter(e => e.status !== 'hot')
          //Send back as Response
           res.end(JSON.stringify(ret))
         }else {
            //Handle Error
            res.end("Error: "+err )
         }
    })    
})

//get the hot customers (rule used for one specific user)
app.get('/hotcustomers', jwtCheck, jwtAuthz(['read:hot-customers']), (req, res) => {
    
     //Read JSON from relative path of this file
     fs.readFile('customers.json' , 'utf8', (err, data) => {
        //Handle Error
       if(!err) {
         //Handle Success
          console.log("Success"+data)
         // Parse Data to JSON and Filter equals hot
          var jsonObj = JSON.parse(data)
          const ret = jsonObj.customers.filter(e => e.status === 'hot')
         //Send back as Response
          res.end(JSON.stringify(ret))
        }else {
           //Handle Error
           res.end("Error: "+err )
        }
   })
})

app.listen(port)