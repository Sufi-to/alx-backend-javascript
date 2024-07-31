interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Tomas",
    lastName: "Tecle",
    age: 24,
    location: "Asmara"
}

const student2: Student = {
    firstName: "Yonas",
    lastName: "Tecle",
    age: 20,
    location: "Adi keyih"
}

const studentsList: Student[] = [student1, student2];
const body = document.body;

function generateTable() {
  // creates a <table> element and a <tbody> element
  const tbl = document.createElement("table");
  const tblBody = document.createElement("tbody");

  // creating all cells
  for (let i = 0; i < studentsList.length; i++) {
    // creates a table row
    const row = document.createElement("tr");

    const cell = document.createElement("td");
    const cellText = document.createTextNode(`${studentsList[i].firstName}`);
    const cell2 = document.createElement("td")
    const cellText2 = document.createTextNode(`${studentsList[i].location}`);

    cell.appendChild(cellText);
    cell2.appendChild(cellText2)
    row.appendChild(cell);
    row.appendChild(cell2)
   

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  document.body.appendChild(tbl);
  // sets the border attribute of tbl to '2'
  tbl.setAttribute("border", "2");
}
generateTable()