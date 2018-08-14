# SPA + API + Auth0

The objective is provide an example about how to use a solution provided by a SPA Page (constructed with Angular4) + REST API (using Node.js). For the entire process of authentication and authorization, we'll use [Auth0](https://auth0.com), that provides these features as services.

There are three steps to configure this solution:

### STEP 1: Auth0 Configuration

In your Auth0 Dashboard, you'll create a new API:


![](https://github.com/fabioono25/spa_api_auth0/blob/master/images/API.PNG){ width=50% }
![](https://github.com/fabioono25/spa_api_auth0/blob/master/images/api2.PNG)
![](https://github.com/fabioono25/spa_api_auth0/blob/master/images/api_scopes.PNG)
![](https://github.com/fabioono25/spa_api_auth0/blob/master/images/rules.PNG)
![](https://github.com/fabioono25/spa_api_auth0/blob/master/images/token.PNG)


Inside the API configuration, there's a Token Expiration, where you can configure the expiration of your token, as the expiration for browser flows.

When you configure the API, you have access to Test link with a token generation. With this token, we can use to call the API, using header Authorization (Bearer)

Now, you'll create an Empty Rule, like this

Users

### STEP 2: API Configuration

### STEP 3: SPA Configuration
