// wdio.docker-headful.config.js

/*
 This configuration runs in docker, but headfully, meaning not headless.
*/

const merge = require('deepmerge');
const config = {};
config.default = require('./wdio.conf.js').config;

const networkInfo = require(process.cwd() + '/networkInfo');

const urlOptions = {
    PUBLIC: 'https://the-internet.herokuapp.com',
    LOCAL: 'http://localhost:9292',
    DOCKER_LOCAL: 'http://app:5000',
    DOCKER_REMOTE: 'http://app:7080'
};

// insert modified configuration inside
config.override = {
    debug: false,
    execArgv: [],
    baseUrl: urlOptions.DOCKER_REMOTE,
    host: 'localhost',
    port: 4444,
    path: '/wd/hub',
    automationProtocol: 'webdriver',
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome'
    }],
    sync: true,
    logLevel: 'debug',
    services: ['docker'],
    dockerLogs: './',
    dockerOptions: {
        image: 'selenium/standalone-chrome-debug',
        healthCheck: {
            url: 'http://localhost:4444',
            maxRetries: 10,            // default 10
            inspectInterval: 1000,     // default 500ms
            startDelay: 2000           // default 0ms
        },
        options: {
            p: ['4444:4444', '5900:5900'],
            addHost: 'app:' + networkInfo.address,
            shmSize: '3g',
            v: [process.cwd() + ':' + process.cwd() + ':ro']
        }
    }
};

// overwrite any arrays in default with arrays in override.
const overwriteMerge = (destinationArray, sourceArray, options) => sourceArray;

// have main config file as default but overwrite environment specific information
exports.config = merge(config.default, config.override, { arrayMerge: overwriteMerge, clone: false });
