// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    let st = (id) => `statech:modern_industrialization/${id}`;

    // -- MODERN INDUSTRIALIZATION REMOVED RECIPES -- //
    const MI_DELETED_ITEMS = [
        mi('forge_hammer'),
        mi('guidebook'),
        mi('vanilla_recipes/steel_forge_hammer_asbl'),
        mi('materials/bronze_dust'),
        mi('materials/bronze_tiny_dust'),
        mi('materials/fire_clay_dust'),
        mi('vanilla_recipes/steam_bucket'),
        mi('vanilla_recipes/steam_bucket_exported_mi_furnace'),
        mi('materials/uncooked_steel_dust'),
        mi('tools/smithing/quantum_sword'),
        mi('armor/smithing/quantum_leggings'),
        mi('armor/smithing/quantum_helmet'),
        mi('armor/smithing/quantum_chestplate'),
        mi('armor/smithing/quantum_boots'),
        mi('vanilla_recipes/mixer/netherite'),
        mi('materials/cupronickel/craft/coil'),
        mi('vanilla_recipes/chains'),
        mi('vanilla_recipes/packager/chains'),
        mi('materials/kanthal/craft/coil'),
        mi('materials/superconductor/craft/coil'),
        mi('materials/tungstensteel/craft/coil'),
        mi('armor/gravichestplate'),
        mi('electric_age/component/craft/ultradense_metal_ball_asbl'),
        mi('materials/fire_clay_bricks'),
        mi('compat/techreborn/macerator/minecraft_clay_ball_to_techreborn_clay_dust'),
        mi('steam_age/bronze/furnace_asbl'),
        mi('steam_age/bronze/boiler_asbl'),
        mi('tools/steam_mining_drill'),
        mi('electric_age/component/craft/op_amp_asbl'),
        mi('electric_age/machine/assembler/replicator')
    ];
    MI_DELETED_ITEMS.forEach(id => event.remove( {id: id} ));
    
    // -- CONVERSION RECIPE FOR EXISTING WORLDS -- //
    event.shapeless(mi('laser_engraver'), [ ae('inscriber') ]).id(st('laser_engraver_conversion'));

    // -- BLOOD GENERATOR -- //
    event.shaped(mi('blood_generator'), [
        'RCR',
        'THT',
        'PCP'
    ],
    {
        H: mi('turbo_machine_hull'),
        T: mi('hv_steam_turbine'),
        C: mi('digital_circuit'),
        R: mi('stainless_steel_rotor'),
        P: mi('advanced_pump')
    })
    .id(st('blood_generator'));

    // -- LARGE STEAM MACERATOR -- // 
    event.shaped(mi('large_steam_macerator'), [
        'BBB',
        'BMB',
        'BBB'
    ],
    {
        B: '#c:bronze_plates',
        M: mi('steel_macerator')
    })
    .id(st('large_steam_macerator'));

    // -- BOSS CRUSHER -- // 
    event.shaped(mi('boss_crusher'), [
        'RCR',
        'PHP',
        'MCM'
    ],
    {
        H: mi('turbo_machine_hull'),
        C: kj('withered_soc'),
        M: mi('large_pump'),
        P: mi('piston'),
        R: mi('invar_rotary_blade')
    })
    .id(st('boss_crusher'));

    // -- LARGE STEAM FURNACE -- //
    event.shaped(mi('large_steam_furnace'), [
        'BBB',
        'BFB',
        'BCB'
    ],
    {
        B: mc('bricks'),
        F: mc('furnace'),
        C: mi('coke')
    })
    .id(st('large_steam_furnace'));

    // -- CHEMICALLY INERT PTFE CASING -- //
    event.shaped(mi('chemically_inert_ptfe_casing'), [
        'PPP',
        'PGP',
        'PPP'
    ],
    {
        P: '#c:polytetrafluoroethylene_plates',
        G: '#c:polytetrafluoroethylene_gears'
    })
    .id(st('chemically_inert_ptfe_casing'));

    // -- POLYTETRAFLUOROETHYLENE PIPE MACHINE CASING -- // 
    event.shaped('2x ' + mi('polytetrafluoroethylene_machine_casing_pipe'), [
        'C C',
        'CMC',
        'C C'
    ],
    {
        C: mi('polytetrafluoroethylene_curved_plate'),
        M: mi('chemically_inert_ptfe_casing')
    })
    .id(st('ptfe_machine_casing_pipe'));

    // -- LARGE CHEMICAL REACTOR -- //
    event.shaped(mi('large_chemical_reactor'), [
        'PRP',
        'UHU',
        'PCP'
    ],
    {
        P: '#c:polytetrafluoroethylene_plates',
        R: mi('chemical_reactor'),
        U: mi('advanced_motor'),
        H: mi('turbo_machine_hull'),
        C: mi('digital_circuit')
    })
    .id(st('large_chemical_reactor'));

    // -- PHOTOSYNTHETIC CHAMBER -- //
    event.shaped(mi('photosynthetic_chamber'), [
        'MGM',
        'IHI',
        'PDT',
    ],
    {
        G: '#c:glass',
        H: mi('basic_machine_hull'),
        D: mc('dirt'),
        P: mi('pump'),
        T: mi('steel_tank'),
        I: mi('inductor'),
        M: mi('motor')
    })
    .id(st('photosynthetic_chamber'));

    // -- CORE MINING DRILL -- //
    event.shaped(mi('core_drill'), [
        'MSM',
        'CHC',
        'SDS'
    ],
    {
        S: mi('clean_stainless_steel_machine_casing'),
        C: mi('quantum_circuit'),
        H: mi('quantum_machine_hull'),
        M: mi('large_advanced_motor'),
        D: mi('desh_drill_head')
    })
    .id(st('core_drill'));

    // -- SINGULARITY FORGE -- //
    event.shaped(mi('singularity_forge'), [
        'PPP',
        'CHC',
        'PPP'
    ],
    {
        P: mi('plasma_handling_iridium_machine_casing'),
        C: mi('quantum_circuit'),
        H: mi('quantum_machine_hull')
    })
    .id(st('singularity_forge'));

    // -- STEAM MINING DRILL -- // 
    event.shaped(mi('steam_mining_drill'), [
        'FDD',
        'PHD',
        'BPF'
    ],
    {
        F: mc('furnace'),
        D: mc('diamond'),
        P: mi('steel_large_plate'),
        H: mi('copper_drill_head'),
        B: mc('bucket')
    })
    .id(st('steam_mining_drill'));

    // -- MOB CRUSHER -- // 
    event.shaped(mi('mob_crusher'), [
        'RCR',
        'PHP',
        'MCM'
    ],
    {
        H: mi('steel_machine_casing'),
        C: mi('electronic_circuit'),
        M: mi('large_motor'),
        P: mi('piston'),
        R: mi('invar_rotary_blade')
    })
    .id(st('mob_crusher'));
    
    // -- FORGE HAMMER -- //
    event.shaped(mi('forge_hammer'), [
        'PPP',
        ' B ',
        'III'
    ],
    {
        P: '#c:iron_plates',
        B: '#c:bronze_ingots',
        I: '#c:iron_ingots'
    })
    .id(st('forge_hammer'));

    // -- PYROLYSE OVEN -- //
    event.shaped(mi('pyrolyse_oven'), [
        'HIH',
        'ICI',
        'HAH'
    ],
    {
        H: tr('cupronickel_heating_coil'),
        I: mi('inductor'),
        C: mi('basic_machine_hull'),
        A: mi('analog_circuit')
    })
    .id(st('pyrolyse_oven'));

    // -- ALLOY SMELTER -- //
    event.shaped(mi('alloy_smelter'), [
        'MAM',
        'IFI',
        'TAT'
    ],
    {
        M: mi('cupronickel_wire_magnetic'),
        A: mi('analog_circuit'),
        I: mi('inductor'),
        T: mi('tin_cable'),
        F: mi('electric_furnace')
    })
    .id(st('alloy_smelter'));

    // -- ROCKET PART ASSEMBLER -- //
    event.shaped(mi('rocket_part_assembler'), [
        'RMR',
        'GHG',
        'APA'
    ],
    {
        R: mi('robot_arm'),
        M: mi('advanced_motor'),
        G: mi('stainless_steel_gear'),
        H: mi('basic_machine_hull'),
        A: mi('digital_circuit'),
        P: mi('advanced_pump')
    })
    .id(st('rocket_part_assembler'));

    // -- MEGA SMELTER -- //
    event.shaped(mi('mega_smelter'), [
        'MCM',
        'FHF',
        'MCM'
    ],
    {
        M: mi('cupronickel_wire_magnetic'),
        C: mi('electronic_circuit'),
        F: mi('electric_furnace'),
        H: mi('advanced_machine_hull')
    })
    .id(st('mega_smelter'));

    // -- SPACE PROBE LAUNCHER -- //
    event.shaped(mi('space_probe_launcher'), [
        'PUP',
        'GHG',
        'MCM'
    ],
    {
        P: mi('calorite_machine_casing_pipe'),
        U: mi('processing_unit'),
        G: mi('calorite_gear'),
        H: mi('highly_advanced_machine_hull'),
        M: mi('large_advanced_motor'),
        C: mi('calorite_machine_casing')
    })
    .id(st('space_probe_launcher'));

    // -- INDUSTRIAL GREENHOUSE -- //
    event.shaped(mi('greenhouse'), [
        'MCM',
        'RHR',
        'PCP'
    ],
    {
        M: mi('motor'),
        C: mi('analog_circuit'),
        H: mi('basic_machine_hull'),
        R: mi('tin_rotor'),
        P: mi('pump')
    })
    .id(st('greenhouse'));

    // -- LASER ENGRAVER -- //
    event.shaped(mi('laser_engraver'), [
        'CGC',
        'MHM',
        'ECE'
    ],
    {
        E: mi('electronic_circuit'),
        C: mi('cupronickel_wire_magnetic'),
        H: mi('basic_machine_hull'),
        M: mi('large_motor'),
        G: '#c:glass_blocks'
    })
    .id('laser_engraver');

    // -- CALORITE MACHINE CASING -- //
    event.shaped(mi('calorite_machine_casing'), [
        'PPP',
        'PGP',
        'PPP'
    ],
    {
        P: '#c:calorite_plates',
        G: '#c:calorite_gears'
    })
    .id(st('calorite_machine_casing'));

    // -- CALORITE MACHINE PIPE CASING -- // 
    event.shaped(mi('calorite_machine_casing_pipe'), [
        'C C',
        'CMC',
        'C C'
    ],
    {
        C: mi('calorite_curved_plate'),
        M: mi('calorite_machine_casing')
    })
    .id(st('calorite_machine_casing_pipe'));

    // -- DESH DRILL -- //
    event.shaped('4x ' + mi('desh_drill'), [
        'GIH',
        'MUI',
        'CMG'
    ],
    {
        G: '#c:enderium_gears',
        I: '#' + mi('item_pipes'),
        H: mi('desh_drill_head'),
        M: mi('large_advanced_motor'),
        U: mi('processing_unit'),
        C: mi('annealed_copper_wire')
    })
    .id(st('desh_drill'));

    // ZINC DRILL // 
    event.shaped('4x ' + mi('zinc_drill'), [
        '  H',
        'GR ',
        'BG '
    ],
    {
        H: mi('zinc_drill_head'),
        G: mi('iron_gear'),
        R: cr('electron_tube'),
        B: '#c:bronze_plates'
    })
    .id(st('zinc_drill'));

    // -- BRONZE FURNACE -- //
    event.shaped(mi('bronze_furnace'), [
        'PPP',
        'PCP',
        'PFP'
    ],
    {
        P: '#c:bronze_plates',
        F: mc('furnace'),
        C: mi('bronze_machine_casing')
    })
    .id(st('bronze_furnace'));

    // -- BRONZE BOILER -- //
    event.shaped(mi('bronze_boiler'), [
        'PTP',
        'PCP',
        'FFF'
    ],
    {
        P: '#c:bronze_plates',
        T: mi('bronze_tank'),
        F: mi('fire_clay_bricks'),
        C: mi('bronze_machine_casing')
    })
    .id(st('bronze_boiler'));

    // -- CLEAR FLUID FROM CREATIVE TANK -- //
    event.shapeless(mi('creative_tank'), mi('creative_tank')).id(st('clear_fluids_from_creative_tank'));

    // -- CLEAR ITEM FROM CREATIVE BARREL -- //
    event.shapeless(mi('creative_barrel'), mi('creative_barrel')).id(st('clear_items_from_creative_barrel'));

    // -- Gravichestplate -- //
    event.shaped(mi('gravichestplate'), [
        'PUP',
        'PJP',
        'CLC'
    ],
    {
        P: '#c:diamond_plates',
        U: mi('turbo_upgrade'),
        J: ad('jet_suit'),
        C: mi('titanium_large_plate'),
        L: tr('lapotron_crystal')
    })
    .id(st('gravichestplate'));

    // -- Quantum Helmet -- //
    event.smithing(
        mi('quantum_helmet'),
        tr('quantum_helmet'),
        mi('quantum_upgrade')
    )
    .id(st('quantum_helmet'));
    // -- Quantum Chestplate -- //
    event.smithing(
        mi('quantum_chestplate'),
        tr('quantum_chestplate'),
        mi('quantum_upgrade')
    )
    .id(st('quantum_chestplate'));
    // -- Quantum Leggings -- //
    event.smithing(
        mi('quantum_leggings'),
        tr('quantum_leggings'),
        mi('quantum_upgrade')
    )
    .id(st('quantum_leggings'));
    // -- Quantum Boots -- //
    event.smithing(
        mi('quantum_boots'),
        tr('quantum_boots'),
        mi('quantum_upgrade')
    )
    .id(st('quantum_boots'));
    // -- Quantum Sword -- //
    event.smithing(
        mi('quantum_sword'),
        tr('nanosaber'),
        mi('quantum_upgrade')
    )
    .id(st('quantum_sword'));
});

ServerEvents.tags('item', event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let mi = (id) => `modern_industrialization:${id}`;

    const LV_WIRE = [
        mi('copper_cable'),
        mi('tin_cable'),
        mi('silver_cable')
    ];
    LV_WIRE.forEach(id => { event.add('kubejs:lv_wire', id) });

    const MV_WIRE = [
        mi('cupronickel_cable'),
        mi('electrum_cable')
    ];
    MV_WIRE.forEach(id => { event.add('kubejs:mv_wire', id) });

    const HV_WIRE = [
        mi('aluminum_cable'),
        mi('kanthal_cable')
    ]
    HV_WIRE.forEach(id => { event.add('kubejs:hv_wire', id) });

    const EV_WIRE = [
        mi('annealed_copper_cable'),
        mi('platinum_cable'),
        mi('tungstensteel_cable')
    ]
    EV_WIRE.forEach(id => { event.add('kubejs:ev_wire', id) });

    const ENERGY_INPUT_HATCH = [
        mi('lv_energy_input_hatch'),
        mi('mv_energy_input_hatch'),
        mi('hv_energy_input_hatch'),
        mi('ev_energy_input_hatch'),
        mi('superconductor_energy_input_hatch')
    ];
    ENERGY_INPUT_HATCH.forEach(id => { event.add('kubejs:energy_input_hatch', id) });

    const ENERGY_OUTPUT_HATCH = [
        mi('lv_energy_output_hatch'),
        mi('mv_energy_output_hatch'),
        mi('hv_energy_output_hatch'),
        mi('ev_energy_output_hatch'),
        mi('superconductor_energy_output_hatch')
    ];
    ENERGY_OUTPUT_HATCH.forEach(id => { event.add('kubejs:energy_output_hatch', id) });

    const FLUID_INPUT_HATCH = [
        mi('bronze_fluid_input_hatch'),
        mi('steel_fluid_input_hatch'),
        mi('advanced_fluid_input_hatch'),
        mi('turbo_fluid_input_hatch'),
        mi('highly_advanced_fluid_input_hatch'),
    ];
    FLUID_INPUT_HATCH.forEach(id => { event.add('kubejs:fluid_input_hatch', id) });

    const FLUID_OUTPUT_HATCH = [
        mi('bronze_fluid_output_hatch'),
        mi('steel_fluid_output_hatch'),
        mi('advanced_fluid_output_hatch'),
        mi('turbo_fluid_output_hatch'),
        mi('highly_advanced_fluid_output_hatch'),
    ];
    FLUID_OUTPUT_HATCH.forEach(id => { event.add('kubejs:fluid_output_hatch', id) });

    const ITEM_INPUT_HATCH = [
        mi('bronze_item_input_hatch'),
        mi('steel_item_input_hatch'),
        mi('advanced_item_input_hatch'),
        mi('turbo_item_input_hatch'),
        mi('highly_advanced_item_input_hatch'),
    ];
    ITEM_INPUT_HATCH.forEach(id => { event.add('kubejs:item_input_hatch', id) });

    const ITEM_OUTPUT_HATCH = [
        mi('bronze_item_output_hatch'),
        mi('steel_item_output_hatch'),
        mi('advanced_item_output_hatch'),
        mi('turbo_item_output_hatch'),
        mi('highly_advanced_item_output_hatch'),
    ];
    ITEM_OUTPUT_HATCH.forEach(id => { event.add('kubejs:item_output_hatch', id) });

    const NUCLEAR_INPUT_HATCH = [
        mi('nuclear_fluid_hatch'),
        mi('nuclear_item_hatch')
    ];
    NUCLEAR_INPUT_HATCH.forEach(id => { event.add('kubejs:nuclear_hatch', id) });

    const NUCLEAR_FUEL = [
        mi('uranium_fuel_rod'),
        mi('uranium_fuel_rod_double'),
        mi('uranium_fuel_rod_quad'),
        mi('le_uranium_fuel_rod'),
        mi('le_uranium_fuel_rod_double'),
        mi('le_uranium_fuel_rod_quad'),
        mi('he_uranium_fuel_rod'),
        mi('he_uranium_fuel_rod_double'),
        mi('he_uranium_fuel_rod_quad'),
        mi('le_mox_fuel_rod'),
        mi('le_mox_fuel_rod_double'),
        mi('le_mox_fuel_rod_quad'),
        mi('he_mox_fuel_rod'),
        mi('he_mox_fuel_rod_double'),
        mi('he_mox_fuel_rod_quad')
    ];
    NUCLEAR_FUEL.forEach(id => { event.add('kubejs:nuclear_fuel', id) });

    const DEPLETED_FUEL = [
        mi('uranium_fuel_rod_depleted'),
        mi('le_uranium_fuel_rod_depleted'),
        mi('he_uranium_fuel_rod_depleted'),
        mi('le_mox_fuel_rod_depleted'),
        mi('he_mox_fuel_rod_depleted')
    ];
    DEPLETED_FUEL.forEach(id => { event.add('kubejs:depleted_nuclear_fuel', id) });
});

// Block tagging provided by kevintok
ServerEvents.tags('block', event => {
    event.add('c:lignite_coal_ores', mi('lignite_coal_ore'));
    event.add('c:lignite_coal_ores', mi('deepslate_lignite_coal_ore'));
    event.add('c:antimony_ores', mi('antimony_ore'));
    event.add('c:antimony_ores', mi('deepslate_antimony_ore'));
    event.add('c:bauxite_ores', mi('bauxite_ore'));
    event.add('c:bauxite_ores', mi('deepslate_bauxite_ore'));
    event.add('c:iridium_ores', mi('iridium_ore'));
    event.add('c:iridium_ores', mi('deepslate_iridium_ore'));
    event.add('c:lead_ores', mi('lead_ore'));
    event.add('c:lead_ores', mi('deepslate_lead_ore'));
    event.add('c:mozanite_ores', mi('mozanite_ore'));
    event.add('c:mozanite_ores', mi('deepslate_mozanite_ore'));
    event.add('c:nickel_ores', mi('nickel_ore'));
    event.add('c:nickel_ores', mi('deepslate_nickel_ore'));
    event.add('c:platinum_ores', mi('platinum_ore'));
    event.add('c:salt_ores', mi('salt_ore'));
    event.add('c:salt_ores', mi('deepslate_salt_ore'));
    event.add('c:tin_ores', mi('tin_ore'));
    event.add('c:tin_ores', mi('deepslate_tin_ore'));
    event.add('c:titanium_ores', mi('titanium_ore'));
    event.add('c:tungsten_ores', mi('tungsten_ore'));
    event.add('c:tungsten_ores', mi('deepslate_tungsten_ore'));
    event.add('c:uranium_ores', mi('uranium_ore'));
    event.add('c:uranium_ores', mi('deepslate_uranium_ore'));
});