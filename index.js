var modules = [
    {
        name: "cligui2",
        version: "latest"
    },
    {
        name: "styleme",
        version: "latest"
    }, {
        name: "hashbounds",
        version: "latest"
    }, {
        name: "rson",
        version: "latest"
    }




]

var exec = require('child_process').exec;
var todo = 0;
var done = 0;

function loading(ne) {
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
    process.stdout.write("\u001B[?25l\r\x1b[K[npm] [" + bar + extra + "] " + percent * 10 + "% " + ne);


}
var index = 0;
todo += modules.length * 2;
install()




function install() {
    var b = modules[index]

    if (!b) {
        process.stdout.write("\n\u001B[?25h")
        return callback()
    }
    setTimeout(function () {
        loading("Installing " + b.name);

    }, 500)
    exec("npm install " + b.name + "@" + b.version, function (error, stdout, stderr) {
        if (error) {
            console.log("Error with installing module: " + n + "/n" + error);
        }

        loading("Installed " + b.name);
        index++;
        install();

    });

}






function callback() {
    var f = require("cligui2")
        // var c = new f();

    // c.editor("test.js")
}
