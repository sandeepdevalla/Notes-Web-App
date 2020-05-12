import { Component, OnInit } from '@angular/core';
import { NotesApiService } from '../notes-api.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.sass']
})
export class NotesComponent implements OnInit {
  listOpen = true;
  selectedNote = {};
  constructor(public notesApiService: NotesApiService) {
    if (window.screen.width >=375 && window.screen.width <= 768) {
        this.listOpen = false;
    }
  }
  
  ngOnInit(): void {
  }
  listToggle(value) {
    this.listOpen = value;
  }
  getSelectedNote(note) {
    this.selectedNote = note;
    localStorage.setItem('selectedNote', JSON.stringify(note))
  }
}
