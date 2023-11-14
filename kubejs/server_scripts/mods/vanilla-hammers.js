// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    let st = (id) => `statech:vanilla-hammers/${id}`;

    // -- VANILLA HAMMERS REMOVED RECIPES -- //
    const REMOVED_RECIPES = [
        vh('wooden_hammer'),
        vh('stone_hammer'),
        vh('ender_hammer'),
        vh('fiery_hammer'),
        vh('lapis_hammer'),
        vh('obsidian_hammer'),
        vh('prismarine_hammer'),
        vh('quartz_hammer'),
        vh('slime_hammer'),
        vh('iron_hammer'),
        vh('golden_hammer')
    ];
    REMOVED_RECIPES.forEach(id => event.remove({id: id}));

    // -- IRON HAMMER -- //
    event.shaped(vh('iron_hammer'), [
        'BPB',
        ' S ',
        ' S '
    ],
    {
        B: '#c:iron_blocks',
        P: '#c:iron_plates',
        S: '#c:wood_sticks'
    })
    .id(st('iron_hammer'));

    // -- GOLD HAMMER -- //
    event.shaped(vh('golden_hammer'), [
        'BPB',
        ' S ',
        ' S '
    ],
    {
        B: '#c:gold_blocks',
        P: '#c:gold_plates',
        S: '#c:wood_sticks'
    })
    .id(st('golden_hammer'));
});

ServerEvents.tags('item', event => {
    const HAMMERS = [
        vh('iron_hammer'),
        vh('golden_hammer'),
        vh('diamond_hammer'),
        vh('emerald_hammer'),
        vh('netherite_hammer'),
    ];
    HAMMERS.forEach(id => event.add(kj('hammers'), id));
});