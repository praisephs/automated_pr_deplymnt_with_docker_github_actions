// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });

const express = require('express');
const { createNodeMiddleware, createProbot } = require('probot');
const { Webhooks } = require('@octokit/webhooks');

const app = express();
const port = process.env.PORT || 3000;

const webhooks = new Webhooks({
  secret: 'your-github-webhook-secret',
});

webhooks.on('pull_request', async ({ id, name, payload }) => {
  console.log('PR event received:', payload);
  // Handle the event
});

app.use('/webhook', createNodeMiddleware(webhooks));

app.listen(port, () => {
  console.log(`GitHub bot listening at http://localhost:${port}`);
});
