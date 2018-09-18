# Autocomplete

## Task:
Create an autocomplete library to be used for the product search. When users input a product name, a result of the matching products should be returned.
- What is your overall approach to the library? (I.e. what is on the FE and what is on the BE)
- What data structure would work best for autocomplete?

## Demo:
GCP products search. Try App Engine/Storage/Cloud functions/etc.
https://jskitchen-autocomplete.firebaseapp.com/


### What was done:
- BE implemented using Firebase with Realtime Database (https://jskitchen-autocomplete.firebaseio.com/)
- Be returns Array with matched products
- FE postponed search by delay of 500ms to reduce amount of request and waiting for the user to complete input

### What has to be improved:
- Rewrite using OOP to support multiple instances in one page
- Cache results to decrease number of requests when user typing
- Implement keyboard navigation through the list of suggested items
- Hide autocomplete on outside click
- Show preloaded for each request to the BE
