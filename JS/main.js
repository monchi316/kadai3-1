'use strict'

const btn = document.getElementById('btn');
const tasks = [];

// 追加ボタン
btn.addEventListener('click', () => {  
  addTask();  
});



// ↓関数内容↓

// タスクの追加
const addTask = () => {
  const task = {
    id: tasks.length,
    taskName: document.getElementById('taskForm').value,
    status: '作業中',
    remove: '削除',
  }
  tasks.push(task);

  const tbody = document.querySelector('tbody');
  const tr = document.createElement('tr');
  tbody.appendChild(tr);
  tr.className = 'working';
  
  const keys = Object.keys(task);
  keys.forEach(key => {
    const td = document.createElement('td');
    tr.appendChild(td);
    if (task[key] === '作業中') {
      const workingbtn = document.createElement('button');
      td.appendChild(workingbtn);
      workingbtn.textContent = task.status;
    } else if (task[key] === '削除') {
      const removebtn = document.createElement('button');
      td.appendChild(removebtn);
      removebtn.textContent = task.remove;
    } else {
      td.textContent = task[key];
    }
  });
   
  taskForm.value = '';

}
