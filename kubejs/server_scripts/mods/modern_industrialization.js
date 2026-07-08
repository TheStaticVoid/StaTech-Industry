// -----------------------------------------
// CREATED BY STATIC, MODIFIED BY DINO FOR USE IN
// STATECH INDUSTRY UNOFFICIAL
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:modern_industrialization/${id}`;

    // -- MODERN INDUSTRIALIZATION REMOVED RECIPES -- //
    const MI_DELETED_ITEMS = [
        mi('forge_hammer'),
        mi('guidebook'),
        mi('vanilla_recipes/steel_forge_hammer_asbl'),
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
        mi('electric_age/component/craft/transistor_doped_asbl'),
        mi('steam_age/bronze/furnace_asbl'),
        mi('steam_age/bronze/boiler_asbl'),
        mi('tools/steam_mining_drill'),
        mi('electric_age/component/craft/op_amp_asbl'),
        mi('materials/iron/craft/hammer'),
        mi('materials/steel/craft/hammer'),
        mi('materials/diamond/craft/hammer'),
        mi('materials/fire_clay_dust'),
        mi('materials/stainless_steel/craft/tank'),
        mi('materials/titanium/craft/tank'),
        mi('materials/tungstensteel/craft/tank'),
        mi('electric_age/machine/large_steam_turbine_asbl'),
        mi('electric_age/machine/large_diesel_generator_asbl'),
        mi('materials/iridium/smelting/ore_to_ingot_smelting'),
        mi('materials/iridium/smelting/raw_metal_to_ingot_smelting'),
        mi('materials/iridium/smelting/dust_to_ingot_smelting'),
        mi('materials/iridium/smelting/ore_to_ingot_blasting'),
        mi('materials/iridium/smelting/raw_metal_to_ingot_blasting'),
        mi('materials/iridium/smelting/dust_to_ingot_blasting'),
    ];
    MI_DELETED_ITEMS.forEach(id => event.remove( {id: id} ));

    event.shapeless(mi('iron_plate'), [
        '4x ' + mc('iron_ingot'), '#' + mi('forge_hammer_tools') 
    ])
    .damageIngredient('#' + mi('forge_hammer_tools'), 50)
    .id(mi('iron_plate_from_hammer'));

    // -- FIRE CLAY DUST -- //
    event.shaped('3x ' + mi('fire_clay_dust'), [
        'BC ',
        'CB '
    ],
    {
        C: '#c:dusts/clay',
        B: '#c:dusts/brick'
    })
    .id(mi('materials/fire_clay_dust'));
    
    // -- IRON HAMMER -- //
    event.shaped(mi('iron_hammer'), [
        'III',
        'ISI',
        ' S '
    ],
    {
        I: '#c:ingots/iron',
        S: '#c:rods/wooden'
    })
    .id(st('iron_hammer'));

    // -- STEEL HAMMER -- //
    event.shaped(mi('steel_hammer'), [
        'III',
        'ISI',
        ' S '
    ],
    {
        I: '#c:ingots/steel',
        S: '#c:rods/wooden'
    })
    .id(st('steel_hammer'));

    // -- DIAMOND HAMMER -- //
    event.shaped(mi('diamond_hammer'), [
        'DDD',
        'DSD',
        ' S '
    ],
    {
        D: '#c:gems/diamond',
        S: '#c:rods/wooden'
    })
    .id(st('diamond_hammer'));

    // -- BLOOD GENERATOR -- //
    event.shaped(mi('blood_generator'), [
        'RCR',
        'THT',
        'PCP'
    ],
    {
        H: ('modern_industrialization:turbo_machine_hull'),
        T: ('modern_industrialization:hv_steam_turbine'),
        C: ('modern_industrialization:digital_circuit'),
        R: ('modern_industrialization:stainless_steel_rotor'),
        P: ('modern_industrialization:advanced_pump'),
    })
    .id(st('blood_generator'));

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

    // -- CHEMICALLY INERT PTFE CASING -- //
    event.shaped(mi('chemically_inert_ptfe_casing'), [
        'PPP',
        'PGP',
        'PPP'
    ],
    {
        P: mi('polytetrafluoroethylene_plate'),
        G: mi('polytetrafluoroethylene_gear')
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

    // -- TUNGSTENSTEEL MACHINE CASING -- // 
    event.shaped(mi('tungstensteel_machine_casing'), [
        'PPP',
        'PGP',
        'PPP'
    ],
    {
        P: mi('tungstensteel_plate'),
        G: mi('tungstensteel_gear')
    })
    .id(st('tungstensteel_machine_casing'));

    // -- TUNGSTENSTEEL PIPE MACHINE CASING -- // 
    event.shaped('2x ' + mi('tungstensteel_machine_casing_pipe'), [
        'C C',
        'CMC',
        'C C'
    ],
    {
        C: mi('tungstensteel_curved_plate'),
        M: mi('tungstensteel_machine_casing')
    })
    .id(st('tungstensteel_machine_casing_pipe'));

    // -- PHOTOSYNTHETIC CHAMBER -- //
    event.shaped(mi('photosynthetic_chamber'), [
        'MGM',
        'IHI',
        'PDT',
    ],
    {
        G: '#c:glass_blocks',
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
    .id(mi('tools/steam_mining_drill'));

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
        ' I ',
        'BBB'
    ], 
    {
        P: mi('iron_large_plate'),
        I: '#c:ingots/iron',
        B: '#c:storage_blocks/iron'
    }).id(mi('forge_hammer'));

    // -- ALLOY SMELTER -- //
    event.shaped(ei('electric_alloy_smelter'), [
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
    .id(st('electric_alloy_smelter'));

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

    // -- SPACE PROBE LAUNCHER -- //
    event.shaped(mi('space_probe_launcher'), [
        'PUP',
        'GHG',
        'MCM'
    ],
    {
        P: mi('stainless_steel_machine_casing_pipe'),
        U: mi('digital_circuit'),
        G: mi('stainless_steel_gear'),
        H: mi('turbo_machine_hull'),
        M: mi('advanced_motor'),
        C: mi('clean_stainless_steel_machine_casing')
    })
    .id(st('space_probe_launcher'));

    // -- QUANTUM SPACE PROBE LAUNCHER -- //
    event.shaped(mi('quantum_space_probe_launcher'), [
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
    .id(st('quantum_space_probe_launcher'));

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
    event.shaped(mi('calorite_machine_casing'), [
        'PPP',
        'PGP',
        'PPP'
    ],
    {
        P: mi('calorite_plate'),
        G: mi('calorite_gear')
    })
    .id(st('calorite_machine_casing'));

    // -- CALORITE MACHINE PIPE CASING -- // 
    event.shaped('2x ' + mi('calorite_machine_casing_pipe'), [
        'C C',
        'CMC',
        'C C'
    ],
    {
        C: mi('calorite_curved_plate'),
        M: mi('calorite_machine_casing')
    })
    .id(st('calorite_machine_casing_pipe'));

    // -- DESH MACHINE CASING -- //
    event.shaped(mi('desh_machine_casing'), [
        'PPP',
        'PGP',
        'PPP'
    ],
    {
        P: mi('desh_plate'),
        G: mi('desh_gear')
    })
    .id(st('desh_machine_casing'));

    // -- DESH MACHINE PIPE CASING -- // 
    event.shaped('2x ' + mi('desh_machine_casing_pipe'), [
        'C C',
        'CMC',
        'C C'
    ],
    {
        C: mi('desh_curved_plate'),
        M: mi('desh_machine_casing')
    })
    .id(st('desh_machine_casing_pipe'));

    // -- ENDERIUM MACHINE CASING -- //
    event.shaped(mi('enderium_machine_casing'), [
        'PPP',
        'PGP',
        'PPP'
    ],
    {
        P: mi('enderium_plate'),
        G: mi('enderium_gear')
    })
    .id(st('enderium_machine_casing'));

/*     // -- ENDERIUM MACHINE PIPE CASING -- // 
    event.shaped(mi('enderium_machine_casing_pipe'), [
        'C C',
        'CMC',
        'C C'
    ],
    {
        C: mi('enderium_curved_plate'),
        M: mi('enderium_machine_casing')
    })
    .id(st('enderium_machine_casing_pipe')); */

    // -- OSTRUM MACHINE CASING -- //
    event.shaped(mi('ostrum_machine_casing'), [
        'PPP',
        'PGP',
        'PPP'
    ],
    {
        P: mi('ostrum_plate'),
        G: mi('ostrum_gear')
    })
    .id(st('ostrum_machine_casing'));

    // -- OSTRUM MACHINE PIPE CASING -- // 
    event.shaped('2x ' + mi('ostrum_machine_casing_pipe'), [
        'C C',
        'CMC',
        'C C'
    ],
    {
        C: mi('ostrum_curved_plate'),
        M: mi('ostrum_machine_casing')
    })
    .id(st('ostrum_machine_casing_pipe'));

    // -- DESH DRILL -- //
    event.shaped('4x ' + mi('desh_drill'), [
        'GIH',
        'MUI',
        'CMG'
    ],
    {
        G: mi('enderium_gear'),
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
        B: '#c:plates/bronze'
    })
    .id(st('zinc_drill'));

    // -- BRONZE FURNACE -- //
    event.shaped(mi('bronze_furnace'), [
        'PPP',
        'PCP',
        'PFP'
    ],
    {
        P: '#c:plates/bronze',
        F: mc('furnace'),
        C: mi('bronze_machine_casing')
    })
    .id(mi('steam_age/bronze/furnace_asbl'));

    // -- BRONZE BOILER -- //
    event.shaped(mi('bronze_boiler'), [
        'PTP',
        'PCP',
        'FFF'
    ],
    {
        P: '#c:plates/bronze',
        T: mi('bronze_tank'),
        F: mi('fire_clay_bricks'),
        C: mi('bronze_machine_casing')
    })
    .id(mi('steam_age/bronze/boiler_asbl'));

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
        P: '#c:plates/diamond',
        U: mi('turbo_upgrade'),
        J: mc('netherite_chestplate'),
        C: mi('titanium_large_plate'),
        L: mi('cadmium_battery')
    })
    .id(st('gravichestplate'));

    // -- STAINLESS STEEL TANK -- //
    event.shaped(mi('stainless_steel_tank'), [
        'PPP',
        'PGP',
        'PPP'
    ],
    {
        P: mi('stainless_steel_plate'),
        G: kj('borosilicate_glass')
    })
    .id(st('stainless_steel_tank'));

    // -- TITANIUM TANK -- //
    event.shaped(mi('titanium_tank'), [
        'PPP',
        'PGP',
        'PPP'
    ],
    {
        P: mi('titanium_plate'),
        G: kj('borosilicate_glass')
    })
    .id(st('titanium_tank'));

    // -- TUNGSTENSTEEL TANK -- //
    event.shaped(mi('tungstensteel_tank'), [
        'PPP',
        'PGP',
        'PPP'
    ],
    {
        P: mi('tungstensteel_plate'),
        G: kj('borosilicate_glass')
    })
    .id(st('tungstensteel_tank'));

    // -- LARGE DIESEL GENERATOR -- //
    event.shaped(mi('large_diesel_generator'), [
        'GMG',
        'THT',
        'GMG'
    ],
    {
        M: mi('advanced_motor'),
        T: mi('titanium_gear'),
        H: mi('turbo_machine_hull'),
        G: mi('hv_diesel_generator')
    })
    .id(st('large_diesel_generator'));

    // -- LARGE STEAM TURBINE -- //
    event.shaped(mi('large_steam_turbine'), [
        'GMG',
        'RHR',
        'GMG'
    ],
    {
        M: mi('large_advanced_pump'),
        R: mi('stainless_steel_rotor'),
        H: mi('highly_advanced_machine_hull'),
        G: mi('hv_steam_turbine')
    })
    .id(st('large_steam_turbine'));
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
    ENERGY_INPUT_HATCH.forEach(id => {
        event.add('kubejs:energy_input_hatch', id);
        event.add('kubejs:wired_energy_input_hatch', id);
    });

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

    const CRUSHED_DUSTS = [
        'bauxite',
        'chromium',
        'coal',
        'cobalt',
        'corundum',
        'diamond',
        'emerald',
        'kernite',
        'lapis',
        'lignite_coal',
        'manganese',
        'monazite',
        'peridot',
        'quartz',
        'redstone',
        'salt',
        'sapphire'
    ];
    CRUSHED_DUSTS.forEach(id => { 
        event.add(`kubejs:crushed_dusts/${id}`, mi(`${id}_crushed_dust`))
        event.add('kubejs:crushed_dusts', mi(`${id}_crushed_dust`)) 
    });
});

LootJS.lootTables(event => {
    event
        .getLootTable(nm('chests/ancient_pot_cave'))
        .firstPool()
        .addEntry(LootEntry.of(mi('raw_silver')).withWeight(60).setCount([1, 3]))
    event
        .getLootTable('supplementaries:loot/urn_loot/urn_loot')
        .firstPool()
        .addEntry(LootEntry.of(mi('raw_silver')).withWeight(3).setCount([1, 3]))
    event
        .getLootTable('supplementaries:loot/urn_loot/uncommon')
        .firstPool()
        .addEntry(LootEntry.of(mi('raw_silver')).withWeight(1).setCount([1, 3]))
})