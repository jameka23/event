//remote URL
const remoteURL = "https://www.eventbriteapi.com/v3/";
const APIKey = "ESBUVAVBGFEP5E5JDRBI";  // add your api key and remove the .example from the file name for it is referenced in other places


// create an object to store the fetch calls specifically for eventbrite
export default {
    categories: () => {
        return fetch(`${remoteURL}/categories/?token=${APIKey}`)
        .then(resp => resp.json())
    },
    events: (categoryId,userLatitude,userLongitude) => {
        return fetch(`${remoteURL}events/search/?categories=${categoryId}&location.latitude=${userLatitude}&location.longitude=${userLongitude}&token=${APIKey}`)
        .then(resp => resp.json())
    }
}