exports.seed = function(knex, Promise) {
  return knex('projects').insert([
    {
      project_name: 'pack',
      description: 'box up belongings for new house',
      completed: 'false',
    },
    {
      project_name: 'doors',
      description: 'replace screen doors',
      completed: 'false',
    },
    {
      project_name: 'surgery',
      description: 'follow doctors orders',
      completed: 'false',
    },
  ]);
};
