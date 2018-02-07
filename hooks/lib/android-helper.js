
var fs = require("fs");
var path = require("path");
var utilities = require("./utilities");

module.exports = {

    addGooglePlayServicesToGradle: function() {

        var buildGradle = utilities.readBuildGradle();

        buildGradle +=  [
            "",
            "// Google Play Services Plugin - Start ",
            "buildscript {",
            "    repositories {",
            "        maven { url 'https://maven.google.com' }",
            "    }",
            "    dependencies {",
            "        classpath 'com.google.gms:google-services:3.1.0'",
            "    }",
            "}",
            "",
            "apply plugin: 'com.google.gms.google-services'",
            "// Google Play Services Plugin - End ",
        ].join("\n");

        utilities.writeBuildGradle(buildGradle);
  },

  removeGooglePlayServicesFromGradle: function() {

    var buildGradle = utilities.readBuildGradle();

    buildGradle = buildGradle.replace(/\n\/\/ Google Play Services Plugin - Start[\s\S]*\/\/ Google Play Services Plugin - End/, "");

    utilities.writeBuildGradle(buildGradle);
  }

};
