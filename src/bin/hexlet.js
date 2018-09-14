#!/usr/bin/env node

import half from '..';

console.log(half(Number(process.argv[process.argv.length - 1])));

import Parser from '../Parser';

let parser = new Parser('46.148.196.76');
parser.getXml();