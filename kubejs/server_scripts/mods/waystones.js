ServerEvents.recipes(e => {
    const WAYSTONE_REMOVED_RECIPES = [
        'waystones:warp_stone',
        'waystones:return_scroll',
        'waystones:bound_scroll',
        'waystones:warp_scroll',
        'waystones:warp_dust'
    ];
    WAYSTONE_REMOVED_RECIPES.forEach(id => e.remove({id: id}));

    // -- WARP STONE -- //
    e.shaped('waystones:warp_stone', [
        'WPW',
        'PCP',
        'WPW'
    ],
    {
        W: 'waystones:warp_dust',
        P: '#c:ender_pearls',
        C: 'modern_industrialization:electronic_circuit'
    });

    // -- RETURN SCROLL -- //
    e.shaped('waystones:return_scroll', [
        'GDG',
        'PPP'
    ],
    {
        G: '#c:gold_ingots',
        D: 'waystones:warp_dust',
        P: 'minecraft:paper'
    });

    // -- BOUND SCROLL -- //
    e.shaped('waystones:bound_scroll', [
        'DDD',
        'GEG',
        'PPP'
    ],
    {
        G: '#c:gold_ingots',
        D: 'waystones:warp_dust',
        P: 'minecraft:paper',
        E: 'minecraft:ender_pearl'
    });

    // -- WARP SCROLL -- //
    e.shaped('waystones:warp_scroll', [
        'GDG',
        'GEG',
        'PPP'
    ],
    {
        G: '#c:gold_ingots',
        D: 'waystones:warp_dust',
        P: 'minecraft:paper',
        E: 'minecraft:ender_pearl'
    });

    // -- WARP DUST -- //
    e.shapeless('4x waystones:warp_dust', [
        '#c:ender_pearl_dusts', 'minecraft:amethyst_shard'
    ]);
});