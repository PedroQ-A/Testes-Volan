/// <reference types="cypress"/>

describe('Teste Login', () => {

    beforeEach(() => {
        cy.visit('https://med.volan.app.br/client/login')
    })

    afterEach(() => {
        cy.screenshot()
    })

    it('Deve fazer login', () => {
        cy.get('[data-cy="txtFieldEmail"]').type('pedrolucas0130@admin.volan.app.br')
        cy.get('[data-cy="txtFieldPassword"]').type('Ped0118')
        cy.get('.Login_buttonBox__tK6r > .col > .v-btn').click()
        cy.wait(1500)
        cy.get('.v-app-bar__nav-icon > .v-btn__content > .v-icon').click()
        cy.get('.v-list-item__action > .v-btn > .v-btn__content > .v-icon').click()
        cy.wait(1000)
        cy.get('.v-list-item--link > .v-list-item__title').click()
        cy.get('h4').should('contain' , 'Bem vindo ao Volan Doutor')
    });

    it('Deve exibir mensagem de erro ao colocar usuario invalido', () => {
        cy.get('[data-cy="txtFieldEmail"]').type('pedrolucas@admin.volan.app.br')
        cy.get('[data-cy="txtFieldPassword"]').type('Ped0118')
        cy.get('.Login_buttonBox__tK6r > .col > .v-btn').click()
        cy.get('#swal2-title').should('exist')
    });

    it('Deve exibir mensagem de erro ao colocar senha invalida', () => {
        cy.get('[data-cy="txtFieldEmail"]').type('pedrolucas0130@admin.volan.app.br')
        cy.get('[data-cy="txtFieldPassword"]').type('Pe0118')
        cy.get('.Login_buttonBox__tK6r > .col > .v-btn').click()
        cy.get('#swal2-title').should('exist')
    });
})