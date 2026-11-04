const express = require('express');
const { createClient } = require('redis');
const app = express();
const port = 3000;
const client = createClient();

app.get('/', (req, res) => {
  res.send('Hello World!')
})


//message structure

{
 message:"example"
}

app.post('/addToRedis', async (req, res) => {
    console.log(req);
    await client.connect();
    await client.set('message', req.body.message);
    await client.disconnect();


    res.status(200).json({
        success: true,
        message: 'Data successfully added to Redis'
    });
    
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
