it('Deve retornar os dados corretos do post', () => {
  cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => {
      expect(response.body).to.have.property('id', 1); // Valida se o ID é 1
      expect(response.body).to.have.property('title'); // Verifica se existe um título
      expect(response.body).to.have.property('userId', 1); // Confirma se o usuário é o correto
    });
});

it('Deve responder em menos de 2 segundos', () => {
  cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => {
      expect(response.duration).to.be.lessThan(2000); // Valida o tempo de resposta
    });
});
