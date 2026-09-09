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

    // -- CULTURAL DELIGHTS TAG FOODS -- //
    event.add('c:foods', /^culturaldelights:.*/);
    event.remove(
        'c:foods',
        /^culturaldelights:.*(seeds|kernels|wild|crate|leaves|wood|log|pit|sapling).*/
    );

    // -- ROASTED BELL PEPPER TAGGING -- //
    event.add(
        'rusticdelight:roasted_bell_peppers',
        /^rusticdelight:roasted_bell_pepper.*/
    );
    event.add('c:foods', /^rusticdelight:roasted_bell_pepper.*/);
    event.add('c:foods/vegetable', /^rusticdelight:roasted_bell_pepper.*/);
    event.add('c:foods/bell_pepper', /^rusticdelight:roasted_bell_pepper.*/);

    // -- FEAST TAGGING -- //
    const feastsToTag = [
        cud('exotic_roll_medley'),
        cud('eggplant_parmesan_block'),
        rd('rice_roll_royale'),
        rd('bell_pepper_medley'),
        rd('pale_bell_pepper_medley'),
        rd('dark_bell_pepper_medley'),
    ];
    feastsToTag.forEach((feast) => {
        event.add(fd('feasts'), feast);
        event.add('c:foods/edible_when_placed', feast);
        event.add(cr('upright_on_belt'), feast);
    });

    // -- FOOD TAGGING -- //
    const foodsToTag = [
        rd('roasted_coffee_beans'),
        rd('golden_coffee_beans'),
        rd('batter'),
        rd('baked_potato_slices'),
        rd('syrup_sandwich'),
        rd('fruit_beignet'),
        /^rusticdelight:.*pancake.*/,
        /^rusticdelight:.*cheesecake.*/,
        /^rusticdelight:stuffed_bell_pepper.*/,
        /^rusticdelight:bell_pepper_roll.*/,
        rd('fried_dough'),
        rd('fired_dumplings'),
        rd('spring_rolls'),
        rd('fried_fish'),
        rd('cherry_blossom_roll'),
        rd('bell_pepper_soup'),
        rd('calamari_soup'),
        rd('bell_pepper_pasta'),
        rd('fried_calamari'),
        rd('fried_chicken'),
        rd('fried_mushrooms'),
        rd('coffee_braised_beef'),
    ];
    foodsToTag.forEach((food) => {
        event.add('c:foods', food);
    });
});

ServerEvents.tags('block', (event) => {
    // -- FEAST TAGGING -- //
    const feastsToTag = [
        cud('exotic_roll_medley'),
        cud('eggplant_parmesan_block'),
        rd('rice_roll_royale'),
        rd('bell_pepper_medley'),
        rd('pale_bell_pepper_medley'),
        rd('dark_bell_pepper_medley'),
    ];
    feastsToTag.forEach((feast) => {
        event.add(fd('feasts'), feast);
        event.add(cr('brittle'), feast);
    });
});
