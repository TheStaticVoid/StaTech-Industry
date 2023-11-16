// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    let st = (id) => `statech:lumberaxe/${id}`;

    const REMOVED_RECIPES = [
        la('iron_lumberaxe'),
        la('gold_lumberaxe')
    ];
    REMOVED_RECIPES.forEach(id => event.remove({id: id}));

    // -- IRON LUMBERAXE -- //
    event.shaped(la('iron_lumberaxe'), [
        'PB',
        'PS',
        ' S'
    ],
    {
        P: '#c:iron_plates',
        S: mc('stick'),
        B: '#c:iron_blocks'
    })
    .id(st('iron_lumberaxe'));

    // -- GOLD LUMBERAXE -- //
    event.shaped(la('gold_lumberaxe'), [
        'PB',
        'PS',
        ' S'
    ],
    {
        P: '#c:gold_plates',
        S: mc('stick'),
        B: '#c:gold_blocks'
    })
    .id(st('gold_lumberaxe'));
});

ServerEvents.tags('item', event => {
    const LUMBERAXES = [
        la('iron_lumberaxe'),
        la('gold_lumberaxe'),
        la('diamond_lumberaxe'),
        la('netherite_lumberaxe')
    ];
    LUMBERAXES.forEach(id => event.add(kj('lumberaxes'), id));
    LUMBERAXES.forEach(id => event.add('c:tools/axes', id));
});