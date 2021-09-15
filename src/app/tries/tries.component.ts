import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tries',
  templateUrl: './tries.component.html',
  styleUrls: ['./tries.component.css'],
})
export class TriesComponent implements OnInit {
  public noFillHeart: String = '/assets/coracao_vazio.png';
  public completeHeart: String = '/assets/coracao_cheio.png';

  constructor() {}

  ngOnInit(): void {}
}
