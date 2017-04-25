
var modules = {
  
  
  
  
  
}

var exec = require('child_process').exec;
var todo = 0;
var done = 0;
function loading() {
        done++;
        var percent = Math.round(done / todo * 10)
        var bar = ""
        for (var i = 0; i < percent; i++) {
            bar = bar + "===";
        }
        if (percent == 10) bar = bar + "=";
        else bar = bar + ">";
        var extras = 31 - bar.length;
        var extra = "";
        for (var i = 0; i < extras; i++) extra = extra + " ";
        process.stdout.write("[npm] [" + bar + extra + "] " + percent * 10 + "% Installing Modules..."\r");

if (done >= todo) {
          callback()
          
        }

    }
for (var name in modules) {
  todo ++;
  (function (n,m) {
  exec("npm install " + n + "@" + m[n], function (error, stdout, stderr) {
  if (error) {
   console.log("Error with installing module: " + n + "/n" + error); 
  }
   loading();
  });
  })(name,modules)
  
}
