/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('data_table', function (table) {
    table.increments('task_id').primary()
    table.date('date')
    table.string('task')
    table.integer('type_id')
    table.string('type')
    table.string('notes')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('data_table')
}
