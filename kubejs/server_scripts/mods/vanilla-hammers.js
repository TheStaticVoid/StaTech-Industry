ServerEvents.recipes(e => {
    let vh = (id) => `vanilla-hammers:${id}`;
    let st = (id) => `statech:vanilla-hammers/${id}`;

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
    REMOVED_RECIPES.forEach(id => e.remove({id: id}));

    // -- IRON HAMMER -- //
    e.shaped(vh('iron_hammer'), [
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
    e.shaped(vh('golden_hammer'), [
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

ServerEvents.tags('item', e => {
    let vh = (id) => `vanilla-hammers:${id}`;
    const HAMMERS = [
        //vh('wooden_hammer'),
        //vh('stone_hammer'),
        vh('iron_hammer'),
        vh('golden_hammer'),
        vh('diamond_hammer'),
        vh('emerald_hammer'),
        //vh('ender_hammer'),
        //vh('fiery_hammer'),
        //vh('lapis_hammer'),
        vh('netherite_hammer'),
        //vh('obsidian_hammer'),
        //vh('prismarine_hammer'),
        //vh('quartz_hammer'),
        //vh('slime_hammer')
    ];
    HAMMERS.forEach(id => e.add('kubejs:hammers', id));
});