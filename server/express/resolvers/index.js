const axios = require('axios');

class FinancialModelingPrepAPI {
    constructor() {
        this.apiKey = process.env.FMP_API_KEY || "MqLQFqijRWf5sBSBmv87hJ06103erCtM";
        this.baseUrl = 'https://financialmodelingprep.com/api/v3';
    }

    async getBalanceSheetStatement(symbol) {
        const url = `${this.baseUrl}/balance-sheet-statement/${symbol}?period=annual&apikey=${this.apiKey}`;
        const response = await axios.get(url);
        return response.data;
    }

    async getCashFlowStatement(symbol) {
        const url = `${this.baseUrl}/cash-flow-statement/${symbol}?period=annual&apikey=${this.apiKey}`;
        const response = await axios.get(url);
        return response.data;
    }

    async getIncomeStatement(symbol) {
        const url = `${this.baseUrl}/income-statement/${symbol}?period=annual&apikey=${this.apiKey}`;
        const response = await axios.get(url);
        return response.data;
    }

    // Add methods for other financial statements, such as the statement of shareholders' equity and the statement of comprehensive income.
}

const fetchBalanceSheetData = async (reqBody) => {
  const symbol = reqBody.symbol
  const fmp = new FinancialModelingPrepAPI()
  const response = await fmp.getBalanceSheetStatement(symbol)
  return response;
}

const resolvers = {
  Query: {
    balanceSheet: async(_, args) => {
      const symbol = args.symbol
      const balanceSheetData = await fetchBalanceSheetData({symbol:symbol});
      return balanceSheetData;
    }
  }
}


module.exports = resolvers;