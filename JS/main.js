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
    tbody.innerHTML = '';
    tasks.forEach((task, index) => {
      const createTask = () => {
        const tr = document.createElement('tr');
        const itd = document.createElement('td');
        const ttd = document.createElement('td');
        const std = document.createElement('td');
        const rtd = document.createElement('td');
        const statusbtn = document.createElement('button');
        const removebtn = document.createElement('button');
        tbody.appendChild(tr);
        tr.appendChild(itd);
        tr.appendChild(ttd);
        tr.appendChild(std);
        tr.appendChild(rtd);
        std.appendChild(statusbtn);
        rtd.appendChild(removebtn);
        tr.className = 'working';
        itd.textContent = index;
        ttd.textContent = task.taskName;
        statusbtn.name = 'statusbtn';
        statusbtn.textContent = task.status[0];
        removebtn.name = 'removebtn';
        removebtn.textContent = '削除';
      }
      createTask();
      taskForm.value = '';
    });
  }
}