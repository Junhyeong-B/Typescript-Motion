import Button from "./Button";

export default class App {
  private $target: Element | null;

  constructor($target: Element | null) {
    this.$target = $target;
    this.renderButton();
  }

  renderButton() {
    const $button = document.createElement("div");
    new Button($button);
    this.$target?.appendChild($button);
  }
}
