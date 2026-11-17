const taskInput = document.querySelector('.taskInput');
const descInput = document.querySelector('textarea');
const ul = document.getElementById('task-list');
const todoCount = document.getElementById('todo-count');

const btnDueDate = document.getElementById('btn-due-date');
const btnAssign = document.getElementById('btn-assign');
const btnCancel = document.getElementById('btn-cancel');
const btnAdd = document.getElementById('btn-add');

const dueDateInput = document.getElementById('due-date-input');
const assignSelect = document.getElementById('assign-select');
const dateBtnText = document.getElementById('date-btn-text');
const assignBtnText = document.getElementById('assign-btn-text');

const tabNotifications = document.getElementById('tab-notifications');
const tabTodo = document.getElementById('tab-todo');
const notificationsView = document.getElementById('notifications-view');

const defaultTasks = [
    {
        id: 1,
        taskName: 'Complete main UI components',
        desc: 'Would be good if we include every componet in design system...',
        date: '6 Apr 2022',
        userName: 'Esther Howard',
        overdue: true,
        completed: false
    },
    {
        id: 2,
        taskName: 'Landing page design',
        desc: '',
        date: '10 Apr 2022',
        userName: 'Brooklyn Simmons',
        overdue: false,
        completed: false
    },
    {
        id: 3,
        taskName: 'Brand Guidelines',
        desc: '',
        date: '',
        userName: '',
        overdue: false,
        completed: false
    }
];

let tasksContainer = JSON.parse(localStorage.getItem('tasks_v2')) || defaultTasks;

function formatDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });
}

// Update active task counter badge
function updateCounter() {
    const activeCount = tasksContainer.filter(t => !t.completed).length;
    todoCount.textContent = activeCount;
}

// Render all tasks
function renderAllTasks() {
    ul.innerHTML = '';
    tasksContainer.forEach(item => renderTask(item));
    updateCounter();
}

function renderTask(task) {
    const li = document.createElement('li');
    if (task.completed) li.classList.add('completed');

    const hasMeta = task.date || task.userName;

    li.innerHTML = `
        <input type="checkbox" ${task.completed ? 'checked' : ''}>
        <div class="task-content">
            <h2>${task.taskName}</h2>
            ${task.desc ? `<p>${task.desc}</p>` : ''}
            ${hasMeta ? `
                <div class="task-meta">
                    ${task.date ? `
                        <span class="${task.overdue ? 'overdue' : ''}">
                            <iconify-icon icon="mdi:calendar-blank-outline"></iconify-icon>
                            ${task.date}
                        </span>
                    ` : ''}
                    ${task.date && task.userName ? `<span class="dot">•</span>` : ''}
                    ${task.userName ? `
                        <span>
                            <iconify-icon icon="mdi:account-outline"></iconify-icon>
                            ${task.userName}
                        </span>
                    ` : ''}
                </div>
            ` : ''}
        </div>
    `;


    const checkbox = li.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', () => {
        task.completed = checkbox.checked;
        li.classList.toggle('completed', task.completed);
        saveTasks();
        updateCounter();
    });

    ul.appendChild(li);
}

function saveTasks() {
    localStorage.setItem('tasks_v2', JSON.stringify(tasksContainer));
}

const clearForm = () => {
    taskInput.value = '';
    descInput.value = '';
    dueDateInput.value = '';
    dueDateInput.classList.add('hidden');
    assignSelect.classList.add('hidden');
    dateBtnText.textContent = 'Due Date';
    assignBtnText.textContent = 'Assign To';
};

btnDueDate.addEventListener('click', () => {
    dueDateInput.classList.toggle('hidden');
    if (!dueDateInput.classList.contains('hidden')) {
        dueDateInput.focus();
    }
});

dueDateInput.addEventListener('change', () => {
    dateBtnText.textContent = dueDateInput.value ? formatDate(dueDateInput.value) : 'Due Date';
});

btnAssign.addEventListener('click', () => {
    assignSelect.classList.toggle('hidden');
    if (!assignSelect.classList.contains('hidden')) {
        assignBtnText.textContent = assignSelect.value;
    }
});

assignSelect.addEventListener('change', () => {
    assignBtnText.textContent = assignSelect.value;
});

// Add Task button
btnAdd.addEventListener('click', () => {
    const name = taskInput.value.trim();
    if (!name) return;

    const selectedDate = dueDateInput.value;
    const isOverdue = selectedDate ? new Date(selectedDate) < new Date().setHours(0, 0, 0, 0) : false;

    const newTask = {
        id: Date.now(),
        taskName: name,
        desc: descInput.value.trim(),
        date: selectedDate ? formatDate(selectedDate) : '',
        userName: !assignSelect.classList.contains('hidden') ? assignSelect.value : '',
        overdue: isOverdue,
        completed: false
    };

    tasksContainer.push(newTask);
    renderTask(newTask);
    saveTasks();
    updateCounter();
    clearForm();
});

btnCancel.addEventListener('click', clearForm);

tabNotifications.addEventListener('click', () => {
    tabNotifications.classList.add('active');
    tabTodo.classList.remove('active');
    ul.classList.add('hidden');
    notificationsView.classList.remove('hidden');
});

tabTodo.addEventListener('click', () => {
    tabTodo.classList.add('active');
    tabNotifications.classList.remove('active');
    notificationsView.classList.add('hidden');
    ul.classList.remove('hidden');
});


renderAllTasks();