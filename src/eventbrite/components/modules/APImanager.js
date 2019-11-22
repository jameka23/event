// remoteURL
const remoteURL = "http://localhost:5002"

// object create 
export default Object.create(null,{
    resource: {
        value: "users"
    },
    get: {
        value: function(id){
            return fetch(`${remoteURL}/${this.resource}/${id}`).then(resp => resp.json())
        }
    },
    all: {
        value: function() {
            return fetch(`${remoteURL}/${this.resource}`).then(resp => resp.json())
        }
    },
    post: {
        value: function(newUserObj){
            return fetch(`${remoteURL}/${this.resource}`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newUserObj)
            }).then(resp => resp.json())
        }
    }
})