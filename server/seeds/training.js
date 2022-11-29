/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('training').del()
  await knex('training').insert([
    { training_id: 1, task: 'come', task_notes: '' },
    { training_id: 2, task: 'sit', task_notes: '' },
    { training_id: 3, task: 'down', task_notes: '' },
    { training_id: 4, task: 'stay', task_notes: '' },
    { training_id: 5, task: 'its your choice', task_notes: '' },
    { training_id: 6, task: 'leash walking', task_notes: '' },
    { training_id: 7, task: 'go to crate', task_notes: '' },
    { training_id: 8, task: 'get into the car', task_notes: '' },
    { training_id: 9, task: 'shake', task_notes: '' },
    { training_id: 10, task: 'roll over', task_notes: '' },
    { training_id: 11, task: 'hand target', task_notes: '' },
    { training_id: 12, task: 'high five', task_notes: '' },
    { training_id: 13, task: 'backup', task_notes: '' },
    { training_id: 14, task: 'pick up item', task_notes: '' },
    { training_id: 15, task: 'hold item', task_notes: '' },
  ])
}
