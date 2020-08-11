// wdio.docker.config.js

const merge = require('deepmerge');
const config = {};
config.default = require('./wdio.conf.js').config;

// insert modified configuration inside
config.override = {
    debug: false,
    execArgv: [],
    host: 'localhost',
    port: 4444,
    path: '/wd/hub',
    automationProtocol: 'webdriver',
    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: [
                '--headless',
                '--window-size=1280,800'   // required with headless option
            ]
        }
    }],
    sync: true,
    logLevel: 'warn',
    services: ['docker'],
    dockerLogs: './',
    dockerOptions: {
        image: 'selenium/standalone-chrome',
        healthCheck: {
            url: 'http://localhost:4444',
            maxRetries: 10,            // default 10
            inspectInterval: 1000,     // default 500ms
            startDelay: 2000           // default 0ms
        },
        options: {
            p: ['4444:4444'],
            shmSize: '3g',
            v: [process.cwd() + ':' + process.cwd() + ':ro']
        }
    }
};

// overwrite any arrays in default with arrays in override.
const overwriteMerge = (destinationArray, sourceArray, options) => sourceArray;

// have main config file as default but overwrite environment specific information
exports.config = merge(config.default, config.override, { arrayMerge: overwriteMerge, clone: false });
