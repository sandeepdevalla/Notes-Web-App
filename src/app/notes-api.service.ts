import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesApiService  implements OnDestroy {
  selectedNote = {};
  constructor() { }
  notesListSubcriber$ = new BehaviorSubject<any>([]);
  initNotesList() {
    const notes = localStorage.getItem('notesList');
    if (!notes) {
        localStorage.setItem('notesList', JSON.stringify([]));
    } else {
      this.notesListSubcriber$.next(JSON.parse(notes));
    }
  }
  addNotes() {
    const notes = JSON.parse(localStorage.getItem('notesList'));
    notes.unshift({
      title: "New Note",
      description: "No additional text",
      timeStamp: (new Date()).toString()
    })
    localStorage.setItem('notesList', JSON.stringify(notes));
    this.notesListSubcriber$.next(notes);
  }
  editSelectedNote(data) {
    const notes = JSON.parse(localStorage.getItem('notesList'));
    notes[data['index']] = {...data};
    this.notesListSubcriber$.next(notes);
    localStorage.setItem('notesList', JSON.stringify(notes));
  }
  deleteNote() {
    const notes = JSON.parse(localStorage.getItem('notesList'));
    const selectedNote = JSON.parse(localStorage.getItem('selectedNote'));
    notes.splice(selectedNote['index'], 1);
    this.notesListSubcriber$.next(notes);
    localStorage.setItem('notesList', JSON.stringify(notes));
  }
  ngOnDestroy() {
    if(this.notesListSubcriber$) {
      this.notesListSubcriber$.unsubscribe();
    }
  }
}
