import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Form, FormsModule, NgForm } from '@angular/forms';
import { FileItem, FileType, FileOwner } from '../../models/file.item.model';
import { OWNERS } from '../../data/file.storage';

@Component({
  selector: 'app-alta',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './alta.component.html',
  styleUrl: './alta.component.css'
})
export class AltaComponent {
  @Output()enviarEmit = new EventEmitter<FileItem>();
  nuevoItem: FileItem  = {
    id: "",
    name: "",
    creation: new Date(),
    owners: [],
    type: FileType.NOT_DEFINED
  };

  fileType = FileType;
  duenos = OWNERS;

  sendForm(form: NgForm){
    if(form.valid){
      this.enviarEmit.emit(this.nuevoItem);
    }
  }
}
