import { Component, OnInit, Input } from "@angular/core";
import { Letter } from "../shared/models/letter.model";

@Component({
  selector: "app-letter-info",
  templateUrl: "./letter-info.component.html",
  styleUrls: ["./letter-info.component.scss"],
})
export class LetterInfoComponent implements OnInit {
  @Input() letter: Letter;

  constructor() {}

  ngOnInit() {}

  resetLetter() {
    this.letter = null;
  }
}
