class Source {
  constructor(title, url, id, baseRoute) {
    this.title = title;
    this.baseUrl = url;
    this.baseRoute = baseRoute;
    this.id = id;
  }

  getURL = () => {
    return (this.baseUrl || `https://www.google.com/search?q=${this.getShortCode()}`);
  }

  getRoute = () => {
    const route = this.baseRoute || `/opensource/footnote/${this.id}`;
    return route;
  }

  getShortCode = () => {
    return (this.title.toLowerCase().trim().replace(" ", "-"));
  }
}

export default Source;