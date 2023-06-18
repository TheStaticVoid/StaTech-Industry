ServerEvents.tags('item', e => {
    const BUILDER_WANDS = [
        'wands:stone_wand',
        'wands:iron_wand',
        'wands:diamond_wand',
        'wands:netherite_wand'
    ];

    BUILDER_WANDS.forEach(id => e.add('kubejs:builder_wands', id));
});

ServerEvents.recipes(e => {
    let st = (id) => `statech:wands/${id}`;
    let wa = (id) => `wands:${id}`;

    e.remove({id: wa('iron_wand') });
    e.shaped(wa('iron_wand'), [
        '  I',
        ' S ',
        'S  '
    ],
    {
        I: '#c:iron_plates',
        S: '#c:wood_sticks'
    })
    .id(st('iron_wand'));
})