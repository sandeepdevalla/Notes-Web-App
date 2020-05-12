import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { NotesApiService } from '../notes-api.service';

@Component({
  selector: 'app-notes-view',
  templateUrl: './notes-view.component.html',
  styleUrls: ['./notes-view.component.sass']
})
export class NotesViewComponent implements OnInit , OnChanges{
  @Input()
  selectedNote = {description: ''};
  constructor(public notesApiService: NotesApiService) { }

  ngOnInit(): void {
  }
  editSelectedNote(event) {
    this.selectedNote['description'] = event.target.value;
    this.notesApiService.editSelectedNote(this.selectedNote);
  }
  ngOnChanges(changes) {
    if (changes.selectedNote) {      
      this.selectedNote = changes.selectedNote.currentValue;
    }
  }
}
