const getScriptToken = () => {
  Logger.log('Getting script token');
  return ScriptApp.getOAuthToken();
};

export default getScriptToken;
