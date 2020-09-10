const doGet = () => {
  return HtmlService.createHtmlOutputFromFile('app.html')
    .setTitle('Base Project')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
};

export default doGet;
