var APIURL = "/api/todos/"

export async function getTodos(){
    return fetch(APIURL)
            .then(res => errorHandling(res))
}

export async function createTodo(val){
    return fetch(APIURL, {
        method: "post",
        headers: new Headers({
            'Content-type': "application/json",
        }),
        body: JSON.stringify({name: val})
    })
    .then(res => errorHandling(res))
}

export async function editTodo(id, newName){
    return fetch(APIURL+id, {
        method: "put",
        headers: new Headers({
            "Content-type" : "application/json",
        }),
        body: JSON.stringify({name: newName})
    })
        .then(res => errorHandling(res))
}

export async function updateTodo(todo){
    return fetch(APIURL+todo._id, {
        method: "put",
        headers: new Headers({
            "Content-type" : "application/json",
        }),
        body: JSON.stringify({completed: !todo.completed})
    })
         .then(res => errorHandling(res))

}

export async function removeTodo(id){
    return fetch(APIURL + id, {
        method: "delete"
    })
    .then(res => errorHandling(res))
}

function errorHandling(res){
    if(!res.ok){
                if(res.status >= 400 && res.status < 500){
                    return res.json().then(data => {
                        let err = {errorMessage: data.message}
                        throw err;
                    })
                }
                if(res.status >= 500){
                    return res.json().then(data => {
                        let err = {errorMessage: 'Please try again later, server is not responding'}
                        throw err;
                    })
                }
            }
        return res.json()
}