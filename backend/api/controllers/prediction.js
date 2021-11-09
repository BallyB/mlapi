
let {PythonShell} = require('python-shell')


exports.getPrediction = (req, res, next) => {
    /*return res.status(200).json({
        message: 'request received successfully!'
    });*/
    /*var options = {
        args:
        [
          //req.query.funds, // starting funds
          //req.query.size, // (initial) wager size
          //req.query.count, // wager count — number of wagers per sim
          //req.query.sims // number of simulations
        ]
      }*/
    //const options = { pythonPath: 'C:\\Users\\adri2\\AppData\\Local\\Programs\\Python\\Python39\\python'};
    let pyshell = new PythonShell('./controllers/iris-keras-nn.py');
    // sends a message to the Python script via stdin
    pyshell.send('hello');

    pyshell.on('message', function (message) {
    // received a message sent from the Python script (a simple "print" statement)
    console.log(message);
    });

    // end the input stream and allow the process to exit
    pyshell.end(function (err,code,signal) {
        if (err) throw err;
        console.log('The exit code was: ' + code);
        console.log('The exit signal was: ' + signal);
        console.log('finished');
    });



  /*  PythonShell.run('./iris-keras-nn.py', null, function (err) {
    if (err){
        return res.status(401).json({
            error: new Error('Incorrect password!')
        });
    }
        //res.send(err);
        //res.send(data.toString())
    });
    return res.status(200).json({
        message: 'request received successfully!'
    });
*/
     /* pyshell.on('message', function (message) {
        // received a message sent from the Python script (a simple "print" statement)
        console.log(message);
      });*/
};



