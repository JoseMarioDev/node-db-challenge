exports.seed = function(knex, Promise) {
  return knex('projects').insert([
    {
      project_name: 'pack',
      project_description: 'box up belongings for new house',
      completed: 1,
    },
    {
      project_name: 'doors',
      project_description: 'replace screen doors',
      completed: 0,
    },
    {
      project_name: 'surgery',
      project_description: 'follow doctors orders',
      completed: 0,
    },
  ]);
};
