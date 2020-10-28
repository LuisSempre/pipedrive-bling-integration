const express = require('express');
const router = express.Router();
const axios = require('axios');
const pipedrive_api_url = require('./config/pipedrive');

const pipedriveAPIToken = process.env.PIPEDRIVE_API_TOKEN;

router.get('/deals', async (req, res) => {
  try {
    const response = await axios.get(`${pipedrive_api_url}/deals?api_token=${pipedriveAPIToken}`);
    return res.json(response.data);
  } catch(error) {
    console.log(error);
    return res.status(400).json({ message: 'Error' });
  };
});

router.get('/deals/won', async (req, res) => {
  try {
    const response = await axios.get(`https://api.pipedrive.com/v1/deals?status=won&api_token=${pipedriveAPIToken}`);
    return res.json(response.data);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: 'Error' });
  }
})

module.exports = router;