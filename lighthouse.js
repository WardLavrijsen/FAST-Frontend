const lighthouse = require("lighthouse");
const chromeLauncher = require("chrome-launcher");
const fs = require("fs");

(async () => {
  const chrome = await chromeLauncher.launch({ chromeFlags: ["--headless"] });
  const options = {
    logLevel: "info",
    output: "html",
    // onlyCategories: ["performance"],
    port: chrome.port,
  };
  const runnerResult = await lighthouse("http://localhost:3000", options);

  console.log("Report is done for", runnerResult.lhr.finalUrl);

  const performanceScore = runnerResult.lhr.categories.performance.score * 100;
  console.log("Performance score was", performanceScore);

  const reportHtml = runnerResult.report;
  fs.writeFileSync("lhreport.html", reportHtml);

  await chrome.kill();
})();
