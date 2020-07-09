const ApiService = {
    async getAuthors() {
        let res = await fetch('http://localhost:8000/api/autor')
        return res.json()
    },

    createAuthors(autor) {
        return fetch('http://localhost:8000/api/autor', { method: 'POST', headers: {'content-type': 'application/json'}, body: JSON.stringify(autor) }).then(res => res.json())

    },

    async getAuthorsNames() {
        let res = await fetch('http://localhost:8000/api/autor/nome')
        return res.json()
    },

    removeAuthor (id) {
        return fetch(`http://localhost:8000/api/autor/${id}`, { method: 'DELETE', Headers: { 'content-type': 'application/json' } })
            .then(res => res.json())
    }
}
export default ApiService