import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NotesApiService } from '../notes-api.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.sass']
})
export class NotesListComponent implements OnInit {
  notes = [];
  selected = 0;
  @Output()
  getSelectedNote = new EventEmitter<any>();
  constructor(public notesApiService: NotesApiService) { 
  }
  ngOnInit(): void {
    this.notesApiService.notesListSubcriber$.subscribe(notes => {
      this.notes = notes;
      const selectedNote = localStorage.getItem('selectedNote');
      this.getSelectedNote.emit(selectedNote ? JSON.parse(selectedNote) : {...this.notes[0], index: 0});
    })
  }
  selectedNotes(index) {
    this.selected = index;
    let selectedNote = this.notes[index];
    selectedNote['index'] = index;
    this.getSelectedNote.emit(selectedNote);
  }
}
