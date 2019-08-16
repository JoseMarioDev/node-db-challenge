exports.seed = function(knex, Promise) {
  return knex('tasks').insert([
    {
      project_id: '1',
      description: 'buy boxes',
      notes: 'get them from the store',
      completed: 'false',
    },
    {
      project_id: '2',
      description: 'new handles',
      notes: 'buy new door handles from hardware store',
      completed: 'false',
    },
    {
      project_id: '3',
      description: 'medication',
      notes: 'take all required meds before visit',
      completed: 'false',
    },
  ]);
};
