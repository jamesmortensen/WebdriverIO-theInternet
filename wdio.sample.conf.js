// wdio.sampleoverride.config.js

/**
 * Copy this file to '_wdio.YOUR_NAME.conf.js' and modify the override to 
 * change settings in the default wdio.conf.js configuration file.
 * 
 * The '_' in the filename makes sure it is .gitignored. If you plan to 
 * commit platform-specific configuration, then omit the underscore.
 */ 
 
const merge = require('deepmerge');
const config = {};
config.default = require('./wdio.conf.js').config;

// insert modified configuration inside
config.override = {
    specs: [
         './setmoreTest/loginpage/LoginTest.js'
    ]
};

// overwrite any arrays in default with arrays in override.
const overwriteMerge = (destinationArray, sourceArray, options) => sourceArray;

// have main config file as default but overwrite environment specific information
exports.config = merge(config.default, config.override, { arrayMerge: overwriteMerge, clone: false });
