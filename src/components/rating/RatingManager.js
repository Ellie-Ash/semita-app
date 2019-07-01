const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/rating/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/rating`).then(e => e.json())
  },
  deleteRating(id) {
    return fetch (`${remoteURL}/rating/${id}`, {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json",
        },
    }).then(e => e.json())
  },
  post(newRating) {
    return fetch(`${remoteURL}/rating`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newRating)
    }).then(e => e.json())
  },
  put(editedRating) {
    return fetch(`${remoteURL}/rating/${editedRating.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedRating)
    }).then(e => e.json());
  }
}