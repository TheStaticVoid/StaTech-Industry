ServerEvents.recipes(e => {
    let la = (id) => `lumberaxe:${id}`;
    let st = (id) => `statech:lumberaxe/${id}`;

    const REMOVED_RECIPES = [
        la('iron_lumberaxe'),
        la('gold_lumberaxe')
    ];
    REMOVED_RECIPES.forEach(id => e.remove({id: id}));

    // -- IRON LUMBERAXE -- //
    e.shaped(la('iron_lumberaxe'), [
        'PB',
        'PS',
        ' S'
    ],
    {
        P: '#c:iron_plates',
        S: '#c:wood_sticks',
        B: '#c:iron_blocks'
    })
    .id(st('iron_lumberaxe'));

    // -- GOLD LUMBERAXE -- //
    e.shaped(la('gold_lumberaxe'), [
        'PB',
        'PS',
        ' S'
    ],
    {
        P: '#c:gold_plates',
        S: '#c:wood_sticks',
        B: '#c:gold_blocks'
    })
    .id(st('gold_lumberaxe'));
});

ServerEvents.tags('item', e => {
    let la = (id) => `lumberaxe:${id}`;

    const LUMBERAXES = [
        la('iron_lumberaxe'),
        la('gold_lumberaxe'),
        la('diamond_lumberaxe'),
        la('netherite_lumberaxe')
    ];
    LUMBERAXES.forEach(id => e.add('kubejs:lumberaxes', id));
    LUMBERAXES.forEach(id => e.add('c:tools/axes', id));
});