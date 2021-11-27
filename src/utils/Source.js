class Source {
  constructor({title, url, id, baseRoute, isGrid, grid, section, sectionHeading, attributionInfo}) {
    this.title = title;
    this.baseUrl = url;
    this.baseRoute = baseRoute;
    this.isGrid = isGrid;
    this.grid = grid;
    this.id = id;
    this.section = section;
    this.sectionHeading = sectionHeading;
    this.attributionInfo = attributionInfo;
  }

  getRoot = () => {
    return `/opensource/footnote/`;
  }

  getURL = () => {
    return (this.baseUrl || `https://www.google.com/search?q=${this.getShortCode()}`);
  }

  getRoute = () => {
    const route = this.baseRoute || `${this.getRoot()}${this.id}`;
    return route;
  }

  getShortCode = () => {
    return (this.title.toLowerCase().trim().replace(" ", "-"));
  }
}

export default Source;