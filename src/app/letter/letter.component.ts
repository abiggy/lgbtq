import { Component, OnInit, Input } from "@angular/core";
import { Letter } from "../shared/models/letter.model";

@Component({
  selector: "app-letter",
  templateUrl: "./letter.component.html",
  styleUrls: ["./letter.component.scss"],
})
export class LetterComponent implements OnInit {
  @Input() letter: Letter;
  @Input() click: () => void;

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
