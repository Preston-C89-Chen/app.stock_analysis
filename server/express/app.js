const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const { addMocksToSchema } = require('@graphql-tools/mock');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const typeDefs = require('./schemas/index');

const mocks = {
  Query: () => ({
    tracksForHome: () => [...new Array(6)],
    balanceSheets: () => [...new Array(1)]
  }),
  BalanceSheet: {
    "date": () => "2022-09-24",
    "symbol": () => "AAPL",
    "reportedCurrency": () => "USD",
    "cik": () => "0000320193",
    "fillingDate": "2022-10-28",
    "acceptedDate": "2022-10-27 18:01:14",
    "calendarYear": () => "2022",
    "period": "FY",
    "cashAndCashEquivalents": () => 23646000000,
    "shortTermInvestments": () => 24658000000,
    "cashAndShortTermInvestments": 48304000000,
    "netReceivables": () => 60932000000,
    "inventory": 4946000000,
    "otherCurrentAssets": 21223000000,
    "totalCurrentAssets": 135405000000,
    "propertyPlantEquipmentNet": 42117000000,
    "goodwill": 0,
    "intangibleAssets": 0,
    "goodwillAndIntangibleAssets": 0,
    "longTermInvestments": 120805000000,
    "taxAssets": 0,
    "otherNonCurrentAssets": 54428000000,
    "totalNonCurrentAssets": 217350000000,
    "otherAssets": 0,
    "totalAssets": 352755000000,
    "accountPayables": 64115000000,
    "shortTermDebt": 21110000000,
    "taxPayables": 0,
    "deferredRevenue": 7912000000,
    "otherCurrentLiabilities": 60845000000,
    "totalCurrentLiabilities": 153982000000,
    "longTermDebt": 98959000000,
    "deferredRevenueNonCurrent": 0,
    "deferredTaxLiabilitiesNonCurrent": 0,
    "otherNonCurrentLiabilities": 49142000000,
    "totalNonCurrentLiabilities": 148101000000,
    "otherLiabilities": 0,
    "capitalLeaseObligations": 0,
    "totalLiabilities": () => 302083000000,
    "preferredStock": 0,
    "commonStock": 64849000000,
    "retainedEarnings": -3068000000,
    "accumulatedOtherComprehensiveIncomeLoss": -11109000000,
    "othertotalStockholdersEquity": 0,
    "totalStockholdersEquity": 50672000000,
    "totalEquity": 50672000000,
    "totalLiabilitiesAndStockholdersEquity": 352755000000,
    "minorityInterest": 0,
    "totalLiabilitiesAndTotalEquity": 352755000000,
    "totalInvestments": 145463000000,
    "totalDebt": 120069000000,
    "netDebt": 96423000000,
    "link": () => "https://www.sec.gov/Archives/edgar/data/320193/000032019322000108/0000320193-22-000108-index.htm",
    "finalLink": "https://www.sec.gov/Archives/edgar/data/320193/000032019322000108/aapl-20220924.htm"
  },
  Track: () => ({
    id: () => 'track_01',
    title: () => 'Astro Kitty, Space Explorer',
    author: () => {
      return {
        name: 'Grumpy Cat',
        photo: 'https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg',
      };
    },
    thumbnail: () => 'https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg',
    length: () => 1210,
    modulesCount: () => 6,
  }),
};

async function startApolloServer() {
  const server = new ApolloServer({
    schema: addMocksToSchema({
      schema: makeExecutableSchema({ typeDefs }),
      mocks,
    }),
  });
  const { url } = await startStandaloneServer(server);

  console.log(`
      🚀  Server is running
      📭  Query at ${url}
    `);
}

startApolloServer();
// const { ApolloServer } = require('@apollo/server');
// const { expressMiddleware } = require('@apollo/server/express4');
// const { ApolloServerPluginDrainHttpServer } = require('@apollo/server/plugin/drainHttpServer');

// const http = require('http');
// const cors =  require('cors');


// async function main() {let app = express();

// // view engine setup
//   app.set('views', path.join(__dirname, 'views'));
//   app.set('view engine', 'jade');
//   app.use(logger('dev'));
//   app.use(express.json());
//   app.use(express.urlencoded({ extended: false }));
//   app.use(cookieParser());
//   app.use(express.static(path.join(__dirname, 'public')));
//   app.use('/', indexRouter);

//   // catch 404 and forward to error handler
//   app.use(function(req, res, next) {
//     next(createError(404));
//   });

//   // error handler
//   app.use(function(err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};
//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
//   });

//   const httpServer = http.createServer(app);
//   const server = new ApolloServer({
//     schema,
//     resolvers,
//     plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
//   });


//   app.use(
//     '/graphql',
//     cors(),
//     express.json(),
//     expressMiddleware(server, {
//       context: async ({ req }) => ({ token: req.headers.token }),
//     }),
//   );
//   const { url } = await startStandaloneServer(server, {
//     listen: { port: 4000 },
//   });

//   console.log(`🚀  Server ready at: ${url}`);
// }
// main();
// npm install @apollo/server express graphql cors




