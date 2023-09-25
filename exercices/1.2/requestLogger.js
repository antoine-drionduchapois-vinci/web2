let getRequestCount = 0;

function logRequestStats(req, res, next) {
  if (req.method === 'GET') {
    getRequestCount++;
  }
  console.log(`GET counter: ${getRequestCount}`);
  next();
}

module.exports = logRequestStats;