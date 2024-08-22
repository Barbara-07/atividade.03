describe('Pagina inicial', () => {
  beforeEach( () => {
    it('passes', () => {
      cy.visit('https://localhost:3000')
    })
    it('Deve renderizar h1 com o texto correto!', () =>{
  
      cy.agetByData('titulo-principal', 'Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente')
  
    })
  })
})

