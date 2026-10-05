// -----------------------------------------
// CREATED BY STATIC, MODIFIED BY DINO FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

ServerEvents.tags('item', (event) => {
    event.remove(
        'createaddition:large_connector_usable_rods',
        '#c:rods/electrum'
    );
});

ServerEvents.tags('fluid', (event) => {
    event.add('kubejs:pentaborane', mi('pentaborane'));
});

ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:createaddition/${id}`;

    event.remove({ type: ca('rolling') });

    event.replaceInput(
        { input: ca('capacitor') },
        ca('capacitor'),
        mi('capacitor')
    );

    // -- CREATE ADDITION REMOVED RECIPES -- //
    const CREATEADDITION_DELETED_ITEMS = [
        ca('crafting/biomass_pellet_from_biomass_pallet_block'),
        ca('compacting/biomass_pellet'),
        ca('crafting/biomass_pallet_block'),
        ca('mixing/biomass_from_honeycomb'),
        ca('mixing/biomass_from_stricks'),
        ca('mixing/biomass_from_crops'),
        ca('mixing/biomass_from_flowers'),
        ca('mixing/biomass_from_saplings'),
        ca('mixing/biomass_from_leaves'),
        ca('mixing/biomass_from_plant_foods'),
        ca('mixing/biomass_from_plants'),
        ca('mixing/bioethanol'),
        ca('compacting/seed_oil'),
        ca('charging/electrify_gold_nugget'),
        ca('charging/electrify_gold_rod'),
        ca('charging/electrify_gold_nugget'),
        ca('charging/electrify_gold_sheet'),
        ca('charging/electrify_gold_block'),
        ca('charging/electrify_gold_ingot'),
        ca('charging/electrify_gold_wire'),
        ca('crafting/capacitor_1'),
        ca('crafting/capacitor_2'),
        ca('crafting/rolling_mill'),
        ca('mechanical_crafting/electric_motor'),
        ca('mechanical_crafting/tesla_coil'),
        ca('mechanical_crafting/alternator'),
        ca('mechanical_crafting/electric_pump'),
        ca('crafting/festive_spool'),
        ca('liquid_burning/biofuel'),
        ca('liquid_burning/plantoil'),
        ca('liquid_burning/crude_oil'),
        ca('liquid_burning/lava'),
    ];
    CREATEADDITION_DELETED_ITEMS.forEach((id) => event.remove({ id: id }));

    // ----------------- //
    // --- SHAPELESS --- //
    // ----------------- //

    // -- FESTIVE SPOOL -- //
    event
        .shapeless(Item.of(ca('festive_spool')), [
            ca('copper_spool'),
            mc('glowstone_dust'),
            mc('redstone'),
        ])
        .id(st('festive_spool'));

    // ------------------ //
    // ---- CHARGING ---- //
    // ------------------ //

    const OX_PHASES = ['', 'exposed_', 'weathered_', 'oxidized_'];

    for (let i = OX_PHASES.length - 1; i > 0; i--) {
        charging(
            event,
            st(
                `${OX_PHASES[i - 1]}copper_tubing_from_${OX_PHASES[i]}copper_tubing`
            ),
            4000,
            200,
            [{ item: sd(`${OX_PHASES[i]}copper_tubing`) }],
            [{ id: sd(`${OX_PHASES[i - 1]}copper_tubing`) }]
        );

        charging(
            event,
            st(`${OX_PHASES[i - 1]}copper_nub_from_${OX_PHASES[i]}copper_nub`),
            4000,
            200,
            [{ item: ap(`${OX_PHASES[i]}copper_nub`) }],
            [{ id: ap(`${OX_PHASES[i - 1]}copper_nub`) }]
        );
    }

    // ------------------------- //
    // -- MECHANICAL CRAFTING -- //
    // ------------------------- //

    // -- ELECTRIC MOTOR -- //
    mechanicalCrafting(
        event,
        st('electric_motor'),
        true,
        ['  A  ', ' BSB ', 'BSRSB', 'WBCBW'],
        {
            A: { item: cr('andesite_alloy') },
            B: { tag: 'c:plates/brass' },
            C: { item: mi('capacitor') },
            R: { item: mi('steel_rod_magnetic') },
            S: { item: ca('copper_spool') },
            W: { item: mi('copper_cable') },
        },
        {
            id: ca('electric_motor'),
            count: 1,
        }
    );

    // -- ALTERNATOR -- //
    mechanicalCrafting(
        event,
        st('alternator'),
        true,
        ['  A  ', ' ISI ', 'ISRSI', ' ISI ', '  A  '],
        {
            A: { item: cr('andesite_alloy') },
            I: { tag: 'c:plates/iron' },
            R: { item: mi('steel_rod_magnetic') },
            S: { item: ca('copper_spool') },
        },
        {
            id: ca('alternator'),
            count: 1,
        }
    );

    // -- TESLA COIL -- //
    mechanicalCrafting(
        event,
        st('tesla_coil'),
        true,
        ['SSS', 'MAM', 'CBC', 'PEP'],
        {
            A: { item: cr('andesite_alloy') },
            B: { item: cr('brass_casing') },
            C: { item: mi('capacitor') },
            E: { item: cr('electron_tube') },
            S: { item: ca('copper_spool') },
            P: { tag: 'c:plates/brass' },
            M: { item: mi('steel_rod_magnetic') },
        },
        {
            id: ca('tesla_coil'),
            count: 1,
        }
    );

    // ---------------------- //
    // --- LIQUID BURNING --- //
    // ---------------------- //

    // -- BOOSTED DIESEL LIQUID BURNING -- //
    liquidBurning(
        event,
        st('boosted_diesel_liquid_burning'),
        30000,
        [
            {
                type: 'neoforge:tag',
                amount: 1000,
                tag: 'c:boosted_diesel',
            },
        ],
        true
    );

    // -- PENTABORANE LIQUID BURNING -- //
    liquidBurning(
        event,
        st('pentaborane_liquid_burning'),
        60000,
        [
            {
                type: 'neoforge:tag',
                amount: 1000,
                tag: 'kubejs:pentaborane',
            },
        ],
        true
    );

    // -- LAVA LIQUID BURNING -- //
    liquidBurning(event, st('lava_liquid_burning'), 3600, [
        {
            type: 'neoforge:tag',
            amount: 1000,
            tag: 'minecraft:lava',
        },
    ]);

    // -- BENZENE LIQUID BURNING -- //
    liquidBurning(event, st('benzene_liquid_burning'), 8000, [
        {
            type: 'neoforge:tag',
            amount: 1000,
            tag: 'c:benzene',
        },
    ]);
});
