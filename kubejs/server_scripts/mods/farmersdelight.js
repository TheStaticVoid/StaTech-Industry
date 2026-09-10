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
        rd('potato_salad'),
        rd('sweet_salad'),
        rd('fried_dough'),
        rd('fried_dumplings'),
        rd('spring_rolls'),
        rd('calamari_roll'),
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
        event.add(cr('upright_on_belt'), food);
    });

    // -- MEALS TAGGING -- //
    const mealsToTag = [
        rd('potato_salad'),
        rd('sweet_salad'),
        rd('bell_pepper_soup'),
        rd('calamari_soup'),
        rd('bell_pepper_pasta'),
        rd('fried_calamari'),
        rd('fried_chicken'),
        rd('fried_mushrooms'),
        rd('coffee_braised_beef'),
        cud('hearty_salad'),
        cud('eggplant_parmesan'),
        cud('poached_eggplants'),
        cud('spicy_curry'),
    ];
    mealsToTag.forEach((food) => {
        event.add(fd('meals'), food);
        event.add(cr('upright_on_belt'), food);
    });

    // -- SNACKS TAGGING -- //
    const snacksToTag = [
        rd('roasted_coffee_beans'),
        rd('golden_coffee_beans'),
        rd('baked_potato_slices'),
        rd('syrup_sandwich'),
        /^rusticdelight:bell_pepper_roll.*/,
        rd('fried_dough'),
        rd('fried_dumplings'),
        rd('spring_rolls'),
        rd('calamari_roll'),
        rd('fried_fish'),
        rd('cherry_blossom_roll'),
        cud('pickle'),
        cud('cut_pickle'),
        cud('smoked_eggplant'),
        cud('smoked_cut_eggplant'),
        cud('smoked_white_eggplant'),
        cud('smoked_tomato'),
        cud('popcorn'),
        cud('tortilla'),
        cud('tortilla_chips'),
        cud('elote'),
        cud('empanada'),
        cud('beef_burrito'),
        cud('mutton_sandwich'),
        cud('eggplant_burger'),
        cud('avocado_toast'),
        /^culturaldelights:.*roll.*/,
        cud('rice_ball'),
        cud('fish_taco'),
        cud('chicken_taco'),
        cud('pork_wrap'),
    ];
    snacksToTag.forEach((food) => {
        event.add(fd('snacks'), food);
        event.add(cr('upright_on_belt'), food);
    });

    // -- DRINKS TAGGING -- //
    const drinksToTag = [
        rd('coffee'),
        rd('dark_coffee'),
        rd('milk_coffee'),
        rd('chocolate_coffee'),
        rd('honey_coffee'),
        rd('syrup_coffee'),
        rd('pumpkin_coffee'),
        rd('cherry_blossom_coffee'),
    ];
    drinksToTag.forEach((food) => {
        event.add(fd('drinks'), food);
        event.add('c:drinks', food);
        event.add(cr('upright_on_belt'), food);
    });

    // -- PIES TAGGING -- //
    const piesToTag = [
        rd('syrup_cheesecake'),
        rd('coffee_cheesecake'),
        rd('cherry_blossom_cheesecake'),
    ];
    piesToTag.forEach((food) => {
        event.add(fd('pies'), food);
        event.add('c:foods/edible_when_placed', food);
        event.add(cr('upright_on_belt'), food);
    });

    // -- SWEETS TAGGING -- //
    const sweetsToTag = [
        rd('syrup_cheesecake_slice'),
        rd('coffee_cheesecake_slice'),
        rd('cherry_blossom_cheesecake_slice'),
        rd('fruit_beignet'),
        /^rusticdelight:.*cookie.*/,
        /^rusticdelight:.*pancake(?!s)$/,
    ];
    sweetsToTag.forEach((food) => {
        event.add(fd('sweets'), food);
        event.add(cr('upright_on_belt'), food);
    });

    // -- PANCAKES TAGGING -- //
    event.add('c:foods/edible_when_placed', /^rusticdelight:.*pancakes/);
    event.add(cr('upright_on_belt'), /^rusticdelight:.*pancakes/);

    // -- CRATES TAGGING -- //
    const cratesToTag = [
        nm('apple_crate'),
        nm('pear_crate'),
        cud('avocado_crate'),
        cud('cucumber_crate'),
        cud('pickle_crate'),
        cud('corn_cob_crate'),
        cud('eggplant_crate'),
        cud('white_eggplant_crate'),
    ];
    cratesToTag.forEach((crate) => {
        const cratesRegex = /:(\w+)_crate/g;
        let match;
        while ((match = cratesRegex.exec(crate)) !== null) {
            event.add('c:storage_blocks', crate);
            event.add(`c:storage_blocks/${match[1]}`, crate);
        }
    });

    // -- WILD CROPS TAGGING -- //
    const wildCropsToTag = [
        cud('wild_cucumbers'),
        cud('wild_corn'),
        cud('wild_eggplants'),
    ];
    wildCropsToTag.forEach((crops) => {
        event.add(fd('wild_crops'), crops);
        event.add(mc('bee_food'), crops);
        event.add(mc('flowers'), crops);
        event.add(mc('small_flowers'), crops);
        event.add('c:animal_foods', crops);
    });

    // -- SEEDS TAGGING -- //
    const seedsToTag = [
        cud('cucumber_seeds'),
        cud('corn_kernels'),
        cud('eggplant_seeds'),
    ];
    seedsToTag.forEach((seeds) => {
        const seedsRegex = /:(\w+)_.*/g;
        let match;
        while ((match = seedsRegex.exec(seeds)) !== null) {
            event.add('c:seeds', seeds);
            event.add('c:animal_foods', seeds);
            event.add(ei('farmer_plantable'), seeds);
            event.add(mc('chicken_food'), seeds);
            event.add(mc('parrot_food'), seeds);
            event.add(mc('villager_plantable_seeds'), seeds);
            event.add(`c:seeds/${match[1]}`, seeds);
        }
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

    // -- PIES TAGGING -- //
    const piesToTag = [
        rd('syrup_cheesecake'),
        rd('coffee_cheesecake'),
        rd('cherry_blossom_cheesecake'),
    ];
    piesToTag.forEach((food) => {
        event.add(fd('pies'), food);
        event.add(fd('mineable/knife'), food);
        event.add(cr('brittle'), food);
    });

    // -- PANCAKES TAGGING -- //
    event.add(cr('brittle'), /^rusticdelight:.*pancakes/);

    // -- CRATES TAGGING -- //
    const cratesToTag = [
        nm('apple_crate'),
        nm('pear_crate'),
        cud('avocado_crate'),
        cud('cucumber_crate'),
        cud('pickle_crate'),
        cud('corn_cob_crate'),
        cud('eggplant_crate'),
        cud('white_eggplant_crate'),
    ];
    cratesToTag.forEach((crate) => {
        const cratesRegex = /:(\w+)_crate/g;
        let match;
        while ((match = cratesRegex.exec(crate)) !== null) {
            event.add('c:storage_blocks', crate);
            event.add(`c:storage_blocks/${match[1]}`, crate);
            event.add(mc('mineable/axe'), crate);
        }
    });

    // -- WILD CROPS TAGGING -- //
    const wildCropsToTag = [
        cud('wild_cucumbers'),
        cud('wild_corn'),
        cud('wild_eggplants'),
    ];
    wildCropsToTag.forEach((crops) => {
        event.add(fd('wild_crops'), crops);
        event.add(fd('unaffected_by_rich_soil'), crops);
        event.add(mc('flowers'), crops);
        event.add(mc('small_flowers'), crops);
        event.add(mc('enderman_holdable'), crops);
        event.add(mc('sword_efficient'), crops);
        event.add(nm('bonemealable_flowers'), crops);
        event.add(sp('deeper_down_feature_replaceables'), crops);
    });

    // -- SEEDS TAGGING -- //
    const seedToTag = [
        cud('cucumber_seeds'),
        cud('corn_kernels'),
        cud('eggplant_seeds'),
    ];
    seedToTag.forEach((seed) => {
        event.add(ae('growth_acceleratable'), seed);
        event.add(mc('bee_growables'), seed);
        event.add(mc('crops'), seed);
        event.add(mc('sword_efficient'), seed);
    });
});
