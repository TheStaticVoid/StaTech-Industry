// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:farmersdelight/${id}`;

    // -- FARMER'S DELIGHT REMOVED REICPES -- //
    const FARMERSDELIGHT_REMOVED_RECIPES = [
        fd('wheat_dough_from_water'),
        fd('wheat_dough_from_eggs'),
        fd('/crafting/wheat_dough_from_water'),
        fd('paper_from_tree_bark'),
        fd('wheat_dough_from_egg'),
        fd('bread_from_smelting'),
        fd('bread_from_blasting'),
        ei('/canning_machine/generated/canned_food/farmersdelight/wheat_dough'),
        bc('pizza'),
        bc('pizza_from_slices'),
        bc('cutting/pizza'),
        ei(
            '/canning_machine/generated/canned_food/brewinandchewin/pizza_slice'
        ),
    ];
    FARMERSDELIGHT_REMOVED_RECIPES.forEach((id) => event.remove({ id: id }));
});

ServerEvents.tags('item', (event) => {
    // -- MILK TAG UNIFICATION -- //
    event.add('c:foods/milk', '#c:drinks/milk');

    // -- CULTURAL DELIGHTS TAG FOODS -- //
    event.add('c:foods', /^culturaldelights:.*/);
    event.remove(
        'c:foods',
        /^culturaldelights:.*(seeds|kernels|wild|crate|leaves|wood|log|pit|sapling).*/
    );

    // -- CULTURAL DELIGHTS FEAST TAGGING -- //
    event.add(fd('feasts'), cud('exotic_roll_medley'));
    event.add('c:foods/edible_when_placed', cud('exotic_roll_medley'));

    event.add(fd('feasts'), cud('eggplant_parmesan_block'));
    event.add('c:foods/edible_when_placed', cud('eggplant_parmesan_block'));
});
