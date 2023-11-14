// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    let st = (id) => `statech:farmersdelight/${id}`;

    // -- FARMERS DELIGHT REMOVED RECIPES -- //
    const FARMERS_DELIGHT_DELETED_RECIPES = [
        fd('paper_from_tree_bark'),
        fd('wheat_dough')
    ];
    FARMERS_DELIGHT_DELETED_RECIPES.forEach(id => event.remove( {id: id} ));

    // -- COOKING POT -- //
    event.shaped(fd('cooking_pot'), [
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

    // Utility functions cannot be used in the replaceIngredient part
    // do not use utility function for kibe namespace, it breaks these recipes
    // -- WHEAT DOUGH -- //
    event.shapeless('3x ' + fd('wheat_dough'), [ kb('water_wooden_bucket'), mc('wheat'), mc('wheat'), mc('wheat') ])
        .id(st('wheat_dough'))
        .replaceIngredient('kibe:water_wooden_bucket', 'kibe:wooden_bucket');
    
    // -- CORN DOUGH -- //
    event.shapeless('3x ' + cd('corn_dough'), [ kb('water_wooden_bucket'), '3x ' + cd('corn_cob') ])
        .id(st('corn_dough'))
        .replaceIngredient('kibe:water_wooden_bucket', 'kibe:wooden_bucket');
    
    // -- RAW PASTA -- //
    event.shapeless('2x ' + fd('raw_pasta'), [ kb('water_wooden_bucket'), '4x ' + mc('wheat') ])
        .id(st('raw_pasta'))
        .replaceIngredient('kibe:water_wooden_bucket', 'kibe:wooden_bucket');
});