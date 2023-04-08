ServerEvents.tags('worldgen/biome', e => {
    // remove the naturally spawning oil wells from the world
    e.removeAll('ad_astra:has_structure/oil_well_biomes');
});

ServerEvents.recipes(e => {

    let astra = (id) => `ad_astra:${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;

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
        astra('recipes/jet_suit')
    ];
    AD_ASTRA_DELETED_ITEMS.forEach(id => e.remove( {id: id} ));
    e.remove({ type: astra('fuel_conversion') });

    // -- OXYGEN TO AD ASTRA OXYGEN -- //
    e.custom({
        type: astra('oxygen_conversion'),
        input: mi('oxygen'),
        output: astra('oxygen'),
        conversion_ratio: 1.0
    });

    // -- BOOSTED DIESEL TO ROCKET FUEL -- //
    e.custom({
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
    });

    // -- OXYGEN TANK -- //
    e.shaped(astra('oxygen_tank'), [
        'PR',
        'PP',
        'PP'
    ],
    {
        P: '#c:steel_plates',
        R: mi('steel_rod')
    });

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
    });

    // -- OXYGEN GEAR -- //
    e.shaped(astra('oxygen_gear'), [
        ' R ',
        'PRP',
        'PRP'
    ],
    {
        R: mi('steel_rod'),
        P: '#c:steel_plates'
    });

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
    });

    // -- WHEEL -- // 
    e.shaped(astra('wheel'), [
        ' R ',
        'RSR',
        ' R '
    ],
    {
        R: mi('rubber_sheet'),
        S: '#c:steel_plates'
    });

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
    });

    // -- DESH TANK -- //
    e.shaped(astra('desh_tank'), [
        'DD ',
        'DBR',
        'DD '
    ],
    {
        D: astra('desh_plate'),
        B: mi('steel_tank'),
        R: mi('steel_rod')
    });

    // -- JET SUIT -- //
    e.shaped(astra('jet_suit'), [
        'PEP',
        'TNT',
        'BGB'
    ],
    {
        P: '#c:calorite_plates',
        E: mc('elytra'),
        T: astra('calorite_tank'),
        N: astra('netherite_space_suit'),
        B: '#c:calorite_blocks',
        G: astra('calorite_engine')
    });
});