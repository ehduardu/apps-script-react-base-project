import doGet from './webapp';

// Expose public functions by attaching to `global`
global.doGet = doGet;
