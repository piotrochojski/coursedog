// landing page

const upcoming_events_header = '.mb-4 > .flex'
const date_on_a_calendar = '*[class^="vc-day id-REPLACE_WITH_DATE"]'
const all_days_calendar_grid = '*[class^="vc-grid-container vc-weeks"]'
const calendar_month_back = ':nth-child(1) > .vc-svg-icon'
const calendar_month_forward = ':nth-child(2) > .vc-svg-icon'
const no_upcoming_events = '.mt-16 > .mt-8'
const events_grid = 'section'
const event_content = '.card-content'
const todays_events_button = '[href="/today"]'
const featured_events_button = '[href="/featured"]'
const search_events_input = '.search__input'
const add_to_calendar_link = '.mt-2 > .mr-2'
const add_to_google_calendar_link = 'a > .btn'
const event_type_details = '.items-start > .font-semibold'
const organization_event_details = ':nth-child(6) > .font-semibold'
const contacts_event_details = '.cursor-pointer'
const event_description_details = '.text-theme-darkest'


class damianEventsLandingPage {
    upcoming_events_header() {
        return cy.get(upcoming_events_header)
    }
    no_upcoming_events() {
        return cy.get(no_upcoming_events)
    }
    date_on_a_calendar(date) {
        return cy.get(date_on_a_calendar.replace('REPLACE_WITH_DATE', `${date}`))
    }
    events_grid() {
        return cy.get(events_grid)
    }
    event_content() {
        return cy.get(event_content)
    }
    todays_events_button() {
        return cy.get(todays_events_button)
    }
    featured_events_button() {
        return cy.get(featured_events_button)
    }
    search_events_input() {
        return cy.get(search_events_input)
    }
}

class eventDetailsCard {
    add_to_calendar_link() {
        return cy.get(add_to_calendar_link)
    }
    add_to_google_calendar_link() {
        return cy.get(add_to_google_calendar_link)
    }
    event_type_details() {
        return cy.get(event_type_details)
    }
    organization_event_details() {
        return cy.get(organization_event_details)
    }
    contacts_event_details() {
        return cy.get(contacts_event_details)
    }
    event_description_details() {
        return cy.get(event_description_details)
    }
}



export {
    damianEventsLandingPage,
    eventDetailsCard
}