exports.seed = function(knex, Promise) {
  return knex('resources').insert([
    {
      resource_name: 'moving truck',
      resource_description: 'schedule U-Haul',
    },
    {
      resource_name: 'paint',
      resource_description: 'buy off white outdoor paint',
    },
    {
      resource_name: 'clothes',
      resource_description: 'have bag ready to go',
    },
  ]);
};
