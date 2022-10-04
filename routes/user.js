var db = require('./db');

db.query('SELECT ? FROM t_user',query, function(err, results, query) {
    if (err) throw err;
    if(!err) {
        indexPage.receiveResults(results);
    }
});