// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:modern_industrialization/mixer/${id}`;

    // -- MIXER REMOVED RECIPES -- //
    const REMOVED_RECIPES = [mi('materials/mixer/fire_clay_dust')];
    REMOVED_RECIPES.forEach((id) => event.remove({ id: id }));

    // -- OMINOUS BOTTLE -- //
    mixer(
        event,
        st('bad_omen_bottle'),
        8,
        200,
        [
            { amount: 2, item: mc('spider_eye') },
            { amount: 1, item: mc('glass_bottle') }
        ],
        [{ amount: 1, item: mc('ominous_bottle') }],
        [{ amount: 1000, fluid: mi('synthetic_oil') }]
    );

    // -- NETHERRACK -- //
    mixer(
        event,
        st('netherrack'),
        8,
        200,
        [{ amount: 1, item: mc('cobblestone') }],
        [{ amount: 1, item: mc('netherrack') }],
        [{ amount: 100, fluid: mi('blood') }]
    );

    // -- SALT WATER -- //
    mixer(
        event,
        st('salt_water'),
        2,
        200,
        [{ amount: 1, item: mi('salt_dust') }],
        null,
        [{ amount: 100, fluid: mc('water') }],
        [{ amount: 150, fluid: mi('salt_water') }]
    );

    // -- MOSSY COBBLESTONE -- //
    mixer(
        event,
        st('mossy_cobblestone'),
        2,
        200,
        [
            { amount: 1, item: mc('cobblestone') },
            { amount: 1, item: mc('moss_block') },
        ],
        [{ amount: 1, item: mc('mossy_cobblestone') }]
    );

    // -- MOSSY COBBLESTONE FROM VINE -- //
    mixer(
        event,
        st('mossy_cobblestone_vine'),
        2,
        200,
        [
            { amount: 1, item: mc('cobblestone') },
            { amount: 1, item: mc('vine') },
        ],
        [{ amount: 1, item: mc('mossy_cobblestone') }]
    );

    // -- MOSSY COBBLESTONE FROM NML -- //
    mixer(
        event,
        st('mossy_cobblestone_nml'),
        2,
        200,
        [
            { amount: 1, item: mc('cobblestone') },
            { amount: 4, tag: 'nomansland:alternative_moss' },
        ],
        [{ amount: 1, item: mc('mossy_cobblestone') }]
    );

    // -- URANIUM CEREAL -- //
    mixer(
        event,
        st('uranium_cereal'),
        8,
        200,
        [
            { amount: 1, item: mc('bowl') },
            { amount: 3, tag: 'c:nuggets/uranium' },
        ],
        [{ amount: 1, item: kj('uranium_cereal') }],
        [{ amount: 100, fluid: mc('milk') }]
    );

    // -- FRUITY PEBBLES -- //
    mixer(
        event,
        st('fruity_pebbles'),
        8,
        200,
        [
            { amount: 1, item: mc('bowl') },
            { amount: 1, tag: 'c:foods/berry' },
            { amount: 3, item: nm('pebbles') },
        ],
        [{ amount: 1, item: kj('fruity_pebbles') }],
        [{ amount: 100, fluid: mc('milk') }]
    );

    // -- NUKA COLA -- //
    mixer(
        event,
        st('nuka_cola'),
        8,
        200,
        [
            { amount: 1, item: mc('glass_bottle') },
            { amount: 4, tag: 'c:dusts/uranium' },
            { amount: 2, tag: 'c:dusts/coke' },
        ],
        [{ amount: 1, item: kj('nuka_cola') }],
        [{ amount: 100, fluid: mc('water') }]
    );

    // -- CONCRETE PIZZA -- //
    mixer(
        event,
        st('concrete_pizza'),
        8,
        200,
        [{ amount: 1, item: kj('pizza') }],
        [{ amount: 1, item: kj('concrete_pizza') }],
        [{ amount: 100, fluid: mi('concrete') }]
    );

    // -- CONCRETE STEAK WITH CLAY SAUCE -- //
    mixer(
        event,
        st('concrete_steak_with_clay_sauce'),
        8,
        200,
        [
            { amount: 1, item: mc('cooked_beef') },
            { amount: 1, item: mc('clay_ball') },
        ],
        [{ amount: 1, item: kj('concrete_and_clay_steak') }],
        [{ amount: 100, fluid: mi('concrete') }]
    );

    // -- DOUGH -- //
    mixer(
        event,
        st('dough'),
        2,
        100,
        [{ amount: 1, item: cr('wheat_flour') }],
        [{ amount: 1, item: cr('dough') }],
        [{ amount: 1000, fluid: mc('water') }]
    );

    // -- LIQUID ENDER -- //
    mixer(
        event,
        st('liquid_ender'),
        8,
        200,
        [{ amount: 2, item: ae('ender_dust') }],
        null,
        [{ amount: 800, fluid: mc('water') }],
        [{ amount: 1000, fluid: mi('liquid_ender') }]
    );

    // -- BORON-QUARTZ BLEND -- //
    mixer(
        event,
        st('boron_quartz_blend'),
        2,
        100,
        [
            { amount: 4, tag: 'c:dusts/boron_trioxide' },
            { amount: 8, tag: 'c:dusts/quartz' },
            { amount: 1, tag: 'c:tiny_dusts/aluminum' },
        ],
        [{ amount: 12, item: kj('boron_quartz_blend') }]
    );

    // -- CERTUS QUARTS CRYSTAL -- //
    mixer(
        event,
        st('certus_quartz_crystal'),
        8,
        100,
        [
            { amount: 1, item: ae('charged_certus_quartz_crystal') },
            { amount: 1, item: ae('certus_quartz_dust') },
        ],
        [{ amount: 2, item: ae('certus_quartz_crystal') }],
        [{ amount: 1000, fluid: mc('water'), probability: 0 }]
    );

    // -- DAMAGED BUDDING CERTUS QUARTZ -- //
    mixer(
        event,
        st('damaged_budding_certus_quartz'),
        8,
        200,
        [
            { amount: 1, item: ae('charged_certus_quartz_crystal') },
            { amount: 1, item: ae('quartz_block') },
        ],
        [{ amount: 1, item: ae('damaged_budding_quartz') }],
        [{ amount: 1000, fluid: mc('water'), probability: 0 }]
    );

    // -- CHIPPED BUDDING CERTUS QUARTZ -- //
    mixer(
        event,
        st('chipped_budding_certus_quartz'),
        8,
        200,
        [
            { amount: 1, item: ae('charged_certus_quartz_crystal') },
            { amount: 1, item: ae('damaged_budding_quartz') },
        ],
        [{ amount: 1, item: ae('chipped_budding_quartz') }],
        [{ amount: 1000, fluid: mc('water'), probability: 0 }]
    );

    // -- FLAWED BUDDING CERTUS QUARTZ -- //
    mixer(
        event,
        st('flawed_budding_certus_quartz'),
        8,
        200,
        [
            { amount: 1, item: ae('charged_certus_quartz_crystal') },
            { amount: 1, item: ae('chipped_budding_quartz') },
        ],
        [{ amount: 1, item: ae('flawed_budding_quartz') }],
        [{ amount: 1000, fluid: mc('water'), probability: 0 }]
    );

    // -- ENTRO CRYSTAL -- //
    mixer(
        event,
        st('entro_crystal'),
        8,
        100,
        [
            { amount: 1, item: ea('entro_dust') },
            { amount: 1, tag: 'c:gems/fluix' },
        ],
        [{ amount: 2, item: ea('entro_crystal') }],
        [{ amount: 1000, fluid: mc('water'), probability: 0 }]
    );

    // -- ENTRO INFUSED INGOT -- //
    mixer(
        event,
        st('entro_ingot'),
        8,
        100,
        [
            { amount: 1, item: ea('entro_dust') },
            { amount: 1, tag: 'c:ingots/aluminum' },
            { amount: 1, tag: 'c:gems/lapis' },
        ],
        [{ amount: 2, item: ea('entro_ingot') }],
        [{ amount: 1000, fluid: mc('water'), probability: 0 }]
    );

    // -- SKY BRONZE INGOT -- //
    mixer(
        event,
        st('sky_bronze_ingot'),
        8,
        100,
        [
            { amount: 1, item: ae('charged_certus_quartz_crystal') },
            { amount: 1, tag: 'c:ingots/annealed_copper' },
            { amount: 1, item: ae('sky_stone_block') },
        ],
        [{ amount: 2, item: mg('sky_bronze_ingot') }],
        [{ amount: 1000, fluid: mc('lava'), probability: 0 }]
    );

    // -- SKY STEEL INGOT -- //
    mixer(
        event,
        st('sky_steel_ingot'),
        8,
        100,
        [
            { amount: 1, item: ae('charged_certus_quartz_crystal') },
            { amount: 1, tag: 'c:ingots/stainless_steel' },
            { amount: 1, item: ae('sky_stone_block') },
        ],
        [{ amount: 2, item: mg('sky_steel_ingot') }],
        [{ amount: 1000, fluid: mc('lava'), probability: 0 }]
    );

    // -- DRILLING FLUID -- //
    mixer(
        event,
        st('drilling_fluid'),
        8,
        400,
        [{ amount: 16, item: mi('clay_dust') }],
        null,
        [
            { amount: 700, fluid: mc('water') },
            { amount: 100, fluid: mi('lubricant') },
        ],
        [{ amount: 1000, fluid: mi('drilling_fluid') }]
    );

    // -- GRASS BLOCK RECIPE PARITY -- //
    mixer(
        event,
        st('grass_block'),
        2,
        100,
        [
            { amount: 1, item: mc('dirt') },
            { amount: 1, item: mc('wheat_seeds'), probability: 0.0 },
        ],
        [{ amount: 1, item: mc('grass_block') }],
        [{ amount: 1000, fluid: mc('water') }]
    );

    // -- FIRE CLAY DUST -- //
    mixer(
        event,
        st('fire_clay_dust'),
        2,
        100,
        [
            { amount: 2, item: mi('brick_dust') },
            { amount: 2, item: mi('clay_dust') },
        ],
        [{ amount: 4, item: mi('fire_clay_dust') }]
    );

    // -- LIQUID CONCRETE -- //
    mixer(
        event,
        st('liquid_concrete'),
        8,
        200,
        [
            { amount: 4, item: mi('clay_dust') },
            { amount: 10, item: mi('stone_dust') },
        ],
        null,
        [{ amount: 100, fluid: mc('water') }],
        [{ amount: 500, fluid: mi('concrete') }]
    );

    // -- CONCRETE BLOCK -- //
    mixer(
        event,
        st('speedy_concrete'),
        8,
        100,
        [{ amount: 1, item: mi('packer_block_template'), probability: 0 }],
        [{ amount: 2, item: kj('speedy_concrete') }],
        [{ amount: 500, fluid: mi('concrete') }]
    );

    // -- QUARTZ BLEND -- //
    mixer(
        event,
        st('quartz_blend'),
        8,
        200,
        [
            { amount: 6, item: ae('certus_quartz_dust') },
            { amount: 2, tag: 'c:sands' },
            { amount: 1, item: mc('coal') },
        ],
        [{ amount: 2, item: ea('quartz_blend') }]
    );

    // -- RESIN -- //
    mixer(
        event,
        st('resin'),
        4,
        600,
        [{ amount: 2, item: mi('sulfur_tiny_dust') }],
        [{ amount: 2, item: nm('resin') }],
        [{ amount: 125, fluid: mi('wood_tar') }]
    );

    // -- SYNTHETIC RUBBER ALT -- //
    mixer(
        event,
        st('synthetic_rubber_alt'),
        4,
        200,
        [{ amount: 1, item: nm('resin') }],
        null,
        null,
        [{ amount: 125, fluid: mi('synthetic_rubber') }]
    );

    // ---------------------------//
    // -- EI FERTILIZER COMPAT -- //
    // ---------------------------//

    const fertilizerEff = [
        ['manure', 300],
        ['composted_manure', 150],
        ['npk_fertilizer', 30],
    ];

    fertilizerEff.forEach((fertilizer) => {
        // -- NUTRIENT RICH WATER -- //
        mixer(
            event,
            st(`nutrient_rich_water_from_${fertilizer[0]}`),
            8,
            200,
            null,
            null,
            [
                { amount: 100, fluid: mc('water') },
                { amount: fertilizer[1], fluid: ei(fertilizer[0]) },
            ],
            [{ amount: 200, fluid: mi('nutrient_rich_water') }]
        );

        // -- NUTRIENT RICH BLOOD -- //
        mixer(
            event,
            st(`nutrient_rich_blood_from_${fertilizer[0]}`),
            8,
            200,
            null,
            null,
            [
                { amount: 100, fluid: mi('blood') },
                { amount: fertilizer[1], fluid: ei(fertilizer[0]) },
            ],
            [{ amount: 200, fluid: mi('nutrient_rich_blood') }]
        );

        // -- NUTRIENT RICH LAVA -- //
        mixer(
            event,
            st(`nutrient_rich_lava_from_${fertilizer[0]}`),
            8,
            200,
            null,
            null,
            [
                { amount: 100, fluid: mc('lava') },
                { amount: fertilizer[1], fluid: ei(fertilizer[0]) },
            ],
            [{ amount: 200, fluid: yai('nutrient_rich_lava') }]
        );

        // -- NUTRIENT RICH LIQUID ENDER -- //
        mixer(
            event,
            st(`nutrient_rich_liquid_ender_from_${fertilizer[0]}`),
            8,
            200,
            null,
            null,
            [
                { amount: 100, fluid: mi('liquid_ender') },
                { amount: fertilizer[1], fluid: ei(fertilizer[0]) },
            ],
            [{ amount: 200, fluid: mi('nutrient_rich_liquid_ender') }]
        );
    });

    // -- NUTRIENT RICH WATER -- //
    mixer(
        event,
        st('nutrient_rich_water_from_bonemeal'),
        8,
        200,
        [{ amount: 1, item: mc('bone_meal') }],
        null,
        [{ amount: 100, fluid: mc('water') }],
        [{ amount: 100, fluid: mi('nutrient_rich_water') }]
    );

    // -- NUTRIENT RICH LIQUID ENDER -- //
    mixer(
        event,
        st('nutrient_rich_liquid_ender_from_bonemeal'),
        8,
        200,
        [{ amount: 1, item: mc('bone_meal') }],
        null,
        [{ amount: 100, fluid: mi('liquid_ender') }],
        [{ amount: 100, fluid: mi('nutrient_rich_liquid_ender') }]
    );

    // -- NUTRIENT RICH BLOOD -- //
    mixer(
        event,
        st('nutrient_rich_blood_from_bonemeal'),
        8,
        200,
        [{ amount: 1, item: mc('bone_meal') }],
        null,
        [{ amount: 100, fluid: mi('blood') }],
        [{ amount: 100, fluid: mi('nutrient_rich_blood') }]
    );

    // -- NUTRIENT RICH LAVA -- //
    mixer(
        event,
        st('nutrient_rich_lava_from_bonemeal'),
        8,
        200,
        [{ amount: 1, item: mc('bone_meal') }],
        null,
        [{ amount: 100, fluid: mc('lava') }],
        [{ amount: 100, fluid: yai('nutrient_rich_lava') }]
    );

    // ------------------------------//
    // -- VANILLA CONCRETE COMPAT -- //
    // ------------------------------//

    // -- VANILLA CONCRETES -- //
    const DYE_COLORS = [
        'white',
        'orange',
        'magenta',
        'yellow',
        'cyan',
        'lime',
        'pink',
        'gray',
        'light_blue',
        'light_gray',
        'purple',
        'blue',
        'brown',
        'green',
        'red',
        'black',
    ];

    DYE_COLORS.forEach((DYE_COLORS) => {
        mixer(
            event,
            st(`vanilla_compat/${DYE_COLORS}_concrete`),
            8,
            100,
            [
                { amount: 2, item: mc('sand') },
                { amount: 2, item: mc('gravel') },
                { amount: 1, item: mc(`${DYE_COLORS}_dye`) },
            ],
            [{ amount: 8, item: mc(`${DYE_COLORS}_concrete`) }],
            [{ amount: 250, fluid: mi('concrete') }]
        );
    });
});
