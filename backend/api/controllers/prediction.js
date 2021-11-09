
let {PythonShell} = require('python-shell')


exports.getPrediction = (req, res, next) => {
    var options = {
        args:
        [
          req.body.seplength, // sepal length
          req.body.sepwidth, // sepal width
          req.body.petlength, // petal length
          req.body.petwidth // petal width
        ]
      }
    let pyshell = new PythonShell('./controllers/iris-keras-nn.py', options);

    pyshell.on('message', function (message) {
    // received a message sent from the Python script (a simple "print" statement)
        return res.status(200).json({
            message: message
        });
    });

    // end the input stream and allow the process to exit
    pyshell.end(function (err,code,signal) {
        if (err) throw err;
        
    });

};



