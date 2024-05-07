// Import Remarkable class from 'remarkable' module
import { Remarkable } from "remarkable";

// Create a new instance of Remarkable
const md = new Remarkable();

// Markdown text to be parsed
const markdownText = `
# Hello, Markdown!

This is a **simple** example of Markdown syntax.

- Lists
- Are
- Easy

\`\`\`javascript
// Code blocks
function greet(name) {
    return 'Hello, ' + name + '!';
}
\`\`\`

[Learn more about Markdown](https://commonmark.org/help/)
`;

// Parse Markdown text into HTML
const html = md.render(markdownText);

// Output the generated HTML
console.log(html);

const Grocery = () => {
  return (
    <div>
      <h1>
        Welcome to our Grocery Store with great deals and exiciting offers !!!!
      </h1>
    </div>
  );
};

export default Grocery;
