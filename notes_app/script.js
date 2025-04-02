const addNote=document.querySelector(".add-note-button");
const mainContainer=document.querySelector(".mainContainer");

addNote.addEventListener("click", () => {
    createNote(""); // Create a new note with empty content
    updateStorage();
});

function createNote(content){
    let mainCont=document.createElement("div");
    let textArea=document.createElement("textarea");
    let delBtn=document.createElement("button");

    mainCont.className="new-note";
    textArea.className="note-content";
    delBtn.className="action-button";
    delBtn.innerHTML="🗑";
    textArea.value = content; // Load saved text content

    mainCont.appendChild(textArea);
    mainCont.appendChild(delBtn);
    document.querySelector(".mainContainer").appendChild(mainCont);

    textArea.addEventListener("keyup", updateStorage);
    delBtn.addEventListener("click",()=>{
        mainCont.remove();
        updateStorage();
    })

    updateStorage();
}

function showNotes() {
    const prevNotes = JSON.parse(localStorage.getItem("notes")) || [];
    mainContainer.innerHTML = ""; // Clear the container before loading notes
    prevNotes.forEach(note => createNote(note));
}
showNotes();
function updateStorage(){
    let notes = [];
    let textAreas=document.querySelectorAll(".note-content")
    for(let i=0;i<textAreas.length;i++){
        notes.push(textAreas[i].value);
    }
    localStorage.setItem("notes", JSON.stringify(notes));
}


