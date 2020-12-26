
function getNotes(userID) {
    fetch("https://spy-notes-api.rk0.xyz/users/" + userID + "/notes")
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            var myList = document.querySelector("#notes");
            myList.innerHTML = "";
            var title = document.querySelector("#title");
            var content = document.querySelector("#content");
            for (const note of data) {
                var listElement = document.createElement("LI");
                listElement.innerHTML += note.title;

                var button = document.createElement('button');
                button.innerHTML = 'View';
                button.className = "btn btn-primary btnPadding";

                button.onclick = function () {
                    title.value = note.title;
                    content.value = note.note;
                    viewMode();
                };

                var del = document.createElement('button');
                del.innerHTML = 'Delete';
                del.className = "btn btn-danger btnPadding";

                del.onclick = function () {
                    deleteNote(userID, note.noteId);
                    setTimeout(() => {
                        location.reload();
                    }, 200);

                };
                listElement.append(button);
                listElement.append(del);
                myList.append(listElement);
            }
        }
        )
}

function createNote(userID, noteTitle, noteContent) {
    fetch("https://spy-notes-api.rk0.xyz/users/" + userID + "/notes", {
        method: "POST",
        body: JSON.stringify({ title: noteTitle, note: noteContent }), headers: { "Content-Type": "application/json" }
    }).then(resp => resp.json())
        .then(data => console.log(data))
}

function deleteNote(userID, noteID) {
    fetch("https://spy-notes-api.rk0.xyz/users/" + userID + "/notes/" + noteID, {
        method: "DELETE",
    }).then(resp => resp.json())
        .then(data => console.log(data))

}

function getQueryString() {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('userID');
    return myParam;
}

function addNote() {
    document.getElementById("title").readOnly = false;
    document.getElementById("title").value = "";
    document.getElementById("content").readOnly = false;
    document.getElementById("content").value = "";
    document.getElementById("cancel").disabled = false;
    document.getElementById("save").disabled = false;
}

function cancelNote() {
    document.getElementById("title").readOnly = true;
    document.getElementById("title").value = "";
    document.getElementById("content").readOnly = true;
    document.getElementById("content").value = "";
    document.getElementById("cancel").disabled = true;
    document.getElementById("save").disabled = true;
}

function saveNote() {
    var title = document.getElementById("title").value;
    var content = document.getElementById("content").value;
    createNote(userID, title, content);
    cancelNote();
    setTimeout(() => {
        location.reload();
    }, 200);
}

function viewMode() {
    document.getElementById("title").readOnly = true;
    document.getElementById("content").readOnly = true;
    document.getElementById("cancel").disabled = true;
    document.getElementById("save").disabled = true;
}



var userID = getQueryString();
getNotes(userID);
