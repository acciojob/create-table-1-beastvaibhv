function insert_Row() {
	let count = 1;
    const table = document.getElementById("sampleTable"); 
	const row = document.createElement("tr");
	const rowData1 = document.createElement("td");
	const rowData2 = document.createElement("td");
	row.appendChild(rowData1);
	row.appendChild(rowData2);
	row.firstChild.textContent ="New Cell1";
	row.lastChild.textContent ="New Cell2";
	table.insertBefore(row, table.firstChild);
  
}
