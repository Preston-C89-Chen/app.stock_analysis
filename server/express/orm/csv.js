const fs = require('fs');
const csv = require('csv-parser');
const { error } = require('console');

class CSV {
  constructor(data, filePath) {
    this.data = data;
    this.filePath = filePath
  }

  async createCSV(data) {
    const dates = [...new Set(data.map((item) => item.data))];
  }

  async createCSVF() {
    const csvWriter = createObjectCsvWriter({
      path: this.filePath,
      header: [
        {id: 'date', title: 'DATE'},
        {id: 'symbol', title: 'SYMBOL'},
        {id: 'revenue', title: 'REVENUE'},
        {id: 'eps', title: 'EPS'}
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

  parse(callback) {
    const results = [];
    fs.createReadStream(this.filePath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        callback(null, results);
      })
      .on('error', (error) => {
        callback(error, null);
      })
  }

  
}

module.exports.CSV = CSV;