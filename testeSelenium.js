const { Builder, By } = require('selenium-webdriver');

async function testarFluxo() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Acessar a página inicial
    await driver.get('https://the-internet.herokuapp.com');

    // Clicar no link "Form Authentication" para acessar a página de login
    await driver.findElement(By.linkText('Form Authentication')).click();

    // Esperar um pouco para visualizar a navegação
    await driver.sleep(2000);

    // Verificar se estamos na página de login
    let titulo = await driver.getTitle();
    console.log('Título da página:', titulo);

    // Voltar para a página inicial
    await driver.navigate().back();
    await driver.sleep(2000);

    // Acessar novamente a página de login
    await driver.navigate().forward();
    await driver.sleep(2000);

  } finally {
    await driver.quit(); // Fecha o navegador
  }
}

testarFluxo();
