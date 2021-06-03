function PortfolioCard(title, description, website, github) {
  this.title = title;
  this.description = description;
  this.website = website;
  this.github = github;
}

const bookSearch = new PortfolioCard(
    "Book Search",
    "A MERN website utilizing the GoogleBooks API to search for and save books of interest",
    "https://secret-bayou-60667.herokuapp.com/",
    "https://github.com/NathanJamis/book-search"
);

const techBlog = new PortfolioCard(
    "Tech Blog",
    "A CMS-style blog site to publish articles, blog posts, thoughts, and opinions",
    "https://rocky-hollows-52762.herokuapp.com/",
    "https://github.com/NathanJamis/TechBlog"
);

const dejaBrew = new PortfolioCard(
    "Deja Brew",
    "Signup or login to discover new breweries and interact with other users",
    "https://guarded-bayou-67190.herokuapp.com/",
    "https://github.com/NathanJamis/Deja-Brew"
);

const cureForBoredom = new PortfolioCard(
    "Cure For Boredom",
    "Distract yourself from the pandemic with a dashboard of fun entertainment",
    "https://nathanjamis.github.io/CureForBoredom/",
    "https://github.com/NathanJamis/CureForBoredom"
);

let projects = [bookSearch, techBlog, dejaBrew, cureForBoredom];

export default projects;