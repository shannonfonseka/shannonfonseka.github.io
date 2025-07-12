function loadMarkdownDoc(file) {
    fetch(file)
        .then(res => {
            // Check if the response status is OK (status code 200-299)
            if (!res.ok) {
                // If the response is not OK, throw an error with the status text
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.text(); // Proceed only if the response is OK
        })
        .then(md => {
            const html = marked.parse(md);
            document.getElementById('doc-content').innerHTML = html;
        })
        .catch(err => {
            // Display the custom error message in the DOM
            document.getElementById('doc-content').innerHTML = "<h1 style='font-size: 30px;color: darkred'>404 error</h1>" +
                "<p style='font-size: 20px'>⚠️ I'm sorry it looks like this link to the page is invalid.</p>" +
                "<a href='../docs/docs.html'>Check the list here</a>";
            console.error(err); // Log the error for debugging purposes
        });
}