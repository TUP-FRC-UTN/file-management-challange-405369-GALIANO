import { Component } from '@angular/core';
import { FILE_LIST, OWNERS } from '../../data/file.storage';
import { FileItem, FileType } from '../../models/file.item.model';
import { CommonModule, DATE_PIPE_DEFAULT_OPTIONS } from "@angular/common";

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})


export class ListadoComponent {
  files: FileItem[] = FILE_LIST;
  constructor() {
    this.sortFiles();
  }

  sortFiles() {
    // Ordenar primero por 'type' y luego por 'name'
    this.files.sort((a, b) => {
      // Comparar por 'type' primero (FOLDER antes que FILE)
      const typeComparison = a.type - b.type;
      if (typeComparison !== 0) {
        return typeComparison; // Si el tipo es diferente, se retorna la comparación de tipo
      }

      // Si el tipo es igual, comparar por 'name'
      return a.name.localeCompare(b.name);
    });
  }

}
