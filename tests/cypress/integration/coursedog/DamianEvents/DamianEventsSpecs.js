import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { damianEventsLandingPage, eventDetailsCard, advancedSearchGrid } from '../../../support/pages/coursedogEvents.po'

const damianEventsLanding = new damianEventsLandingPage()
const eventDetails = new eventDetailsCard()
const advancedSearch = new advancedSearchGrid()

Given('Damian Events page is opened', () => {
    cy.visit('/')
    damianEventsLanding.upcoming_events_header().should('be.visible')
});

Given('todays date is set to {string}', (date) => {
    const dateArray = date.split("-")
    const given_todays_date = new Date(dateArray[0], dateArray[1] - 1, dateArray[2]).getTime()
    cy.clock(given_todays_date)
})

When('user gets events for date {string}', (date) => {
    const dateUrl = date.replaceAll('-', '/')
    cy.visit(`${dateUrl}`)
  });

When('user clicks on Todays Events button', () => {
    cy.intercept('GET', '**/meetings?**').as('meetings_request')
    damianEventsLanding.todays_events_button().click();
    cy.wait('@meetings_request')
    cy.wait(500)
})

When('user clicks on Featured Events button', () => {
    cy.intercept('GET', '**/meetings?**').as('meetings_request')
    damianEventsLanding.featured_events_button().click();
    cy.wait('@meetings_request')
})

When('user types {string} in search input and press enter', (search_phraze) => {
    damianEventsLanding.search_events_input().type(search_phraze).type('{enter}')

})

When('user selects {string} from Filter by organization dropdown', (selection) => {
    advancedSearch.xpath_filter_by_organization_dropdown().select(selection)
})

Then('user clicks event card name {string}', (event_name) => {
    damianEventsLanding.event_content().contains(event_name).click()
})

Then('no events shown with message {string}', (message) => {
    damianEventsLanding.no_upcoming_events().contains(message)
    damianEventsLanding.event_content().should('not.exist')
})

Then('event named {string} is shown', (event_name) => {
    damianEventsLanding.event_content().contains(event_name)
})

Then('there are exactly {int} events shown on the page', (events_counter) => {
    damianEventsLanding.event_content().should('have.length', events_counter)
})

Then('button add to calendar is shown', () => {
    eventDetails.add_to_calendar_link().should('be.visible')
})

Then('button add to Google Calendar is shown', () => {
    eventDetails.add_to_google_calendar_link().should('be.visible')
})

Then('event type details are shown', () => {
    eventDetails.event_type_details().should('be.visible')
})

Then('organized by is shown', () => {
    eventDetails.organization_event_details().should('be.visible')
})

Then('contacts is shown', () => {
    eventDetails.contacts_event_details().should('be.visible')
})

Then('event description details are shown', () => {
    eventDetails.event_description_details().should('be.visible')
})