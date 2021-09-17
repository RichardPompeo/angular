export class Heart {
  constructor(
    public full: boolean,
    public fullHeart: String = '/assets/coracao_cheio.png',
    public incompleteHeart: String = '/assets/coracao_vazio.png'
  ) {}

  public showHeart(): String {
    if (this.full) {
      return this.fullHeart;
    } else {
      return this.incompleteHeart;
    }
  }
}
