const { createClient } = require('@supabase/supabase-js');

class FinancialReportsAPI extends RESTDataSource {
  constructor() {
    super();
    this.apiKey = process.env.FMP_API_KEY || "Your_API_Key";
    this.baseUrl = 'https://financialmodelingprep.com/api/v3';
  }

  async getFinancialStatement(symbol, statementType = 'balance-sheet-statement') {
    const url = `${this.baseUrl}/${statementType}/${symbol}?period=annual&apikey=${this.apiKey}`;
    try {
      const response = await this.get(url);
      console.log('Fetched data for:', symbol);
      return response;
    } catch (error) {
      console.error('Error fetching financial statement:', error);
      return null;
    }
  }
}

class SupabaseAPI {
  constructor() {
    this.apiKey = "Your_Supabase_API_Key"
    this.client = createClient('https://your-project-url.supabase.co', this.apiKey);
  }

  async uploadFinancialStatement(symbol, financialData) {
    try {
      const { data, error } = await this.client
        .from('fin_reports')
        .insert([{ symbol, financials: financialData }])
        .select();
      if (error) throw error;
      console.log('Uploaded data for:', symbol);
      return data;
    } catch (err) {
      console.error('Error uploading financial data:', err);
    }
  }
}

// Integration Function
async function fetchAndUploadFinancialData(symbol, statementType) {
  const financialAPI = new FinancialReportsAPI();
  const supabaseAPI = new SupabaseAPI();

  const financialData = await financialAPI.getFinancialStatement(symbol, statementType);
  if (financialData) {
    await supabaseAPI.uploadFinancialStatement(symbol, financialData);
  } else {
    console.log(`No data fetched for ${symbol}`);
  }
}

// Usage Example
fetchAndUploadFinancialData("AAPL", "income-statement");

module.exports.FinancialReportsAPI = FinancialReportsAPI;
module.exports.SupabaseAPI = SupabaseAPI;
