// -----------------------------------------
// CREATED BY STATIC, MODIFIED BY DINO FOR USE IN
// STATECH INDUSTRY UNOFFICIAL
// -----------------------------------------

ServerEvents.tags('item', event => {
    event.remove('createaddition:large_connector_usable_rods', ca('electrum_rod'))
})

ServerEvents.tags('fluid', event => {
    event.add('kubejs:pentaborane', mi('pentaborane')) 
});

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:createaddition/${id}`;

    event.remove({type: ca('rolling')})

    event.replaceInput({ input: ca('capacitor') },
        ca('capacitor'),
        mi('capacitor')
    )

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
        ca('crafting/festive_spool'),
        ca('liquid_burning/biofuel'),
        ca('liquid_burning/plantoil'),
        ca('liquid_burning/crude_oil'),
        ca('liquid_burning/lava'),
    ];
    CREATEADDITION_DELETED_ITEMS.forEach(id => event.remove( {id: id} ));

    // -- FESTIVE SPOOL -- //
    event.shapeless(Item.of(ca('festive_spool')),
    [
        ca('copper_spool'),
        mc('glowstone_dust'),
        mc('redstone')
    ]).id(st('festive_spool'));

    // -- ELECTRIC MOTOR -- //
    event.custom({
        type: cr('mechanical_crafting'),
        accept_mirrored: true,
        category: 'misc',
        pattern: [
            '  A  ',
            ' BSB ',
            'BSRSB',
            'WBCBW'
        ],
        key: {
            A: { item: cr('andesite_alloy') },
            B: { tag: 'c:plates/brass' },
            C: { item: mi('capacitor') },
            R: { item: mi('steel_rod_magnetic') },
            S: { item: ca('copper_spool') },
            W: { item: mi('copper_cable') }
        },
        result: {
            id: ca('electric_motor'),
            count: 1
        },
    }).id('electric_motor');

    // -- ALTERNATOR -- //
    event.custom({
        type: cr('mechanical_crafting'),
        accept_mirrored: true,
        category: 'misc',
        pattern: [
            '  A  ',
            ' ISI ',
            'ISRSI',
            ' ISI ',
            '  A  '
        ],
        key: {
            A: { item: cr('andesite_alloy') },
            I: { tag: 'c:plates/iron' },
            R: { item: mi('steel_rod_magnetic') },
            S: { item: ca('copper_spool') },
        },
        result: {
            id: ca('alternator'),
            count: 1
        },
    }).id('alternator');

    // -- TESLA COIL -- //
    event.custom({
        type: cr('mechanical_crafting'),
        accept_mirrored: true,
        category: 'misc',
        pattern: [
            'SSS',
            'MAM',
            'CBC',
            'PEP'
        ],
        key: {
            A: { item: cr('andesite_alloy') },
            B: { item: cr('brass_casing') },
            C: { item: mi('capacitor') },
            E: { item: cr('electron_tube') },
            S: { item: ca('copper_spool') },
            P: { tag: 'c:plates/brass' },
            M: { item: mi('steel_rod_magnetic') }
        },
        result: {
            id: ca('tesla_coil'),
            count: 1
        },
    }).id('tesla_coil');

    // -- BOOSTED DIESEL LIQUID BURNING -- //
    event.custom({
        type: ca('liquid_burning'),
        burn_time: 30000,
        ingredients: [{
            type: 'neoforge:tag',
            amount: 1000,
            tag: 'c:boosted_diesel'
        }],
        results: [],
        superheated: true
    }).id('boosted_diesel_liquid_burning');

    // -- PENTABORANE LIQUID BURNING -- //
    event.custom({
        type: ca('liquid_burning'),
        burn_time: 60000,
        ingredients: [{
            type: 'neoforge:tag',
            amount: 1000,
            tag: 'kubejs:pentaborane'
        }],
        results: [],
        superheated: true
    }).id('pentaborane_liquid_burning');

    // -- LAVA LIQUID BURNING -- //
    event.custom({
        type: ca('liquid_burning'),
        burn_time: 3600,
        ingredients: [{
            type: 'neoforge:tag',
            amount: 1000,
            tag: 'minecraft:lava'
        }],
        results: [],
    }).id('lava_liquid_burning');
    
    // -- BENZENE LIQUID BURNING -- //
    event.custom({
        type: ca('liquid_burning'),
        burn_time: 8000,
        ingredients: [{
            type: 'neoforge:tag',
            amount: 1000,
            tag: 'c:benzene'
        }],
        results: [],
    }).id('benzene_liquid_burning');

});