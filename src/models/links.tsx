export default class Links {
  public icon: string;
  public name: string;
  public url: string;

  constructor(private linkIcon: string, private linkName: string, private linkUrl: string) {
    this.icon = linkIcon;
    this.name = linkName;
    this.url = linkUrl;
  }
}