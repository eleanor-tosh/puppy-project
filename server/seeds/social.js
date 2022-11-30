/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('social').del()
  await knex('social').insert([
    {
      social_id: 1,
      task: 'Met a old man',
      task_notes: 'Encourage calmness.',
    },
    {
      social_id: 2,
      task: 'Met a old woman',
      task_notes: 'Encourage calmness.',
    },
    { social_id: 3, task: 'Met a middle aged man', task_notes: '' },
    { social_id: 4, task: 'Met a middle aged woman', task_notes: '' },
    { social_id: 5, task: 'Met a teenager', task_notes: '' },
    {
      social_id: 6,
      task: 'Met a child (8-14)',
      task_notes: 'Always actively supervised.',
    },
    {
      social_id: 7,
      task: 'Met a young child (4-8)',
      task_notes: 'Always actively supervised.',
    },
    {
      social_id: 8,
      task: 'Met a toddler (2-4)',
      task_notes: 'Always actively supervised.',
    },
    {
      social_id: 9,
      task: 'Met a mobile baby (1-2)',
      task_notes: 'Always actively supervised.',
    },
    {
      social_id: 10,
      task: 'Met an immobile baby (0-1)',
      task_notes: 'Always actively supervised.',
    },
    {
      social_id: 11,
      task: 'Met a man of a different race to household',
      task_notes:
        'Someone who looks and/or sounds different to what the puppy is used to.',
    },
    {
      social_id: 12,
      task: 'Met a woman of a different race to household',
      task_notes:
        'Someone who looks and/or sounds different to what the puppy is used to.',
    },
    {
      social_id: 13,
      task: 'Met a friendly adult dog of a different household',
      task_notes: 'Always actively supervised.',
    },
    {
      social_id: 14,
      task: 'Met an older puppy',
      task_notes: 'Always actively supervised.',
    },
    {
      social_id: 15,
      task: 'Met a similar age puppy',
      task_notes: 'Always actively supervised.',
    },
    {
      social_id: 16,
      task: 'Met a younger puppy',
      task_notes: 'Always actively supervised.',
    },
    {
      social_id: 17,
      task: 'Met a cat',
      task_notes:
        'Always actively supervised. Might only see the animal without direct interaction.',
    },
    {
      social_id: 18,
      task: 'Met a chicken',
      task_notes:
        'Always actively supervised. Might only see the animal without direct interaction.',
    },
    {
      social_id: 19,
      task: 'Met a small animal',
      task_notes:
        'Always actively supervised. Might only see the animal without direct interaction.',
    },
    {
      social_id: 20,
      task: 'Met a farm animal',
      task_notes:
        'Always actively supervised. Might only see the animal without direct interaction.',
    },
    {
      social_id: 21,
      task: 'Met a person with a disability',
      task_notes:
        'For example, someone who speaks or moves differently to what the puppy usually experiences.',
    },
    {
      social_id: 22,
      task: 'Met a person with mobility aid',
      task_notes:
        'For example, someone who uses a walking stick, walker, or wheelchair.',
    },
    {
      social_id: 23,
      task: 'Met multiple adults at once',
      task_notes: 'Do not overwhelm the puppy.',
    },
    {
      social_id: 24,
      task: 'Met multiple children at once',
      task_notes: 'Always actively supervised. Do not overwhelm the puppy.',
    },
    {
      social_id: 25,
      task: 'Saw people/person but did not interact',
      task_notes:
        'The puppy should learn they do not get to meet every person they see.',
    },
    {
      social_id: 26,
      task: 'Saw other dog/s but did not interact',
      task_notes:
        'The puppy should learn they do not get to meet every dog they see.',
    },
    {
      social_id: 27,
      task: 'Went in a pet-friendly store',
      task_notes:
        'Such as Bunnings, Mitre10, pet-friendly cafe. Encourage calmness.',
    },
    { social_id: 28, task: 'Visited someone elses house', task_notes: '' },
    {
      social_id: 29,
      task: 'Had visitors to their house',
      task_notes: 'Encourage polite greeting and not jumping up.',
    },
  ])
}
