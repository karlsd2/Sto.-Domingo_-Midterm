const express = require('express');
const app = express();

app.use(express.json());

//Scenario 1
//Current API
app.post('/api/v1/users', (req, res) => {
    const { username, emailAddress } = req.body;

    const user = {
        id: "101",
        username: username,
        emailAddress: emailAddress
    };

    res.json(user);
});

//Updated API
app.post('/api/v2/users', (req, res) => {
    const { username, emailAddress } = req.body;

    const user = {
        id: "101",
        username: username,
        emailAddress: emailAddress
    };

    res.json(user);
});

//In the updated API, I added a new endpoint “/api/v2/users” to introduce the “email” instead of “emailAddress”. By doing this, the existing API “/api/v1/users” can continue to work without interruption, while the new clients can use the updated API.


//Scenario 2
//Current API
app.get('/api/v1/users/:id', (req, res) => {

    res.json({
        id: req.params.id,
        username: "john"
    });

});

//Updated API
app.get("/api/v2/users/:id", (req, res) => {
    res.json({
        id: req.params.id,
        username: "john",
        profilePicture: "https://example.com/images/john.jpg"
    });
});

//In the updated API, I added a new endpoint “/api/v2/users” to allow the API to clearly support the response while ensuring that existing clients using “/api/v1/users” will continue to work.

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});