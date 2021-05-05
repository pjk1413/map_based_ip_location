# Overview
This application is built using Vue.js.  I chose Vue over other frontend frameworks simply because I find it easier to use and have more experience with it than other frameworks.  
By using a framework, I had greater control over the lifecycle hooks, which allowed for more flexibility in how the application was built.

I styled the application very simply with basic Bootstrap classes.  

The application utilizes Vuex, Axios, Leaflet, Mapbox and the API's specified in the document.

# Process 
The application is formatted using a basic Bootstrap Grid network.  It is formed around a 3 x 3 grid.  The grid acts as a framework that components are then placed into.  

At first, my plan was to have all components use props to share data, but that I decided would have ended up taking more time than simply wiring in Vuex as a state management system.

At first load, the application takes advantage of the mounted lifecycle hook to trigger a async function which gathers the necessary data and commits the data to state.  The benefit of committing data to state is that it then becomes bound (if used correctly).  That allows the application to update the necessary areas as soon as the data is ready.  I used the promise of each endpoint to trigger the next endpoint.  This allowed the data to not be caught in promise and load quickly.  I would have liked to spend a bit more time creating a loading wheel or spinner to indicate work was happening.

As for the map component, I created a regex matcher that determines if a IP address or domain was entered into the search box.  This will automatically alter the URL to accomodate the type of entry.

The submit button triggers both the state to be mutated as well as an axios request to alter other elements of state.  Once the state has been altered, the data changes on screen and the application is fully 'refreshed'.  

I utilized CDN's for Bootstrap and Leaflet.  I didn't want to spend a lot of time styling because that can really become a rabbit hole and this seemed to be more of a technical challenge.



