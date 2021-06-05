export class Card {
    buttons: string[];
    content: string;
    icons: string[];
    imageUrl: string;
    subtitle: string;
    title: string;
    raters: string;
    constructor(buttons: string[], content: string, icons: string[], imageUrl: string, subtitle: string,
        title: string, raters: string) {
        this.buttons = buttons;
        this.content = content;
        this.icons = icons;
        this.imageUrl = imageUrl;
        this.subtitle = subtitle;
        this.title = title;
        this.raters = raters;

    }
}