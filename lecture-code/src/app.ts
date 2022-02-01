import { Component } from "./components/component.js";
import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import {
  Composable,
  PageComponent,
  PageItemComponent,
} from "./components/page/page.js";

class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(appRoot);

    const image = new ImageComponent(
      "Image Component",
      "https://picsum.photos/600/300"
    );
    this.page.addChild(image);

    const video = new VideoComponent(
      "Video Component",
      "https://youtu.be/3ghhxb5txPg?list=RD3ghhxb5txPg"
    );
    this.page.addChild(video);

    const note = new NoteComponent("This is NoteComponent", "Paragraph");
    this.page.addChild(note);

    const todo = new TodoComponent("This is TodoComponent", "Checkbox");
    this.page.addChild(todo);
  }
}

new App(document.querySelector(".document")! as HTMLElement);
