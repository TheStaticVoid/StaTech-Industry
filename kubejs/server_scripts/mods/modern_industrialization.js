// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:modern_industrialization/${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let tr = (id) => `techreborn:${id}`;
    let ad = (id) => `ad_astra:${id}`;
    let cr = (id) => `create:${id}`;
    let ae = (id) => `ae2:${id}`;
    let kj = (id) => `kubejs:${id}`;

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
        mi('electric_age/component/craft/op_amp_asbl')
    ];
    MI_DELETED_ITEMS.forEach(id => e.remove( {id: id} ));
    
    // -- CONVERSION RECIPE FOR EXISTING WORLDS -- //
    e.shapeless(mi('laser_engraver'), [ ae('inscriber') ]).id(st('laser_engraver_conversion'));

    // -- BLOOD GENERATOR -- //
    e.shaped(mi('blood_generator'), [
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
    e.shaped(mi('large_steam_macerator'), [
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
    e.shaped(mi('boss_crusher'), [
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
    e.shaped(mi('large_steam_furnace'), [
        'BBB',
        'BFB',
        'BCB'
    ],
    {
        B: mc('bricks'),
        F: mi('bronze_furnace'),
        C: mi('coke')
    })
    .id(st('large_steam_furnace'));

    // -- CHEMICALLY INERT PTFE CASING -- //
    e.shaped(mi('chemically_inert_ptfe_casing'), [
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
    e.shaped('2x ' + mi('polytetrafluoroethylene_machine_casing_pipe'), [
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
    e.shaped(mi('large_chemical_reactor'), [
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
    e.shaped(mi('photosynthetic_chamber'), [
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
    e.shaped(mi('core_drill'), [
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
    e.shaped(mi('singularity_forge'), [
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
    e.shaped(mi('steam_mining_drill'), [
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
    e.shaped(mi('mob_crusher'), [
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
    e.shaped(mi('forge_hammer'), [
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
    e.shaped(mi('pyrolyse_oven'), [
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
    e.shaped(mi('alloy_smelter'), [
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
    e.shaped(mi('rocket_part_assembler'), [
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
    e.shaped(mi('mega_smelter'), [
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
    e.shaped(mi('space_probe_launcher'), [
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
    e.shaped(mi('greenhouse'), [
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
    e.shaped(mi('laser_engraver'), [
        'CGC',
        'MHM',
        'ACA'
    ],
    {
        A: mi('analog_circuit'),
        C: mi('copper_wire'),
        H: mi('basic_machine_hull'),
        M: mi('motor'),
        G: '#c:glass_blocks'
    })
    .id('laser_engraver');

    // -- CALORITE MACHINE CASING -- //
    e.shaped(mi('calorite_machine_casing'), [
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
    e.shaped(mi('calorite_machine_casing_pipe'), [
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
    e.shaped('4x ' + mi('desh_drill'), [
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
    e.shaped('4x ' + mi('zinc_drill'), [
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
    e.shaped(mi('bronze_furnace'), [
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
    e.shaped(mi('bronze_boiler'), [
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
    e.shapeless(mi('creative_tank'), mi('creative_tank')).id(st('clear_fluids_from_creative_tank'));

    // -- CLEAR ITEM FROM CREATIVE BARREL -- //
    e.shapeless(mi('creative_barrel'), mi('creative_barrel')).id(st('clear_items_from_creative_barrel'));

    // -- Gravichestplate -- //
    e.shaped(mi('gravichestplate'), [
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
    e.smithing(
        mi('quantum_helmet'),
        tr('quantum_helmet'),
        mi('quantum_upgrade')
    )
    .id(st('quantum_helmet'));
    // -- Quantum Chestplate -- //
    e.smithing(
        mi('quantum_chestplate'),
        tr('quantum_chestplate'),
        mi('quantum_upgrade')
    )
    .id(st('quantum_chestplate'));
    // -- Quantum Leggings -- //
    e.smithing(
        mi('quantum_leggings'),
        tr('quantum_leggings'),
        mi('quantum_upgrade')
    )
    .id(st('quantum_leggings'));
    // -- Quantum Boots -- //
    e.smithing(
        mi('quantum_boots'),
        tr('quantum_boots'),
        mi('quantum_upgrade')
    )
    .id(st('quantum_boots'));
    // -- Quantum Sword -- //
    e.smithing(
        mi('quantum_sword'),
        tr('nanosaber'),
        mi('quantum_upgrade')
    )
    .id(st('quantum_sword'));
});

ServerEvents.tags('item', e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let mi = (id) => `modern_industrialization:${id}`;

    const LV_WIRE = [
        mi('copper_cable'),
        mi('tin_cable'),
        mi('silver_cable')
    ];
    LV_WIRE.forEach(id => { e.add('kubejs:lv_wire', id) });

    const MV_WIRE = [
        mi('cupronickel_cable'),
        mi('electrum_cable')
    ];
    MV_WIRE.forEach(id => { e.add('kubejs:mv_wire', id) });

    const HV_WIRE = [
        mi('aluminum_cable'),
        mi('kanthal_cable')
    ]
    HV_WIRE.forEach(id => { e.add('kubejs:hv_wire', id) });

    const EV_WIRE = [
        mi('annealed_copper_cable'),
        mi('platinum_cable'),
        mi('tungstensteel_cable')
    ]
    EV_WIRE.forEach(id => { e.add('kubejs:ev_wire', id) });

    const ENERGY_INPUT_HATCH = [
        mi('lv_energy_input_hatch'),
        mi('mv_energy_input_hatch'),
        mi('hv_energy_input_hatch'),
        mi('ev_energy_input_hatch'),
        mi('superconductor_energy_input_hatch')
    ];
    ENERGY_INPUT_HATCH.forEach(id => { e.add('kubejs:energy_input_hatch', id) });

    const ENERGY_OUTPUT_HATCH = [
        mi('lv_energy_output_hatch'),
        mi('mv_energy_output_hatch'),
        mi('hv_energy_output_hatch'),
        mi('ev_energy_output_hatch'),
        mi('superconductor_energy_output_hatch')
    ];
    ENERGY_OUTPUT_HATCH.forEach(id => { e.add('kubejs:energy_output_hatch', id) });

    const FLUID_INPUT_HATCH = [
        mi('bronze_fluid_input_hatch'),
        mi('steel_fluid_input_hatch'),
        mi('advanced_fluid_input_hatch'),
        mi('turbo_fluid_input_hatch'),
        mi('highly_advanced_fluid_input_hatch'),
    ];
    FLUID_INPUT_HATCH.forEach(id => { e.add('kubejs:fluid_input_hatch', id) });

    const FLUID_OUTPUT_HATCH = [
        mi('bronze_fluid_output_hatch'),
        mi('steel_fluid_output_hatch'),
        mi('advanced_fluid_output_hatch'),
        mi('turbo_fluid_output_hatch'),
        mi('highly_advanced_fluid_output_hatch'),
    ];
    FLUID_OUTPUT_HATCH.forEach(id => { e.add('kubejs:fluid_output_hatch', id) });

    const ITEM_INPUT_HATCH = [
        mi('bronze_item_input_hatch'),
        mi('steel_item_input_hatch'),
        mi('advanced_item_input_hatch'),
        mi('turbo_item_input_hatch'),
        mi('highly_advanced_item_input_hatch'),
    ];
    ITEM_INPUT_HATCH.forEach(id => { e.add('kubejs:item_input_hatch', id) });

    const ITEM_OUTPUT_HATCH = [
        mi('bronze_item_output_hatch'),
        mi('steel_item_output_hatch'),
        mi('advanced_item_output_hatch'),
        mi('turbo_item_output_hatch'),
        mi('highly_advanced_item_output_hatch'),
    ];
    ITEM_OUTPUT_HATCH.forEach(id => { e.add('kubejs:item_output_hatch', id) });

    const NUCLEAR_INPUT_HATCH = [
        mi('nuclear_fluid_hatch'),
        mi('nuclear_item_hatch')
    ];
    NUCLEAR_INPUT_HATCH.forEach(id => { e.add('kubejs:nuclear_hatch', id) });

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
    NUCLEAR_FUEL.forEach(id => { e.add('kubejs:nuclear_fuel', id) });

    const DEPLETED_FUEL = [
        mi('uranium_fuel_rod_depleted'),
        mi('le_uranium_fuel_rod_depleted'),
        mi('he_uranium_fuel_rod_depleted'),
        mi('le_mox_fuel_rod_depleted'),
        mi('he_mox_fuel_rod_depleted')
    ];
    DEPLETED_FUEL.forEach(id => { e.add('kubejs:depleted_nuclear_fuel', id) });
});

// Block tagging provided by kevintok
ServerEvents.tags('block', e => {
    e.add('c:lignite_coal_ores', 'modern_industrialization:lignite_coal_ore')
    e.add('c:lignite_coal_ores', 'modern_industrialization:deepslate_lignite_coal_ore')
    e.add('c:antimony_ores', 'modern_industrialization:antimony_ore')
    e.add('c:antimony_ores', 'modern_industrialization:deepslate_antimony_ore')
    e.add('c:bauxite_ores', 'modern_industrialization:bauxite_ore')
    e.add('c:bauxite_ores', 'modern_industrialization:deepslate_bauxite_ore')
    e.add('c:iridium_ores', 'modern_industrialization:iridium_ore')
    e.add('c:iridium_ores', 'modern_industrialization:deepslate_iridium_ore')
    e.add('c:lead_ores', 'modern_industrialization:lead_ore')
    e.add('c:lead_ores', 'modern_industrialization:deepslate_lead_ore')
    e.add('c:mozanite_ores', 'modern_industrialization:mozanite_ore')
    e.add('c:mozanite_ores', 'modern_industrialization:deepslate_mozanite_ore')
    e.add('c:nickel_ores', 'modern_industrialization:nickel_ore')
    e.add('c:nickel_ores', 'modern_industrialization:deepslate_nickel_ore')
    e.add('c:platinum_ores', 'modern_industrialization:platinum_ore')
    e.add('c:salt_ores', 'modern_industrialization:salt_ore')
    e.add('c:salt_ores', 'modern_industrialization:deepslate_salt_ore')
    e.add('c:tin_ores', 'modern_industrialization:tin_ore')
    e.add('c:tin_ores', 'modern_industrialization:deepslate_tin_ore')
    e.add('c:titanium_ores', 'modern_industrialization:titanium_ore')
    e.add('c:tungsten_ores', 'modern_industrialization:tungsten_ore')
    e.add('c:tungsten_ores', 'modern_industrialization:deepslate_tungsten_ore')
    e.add('c:uranium_ores', 'modern_industrialization:uranium_ore')
    e.add('c:uranium_ores', 'modern_industrialization:deepslate_uranium_ore')
});