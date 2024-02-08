/*
https://site.financialmodelingprep.com/developer/docs
workign from this site
*/


const axios = require('axios');
const fs = require('fs');
const path = require('path');
const { RESTDataSource } = require('@apollo/datasource-rest');
const { createClient } = require('@supabase/supabase-js');
const { createObjectCsvWriter } = require('csv-writer');

// class FinancialModelingPrepAPI {
//   constructor() {
//       this.apiKey = process.env.FMP_API_KEY;
//       this.baseUrl = 'https://financialmodelingprep.com/api/v3';
//       this.baseUrl4 = 'https://financialmodelingprep.com/api/v4/';
//   }

//   async getBalanceSheetStatement(symbol) {
  
//       const url = `${this.baseUrl}/balance-sheet-statement/${symbol}?period=annual&apikey=${this.apiKey}`;
//       const response = await axios.get(url);
//       console.log('inside api',response)
//       return response.data;
//   }

//   async getCashFlowStatement(symbol) {
//       const url = `${this.baseUrl4}/advanced_discounted_cash_flow?symbol=${symbol}&apikey=${this.apiKey}`;
//       const response = await axios.get(url);
//       console.log(response);
//       return response.data;
//   }

//   async getIncomeStatement(symbol) {
//       const url = `${this.baseUrl}/income-statement/${symbol}?period=annual&apikey=${this.apiKey}`;
//       const response = await axios.get(url);
//       return response.data;
//   }

//   // Add methods for other financial statements, such as the statement of shareholders' equity and the statement of comprehensive income.
// }

class FinancialReportsAPI extends RESTDataSource {
  constructor() {
    super()
    this.apiKey = process.env.FMP_API_KEY;
    this.baseUrl = 'https://financialmodelingprep.com/api';
}

  async getBalanceSheetStatement(symbol) {
      const url = `${this.baseUrl}/v3/balance-sheet-statement/${symbol}?period=annual&apikey=${this.apiKey}`;
      const response = await this.get(url);
      console.log('inside updated api',response)
      return response;
  }

  async getBalanceSheetStatement(symbol) {
    const url = `${this.baseUrl}/v3/balance-sheet-statement/${symbol}?period=annual&apikey=${this.apiKey}`;
    const response = await this.get(url);
    console.log('inside api', response)
    return response;
  }

  async getEarnings(from,to) {
    //yyyy-mm-dd
    const url = `${this.baseUrl}/v3/earning_calendar?from=${from}&to=${to}&apikey=${this.apiKey}`;
    const response = await this.get(url);
    return response;
  }

  async getStockPeers(symbol) {
    const url = `${this.baseURL}/v3/`
  }
}

class CSVCreator {
  constructor(data, filePath) {
    this.data = data;
    this.filePath = filePath
  }

  async createCSV() {
    const csvWriter = createObjectCsvWriter({
      path: this.filePath,
      header: [
        {id: 'date', title: 'DATE'},
        {id: 'symbol', title: 'SYMBOL'},
        //{id: 'peers', title: 'PEERS'}
      ]
    });

    try {
      console.log('writing this data', this.data,this.filePath)
      await csvWriter.writeRecords(this.data);
      console.log('The CSV file was written successfully');
    } catch (err) {
      console.error('Error writing CSV file', err);
    }
  }
}


class SupabaseAPI {
  constructor() {
    this.apiKey = ""
    this.client = {}
    this._init();
  }

  _init() {
    this.client = createClient('https://qbabpcqgxhxppvetnngb.supabase.co',"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFiYWJwY3FneGh4cHB2ZXRubmdiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5OTMwNDI3MCwiZXhwIjoyMDE0ODgwMjcwfQ.mwzN1UIqaTFU0q1hGkhfBbkB1FkJ0kUhnqgKVUVOVcU")
    console.log(this.client)
  }

  async insert() {
    const timestamp = Date.now();
    try {
      const { data, error } = await this.client
      .from('fin_reports')
      .insert({ symbol: 'PLTR', financials: {"test":1}, correlations: {"test":2} })
      .select();
      return data;
    } catch(err) {
      console.error(err);
    }
  }

  async fetch(query) {
    const symbol = query?.symbol
    try {
      const { data, error } = await this.client
      .from('fin_reports')
      .select({symbol});
      return data;
    } catch(err) {
      console.error(err);
    }
  }
}


// const supa = new SupabaseAPI();
// supa.insert();

async function main() {
  const uniqueId = Date.now();
    // Ensure the csv directory exists
  const dirPath = path.join(__dirname, '..', 'csv');
  const fra = new FinancialReportsAPI();
  fra.getBalanceSheetStatement("AAPL");
  const earnings = await fra.getEarnings("2024-02-07","2024-02-31");
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
    }
  let filePath = path.join(dirPath, `earnings-${uniqueId}.csv`);
  const csv = new CSVCreator(earnings,filePath)
  csv.createCSV();
}  
main();


module.exports.FinancialReportsAPI = FinancialReportsAPI;
module.exports.SupabaseAPI = SupabaseAPI;