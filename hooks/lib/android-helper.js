
var fs = require("fs");
var path = require("path");
var utilities = require("./utilities");

module.exports = {

    addGooglePlayServicesToGradle: function() {

        var buildGradle = utilities.readBuildGradle();

        buildGradle +=  [
            "",
            "apply plugin: 'com.google.gms.google-services'",
        ].join("\n");

        utilities.writeBuildGradle(buildGradle);
    }

};
