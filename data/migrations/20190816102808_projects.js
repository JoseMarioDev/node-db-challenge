exports.up = function(knex) {
  return knex.schema

    .createTable('projects', tbl => {
      tbl.increments();
      tbl
        .string('project_name', 255)
        .notNullable()
        .unique();
      tbl.string('description', 4000);
      tbl
        .boolean('completed')
        .notNullable()
        .defaultTo(false); //<----might need to be string
    })

    .createTable('tasks', tbl => {
      tbl.increments();
      tbl.string('ingredient_name', 255).notNullable();
      tbl.string('description', 4000).notNullable();
      tbl.string('notes', 4000);
      tbl
        .boolean('completed')
        .notNullable()
        .defaultTo(false); //<----might need to be string
      tbl
        .references('id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE'); // if the PK on primary table changes, what to do?
    })

    .createTable('resources', tbl => {
      tbl.increments();
      tbl.string('resource_name', 255).notNullable();
      tbl.string('description', 4000);
    })

    .createTable('projects_resources', tbl => {
      tbl.increments();
      tbl
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE'); // if the PK on primary table changes, what to do?
      tbl
        .integer('resource_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resources')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE'); // if the PK on primary table changes, what to do?
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projects_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects');
};
