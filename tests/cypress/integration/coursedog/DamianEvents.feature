Feature: Damian Events on Coursedog

Scenario: On given date only events happening on the day are shown
    Given Damian Events page is opened
    When user gets events for date "2021-11-23"
    Then event named "Model UN Germany Visit" is shown
    And event named "Model UN International Conference" is shown
    And there are exactly 2 events shown on the page

Scenario: On date when no events scheduled any event is not shown
    Given Damian Events page is opened
    When user gets events for date "2021-09-28"
    Then no events shown with message "No events found"

Scenario: Todays event shows only events happening on the date
    Given Damian Events page is opened
    And todays date is set to "2021-11-20"
    When user clicks on Todays Events button
    Then event named "Tokyo" is shown
    And there are exactly 1 events shown on the page
    
Scenario: If no events on the current date, Todays Event shows no results
    Given Damian Events page is opened
    And todays date is set to "2021-9-2"
    When user clicks on Todays Events button
    Then no events shown with message "No events today"

Scenario: Featured Events shows upcoming Events
    Given Damian Events page is opened
    And todays date is set to "2021-9-2"
    When user clicks on Featured Events button
    Then there are exactly 3 events shown on the page

Scenario: Event's details are shown 
    Given Damian Events page is opened
    And todays date is set to "2021-9-2"
    When user clicks on Featured Events button
    And user clicks event card name "QA Task Submission"
    Then button add to calendar is shown
    And button add to Google Calendar is shown
    And event type details are shown
    And organized by is shown
    And contacts is shown
    And event description details are shown

Scenario: Search for events by their name
    Given Damian Events page is opened
    When user types "Tokyo" in search input and press enter
    Then event named "Tokyo" is shown
    And there are exactly 1 events shown on the page