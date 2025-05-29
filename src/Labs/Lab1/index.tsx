export default function Lab1() {
    return (
      <div id="wd-lab1">
        <h2>Lab 1</h2>
        <h3>Mahimanjali Lolla - Summer 1 Web Development</h3>
        
        <h3>HTML Examples</h3>
        
        {/* Heading Tags */}
        <div id="wd-h-tag">
          <h4>Heading Tags</h4>
          Text documents are often broken up into several sections and
          subsections. Each section is usually prefaced with a short
          title or heading that attempts to summarize the topic.
        </div>
        
        {/* Paragraph Tags */}
        <div id="wd-p-tag">
          <h4>Paragraph Tag</h4>
          <p id="wd-p-1">
            This is a paragraph. We often separate a long set
            of sentences with vertical spaces to make the text
            easier to read.
          </p>
          <p id="wd-p-2">
            This is the first paragraph. The paragraph tag is used to format
            vertical gaps between long pieces of text like this one.
          </p>
        </div>
        
        {/* List Tags */}
        <div id="wd-lists">
          <h4>List Tags</h4>
          <h5>Ordered List Tag</h5>
          How to make pancakes:
          <ol id="wd-pancakes">
            <li>Mix dry ingredients.</li>
            <li>Add wet ingredients.</li>
            <li>Stir to combine.</li>
            <li>Heat a skillet or griddle.</li>
            <li>Pour batter onto the skillet.</li>
            <li>Cook until bubbly on top.</li>
            <li>Flip and cook the other side.</li>
            <li>Serve and enjoy!</li>
          </ol>
        </div>
      </div>
    );
  }
