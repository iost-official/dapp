#!/usr/bin/env node
var yargs = require('yargs');
var argv = yargs
    .usage('Usage: $0 <cmd> [args]')
    .command(require('./new.js'))
    .command(
        'add <item>',
        'add a new [contract|function]',
        function() {
            return yargs
                .usage('Usage: $0 add <item> [args]')
                .command(require('./add_contract.js'))
                .command(require('./add_function.js'))
                .alias('h', 'help')
        }
    )
    .alias('h', 'help')
    .argv;