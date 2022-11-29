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
      task_notes: 'Keep it casual, mix in some treats and play.',
    },
    {
      handling_id: 2,
      task: 'Add a treat to a meal',
      task_notes:
        'Let the puppy know that good things happen when hands approach them while eating.',
    },
    {
      handling_id: 3,
      task: 'Brush/comb body',
      task_notes:
        'Keep the session short, especially if the puppy is not sure about being brushed, reward for good behaviour.',
    },
    {
      handling_id: 4,
      task: 'Check ears',
      task_notes: 'Be gentle, keep it casual.',
    },
    {
      handling_id: 5,
      task: 'Check teeth',
      task_notes:
        'Keep it short, this isn not always suuper comfortable for the puppy.',
    },
    {
      handling_id: 6,
      task: 'Brush/comb body',
      task_notes:
        'Keep the session short, especially if the puppy is not sure about being brushed, reward for good behaviour.',
    },
    {
      handling_id: 7,
      task: 'Groom face',
      task_notes: 'Try with a gentle brush or a damp cloth.',
    },
    {
      handling_id: 8,
      task: 'Lead by the collar',
      task_notes:
        'Practice guiding the puppy while holding the collar so they remain calm.',
    },
    {
      handling_id: 9,
      task: 'Handling in different environments',
      task_notes: 'Check your puppy over in a new environment.',
    },
    {
      handling_id: 10,
      task: 'Visit the vet',
      task_notes:
        'Do this often to build up a history of the vet being a good place to visit. Feed treats on the scales, get the receptionist to touch and examine your puuppy if possible.',
    },
    {
      handling_id: 11,
      task: 'Have a bath',
      task_notes:
        'Take it slow. If the puppy is worried about the bath, have some dry runs with lots of treats.',
    },
    {
      handling_id: 12,
      task: 'Hair dryer',
      task_notes:
        'Take it slow. Let the puppy investigate while turned of, then on but not moving before moving onto directing the air towards the puppy if they are ready.',
    },
    {
      handling_id: 13,
      task: 'Towel dry',
      task_notes:
        'Being towel dried couuld be common duuring winter. Get the puppy used to it so they will let you dry them.',
    },
  ])
}
