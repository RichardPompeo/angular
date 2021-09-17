import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Phrase } from '../shared/phrase.model';
import { PHRASES } from './phrase-mock';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
})
export class PanelComponent implements OnInit {
  public phrases: Phrase[] = PHRASES;
  public answer: String = '';
  public round: number = 0;
  public phraseRound: Phrase | undefined;
  public progress: number = 0;
  public tries: number = 3;
  @Output() public finishGame = new EventEmitter();

  constructor() {
    this.phraseRound = this.phrases[this.round];
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.tries = 3;
    this.round = 0;
    this.progress = 0;
    this.answer = '';
    this.phraseRound = this.phrases[this.round];
  }

  public refreshAnswer(event: Event): void {
    this.answer = (<HTMLInputElement>event.target).value;
  }

  public verifyAnswer(): void {
    if (
      this.phraseRound?.ptPhrase.toLowerCase() == this.answer!.toLowerCase()
    ) {
      this.round++;

      this.progress = this.progress + 100 / this.phrases.length;

      if (this.round >= this.phrases.length) {
        this.finishGame.emit('win');
      }

      this.answer = '';

      this.phraseRound = this.phrases[this.round];
    } else {
      this.tries--;

      if (this.tries <= -1) {
        this.finishGame.emit('lose');
      }
    }
  }
}
