export class ArchetypeDisplay {
  constructor(element) {
    this.archetype = element;
  }
  getName() {
    return this.archetype.element(by.css('h3')).getText();
  }
  select() {
    return this.archetype.element(by.css('a img')).click();
  }

  static getAllNames() {
    return element.all(by.css('archetype-display h3')).getText();
  }
}
