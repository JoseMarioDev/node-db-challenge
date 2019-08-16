exports.seed = function(knex, Promise) {
  return knex('resources').insert([
    {
      resource_name: 'moving truck',
      description: 'schedule U-Haul',
    },
    {
      resource_name: 'paint',
      description: 'buy off white outdoor paint',
    },
    {
      resource_name: 'clothes',
      description: 'have bag ready to go',
    },
  ]);
};
