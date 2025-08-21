const { Builder, By, Key } = require('selenium-webdriver');

async function testarFormulario() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Acessa a página de login
    await driver.get('https://the-internet.herokuapp.com/login');

    // Preenche o campo de nome de usuário
    await driver.findElement(By.id('username')).sendKeys('tomsmith');

    // Preenche o campo de senha
    await driver.findElement(By.id('password')).sendKeys('SuperSecretPassword!', Key.RETURN);

    // Aguarda 7 segundos para visualizar o resultado
    await driver.sleep(7000);

    // Verifica se o login foi bem-sucedido
    let mensagemSucesso = await driver.findElement(By.css('.flash.success')).getText();
    console.log('Mensagem de sucesso:', mensagemSucesso);

  } finally {
    await driver.quit(); // Fecha o navegador
  }
}

testarFormulario();
