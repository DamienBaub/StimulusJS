import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["counter"]

  static values = { limit: Number }

  connect() {
    // [...]
    console.log(this.limitValue);
  }

  updateCounter(event) {
    const numberOfCharacters = event.currentTarget.value.length;
    if (numberOfCharacters > this.limitValue) {
      this.counterTarget.innerHTML = `Number of charater exceeded by ${numberOfCharacters - this.limitValue}`;
    } else if (numberOfCharacters > 0) {
      this.counterTarget.innerHTML = `${this.limitValue - numberOfCharacters} characters left`;
    } else {
      this.counterTarget.innerHTML = "";
    }
  }
}
