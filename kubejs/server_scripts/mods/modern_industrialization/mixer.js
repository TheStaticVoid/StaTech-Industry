// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    let st = (id) => `statech:modern_industrialization/mixer/${id}`;

    // -- MIXER REMOVED RECIPES -- //
    const REMOVED_RECIPES = [
        mi('materials/mixer/fire_clay_dust')
    ];
    REMOVED_RECIPES.forEach(id => event.remove({id: id}));

    // -- NETHERRACK -- //
    mixer(
        event,
        st('netherrack'),
        8,
        200,
        [ { amount: 1, item: mc('cobblestone') } ],
        [ { amount: 1, item: mc('netherrack') } ],
        [ { amount: 100, fluid: mi('blood') } ]
    );

    // -- SALT WATER -- //
    mixer(
        event,
        st('salt_water'),
        2,
        200,
        [ { amount: 1, item: mi('salt_dust') } ],
        null,
        [ { amount: 100, fluid: mc('water') } ],
        [ { amount: 150, fluid: mi('salt_water') } ]
    );

    // -- PICKLE -- //
    mixer(
        event,
        st('pickle'),
        2,
        600,
        [
            { amount: 1, item: cd('cucumber') },
            { amount: 2, item: mi('salt_dust') }
        ],
        [ { amount: 1, item: cd('pickle') } ],
        [ { amount: 100, fluid: mc('water') } ]
    );

    // -- NUTRIENT RICH WATER -- //
    mixer(
        event,
        st('nutrient_rich_water'),
        8,
        200,
        [ { amount: 1, item: mc('bone_meal') } ],
        null,
        [ { amount: 100, fluid: mc('water') } ],
        [ { amount: 200, fluid: mi('nutrient_rich_water') } ]
    );

    // -- NUTRIENT RICH LIQUID ENDER -- //
    mixer(
        event,
        st('nutrient_rich_liquid_ender'),
        8,
        200,
        [ { amount: 1, item: mc('bone_meal') } ],
        null,
        [ { amount: 100, fluid: mi('liquid_ender') } ],
        [ { amount: 200, fluid: mi('nutrient_rich_liquid_ender') } ]
    );

    // -- NUTRIENT RICH BLOOD -- //
    mixer(
        event,
        st('nutrient_rich_blood'),
        8,
        200,
        [ { amount: 1, item: mc('bone_meal') } ],
        null,
        [ { amount: 100, fluid: mi('blood') } ],
        [ { amount: 200, fluid: mi('nutrient_rich_blood') } ]
    );

    // -- XP BERRY SEEDS -- //
    mixer(
        event,
        st('xp_berry_seeds'),
        8,
        200,
        [ 
            { amount: 1, item: xp('soul_copper_nugget') },
            { amount: 1, item: mc('amethyst_shard') },
            { amount: 4, tag: 'xps:seeds_list' },
            { amount: 2, item: mc('nether_wart') }
        ],
        [ { amount: 6, item: xp('xp_berries_seeds') } ],
        [ { amount: 1000, fluid: xp('xp_fluid') } ]
    );

    // -- LIQUID EXPERIENCE -- //
    mixer(
        event,
        st('xp_fluid'),
        8,
        200,
        [ { amount: 3, item: cr('experience_nugget') } ],
        null,
        null,
        [ { amount: 90, fluid: xp('xp_fluid') } ]
    );

    // -- STATECH ENERGY -- //
    mixer(
        event,
        st('statech_energy'),
        8,
        200,
        [
            { amount: 1, item: kj('empty_can') },
            { amount: 2, item: mi('battery_alloy_dust') }
        ],
        [ { amount: 1, item: kj('statech_energy') } ],
        [ { amount: 100, fluid: mc('water') } ]
    );

    // -- BEPSI -- //
    mixer(
        event,
        st('bepsi'),
        8,
        200,
        [ { amount: 1, item: kj('empty_can') } ],
        [ { amount: 1, item: kj('bepsi') } ],
        [ { amount: 100, fluid: mi('polyethylene') } ]
    );

    // -- COKE COLA -- //
    mixer(
        event,
        st('coke_cola'),
        8,
        200,
        [ 
            { amount: 1, item: kj('empty_can') },
            { amount: 2, tag: 'c:coke_dusts' }
        ],
        [ { amount: 1, item: kj('coke_cola') } ],
        [ { amount: 100, fluid: mc('water') } ]
    );

    // -- GREG COLA -- //
    mixer(
        event,
        st('greg_cola'),
        8,
        200,
        [
            { amount: 1, item: kj('empty_can') },
            { amount: 2, item: mc('clay_ball') }
        ],
        [ { amount: 1, item: kj('greg_cola') } ],
        [ { amount: 100, fluid: mi('polytetrafluoroethylene') } ]
    );

    // -- SULFURIC ACID BOTTLE -- //
    mixer(
        event,
        st('sulfuric_acid_bottle'),
        8,
        200,
        [ { amount: 1, item: mc('glass_bottle') } ],
        [ { amount: 1, item: kj('sulfuric_acid_bottle') } ],
        [ { amount: 100, fluid: mi('sulfuric_acid') } ]
    );

    // -- URANIUM CEREAL -- //
    mixer(
        event,
        st('uranium_cereal'),
        8,
        200,
        [ 
            { amount: 1, item: mc('bowl') },
            { amount: 3, tag: 'c:uranium_nuggets' }
        ],
        [ { amount: 1, item: kj('uranium_cereal') } ],
        [ { amount: 100, fluid: 'milk:still_milk' } ]
    );

    // -- NUKA COLA -- //
    mixer(
        event,
        st('nuka_cola'),
        8,
        200,
        [ 
            { amount: 1, item: mc('glass_bottle') },
            { amount: 4, tag: 'c:uranium_dusts' },
            { amount: 2, tag: 'c:coke_dusts' }
        ],
        [ { amount: 1, item: kj('nuka_cola') } ],
        [ { amount: 100, fluid: mc('water') } ]
    );

    // -- CONCRETE PIZZA -- //
    mixer(
        event,
        st('concrete_pizza'),
        8,
        200,
        [ { amount: 1, item: kj('pizza') } ],
        [ { amount: 1, item: kj('concrete_pizza') } ],
        [ { amount: 100, fluid: mi('concrete') } ]
    );

    // -- CONCRETE STEAK WITH CLAY SAUCE -- //
    mixer(
        event,
        st('concrete_steak_with_clay_sauce'),
        8,
        200,
        [
            { amount: 1, item: mc('cooked_beef') },
            { amount: 1, item: mc('clay_ball') }
        ],
        [ { amount: 1, item: kj('concrete_and_clay_steak') } ],
        [ { amount: 100, fluid: mi('concrete') } ]
    );

    // -- DOUGH -- //
    mixer(
        event,
        st('dough'),
        2,
        100,
        [ { amount: 1, item: cr('wheat_flour') } ],
        [ { amount: 1, item: cr('dough') } ],
        [ { amount: 1000, fluid: mc('water') } ]
    );

    // -- LIQUID ENDER -- // 
    mixer(
        event,
        st('liquid_ender'),
        8,
        200,
        [ { amount: 2, item: tr('ender_pearl_dust') } ],
        null,
        [ { amount: 800, fluid: mc('water') } ],
        [ { amount: 1000, fluid: mi('liquid_ender') } ]
    );
    
    // -- SOULCOPPER BLEND -- //
    mixer(
        event,
        st('soul_copper_blend'),
        2,
        100,
        [
            { amount: 1, item: mc('raw_copper') },
            { amount: 1, item: mc('soul_sand') }
        ],
        [ { amount: 4, item: xp('soul_copper_blend') } ]
    );    

    // -- CERTUS QUARTS CRYSTAL -- //
    mixer(
        event,
        st('certus_quartz_crystal'),
        8,
        100,
        [
            { amount: 1, item: ae('charged_certus_quartz_crystal') },
            { amount: 1, item: ae('certus_quartz_dust') }
        ],
        [ { amount: 2, item: ae('certus_quartz_crystal') } ],
        [ { amount: 1000, fluid: mc('water'), probability: 0 } ]
    );

    // -- DAMAGED BUDDING CERTUS QUARTZ -- //
    mixer(
        event,
        st('damaged_budding_certus_quartz'),
        8,
        200,
        [
            { amount: 1, item: ae('charged_certus_quartz_crystal') },
            { amount: 1, item: ae('quartz_block') }
        ],
        [ { amount: 1, item: ae('damaged_budding_quartz') } ],
        [ { amount: 1000, fluid: mc('water'), probability: 0 } ]
    );

    // -- CHIPPED BUDDING CERTUS QUARTZ -- //
    mixer(
        event,
        st('chipped_budding_certus_quartz'),
        8,
        200,
        [
            { amount: 1, item: ae('charged_certus_quartz_crystal') },
            { amount: 1, item: ae('damaged_budding_quartz') }
        ],
        [ { amount: 1, item: ae('chipped_budding_quartz') } ],
        [ { amount: 1000, fluid: mc('water'), probability: 0 } ]
    );

    // -- FLAWED BUDDING CERTUS QUARTZ -- //
    mixer(
        event,
        st('flawed_budding_certus_quartz'),
        8,
        200,
        [
            { amount: 1, item: ae('charged_certus_quartz_crystal') },
            { amount: 1, item: ae('chipped_budding_quartz')}
        ],
        [ { amount: 1, item: ae('flawed_budding_quartz') } ],
        [ { amount: 1000, fluid: mc('water'), probability: 0 } ]
    );
    
    // -- DRILLING FLUID -- //
    mixer(
        event,
        st('drilling_fluid'),
        8,
        400,
        [ { amount: 16, item: mi('clay_dust') } ],
        null,
        [
            { amount: 700, fluid: mc('water') },
            { amount: 100, fluid: mi('lubricant') }
        ],
        [ { amount: 1000, fluid: mi('drilling_fluid') } ]
    );

    // -- GRASS BLOCK RECIPE PARITY -- //
    mixer(
        event,
        st('grass_block'),
        2,
        100,
        [
            { amount: 1, item: mc('dirt') },
            { amount: 1, item: mc('wheat_seeds') , probability: 0.0 }
        ],
        [ { amount: 1, item: mc('grass_block') } ],
        [ { amount: 1000, fluid: mc('water') } ]
    );

    // -- FIRE CLAY DUST -- //
    mixer(
        event,
        st('fire_clay_dust'),
        2,
        100,
        [
            { amount: 2, item: mi('brick_dust') },
            { amount: 2, item: mi('clay_dust') }
        ],
        [ { amount: 4, item: mi('fire_clay_dust') } ]
    );

    // -- LIQUID CONCRETE -- //
    mixer(
        event,
        st('liquid_concrete'),
        8,
        200,
        [ 
            { amount: 4, item: mi('clay_dust') },
            { amount: 10, item: mi('stone_dust') }
        ],
        null,
        [ { amount: 100, fluid: mc('water') } ],
        [ { amount: 500, fluid: mi('concrete') } ]
    );

    // -- UTILITY FUNCTION FOR THE FOLLOWING FOREACH -- //
    let mixerConsumable = (fluid, amount) => {
        if (amount < 100)
            amount = 1000;

        let newFluidInput = {
            fluid: fluid,
            amount: amount
        }

        return newFluidInput;
    }
});