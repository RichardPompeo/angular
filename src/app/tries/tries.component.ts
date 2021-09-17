import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { Heart } from '../shared/heart.model';

@Component({
  selector: 'app-tries',
  templateUrl: './tries.component.html',
  styleUrls: ['./tries.component.css'],
})
export class TriesComponent implements OnInit {
  @Input() public tries: number = 3;
  public hearts: Heart[] = [new Heart(true), new Heart(true), new Heart(true)];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.tries !== this.hearts.length) {
      const index = this.hearts.length - this.tries - 1;

      this.hearts[index].full = false;
    }
  }
}
