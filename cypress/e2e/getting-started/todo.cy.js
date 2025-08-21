describe('Teste de Login', () => {
  it('Preenche o formulário de login e envia', () => {
    cy.visit('https://the-internet.herokuapp.com/login');

    cy.get('#username').type('tomsmith'); // Preenche o usuário
    cy.get('#password').type('SuperSecretPassword!'); // Preenche a senha
    cy.get('.radius').click(); // Clica no botão de login

    cy.contains('You logged into a secure area!'); // Verifica se o login foi bem-sucedido
  });
});
