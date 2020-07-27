const doGet = () => {
  return HtmlService.createHtmlOutputFromFile('app.html')
    .setTitle('Projeto Base')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
};

export default doGet;
