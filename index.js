"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

function errorIfNotFunction(arg) {
     if (typeof arg !== 'function')  throw new Error('Input must be function');
}
exports.errorIfNotFunction = errorIfNotFunction;
