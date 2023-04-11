ServerEvents.recipes(e => {

    let mi = (id) => `modern_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let tr = (id) => `techreborn:${id}`;
    let astra = (id) => `ad_astra:${id}`;

    // -- REMOVED RECIPES -- //
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
        mi('armor/gravichestplate'),
        mi('electric_age/component/craft/ultradense_metal_ball_asbl')
    ];

    MI_DELETED_ITEMS.forEach(id => e.remove( {id: id} ));
    
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
    });

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
    });

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
    });

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
        H: mi('turbo_machine_hull'),
        A: mi('aluminum_cable'),
        P: mi('advanced_pump')
    });

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
    });

    // -- TUNGSTENSTEEL TANK -- //
    e.shaped(mi('tungstensteel_tank'), [
        'PPP',
        'PGP',
        'PPP'
    ],
    {
        P: '#c:tungstensteel_plates',
        G: '#c:glass_blocks'
    });

    // -- TUNGSTENSTEEL BARREL -- //
    e.shaped(mi('tungstensteel_barrel'), [
        'PPP',
        'PBP',
        'PPP'
    ],
    {
        P: '#c:tungstensteel_plates',
        B: '#c:wooden_barrels'
    });

    // -- Gravichestplate -- //
    e.shaped(mi('gravichestplate'), [
        'PUP',
        'PJP',
        'CLC'
    ],
    {
        P: '#c:diamond_plates',
        U: mi('turbo_upgrade'),
        J: astra('jet_suit'),
        C: mi('titanium_large_plate'),
        L: tr('lapotron_crystal')
    });

    // -- Quantum Helmet -- //
    e.smithing(
        mi('quantum_helmet'),
        astra('jet_suit_helmet'),
        mi('quantum_upgrade')
    );
    // -- Quantum Chestplate -- //
    e.smithing(
        mi('quantum_chestplate'),
        mi('gravichestplate'),
        mi('quantum_upgrade')
    );
    // -- Quantum Leggings -- //
    e.smithing(
        mi('quantum_leggings'),
        astra('jet_suit_pants'),
        mi('quantum_upgrade')
    );
    // -- Quantum Boots -- //
    e.smithing(
        mi('quantum_boots'),
        astra('jet_suit_boots'),
        mi('quantum_upgrade')
    );
    // -- Quantum Sword -- //
    e.smithing(
        mi('quantum_sword'),
        tr('nanosaber'),
        mi('quantum_upgrade')
    );
});

ServerEvents.tags('item', e => {

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
        mi('platinum_cable')
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