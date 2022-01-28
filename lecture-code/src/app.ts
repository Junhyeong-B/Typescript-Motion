import { PageComponent } from "./components/page.js";

class App {
  private readonly page: PageComponent;
  constructor(element: HTMLElement) {
    this.page = new PageComponent();
    this.page.AttachTo(element);
  }
}

new App(document.querySelector(".document")! as HTMLElement);
