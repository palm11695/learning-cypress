// ref: https://medium.com/nellika/%E0%B9%80%E0%B8%A3%E0%B8%B4%E0%B9%88%E0%B8%A1%E0%B8%95%E0%B9%89%E0%B8%99%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%99-automated-test-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-cypress-io-%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%A5%E0%B8%87%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%97%E0%B8%B3-dcda05f3a585

const moment = require('moment');

const url = 'https://www.sfcinemacity.com'
const todayDate = moment().format('DD MMM YYYY')
const nowTime = moment().format('HH:mm')
const expectTime = moment().add(1, 'hours').format('HH:mm')
const nameMovie = 'Spider - Man'
const locationMovie = 'SFX CINEMA Central Rama 9'

describe('Check Time Movie', () => {
    it('Go to url', () => {
        cy.visit(url)
    })

    it('Change language', () => {
        cy.get('[class="lang-switcher"]>li').each($el => {
            if ($el.get(0).innerText === 'ENG') {
                cy.wrap($el).click()
            }
        })
        
        // Verify that the language is switched to English
        cy.get('[class="top-navigation"]').contains('Login/Sign up')

        // The website doesn't save the changed language.
        // Temporary put this state here.
        cy.get('[class="button dropdown-button"]')
        .contains('Select Cinema')
        .click()
        cy.contains(locationMovie)
        .click()
    })

    // it('Select Cinema', () => {
    //     cy.get('[class="button dropdown-button"]')
    //     .contains('Select Cinema')
    //     .click()
    //     cy.contains(locationMovie)
    //     .click()
    // })

    it('Select Movie', () => {
        cy.get('[class="button dropdown-button"]')
        .contains('All Movie')
        .click()
        cy.get('h3[class="name"]')
        .contains(nameMovie)
        .click()
        cy.get('[class="button showtime-button"]')
        .contains('Showtime')
        .click()
    })

    it('Check Date Movie', () => {
        cy.get('[class="selected"]>p')
        .contains(todayDate)
    })
    
    it('Check Time Movie', () => {
        cy.get('[class="showtime-list"]>div')
        .children()
        .children()
        .children()
        .children()
    })

    it('Check Time Movie', () => {
        cy.get('[class="time-list"]>li').each($list => {
            console.log($list.get(0).innerText)
        })
    })
    
})