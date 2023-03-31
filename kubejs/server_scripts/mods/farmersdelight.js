ServerEvents.recipes(e => {
    // -- REMOVED RECIPES -- //
    const FARMERS_DELIGHT_DELETED_RECIPES = [
        'farmersdelight:wheat_dough_from_water',
        'farmersdelight:wheat_dough_from_eggs',
        'farmersdelight:wheat_dough',
        'culturaldelights:cooking/wheat_dough',
        'farmersdelight:paper_from_tree_bark'
    ];
    FARMERS_DELIGHT_DELETED_RECIPES.forEach(id => e.remove( {id: id} ));

    e.shapeless('create:wheat_flour', [
        'expandeddelight:mortar_and_pestle_item', 'minecraft:wheat'
    ]).damageIngredient(0).keepIngredient('expandeddelight:mortar_and_pestle_item');

    e.shapeless('modern_industrialization:salt_dust', [ 'expandeddelight:ground_salt' ]);
    e.shapeless('expandeddelight:ground_salt', [ 'modern_industrialization:salt_dust' ]);
});