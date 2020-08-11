// wdio.debug.conf.js

/*
Used by the launch.json configuration to ensure debugging is enabled regardless of 
what is set in wdio.conf.js. Use 'Launch WebdriverIO Tests' option in VSCode to
run the tests with the debugger.  Override this configuration with your own 
_wdio.NAME.conf.js to adjust/override settings.
*/

const merge = require('deepmerge');
const wdioConf = require('./wdio.conf.js');


// overwrite any arrays in default with arrays in override.
const overwriteMerge = (destinationArray, sourceArray, options) => sourceArray;

const config = {};
config.default = wdioConf.config;
config.override = {
    debug: process.env.DEBUG === "false" ? false : true,
    execArgv: [process.env.INSPECT !== undefined ? process.env.INSPECT : '--inspect=127.0.0.1:9229']
};

console.log('debug > ' + config.override.debug);
console.log('execArgv[0] > ' + config.override.execArgv[0]);

// have main config file as default but overwrite environment specific information
exports.config = merge(config.default, config.override, { arrayMerge: overwriteMerge, clone: false });
