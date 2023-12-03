db.task.insertMany([
    { id: 1, task_completion: true, pending_tasks_id: [] },
    { id: 2, task_completion: true, pending_tasks_id: [] },
    { id: 3, task_completion: false, pending_task_id: [1, 2] },
    { id: 4, task_completion: true, pending_tasks_id: [] },
    { id: 5, task_completion: false, pending_tasks_id: [2] },
  ]);
  