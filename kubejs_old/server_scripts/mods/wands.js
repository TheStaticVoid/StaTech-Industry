// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:wands/${id}`;
    let mc = (id) => `minecraft:${id}`;
    let wa = (id) => `wands:${id}`;

    // Remove the default Iron Wand recipe
    e.remove({id: wa('iron_wand') });

    // -- IRON WAND -- //
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

    // -- NETHERITE WAND -- //
    e.smithing(
        wa('netherite_wand'),
        wa('diamond_wand'),
        mc('netherite_ingot')
    )
    .id(st('netherite_wand'));
});

ServerEvents.tags('item', e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let wa = (id) => `wands:${id}`;
    let kj = (id) => `kubejs:${id}`;

    const BUILDER_WANDS = [
        wa('stone_wand'),
        wa('iron_wand'),
        wa('diamond_wand'),
        wa('netherite_wand')
    ];

    BUILDER_WANDS.forEach(id => e.add(kj('builder_wands'), id));
});
