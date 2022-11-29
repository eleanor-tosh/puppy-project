/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('handling').del()
  await knex('handling').insert([
    {
      handling_id: 1,
      task: 'Play with feet',
      task_notes: 'Keep it casual, mix in some treats and play',
    },
    {
      handling_id: 2,
      task: 'Add a treat to a meal',
      task_notes:
        'Let the puppy know that good things happen when hands approach them while eating',
    },
    {
      handling_id: 3,
      task: 'Brush/comb body',
      task_notes:
        'Keep the session short, especially if the puppy is not sure about being brushed, reward for good behaviour',
    },
  ])
}
