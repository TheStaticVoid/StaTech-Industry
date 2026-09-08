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
        ei('/canning_machine/generated/canned_food/rusticdelight/syrup'),
        'culturalrecipes:smelting/smoked_eggplant',
        'culturalrecipes:cutting/cut_eggplant',
        rd('paper_from_cotton_boll'),
        rd('cooking/syrup'),
        rd('sugar_from_syrup'),
    ];
    FARMERSDELIGHT_REMOVED_RECIPES.forEach((id) => event.remove({ id: id }));

    // ---------------------------//
    // --- SHAPELESS CRAFTING --- //
    // ---------------------------//

    // -- SUGAR FROM MAPLE SYRUP -- //
    event
        .shapeless(Item.of(mc('sugar'), 3), [nm('maple_syrup_bottle')])
        .id(st('sugar_from_syrup'));

    // -- CANVAS FROM FLAX -- //
    event
        .shapeless(fd('canvas'), [Item.of(su('flax'), 4)])
        .id(st('canvas_from_flax'));

    // --------------------//
    // ----- CUTTING ----- //
    // --------------------//

    // -- EGGPLANT CUTTING FIX -- //
    cutting(
        event,
        st('eggplant_cutting'),
        [{ item: cud('eggplant') }],
        [{ item: { count: 2, id: cud('cut_eggplant') } }],
        [
            { type: fd('item_ability'), action: 'knife_dig' },
            { tag: 'c:tools/knife' },
        ]
    );

    // --------------------//
    // ----- SMOKING ----- //
    // --------------------//

    // -- EGGPLANT SMOKING FIX -- //
    event
        .smoking(cud('smoked_eggplant'), cud('eggplant'), 0.35, 100)
        .id(st('smoked_eggplant'));
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

    // -- SYRUP TAG UNIFICATION -- //
    event.add(rd('syrup'), nm('maple_syrup_bottle'));
    event.remove(rd('syrup'), rd('syrup'));
    event.add(rd('sweet_liquids'), nm('maple_syrup_bottle'));

    // -- DOUGH TAG UNIFICATION -- //
    event.add('c:foods/dough', cud('corn_dough'));
    event.removeAllTagsFrom(fd('wheat_dough'));

    // -- COOKING OIL TAG UNIFICATION -- //
    event.add(rd('cooking_oil_ingredients'), su('flax_seeds'));
    event.add(rd('cooking_oil_ingredients'), cud('corn_kernels'));
});
