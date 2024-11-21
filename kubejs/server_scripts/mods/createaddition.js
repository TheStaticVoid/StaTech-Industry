// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:createaddition/${id}`;
    let ca = (id) => `createaddition:${id}`;
    let cr = (id) => `create:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let mi = (id) => `modern_industrialization:${id}`;

    // -- CREATE CRAFTS & ADDITIONS REMOVED RECIPES -- //
    const REMOVED_RECIPES = [
        ca('mixing/bioethanol'),
        ca('mixing/biomass_from_flowers'),
        ca('mixing/biomass_from_leaves'),
        ca('mixing/biomass_from_plants'),
        ca('mixing/biomass_from_plant_foods'),
        ca('mixing/biomass_from_saplings'),
        ca('mixing/biomass_from_sticks'),
        ca('rolling/electrum_ingot'),
        ca('rolling/electrum_plate'),
        ca('rolling/iron_ingot'),
        ca('rolling/iron_plate'),
        ca('rolling/gold_ingot'),
        ca('rolling/gold_plate'),
        ca('rolling/brass_ingot'),
        ca('rolling/brass_plate'),
        ca('rolling/copper_ingot'),
        ca('rolling/copper_plate'),
        ca('rolling/straw'),
        ca('crafting/rolling_mill'),
        ca('compacting/seed_oil'),
        ca('mechanical_crafting/accumulator'),
        ca('mechanical_crafting/tesla_coil'),
        ca('crafting/capacitor_1'),
        ca('crafting/capacitor_2'),
        ca('crafting/diamond_grit_sandpaper'),
        ca('crafting/small_light_connector'),
        ca('crushing/diamond'),
        ca('pressing/zinc_ingot')
    ];
    REMOVED_RECIPES.forEach(id => e.remove({id : id}));

    // -- DIAMOND GRIT SANDPAPER -- //
    e.shapeless(ca('diamond_grit_sandpaper'), [ mc('paper'), mi('diamond_dust') ])
        .id(st('diamond_grit_sandpaper'));

    // -- SMALL LIGHT CONNECTOR -- //
    e.shapeless(ca('small_light_connector'), [ ca('connector'), mi('copper_wire'), mc('glass') ])
        .id(st('small_light_connector'));

    // -- BARBED WIRE -- //
    e.shaped(ca('barbed_wire'), [
        ' W ',
        'WIW',
        ' W '
    ],
    {
        W: mi('tin_wire'),
        I: mi('iron_rod')
    })
    .id(st('barbed_wire'));

    // -- FESTIVE SPOOL -- //
    e.shaped(ca('festive_spool'), [
        ' W ',
        'LIL',
        ' W '
    ],
    {
        W: mi('copper_wire'),
        I: ca('spool'),
        L: {tag: "snowyspirit:glow_lights"}
    })
    .id(st('festive_spool'));

    // -- DIAMOND DUST CRUSHING -- //
    e.custom({
        type: cr('crushing'),
        ingredients: [
            { item: mc('diamond') }
       ],
       results: [
            { item: mi('diamond_dust') }
       ],
       processingTime: 900
    })
    .id(st('crushing_diamond'));

    // -- ELECTRIC MOTOR -- //
    e.custom({
        type: cr('mechanical_crafting'),
        pattern: [
            '  A  ',
            ' BSB ',
            'BSRSB',
            ' BCB '
        ],
        key: {
            A: { item: cr('andesite_alloy') },
            C: { item: mi('basic_machine_hull') },
            B: { tag: 'c:brass_plates' },
            R: { item: mi('steel_rod_magnetic') },
            S: { item: mi('copper_wire') }
        },
        result: { item: ca('electric_motor') }
    })
    .id(st('electric_motor'));

    // -- ALTERNATOR -- //
    e.custom({
        type: cr('mechanical_crafting'),
        pattern: [
            '  A  ',
            ' ISI ',
            'ISRSI',
            ' ICI '
        ],
        key: {
            C: { item: mi('basic_machine_hull') },
            I: { tag: 'c:steel_plates' },
            R: { item: mi('steel_rod_magnetic') },
            S: { item: mi('copper_wire') },
            A: { item: cr('andesite_alloy') }
        },
        result: { item: ca('alternator') }
    })
    .id(st('alternator'));
});

ServerEvents.tags('fluid', e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let mi = (id) => `modern_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let ca = (id) => `createaddition:${id}`;
    
    const BURNABLE_FUEL_4800 = [
        mi('creosote')
    ];
    BURNABLE_FUEL_4800.forEach(id => { e.add(ca('burnable_fuel_4800'), id) });

    const BURNABLE_FUEL_12800 = [
        mc('lava'),
        mi('crude_oil')
    ];
    BURNABLE_FUEL_12800.forEach(id => { e.add(ca('burnable_fuel_12800'), id) });

    const BURNABLE_FUEL_20000 = [
        mi('diesel'),
        mi('biodiesel'),
    ];
    BURNABLE_FUEL_20000.forEach(id => { e.add(ca('burnable_fuel_20000'), id) });
});

ServerEvents.tags('item', e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let mi = (id) => `modern_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let ca = (id) => `createaddition:${id}`;
    let c = (id) => `c:${id}`;
    
    e.add(c('wires/copper'), mi('copper_wire')),
    e.add(c('copper_rods'), mi('copper_rod')),
    e.add(c('wires/gold'), mi('gold_wire')),
    e.add(c('electrum_wires'), mi('electrum_wire'))

});