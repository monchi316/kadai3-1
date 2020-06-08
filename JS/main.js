'use strict'

const btn = document.getElementById('btn');
const tasks = [];

btn.addEventListener('click', () => {
  var task = document.getElementById('task').value;
  tasks.push(task);
  add();

});

function add() {
  var tbody = document.querySelector('tbody');
  var tr = document.createElement('tr');
  tbody.appendChild(tr);
  var td = document.createElement('td');
  tr.appendChild(td);
  td.textContent = tasks.length - 1;
  var td = document.createElement('td');
  tr.appendChild(td);
  td.textContent = task.value;
  var td = document.createElement('td');
  tr.appendChild(td);
  var workingbtn = document.createElement('button');
  td.appendChild(workingbtn);
  workingbtn.textContent = '作業中';
  var td = document.createElement('td');
  tr.appendChild(td);
  var removebtn = document.createElement('button');
  td.appendChild(removebtn);
  removebtn.textContent = '削除';
}