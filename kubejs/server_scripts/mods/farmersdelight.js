ServerEvents.recipes(e => {

    let st = (id) => `statech:farmersdelight/${id}`;

    // -- REMOVED RECIPES -- //
    const FARMERS_DELIGHT_DELETED_RECIPES = [
        'farmersdelight:paper_from_tree_bark'
    ];
    FARMERS_DELIGHT_DELETED_RECIPES.forEach(id => e.remove( {id: id} ));

    // -- COOKING POT -- //
    e.shaped('farmersdelight:cooking_pot', [
        'BSB',
        'IUI',
        'III'
    ],
    {
        B: 'minecraft:brick',
        S: 'minecraft:wooden_shovel',
        I: 'minecraft:iron_ingot',
        U: 'kibe:water_wooden_bucket'
    })
    .replaceIngredient('kibe:water_wooden_bucket', 'kibe:wooden_bucket')
    .id(st('cooking_pot'));
});