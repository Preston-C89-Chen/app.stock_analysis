const { FinancialReportsAPI } = require('../orm/index');

const fetchBalanceSheetData = async ({symbol}) => {
  try {
    const fmp = new FinancialReportsAPI();
    const response = await fmp.getBalanceSheetStatement(symbol);
    return response;
  } catch (err) {
    console.error(err)
  }
}

const fetchEarningsData = async ({fromDate,toDate}) => {
  try {
    const fmp = new FinancialReportsAPI();
    const response = await fmp.getEarnings(fromDate,toDate);
  } catch (err) {
    console.error(err);
  }
};



const resolvers = {
  Query: {
    balanceSheets: async(_, {symbol},) => {
      const balanceSheetData = await fetchBalanceSheetData({symbol:symbol});
      return balanceSheetData;
    },
    balanceSheet: async(_,{symbol}) => {
      try {
        const balanceSheetData = await fetchBalanceSheetData({symbol:symbol});
        return balanceSheetData;
      } catch(err) {
        console.error(err)
      }
    },
    earningsCalendar: async(_,{})
  }
}

module.exports = resolvers;
