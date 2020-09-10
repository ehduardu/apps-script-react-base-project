import doGet from './webapp';
import getScriptToken from './controllers/ExampleController';

// Expose public functions by attaching to `global`
global.doGet = doGet;
global.getScriptToken = getScriptToken;
