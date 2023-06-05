let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    let employee = JSON.parse(xhr.responseText);
    let statusHtml = `<ul class="bulleted">`;
    for (let i = 0; i < employee.length; i++) {
      if (employee[i].inoffice === true) {
        statusHtml += `<li class="in">`;
      } else {
        statusHtml += `<li class="out">`;
      }
      statusHtml += employee[i].name;
      statusHtml += `</li>`;
    }
    statusHtml += `</ul>`;
    document.querySelector("#employeeList").innerHTML = statusHtml;
  }
};
xhr.open("GET", "../data/employees.json");
xhr.send();

let ajax = new XMLHttpRequest();
ajax.onreadystatechange = function () {
  if (ajax.readyState === 4) {
    let rooms = JSON.parse(ajax.responseText);
    let roomHTML = `<ul class="rooms"> `;
    for (let i = 0; i < rooms.length; i++) {
      if (rooms[i].available === true) {
        roomHTML += `<li class="Empty">`;
      } else {
        roomHTML += `<li class="Full">`;
      }
      roomHTML += rooms[i].room;
      roomHTML += `</li>`;
    }
    roomHTML += `</ul>`;
    document.querySelector("#roomList").innerHTML = roomHTML;
  }
};
ajax.open("GET", "../data/rooms.json");
ajax.send();
