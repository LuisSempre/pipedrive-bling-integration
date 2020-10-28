const express = require('express');
const router = express.Router();
const axios = require('axios');

require('dotenv').config();

const companyDomain = process.env.PIPEDRIVE_COMPANY_DOMAIN;
const pipedriveAPIToken = process.env.PIPEDRIVE_API_TOKEN;

router.get('/deals', async (req, res) => {
  try {
    const response = await axios.get(`https://${companyDomain}.pipedrive.com/api/v1/deals?api_token=${pipedriveAPIToken}`);
    // console.log(response.data)
    return res.json(response.data);
  } catch(error) {
    console.log(error);
  };
});

module.exports = router;