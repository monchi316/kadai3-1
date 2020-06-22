'use strict'
{
  const btn = document.getElementById('btn');
  const tasks = [];
  const taskForm = document.getElementById('taskForm');
  // 追加ボタン
  btn.addEventListener('click', () => {
    if (taskForm.value) {
      addTask();
    }
  });
  // ↓関数内容↓
  // タスクの追加
  const addTask = () => {
    const task = {
      idNumber: '',
      taskName: taskForm.value,
      status: { 0: '作業中', 1: '完了' },
    }
    tasks.push(task);
    const tbody = document.querySelector('tbody');
    while (tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
    }
    tasks.forEach((task, index) => {
      const tr = document.createElement('tr');
      tbody.appendChild(tr);
      tr.className = 'working';
      const itd = document.createElement('td');
      tr.appendChild(itd);
      itd.textContent = index;
      const ttd = document.createElement('td');
      tr.appendChild(ttd);
      ttd.textContent = task.taskName;
      const std = document.createElement('td');
      tr.appendChild(std);
      const statusbtn = document.createElement('button');
      std.appendChild(statusbtn);
      statusbtn.name = 'statusbtn';
      statusbtn.textContent = task.status[0];
      const td = document.createElement('td');
      tr.appendChild(td);
      const removebtn = document.createElement('button');
      td.appendChild(removebtn);
      removebtn.name = 'removebtn';
      removebtn.textContent = '削除';
    });
    taskForm.value = '';
  }
}