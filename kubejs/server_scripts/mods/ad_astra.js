ServerEvents.tags('worldgen/biome', e => {
    // remove the naturally spawning oil wells from the world
    e.removeAll('ad_astra:has_structure/oil_well_biomes');
});

ServerEvents.recipes(e => {

    let astra = (id) => `ad_astra:${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let st = (id) => `statech:ad_astra/${id}`;

    const AD_ASTRA_DELETED_ITEMS = [
        astra('recipes/steel_ingot_from_blasting_iron_ingot'),
        astra('recipes/coal_generator'),
        astra('recipes/astrodux'),
        astra('hammering/steel_plate'),
        astra('hammering/ostrum_plate'),
        astra('hammering/iron_plate'),
        astra('hammering/desh_plate'),
        astra('hammering/calorite_plate'),
        astra('recipes/steel_cable'),
        astra('recipes/desh_cable'),
        astra('recipes/desh_fluid_pipe'),
        astra('recipes/ostrum_fluid_pipe'),
        astra('recipes/compressor'),
        astra('recipes/fuel_refinery'),
        astra('recipes/cable_duct'),
        astra('recipes/fluid_pipe_duct'),
        astra('recipes/engine_fan'),
        astra('recipes/oxygen_tank'),
        astra('recipes/oxygen_gear'),
        astra('recipes/oxygen_loader'),
        astra('recipes/space_helmet'),
        astra('recipes/space_suit'),
        astra('recipes/space_pants'),
        astra('recipes/space_boots'),
        astra('recipes/nasa_workbench'),
        astra('recipes/engine_frame'),
        astra('recipes/steel_tank'),
        astra('recipes/wrench'),
        astra('recipes/water_pump'),
        astra('recipes/wheel'),
        astra('recipes/tier_1_rover'),
        astra('recipes/desh_tank'),
        astra('recipes/iron_rod'),
        astra('recipes/rocket_fin'),
        astra('recipes/rocket_nose_cone'),
        astra('recipes/steel_engine'),
        astra('recipes/jet_suit'),
        astra('recipes/desh_engine'),
        astra('recipes/ostrum_tank'),
        astra('recipes/ostrum_engine'),
        astra('recipes/calorite_tank'),
        astra('recipes/calorite_engine'),
        astra('recipes/solar_panel'),
        astra('recipes/launch_pad')
    ];
    AD_ASTRA_DELETED_ITEMS.forEach(id => e.remove( {id: id} ));
    e.remove({ type: astra('fuel_conversion') });

    // -- OXYGEN TO AD ASTRA OXYGEN -- //
    e.custom({
        id: st('oxygen'),
        type: astra('oxygen_conversion'),
        input: mi('oxygen'),
        output: astra('oxygen'),
        conversion_ratio: 1.0
    });

    // -- BOOSTED DIESEL TO ROCKET FUEL -- //
    e.custom({
        id: st('fuel'),
        type: astra('fuel_conversion'),
        input: mi('boosted_diesel'),
        output: astra('fuel'),
        conversion_ratio: 0.5
    });

    // -- FUEL REFINERY -- //
    e.shaped(astra('fuel_refinery'), [
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
    e.shaped(astra('oxygen_tank'), [
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
    e.shaped(astra('oxygen_loader'), [
        'PFP',
        'THT',
        'PCP'
    ],
    {
        P: mi('steel_large_plate'),
        F: astra('engine_fan'),
        T: astra('oxygen_tank'),
        H: mi('turbo_machine_hull'),
        C: mi('digital_circuit')
    })
    .id(st('oxygen_loader'));

    // -- OXYGEN GEAR -- //
    e.shaped(astra('oxygen_gear'), [
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
    e.shaped(astra('nasa_workbench'), [
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
    e.shaped(astra('wheel'), [
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
    e.shaped(astra('tier_1_rover'), [
        'D R',
        'SDE',
        'WPW'
    ],
    {
        D: astra('desh_block'),
        R: mi('steel_rod'),
        S: '#c:steel_blocks',
        E: astra('desh_engine'),
        W: astra('wheel'),
        P: astra('desh_plate')
    })
    .id(st('tier_1_rover'));

    // -- JET SUIT -- //
    e.shaped(astra('jet_suit'), [
        'PJP',
        'TNT',
        'BGB'
    ],
    {
        P: '#c:calorite_plates',
        J: mi('diesel_jetpack'),
        T: astra('calorite_tank'),
        N: astra('netherite_space_suit'),
        B: '#c:calorite_blocks',
        G: astra('calorite_engine')
    })
    .id(st('jet_suit'));

    // -- LAUNCHPAD -- //
    e.shaped(astra('launch_pad'), [
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
    e.shaped(astra('solar_panel'), [
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