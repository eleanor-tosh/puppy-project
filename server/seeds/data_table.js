/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('data_table').del()
  await knex('data_table').insert([
    {
      task_id: 1,
      date: '2022/11/29',
      task: 'Add treat to dinner',
      type_id: '1',
      type: 'Handling',
      notes: 'Was fine',
    },
    {
      task_id: 2,
      date: '2022/11/29',
      task: 'Brush/comb face',
      type_id: '1',
      type: 'Handling',
      notes: 'A bit wiggly',
    },
    {
      task_id: 3,
      date: '2022/11/29',
      task: 'Sit training session',
      type_id: '2',
      type: 'Training',
      notes: 'Nearly has verbal command',
    },
    {
      task_id: 4,
      date: '2022/11/29',
      task: 'Met a child',
      type_id: '3',
      type: 'Social',
      notes: 'Had a lot of fun',
    },
    {
      task_id: 5,
      date: '2022/11/29',
      task: 'Had an ice cube',
      type_id: '4',
      type: 'New Experience',
      notes: 'Didn not know what to do, very funny',
    },
  ])
}
