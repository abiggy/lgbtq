import { Component } from "@angular/core";
import { Letter } from "./shared/models/letter.model";
import getData from "./shared/getData";

@Component({
  selector: "lgbtq-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  lettersData: Array<Letter> = getData();
  currentLetter?: Letter = null;

  letterClicked = letter => {
    this.currentLetter = letter;
  };
}
