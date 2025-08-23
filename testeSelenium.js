const { Builder } = require('selenium-webdriver');

async function testarTituloPagina() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Acessa a página
    await driver.get('https://the-internet.herokuapp.com/');

    // Pega o título
    let titulo = await driver.getTitle();

    console.log('Título da página:', titulo);

  } finally {
    await driver.quit(); // Fecha o navegador
  }
}

testarTituloPagina();
