const notesContainer = document.getElementById('notes');
const noteText = document.getElementById('noteText');
const addNoteButton = document.getElementById('addNote');

const loadNotes = () => {
  const notes = JSON.parse(localStorage.getItem('notes')) || [];
  notesContainer.innerHTML = '';
  notes.forEach((note, index) => createNoteElement(note, index));
};

const createNoteElement = (note, index) => {
  const noteElement = document.createElement('div');
  noteElement.classList.add('note');
  noteElement.innerHTML = `
    <p>${note}</p>
    <button class="delete" onclick="deleteNote(${index})">&times;</button>
  `;
  notesContainer.appendChild(noteElement);
};

const addNote = () => {
  const text = noteText.value.trim();
  if (text) {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.push(text);
    localStorage.setItem('notes', JSON.stringify(notes));
    noteText.value = '';
    loadNotes();
  }
};

const deleteNote = (index) => {
  const notes = JSON.parse(localStorage.getItem('notes')) || [];
  notes.splice(index, 1);
  localStorage.setItem('notes', JSON.stringify(notes));
  loadNotes();
};

addNoteButton.addEventListener('click', addNote);
loadNotes();
