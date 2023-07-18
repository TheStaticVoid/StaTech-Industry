// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.tags('worldgen/biome', e => {
    // remove the naturally spawning oil wells from the world
    e.removeAll('ad_astra:has_structure/oil_well_biomes');
});

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:ad_astra/${id}`;
    let ad = (id) => `ad_astra:${id}`;
    let mi = (id) => `modern_industrialization:${id}`;

    // -- AD ASTRA REMOVED RECIPES -- //
    const AD_ASTRA_DELETED_ITEMS = [
        ad('recipes/steel_ingot_from_blasting_iron_ingot'),
        ad('recipes/coal_generator'),
        ad('recipes/astrodux'),
        ad('hammering/steel_plate'),
        ad('hammering/ostrum_plate'),
        ad('hammering/iron_plate'),
        ad('hammering/desh_plate'),
        ad('hammering/calorite_plate'),
        ad('recipes/steel_cable'),
        ad('recipes/desh_cable'),
        ad('recipes/desh_fluid_pipe'),
        ad('recipes/ostrum_fluid_pipe'),
        ad('recipes/compressor'),
        ad('recipes/fuel_refinery'),
        ad('recipes/cable_duct'),
        ad('recipes/fluid_pipe_duct'),
        ad('recipes/engine_fan'),
        ad('recipes/oxygen_tank'),
        ad('recipes/oxygen_gear'),
        ad('recipes/oxygen_loader'),
        ad('recipes/space_helmet'),
        ad('recipes/space_suit'),
        ad('recipes/space_pants'),
        ad('recipes/space_boots'),
        ad('recipes/nasa_workbench'),
        ad('recipes/engine_frame'),
        ad('recipes/steel_tank'),
        ad('recipes/wrench'),
        ad('recipes/water_pump'),
        ad('recipes/wheel'),
        ad('recipes/tier_1_rover'),
        ad('recipes/desh_tank'),
        ad('recipes/iron_rod'),
        ad('recipes/rocket_fin'),
        ad('recipes/rocket_nose_cone'),
        ad('recipes/steel_engine'),
        ad('recipes/jet_suit'),
        ad('recipes/desh_engine'),
        ad('recipes/ostrum_tank'),
        ad('recipes/ostrum_engine'),
        ad('recipes/calorite_tank'),
        ad('recipes/calorite_engine'),
        ad('recipes/solar_panel'),
        ad('recipes/launch_pad'),
        ad('recipes/nasa_workbench/tier_1_rocket')
    ];
    AD_ASTRA_DELETED_ITEMS.forEach(id => e.remove( {id: id} ));
    e.remove({ type: ad('fuel_conversion') });

    // -- OXYGEN TO AD ASTRA OXYGEN -- //
    e.custom({
        type: ad('oxygen_conversion'),
        input: mi('oxygen'),
        output: ad('oxygen'),
        conversion_ratio: 1.0
    })
    .id(st('oxygen'));

    // -- BOOSTED DIESEL TO ROCKET FUEL -- //
    e.custom({
        type: ad('fuel_conversion'),
        input: mi('boosted_diesel'),
        output: ad('fuel'),
        conversion_ratio: 0.5
    })
    .id(st('fuel'));

    // -- TIER 1 ROCKET -- //
    e.custom({
        type: ad('nasa_workbench'),
        ingredients: [
            { ingredient: { item: ad('rocket_nose_cone') } },
            { ingredient: { tag: 'c:enderium_blocks' } },
            { ingredient: { tag: 'c:enderium_blocks' } },
            { ingredient: { tag: 'c:enderium_blocks' } },
            { ingredient: { tag: 'c:enderium_blocks' } },
            { ingredient: { tag: 'c:enderium_blocks' } },
            { ingredient: { tag: 'c:enderium_blocks' } },
            { ingredient: { item: ad('rocket_fin') } },
            { ingredient: { item: ad('steel_tank') } },
            { ingredient: { item: ad('steel_tank') } },
            { ingredient: { item: ad('rocket_fin') } },
            { ingredient: { item: ad('rocket_fin') } },
            { ingredient: { item: ad('steel_engine') } },
            { ingredient: { item: ad('rocket_fin') } }
        ],
        output: ad('tier_1_rocket')
    })
    .id(st('tier_1_rocket'));

    // -- FUEL REFINERY -- //
    e.shaped(ad('fuel_refinery'), [
        'SCS',
        'PHP',
        'SCS'
    ],
    {
        S: mi('steel_large_plate'),
        P: mi('advanced_pump'),
        H: mi('turbo_machine_hull'),
        C: mi('digital_circuit')
    })
    .id(st('fuel_refinery'));

    // -- OXYGEN TANK -- //
    e.shaped(ad('oxygen_tank'), [
        'PR',
        'PP',
        'PP'
    ],
    {
        P: '#c:steel_plates',
        R: mi('steel_rod')
    })
    .id(st('oxygen_tank'));

    // -- OXYGEN LOADER -- //
    e.shaped(ad('oxygen_loader'), [
        'PFP',
        'THT',
        'PCP'
    ],
    {
        P: mi('steel_large_plate'),
        F: ad('engine_fan'),
        T: ad('oxygen_tank'),
        H: mi('turbo_machine_hull'),
        C: mi('digital_circuit')
    })
    .id(st('oxygen_loader'));

    // -- OXYGEN GEAR -- //
    e.shaped(ad('oxygen_gear'), [
        ' R ',
        'PRP',
        'PRP'
    ],
    {
        R: mi('steel_rod'),
        P: '#c:steel_plates'
    })
    .id(st('oxygen_gear'));

    // -- NASA WORKBENCH -- //
    e.shaped(ad('nasa_workbench'), [
        'AAA',
        'PHP',
        'CMC'
    ],
    {
        A: mi('robot_arm'),
        P: mi('steel_large_plate'),
        H: mi('turbo_machine_hull'),
        C: mi('digital_circuit'),
        M: mi('advanced_motor')
    })
    .id(st('nasa_workbench'));

    // -- WHEEL -- // 
    e.shaped(ad('wheel'), [
        ' R ',
        'RSR',
        ' R '
    ],
    {
        R: mi('rubber_sheet'),
        S: '#c:steel_plates'
    })
    .id(st('wheel'));

    // -- TIER 1 ROVER -- // 
    e.shaped(ad('tier_1_rover'), [
        'D R',
        'SDE',
        'WPW'
    ],
    {
        D: ad('desh_block'),
        R: mi('steel_rod'),
        S: '#c:steel_blocks',
        E: ad('desh_engine'),
        W: ad('wheel'),
        P: ad('desh_plate')
    })
    .id(st('tier_1_rover'));

    // -- JET SUIT -- //
    e.shaped(ad('jet_suit'), [
        'PJP',
        'TNT',
        'BGB'
    ],
    {
        P: '#c:calorite_plates',
        J: mi('diesel_jetpack'),
        T: ad('calorite_tank'),
        N: ad('netherite_space_suit'),
        B: '#c:calorite_blocks',
        G: ad('calorite_engine')
    })
    .id(st('jet_suit'));

    // -- LAUNCHPAD -- //
    e.shaped(ad('launch_pad'), [
        'SIS',
        'ISI',
        'SIS'
    ],
    {
        S: mi('steel_large_plate'),
        I: mi('iron_large_plate')
    })
    .id(st('launch_pad'));

    // -- SOLAR PANEL -- //
    e.shaped(ad('solar_panel'), [
        'BBB',
        'CFC',
        'PDP'
    ],
    {
        B: '#c:blue_glass',
        C: '#c:calorite_ingots',
        F: mi('turbo_machine_hull'),
        P: '#c:desh_plates',
        D: mi('digital_circuit')
    });
});

// Tag all ore items under the common ores tag
ServerEvents.tags('item', e => {
    let ad = (id) => `ad_astra:${id}`;

    const ORES = [
        ad('moon_cheese_ore'),
        ad('moon_desh_ore'),
        ad('deepslate_desh_ore'),
        ad('moon_iron_ore'),
        ad('moon_ice_shard_ore'),
        ad('deepslate_ice_shard_ore'),
        ad('mars_ostrum_ore'),
        ad('deepslate_ostrum_ore'),
        ad('mars_ice_shard_ore'),
        ad('venus_calorite_ore'),
        ad('deepslate_calorite_ore'),
        ad('glacio_ice_shard_ore')
    ];
    ORES.forEach(id => e.add('c:ores', id));
});