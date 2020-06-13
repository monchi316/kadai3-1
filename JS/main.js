'use strict'

const btn = document.getElementById('btn');
const tasks = [];

btn.addEventListener('click', () => {
  let task = document.getElementById('task').value;
  tasks.push(task);
  add();

});

function add() {
  let tbody = document.querySelector('tbody');
  let tr = document.createElement('tr');
  tbody.appendChild(tr);
  tr.className = 'working';
  
  for(let i=0; i<4; i++) {
    let td = document.createElement('td');
    tr.appendChild(td);
    if(i === 0) {
      td.className = 'idNumber';
      td.textContent = tasks.length - 1;
    } else if (i === 1) {
      td.textContent = task.value;
    } else if (i === 2) {
      let workingbtn = document.createElement('button');
      td.appendChild(workingbtn);
      workingbtn.textContent = '作業中';
    } else if (i === 3) {
      let removebtn = document.createElement('button');
      td.appendChild(removebtn);
      removebtn.textContent = '削除';
    }
  }

  task.value = '';

}
