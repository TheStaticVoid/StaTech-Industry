// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:yet_another_industrialization/${id}`;

    // -- YET ANOTHER INDUSTRIALIZATION REMOVED REICPES -- //
    const YET_ANOTHER_INDUSTRIALIZATION = [
        yai('assembler/arboreous_greenhouse'),
        yai('craft/arboreous_greenhouse'),
        yai('mixer/elytra_duplication'),
        yai('centrifuge/nutrient_rich_water'),
        yai('centrifuge/nutrient_rich_lava'),
        yai('cryogenic_precipitator/blue_ice_nutrient'),
        yai('cryogenic_precipitator/ice_nutrient'),
        yai('cryogenic_precipitator/packed_ice_nutrient'),
        yai('cryogenic_precipitator/powder_snow_bucket_nutrient'),
        yai('cryogenic_precipitator/snow_block_nutrient'),
        yai('cryogenic_precipitator/snow_nutrient'),
        yai('cryogenic_precipitator/snowball_nutrient'),
        yai('dragon_egg_energy_siphon/nutrient_dragon_breath'),
        yai('dragon_egg_energy_siphon/dragon_breath'),
        yai('assembler/dragon_egg_siphon_catalyst/nutrient_rich_dragon_breath'),
        yai('assembler/dragon_egg_siphon_catalyst/dragon_breath'),
    ];
    YET_ANOTHER_INDUSTRIALIZATION.forEach((id) => event.remove({ id: id }));

    // -- ARBOREOUS GREENHOUSE REMOVAL -- //
    event.remove({ type: yai('arboreous_greenhouse') });

    // -- BLUE ICE NUTRIENT -- //
    cryogenicPrecipitator(
        event,
        st('blue_ice_nutrient'),
        8,
        30,
        null,
        [{ amount: 2, item: mc('blue_ice') }],
        [
            { amount: 4000, fluid: mi('nutrient_rich_water') },
            { amount: 64, fluid: mi('cryofluid') },
        ],
        [
            { amount: 41, fluid: mi('argon') },
            { amount: 41, fluid: mi('helium') },
        ]
    );

    // -- ICE NUTRIENT -- //
    cryogenicPrecipitator(
        event,
        st('ice_nutrient'),
        8,
        30,
        null,
        [{ amount: 2, item: mc('ice') }],
        [
            { amount: 1000, fluid: mi('nutrient_rich_water') },
            { amount: 1, fluid: mi('cryofluid') },
        ]
    );

    // -- PACKED ICE NUTRIENT -- //
    cryogenicPrecipitator(
        event,
        st('packed_ice_nutrient'),
        8,
        30,
        null,
        [{ amount: 2, item: mc('packed_ice') }],
        [
            { amount: 4000, fluid: mi('nutrient_rich_water') },
            { amount: 8, fluid: mi('cryofluid') },
        ],
        [
            { amount: 5, fluid: mi('argon') },
            { amount: 5, fluid: mi('helium') },
        ]
    );

    // -- POWDER SNOW BUCKET NUTRIENT -- //
    cryogenicPrecipitator(
        event,
        st('powdered_snow_nutrient'),
        8,
        30,
        [{ amount: 2, item: mc('bucket') }],
        [
            { amount: 1, item: mc('powder_snow_bucket') },
            { amount: 1, item: mc('powder_snow_bucket') },
        ],
        [
            { amount: 1000, fluid: mi('nutrient_rich_water') },
            { amount: 4, fluid: mi('cryofluid') },
        ],
        [{ amount: 2, fluid: mi('argon') }]
    );

    // -- SNOW BLOCK NUTRIENT -- //
    cryogenicPrecipitator(
        event,
        st('snow_block_nutrient'),
        8,
        30,
        null,
        [{ amount: 8, item: mc('snow_block') }],
        [
            { amount: 1000, fluid: mi('nutrient_rich_water') },
            { amount: 8, fluid: mi('cryofluid') },
        ],
        [
            { amount: 5, fluid: mi('argon') },
            { amount: 5, fluid: mi('helium') },
        ]
    );

    // -- SNOW NUTRIENT -- //
    cryogenicPrecipitator(
        event,
        st('snow_nutrient'),
        8,
        30,
        null,
        [{ amount: 12, item: mc('snow') }],
        [
            { amount: 1000, fluid: mi('nutrient_rich_water') },
            { amount: 2, fluid: mi('cryofluid') },
        ],
        [{ amount: 1, fluid: mi('argon') }]
    );

    // -- SNOWBALL NUTRIENT -- //
    cryogenicPrecipitator(
        event,
        st('snowball_nutrient'),
        8,
        30,
        null,
        [{ amount: 8, item: mc('snowball') }],
        [
            { amount: 400, fluid: mi('nutrient_rich_water') },
            { amount: 2, fluid: mi('cryofluid') },
        ],
        [{ amount: 1, fluid: mi('argon') }]
    );

    // -- DRAGON BREATH -- //
    dragonEggEnergySiphon(
        event,
        st('dragon_breath'),
        1,
        100,
        [{ amount: 1, item: yai('dragon_egg_siphon_catalyst') }],
        null,
        [{ amount: 1000, fluid: yai('dragon_breath') }],
        [{ amount: 1250, fluid: yai('impure_dragon_breath') }],
        [{ amount: 102400, type: yai('energy_generation') }]
    );

    // -- DRAGON BREATH NUTRIENT -- //
    dragonEggEnergySiphon(
        event,
        st('dragon_breath_nutrient'),
        1,
        100,
        [{ amount: 1, item: yai('dragon_egg_siphon_catalyst') }],
        null,
        [{ amount: 1000, fluid: yai('nutrient_rich_dragon_breath') }],
        [{ amount: 2500, fluid: yai('impure_dragon_breath') }],
        [{ amount: 204800, type: yai('energy_generation') }]
    );

    // -- DRAGON EGG SIPHON CATALYST -- //
    assembler(
        event,
        st('dragon_egg_siphon_catalyst'),
        8,
        200,
        [
            { amount: 4, item: mi('steel_plate') },
            { amount: 1, item: mi('quartz_tiny_dust') },
        ],
        [{ amount: 1, item: yai('dragon_egg_siphon_catalyst') }],
        [{ amount: 50, fluid: yai('dragon_breath') }]
    );

    // -- DRAGON EGG SIPHON CATALYST NUTRIENT -- //
    assembler(
        event,
        st('dragon_egg_siphon_catalyst_nutrient'),
        8,
        200,
        [
            { amount: 4, item: mi('steel_plate') },
            { amount: 1, item: mi('quartz_tiny_dust') },
        ],
        [{ amount: 4, item: yai('dragon_egg_siphon_catalyst') }],
        [{ amount: 50, fluid: yai('nutrient_rich_dragon_breath') }]
    );

    // -- MIXED HATCH CRAFTING SWAPS -- //
    const MIXED_HATCH_TIER = [
        'bronze',
        'steel',
        'advanced',
        'turbo',
        'highly_advanced',
    ];

    MIXED_HATCH_TIER.forEach((id) => {
        event.shapeless(
            yai(`${id}_mixed_output_hatch`),
            yai(`${id}_mixed_input_hatch`)
        );
        event.shapeless(
            yai(`${id}_mixed_input_hatch`),
            yai(`${id}_mixed_output_hatch`)
        );
    });
});

ServerEvents.tags('item', (event) => {
    const MIXED_HATCH_TIER = [
        'bronze',
        'steel',
        'advanced',
        'turbo',
        'highly_advanced',
    ];
    MIXED_HATCH_TIER.forEach((id) => {
        event.add('kubejs:mixed_input_hatch', yai(`${id}_mixed_input_hatch`));
        event.add('kubejs:mixed_output_hatch', yai(`${id}_mixed_output_hatch`));
    });
});
