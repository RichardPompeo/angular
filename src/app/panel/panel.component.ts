import { Component, OnInit } from '@angular/core';

import { Phrase } from '../shared/phrase.model';
import { PHRASES } from './phrase-mock';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
})
export class PanelComponent implements OnInit {
  public phrases: Phrase[] = PHRASES;
  public answer: String | undefined;
  public round: number = 0;
  public phraseRound: Phrase | undefined;
  public progress: number = 0;

  constructor() {
    this.phraseRound = this.phrases[this.round];
  }

  ngOnInit(): void {}

  public refreshAnswer(event: Event): void {
    this.answer = (<HTMLInputElement>event.target).value;
  }

  public verifyAnswer(): void {
    if (
      this.phraseRound?.ptPhrase.toLowerCase() === this.answer!.toLowerCase()
    ) {
      this.round++;

      this.progress = this.progress + 100 / this.phrases.length;

      this.phraseRound = this.phrases[this.round];
    } else {
      alert('Frase incorreta!');
    }
  }
}
