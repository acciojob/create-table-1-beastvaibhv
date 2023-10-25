function insert_Row() {
    const table = document.getElementById("sampleTable"); 
	const row = document.createElement("tr");
	const rowData1 = document.createElement("td");
	rowData1.textContent ="New Cell1";
	const rowData2 = document.createElement("td");
	rowData2.textContent ="New Cell2";
	row.appendChild(rowData1);
	row.appendChild(rowData2);
	table.insertBefore(row, table.firstChild);
  
}
