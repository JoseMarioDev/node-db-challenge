exports.seed = function(knex, Promise) {
  return knex('tasks').insert([
    {
      project_id: '1',
      task_description: 'buy boxes',
      notes: 'get them from the store',
      completed: 'false',
    },
    {
      project_id: '2',
      task_description: 'new handles',
      notes: 'buy new door handles from hardware store',
      completed: 'false',
    },
    {
      project_id: '3',
      task_description: 'medication',
      notes: 'take all required meds before visit',
      completed: 'false',
    },
  ]);
};
