function insert_Row() {
	 const table = document.getElementById("sampleTable"); // Get the table by its id
  const row = table.insertRow(0); // Insert a new row at the top (position 0)

  // Create the first cell (left cell) and set its content
  const cell1 = row.insertCell(0);
  cell1.textContent = "New Cell1";

  // Create the second cell (right cell) and set its content
  const cell2 = row.insertCell(1);
  cell2.textContent = "New Cell2";
  
}
