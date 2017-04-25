var toCheck = [
    {
        name: "cligui2",
        version: "1"
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
    },
    {
        name: "socket.io",
        version: "latest"
    }



    ]
var exec = require('child_process').exec;
var fs = require('fs')

var modules = []
console.log("Checking Modules")


try {

    var f = JSON.parse(fs.readFileSync("modules.json", "utf8"));
    var u = 0,
        a = 0
    for (var i = 0; i < toCheck.length; i++) {
        var m = toCheck[i],
            b = f[i];

        if (!b) {;
            a++;
            modules.push(b)
        } else if (m.version != b.version) {;
            u++;
            modules.push(b)
        }
    }
    console.log(a + " Modules need to be installed; " + u + " modules need to be updated")
} catch (e) {
    modules = toCheck;
    console.log(toCheck.length + " Modules need to be installed")
}
console.log("Installing Module(s)")
for (var i = 0; i < toCheck.length; i++) {
    try {

        var a = require(toCheck[i].name)

    } catch (e) {
        modules.push(toCheck[i])

    }


}

if (!modules.length) return callback();

var todo = 1;
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
        loading("Done!");
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
    fs.writeFileSync("modules.json", JSON.stringify(toCheck), "utf8")

    var f = require("cligui2")
        // var c = new f();
    console.log("Done!")
        // c.editor("test.js")
}
