import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalTVComponent } from '../modal-tv/modal-tv.component';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void { 
    let dialogRef = this.dialog.open(ModalTVComponent); 
  
    dialogRef.afterClosed().subscribe(result => { 
      // console.log('Close', result);
    }); 
  } 

  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
