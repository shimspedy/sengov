
        // Function to fetch and display XML data
        function fetchAndDisplayXMLData(url, targetElementId) {
            fetch(url)
                .then(response => response.text())
                .then(data => {
                    const parser = new DOMParser();
                    const xmlDoc = parser.parseFromString(data, 'text/xml');
                    const description = xmlDoc.querySelector('Description').textContent;
                    const footnote = xmlDoc.querySelector('Footnote').textContent; // Get Footnote
                    const rows = Array.from(xmlDoc.querySelectorAll('ArrayOfCell')).map(row => {
                        const cells = Array.from(row.querySelectorAll('Cell'));
                        return cells.map(cell => cell.querySelector('Value').textContent);
                    });
                    const title = xmlDoc.querySelector('Title').textContent;

                    let htmlContent = `
                       <div class="bio">
                        <h2>${title}</h2>
                        <p>${description}</p>
                        <p> ${footnote}</p> <!-- Display Footnote -->
                        </div>
                        <table>
                            <tr>
                                <th>Level</th>
                                <th>Rate</th>
                            </tr>
                    `;

                    rows.forEach(rowData => {
                        const level = rowData[0];
                        const rate = rowData[1];

                        htmlContent += `
                            <tr>
                                <td>${level}</td>
                                <td>${rate}</td>
                            </tr>
                        `;
                    });

                    htmlContent += `</table>`;

                    // Display the HTML content in the specified target element
                    document.getElementById(targetElementId).innerHTML = htmlContent;
                })
                .catch(error => {
                    console.error('Error fetching XML data:', error);
                });
        }
