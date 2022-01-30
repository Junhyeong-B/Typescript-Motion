import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import { PageComponent } from "./components/page/page.js";

class App {
  private readonly page: PageComponent;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    const image = new ImageComponent(
      "Image Component",
      "https://picsum.photos/600/300"
    );
    image.attachTo(appRoot, "beforeend");

    const video = new VideoComponent(
      "Video Component",
      "https://youtu.be/3ghhxb5txPg?list=RD3ghhxb5txPg"
    );
    video.attachTo(appRoot, "beforeend");

    const note = new NoteComponent("This is NoteComponent", "Paragraph");
    note.attachTo(appRoot, "beforeend");

    const todo = new TodoComponent("This is TodoComponent", "Checkbox");
    todo.attachTo(appRoot, "beforeend");
  }
}

new App(document.querySelector(".document")! as HTMLElement);
