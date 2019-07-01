const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/activities/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/activities`).then(e => e.json())
  },
  deleteActivity(id) {
    return fetch (`${remoteURL}/activities/${id}`, {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json",
        },
    }).then(e => e.json())
  },
  post(newActivity) {
    return fetch(`${remoteURL}/activities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newActivity)
    }).then(e => e.json())
  },
  put(editedActivity) {
    return fetch(`${remoteURL}/activities/${editedActivity.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedActivity)
    }).then(e => e.json());
  }
}