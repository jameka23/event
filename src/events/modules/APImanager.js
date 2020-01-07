const apiKey = 'kf8tCmMkrGcLQx5r';
const remoteUrl = 'http://api.eventful.com/json/';


// eslint-disable-next-line no-undef
export default API = {
    categories: () => {
        return fetch(`${remoteUrl}/categories/list?...&app_key=${apiKey}`)
        .then(resp => resp.json())
    },
    events: (userCategoryChoice) => {
        return fetch(`${remoteUrl}/events/search?...&keyword=${userCategoryChoice}&location=Nashville&date=Future&app_key=${apiKey}`)
    }
}