import { BaseComponent } from "../../component.js";

export class ImageComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`
    <section class="image">
      <div class="img__holder"><img class="image__thumbnail"></div>
      <p class="image__title"></p>
    </section>
    `);

    const imageElement = this.element.querySelector(
      ".image__thumbnail"
    )! as HTMLImageElement;
    imageElement.src = url;
    imageElement.alt = title;

    const paragraphElement = this.element.querySelector(
      ".image__title"
    )! as HTMLParagraphElement;
    paragraphElement.textContent = title;
  }
}
