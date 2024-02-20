/*
https://site.financialmodelingprep.com/developer/docs
working from this site
*/

const axios = require('axios');
const fs = require('fs');
const path = require('path');
const { RESTDataSource } = require('@apollo/datasource-rest');
const { createClient } = require('@supabase/supabase-js');
const { createObjectCsvWriter } = require('csv-writer');

class FinancialReportsAPI extends RESTDataSource { 
  constructor() {
    super()
    this.apiKey = process.env.FMP_API_KEY || "MqLQFqijRWf5sBSBmv87hJ06103erCtM";
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


class NeonAPI {
  constructor() {
    this.apiKey = process.env.NE
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
    console.log("symbol", symbol);
    try {
      const { data, error } = await this.client
      .from('fin_reports')
      .select();
      return data;
    } catch(err) {
      console.error(err);
    }
  }
}

async function main() {
  // const uniqueId = Date.now();
  //   // Ensure the csv directory exists
  // const dirPath = path.join(__dirname, '..', 'csv');
  // const fra = new FinancialReportsAPI();
  // fra.getBalanceSheetStatement("AAPL");
  // const earnings = await fra.getEarnings("2024-02-09","2024-02-29");
  // if (!fs.existsSync(dirPath)) {
  //   fs.mkdirSync(dirPath);
  //   }
  // let filePath = path.join(dirPath, `earnings-${uniqueId}.csv`);
  // const csv = new CSVCreator(earnings,filePath)
  // csv.createCSV();
  const suupa = new SupabaseAPI()
  const res = await suupa.fetch({symbol:"AAPPL"});
  console.log(res)
}  
main();


module.exports.FinancialReportsAPI = FinancialReportsAPI;
module.exports.SupabaseAPI = SupabaseAPI;