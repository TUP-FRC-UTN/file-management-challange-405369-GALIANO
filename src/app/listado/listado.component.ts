import { Component, OnChanges } from '@angular/core';
import { FILE_LIST } from '../../data/file.storage';
import { FileItem } from '../../models/file.item.model';
import { CommonModule} from "@angular/common";
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule, AppComponent],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})


export class ListadoComponent {
  files: FileItem[] = FILE_LIST;
  selected_files: FileItem[] =[];
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

  deleteFiles(){
    if(this.selected_files.length ==1){
      this.files.splice(this.files.indexOf(this.selected_files[0]),1);
      this.selected_files = [];
    }else{
      if(confirm("¿Está seguro de borrar " + this.selected_files.length + " archivos?")){
        for(let i = 0; i< this.selected_files.length;i++ ){
          this.files.splice(this.files.indexOf(this.selected_files[i]),1);
        }
        this.selected_files = [];
      }
    }
  }

  onCheckboxChange(file: FileItem, e: any) {
    const isChecked = e.target.checked;
    if(isChecked){
      if(!this.selected_files.includes(file,0)){
        this.selected_files.push(file);
      }else{
        if(this.selected_files.includes(file,0)){
          this.selected_files.splice(this.selected_files.indexOf(file));
        }
      }
    }
  }
}
