const axios = require('axios');

const pipedriveAPIToken = process.env.PIPEDRIVE_API_TOKEN;

class ListWonDealsController {
  async store(req, res) {
    try {
      const response = await axios.get(`https://api.pipedrive.com/v1/deals?status=won&api_token=${pipedriveAPIToken}`);
      return res.json(response.data);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: 'Error' });
    };
  };
};

module.exports = new ListWonDealsController();