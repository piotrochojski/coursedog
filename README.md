# coursedog
Recruitment Task - QA Engineer Coursedog

Some notes about Cypress:
To run tests you need some additional dependencies/plugins. To install them, go to project directory and execute: "npm install". Then run them by executing i.e. "npx cypress@8.4.1 open"

I haven't written too much additional scenarios, but I chose "Search" input as a part of app to be tested with some more scenarios. There are of course many more places where additional tests could be written, as there are many i.e. combinations of filtering. If there is such need I can add them in upcoming days. 

Questions to Product Owner about stories:
1. Some scenarios are grouped, like  this: Given that current date is November 20th, 2021 [....] When I select the "Model UN" organization from the Filter by Organization dropdown. -- is it intentional that current date is given?
2. Filtering by Organization (or Event Type) - is this only about filtering from grid "FILTERING" shown on main page or also should work in this way when user already did a search by search input? (if selection is done on search results page, then it is also filtered by event name)
3. What should be shown if user searches for empty string - all events or no events? maybe just "advanced search" grid should be shown with no results

Found bugs:
1. Issues pointed on scenario with special characters in search input (see it to check how to reproduce) - special characters are not parsed correctly as they are sent as params in url. Expected result: Events which contains characters are shown, or no events found. Current behaviour: http404 and "Events not found.
Home page"
2. REQUEST AN EVENT - there is nothing in dropdown - no possibility to request an event 

