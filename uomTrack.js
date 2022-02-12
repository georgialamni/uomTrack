"use strict";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}

// input

let myTable;

const uomTrackTable = document.getElementsByClassName("uomTrack");
for (let i = 0; i < (uomTrackTable.length - 1); i++) {
  uomTrackTable[i].classList.add("table");
  uomTrackTable[i].setAttribute("id", "sortMe");

  
  const head = uomTrackTable[i].querySelector("thead");
  head.className = "thead";

  
  myTable = uomTrackTable[i].querySelector("tbody");
  myTable.className = "tbody";
  myTable.setAttribute("id", "tbody");

  
  const myRow = uomTrackTable[i].querySelectorAll("tr");
  myRow.forEach((row) => {
    row.className = "tr";
  });

  
  const myHeader = uomTrackTable[i].querySelectorAll("th");
  myHeader.forEach((header) => {
    header.className = "th";
  });

  
  const td = uomTrackTable[i].querySelectorAll("td");
  td.forEach((tdata) => {
    tdata.className = "td";
    const input = document.createElement("input");
    input.type = "text";
    input.value = tdata.innerText;
    input.className = "inputs";
    tdata.innerHTML = "";
    tdata.appendChild(input);
  });
}

// tfoot
const last = document.querySelectorAll("td:nth-child(4)");

let lastCell = [];
last.forEach((cell) => {
    lastCell.push(parseFloat(cell.getElementsByTagName("input")[0].value));
});

const max = Math.max.apply(Math, lastCell);
const min = Math.min.apply(Math, lastCell);
const avg = (lastCell) => lastCell.reduce((a,b) => a + b, 0) / lastCell.length;


/**
 * Sorts a HTML table.
 * 
 * @param {HTMLTableElement} table The table to sort
 * @param {number} column The index of the column to sort
 * @param {boolean} asc Determines if the sorting will be in ascending
 */

 function sortTableByColumn(table, column, asc = true) {
  const dirModifier = asc ? 1 : -1;
  const tBody = table.tBodies[0];
  const rows = Array.from(tBody.querySelectorAll("tr"));

  // Sort each row
  const sortedRows = rows.sort((a, b) => {
      const aColText = a.querySelector(`td:nth-child(${column + 1 })`).textContent.trim();
      const bColText = b.querySelector(`td:nth-child(${column + 1 })`).textContent.trim();

      return aColText > bColText ? (1 * dirModifier) : (-1 * dirModifier);
  });

  // Re-add the newly sorted rows
  tBody.append(...sortedRows);

  // Remember how the column is currently sorted
  table.querySelectorAll("th").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
  table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle("th-sort-asc", asc);
  table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle("th-sort-desc", !asc);
}


document.querySelectorAll(".uomTrack th").forEach(headerCell => {
  headerCell.addEventListener("click", () => {
      const tableElement = headerCell.parentElement.parentElement.parentElement;
      const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);
      const currentIsAscending = headerCell.classList.contains("th-sort-asc");

      sortTableByColumn(tableElement, headerIndex, !currentIsAscending);
  });
});

const bodyRows = myTable.getElementsByTagName("tr");

  // copy button 
  const copyButton = document.createElement("button");
  const copyIcon = document.createElement("img");
  for (copyIcon = 0; copyIcon < (bodyRows.length - 1); i++) {
    copyIcon.src = "copy-icon.svg";
    copyIcon.title = "Copy";
    copyButton.appendChild(copyIcon);
    copyButton.addEventListener("click", () => {
      const rowToCopy = document.getElementById(copy-button).parentElement;
      const clone = rowToCopy.cloneNode(true);
      myTable.appendChild(clone);
    });
  }


  // delete button 
  const deleteButton = document.createElement("button");
  const deleteIcon = document.createElement("img");
  for (deleteIcon = 0; deleteIcon < (bodyRows.length - 1); i++) {
    deleteIcon.src = "delete-icon.svg";
    deleteIcon.title = "Delete";
    deleteButton.appendChild(deleteIcon);
    deleteButton.addEventListener("click", () => {
      const rowToDelete = document.getElementById(delete-button).parentElement;
      rowToDelete.remove();
    });
  }


// filter 
const rankFilter = document.getElementById("rankFilter");
function filterRank() {

}

const participantFilter = document.getElementById("rankFilter");
function filterParticipant() {
  
}

const countryFilter = document.getElementById("rankFilter");
function filterCountry() {
  
}

const timeFilter = document.getElementById("rankFilter");
function filterTime() {
  
}
