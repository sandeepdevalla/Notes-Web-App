import { Component } from '@angular/core';
import { NotesApiService } from './notes-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private notesService: NotesApiService) {
    this.notesService.initNotesList();
  }
}
