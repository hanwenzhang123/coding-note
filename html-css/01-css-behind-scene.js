//Three Pillars of Writing Good HTML and CSS 
1. responsive design
  - fluid layouts
  - media queries
  - responsive images
  - correct units
  - desktop-first vs mobile-first

2. maintainable and scalable code
  - clean
  - easy to understand
  - growth
  - reusable
  - how to organize files
  - how to name classes
  - how to structure html
  
3. web performance
  - less http requests
  - less code
  - compress code
  - use a css preprocessor
  - less images
  - compress images
  
//How CSS Works Behind the Scenes
load htmml - parse html - document object model(dom)
              load css - parse css -> 1. resolve conflicting css declaration (cascade). 2. process final css values - css object model 
              
document object model - css object model - render tree - website rendering: the visual formatting model - final rendered website

//How CSS is Parsed
Part 1: The Cascade and Specificity
selector {declaration block with property: declared value}
cascade: process of the combining different stylesheets and resolving conflicts between different css rules and declarations, when more than one rule applies to a certain element
- anthor, user, browser (user agent)

importance(weight) > specificty > source order
//importance
1. user !important declaration
2. author !important declarations
3. author declarations
4. user declarations
5. default broswer declarations
//specificty
1. inline styles
2. id
3. classes, pseudo-classes, attribute
4. elements, pseudo-elements
//source order


Part 2: Value Processing


Part 3: Inheritance





