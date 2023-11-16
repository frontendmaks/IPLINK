import { Component, ViewEncapsulation } from '@angular/core';

interface TableRow {
  tv: {
    photo: string;
    name: string;
  };
  plan1: boolean;
  plan2: boolean;
  plan3: boolean;
  plan4: boolean;
}

@Component({
  selector: 'app-modal-tv',
  templateUrl: './modal-tv.component.html',
  styleUrls: ['./modal-tv.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ModalTVComponent {
  tableData: TableRow[] = [];

  constructor() {
    for (let i = 1; i <= 290; i++) {
      this.tableData.push({
        tv: {
          photo: `https://picsum.photos/id/${i}/50/50`,
          name: `TV ${i}`,
        },
        plan1: i % 2 === 0,
        plan2: i % 3 === 0,
        plan3: i % 4 === 0,
        plan4: i % 4 === 0
      });
    }
  }
}
