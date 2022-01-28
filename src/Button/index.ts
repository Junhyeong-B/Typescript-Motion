export default class Button {
  private $target: Element;
  private $state: string[];

  constructor($target: Element) {
    this.$target = $target;
    this.$state = [""];
    this.setup();
    this.render();
  }

  setup() {
    this.$state = ["IMAGE", "VIDEO", "NOTE", "TASK"];
  }
  template() {
    return `${this.$state
      .map((title: string) => `<button class="header-button">${title}</button>`)
      .join("")}`;
  }
  render() {
    this.$target.innerHTML = this.template();
  }
}
