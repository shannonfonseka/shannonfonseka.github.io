function loadMarkdownDoc(file) {
  fetch(file)
    .then(res => res.text())
    .then(md => {
      const html = marked.parse(md);
      document.getElementById('doc-content').innerHTML = html;
    })
    .catch(err => {
      document.getElementById('doc-content').innerHTML = "<p>⚠️ Failed to load the document.</p>";
      console.error(err);
    });
}
