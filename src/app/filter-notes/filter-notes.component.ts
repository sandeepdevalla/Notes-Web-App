import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { storeNote } from '../notes.actions';
import { NotesApiService } from '../notes-api.service';

@Component({
  selector: 'app-filter-notes',
  templateUrl: './filter-notes.component.html',
  styleUrls: ['./filter-notes.component.sass']
})
export class FilterNotesComponent implements OnInit {
  @Output()
  listToggle = new EventEmitter<any>(true);
  notesList = [];
  openList = true;
  constructor(private store: Store, public notesApiService: NotesApiService) {
    this.notesList = JSON.parse(localStorage.getItem('notesList'));
    if (window.screen.width >=375 && window.screen.width <= 768) {
      this.openList = false;
  }
  }

  ngOnInit(): void {
  }
  addNewNote() {
    this.notesApiService.addNotes();
  }
  deleteNote() {
    this.notesApiService.deleteNote();
  }
  closeNotesList() {
    this.openList = !this.openList;
    this.listToggle.emit(this.openList);
  }
}
