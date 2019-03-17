import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-letter",
  templateUrl: "./letter.component.html",
  styleUrls: ["./letter.component.scss"],
})
export class LetterComponent implements OnInit {
  @Input() letter: string;
  @Input() letterColor: string;

  letterColored = false;
  letterHover = false;
  transitioning = false;

  constructor() {}

  ngOnInit() {}

  enableLetterHover() {
    this.letterHover = true;
    this.letterColored = true;
    this.transitioning = true;
  }

  disableLetterHover() {
    this.letterHover = false;
    if (!this.transitioning) {
      this.transitioning = false;
      this.letterColored = false;
    }
  }

  transitionEnd(event: Event) {
    this.transitioning = false;
    if (!this.letterHover) {
      this.letterColored = false;
    }
  }
}
