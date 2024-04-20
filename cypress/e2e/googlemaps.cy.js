describe('google maps',()=>{
    it('google',()=>{
        Cypress.on("uncaught:exception", () => {
  
            return false;
          });
        cy.visit('https://www.google.com/')
        cy.get('textarea[name="q"]').type('google Maps{enter}')
        cy.contains('Google Maps').click()
        cy.get('form[jsaction="submit:omnibox.searchboxFormSubmit"]').type('gudibanda')
        cy.get('button[id="searchbox-searchbutton"]').click()
        cy.get('').type('')
    })
})