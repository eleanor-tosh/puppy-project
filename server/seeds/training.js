/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('training').del()
  await knex('training').insert([
    { training_id: 1, task: 'Come', task_notes: '' },
    { training_id: 2, task: 'Sit', task_notes: '' },
    { training_id: 3, task: 'Down', task_notes: '' },
    { training_id: 4, task: 'Stay', task_notes: '' },
    { training_id: 5, task: 'Its your choice', task_notes: '' },
    { training_id: 6, task: 'Leash walking', task_notes: '' },
    { training_id: 7, task: 'Go to crate', task_notes: '' },
    { training_id: 8, task: 'Get into the car', task_notes: '' },
    { training_id: 9, task: 'Get out of the car', task_notes: '' },
    { training_id: 10, task: 'Shake', task_notes: '' },
    { training_id: 11, task: 'Roll over', task_notes: '' },
    { training_id: 12, task: 'Hand target', task_notes: '' },
    { training_id: 13, task: 'High five', task_notes: '' },
    { training_id: 15, task: 'Backup', task_notes: '' },
    { training_id: 16, task: 'Pick up item', task_notes: '' },
    { training_id: 17, task: 'Hold item', task_notes: '' },
  ])
}
