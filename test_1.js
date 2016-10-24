setInterval(function(){
  var webdriver = require('selenium-webdriver');
  var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
driver.get('https://profiles.generalassemb.ly/');
driver.findElement(webdriver.By.css('[href="/auth/generalassembly"]')).click();
driver.findElement(webdriver.By.name('user[email]')).sendKeys('gardner518@live.com');
driver.findElement(webdriver.By.name('user[password]')).sendKeys('88PLAQUE88');
driver.findElement(webdriver.By.name('commit')).click();
driver.findElement(webdriver.By.css('[href="/profiles/christopher-gardner"]')).then(function(elem){
  driver.actions().mouseMove(elem).perform();
  driver.findElement(webdriver.By.css('[href="/profiles/5426/steps"]')).click();
  driver.findElement(webdriver.By.className('js-save-published-profile')).click();
  driver.quit();
});
},(25000))

// button js-save-published-profile

// driver.quit();
