const { Builder, By, Key } = require('selenium-webdriver');

async function exemploTeste() {
  
  let driver = await new Builder().forBrowser('chrome').build();

  try{
    await driver.get('https://www.google.com');
    await driver.findElement(By.name('q')).sendKeys('Selenium WebDriver', Key.RETURN);

    await driver.sleep(2000);
  } finally{
    await driver.quit();
  }
}

exemploTeste();