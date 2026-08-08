// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
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
