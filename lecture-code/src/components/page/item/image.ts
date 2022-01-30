export class ImageComponent {
  private element: HTMLElement;
  constructor(title: string, url: string) {
    const template = document.createElement("template");
    template.innerHTML = `
    <section class="image">
      <div class="img__holder"><img class="image__thumbnail"></div>
      <p class="image__title"></p>
    </section>`;
    this.element = template.content.firstElementChild! as HTMLElement;

    const imageElement = this.element.querySelector(
      ".image__thumbnail"
    )! as HTMLImageElement;
    imageElement.src = url;
    imageElement.alt = title;

    const paragraphElement = this.element.querySelector(
      ".image__title"
    )! as HTMLParagraphElement;
    console.log(paragraphElement);
    paragraphElement.textContent = title;
  }

  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    parent.insertAdjacentElement(position, this.element);
  }
}
