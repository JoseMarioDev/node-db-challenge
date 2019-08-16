exports.seed = function(knex, Promise) {
  return knex('projects').insert([
    {
      project_name: 'pack',
      project_description: 'box up belongings for new house',
      completed: 'false',
    },
    {
      project_name: 'doors',
      project_description: 'replace screen doors',
      completed: 'false',
    },
    {
      project_name: 'surgery',
      project_description: 'follow doctors orders',
      completed: 'false',
    },
  ]);
};
