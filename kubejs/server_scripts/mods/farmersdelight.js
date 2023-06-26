ServerEvents.recipes(e => {

    let st = (id) => `statech:farmersdelight/${id}`;
    let fd = (id) => `farmersdelight:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let kb = (id) => `kibe:${id}`;
    let cd = (id) => `culturaldelights:${id}`;

    // -- REMOVED RECIPES -- //
    const FARMERS_DELIGHT_DELETED_RECIPES = [
        fd('paper_from_tree_bark'),
        fd('wheat_dough')
    ];
    FARMERS_DELIGHT_DELETED_RECIPES.forEach(id => e.remove( {id: id} ));

    // -- COOKING POT -- //
    e.shaped(fd('cooking_pot'), [
        'BSB',
        'IUI',
        'III'
    ],
    {
        B: mc('brick'),
        S: mc('wooden_shovel'),
        I: mc('iron_ingot'),
        U: kb('water_wooden_bucket')
    })
    .replaceIngredient('kibe:water_wooden_bucket', 'kibe:wooden_bucket')
    .id(st('cooking_pot'));

    // -- WHEAT DOUGH -- //
    e.shapeless('3x ' + fd('wheat_dough'), [ kb('water_wooden_bucket'), mc('wheat'), mc('wheat'), mc('wheat') ])
        .id(st('wheat_dough'))
        .replaceIngredient('kibe:water_wooden_bucket', 'kibe:wooden_bucket');
    
    // -- CORN DOUGH -- //
    e.shapeless('3x ' + cd('corn_dough'), [ kb('water_wooden_bucket'), '3x ' + cd('corn_cob') ])
        .id(st('corn_dough'))
        .replaceIngredient('kibe:water_wooden_bucket', 'kibe:wooden_bucket');
    
    // -- RAW PASTA -- //
    e.shapeless('2x ' + fd('raw_pasta'), [ kb('water_wooden_bucket'), '4x ' + mc('wheat') ])
        .id(st('raw_pasta'))
        .replaceIngredient('kibe:water_wooden_bucket', 'kibe:wooden_bucket');
});