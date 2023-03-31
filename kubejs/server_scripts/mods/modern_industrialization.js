ServerEvents.recipes(e => {
    // -- REMOVED RECIPES -- //
    const MI_DELETED_ITEMS = [
        'modern_industrialization:forge_hammer',
        'modern_industrialization:vanilla_recipes/steel_forge_hammer_asbl',
        'modern_industrialization:materials/bronze_dust',
        'modern_industrialization:materials/bronze_tiny_dust',
        'modern_industrialization:materials/fire_clay_dust',
        'modern_industrialization:vanilla_recipes/steam_bucket',
        'modern_industrialization:vanilla_recipes/steam_bucket_exported_mi_furnace',
        'modern_industrialization:materials/uncooked_steel_dust',
        'modern_industrialization:tools/smithing/quantum_sword',
        'modern_industrialization:armor/smithing/quantum_leggings',
        'modern_industrialization:armor/smithing/quantum_helmet',
        'modern_industrialization:armor/smithing/quantum_chestplate',
        'modern_industrialization:armor/smithing/quantum_boots',
        'modern_industrialization:vanilla_recipes/mixer/netherite',
        'modern_industrialization:alloy/mixer/electrum/dust',
        'modern_industrialization:alloy/mixer/cupronickel/dust',
        'modern_industrialization:alloy/mixer/electrum/tiny_dust',
        'modern_industrialization:alloy/mixer/cupronickel/tiny_dust',
        'modern_industrialization:materials/cupronickel/craft/coil',
        'modern_industrialization:guidebook',
        'modern_industrialization:vanilla_recipes/chains',
        'modern_industrialization:vanilla_recipes/packager/chains'
    ];
    MI_DELETED_ITEMS.forEach(id => e.remove( {id: id} ));
    
    // -- FORGE HAMMER -- //
    e.shaped('modern_industrialization:forge_hammer', [
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
    e.shaped('modern_industrialization:pyrolyse_oven', [
        'HIH',
        'ICI',
        'HAH'
    ],
    {
        H: 'techreborn:cupronickel_heating_coil',
        I: 'modern_industrialization:inductor',
        C: 'modern_industrialization:basic_machine_hull',
        A: 'modern_industrialization:analog_circuit'
    });

    // -- ALLOY SMELTER -- //
    e.shaped('modern_industrialization:alloy_smelter', [
        'MAM',
        'IFI',
        'TAT'
    ],
    {
        M: 'modern_industrialization:cupronickel_wire_magnetic',
        A: 'modern_industrialization:analog_circuit',
        I: 'modern_industrialization:inductor',
        T: 'modern_industrialization:tin_cable',
        F: 'modern_industrialization:electric_furnace'
    });

    // -- Gravichestplate -- //
    e.shaped('modern_industrialization:gravichestplate', [
        'PUP',
        'PJP',
        'CPC'
    ],
    {
        P: '#c:superconductor_plates',
        U: 'modern_industrialization:highly_advanced_upgrade',
        J: 'ad_astra:jet_suit',
        C: 'modern_industrialization:cooling_cell'
    });

    // -- Quantum Helmet -- //
    e.smithing(
        'modern_industrialization:quantum_helmet',
        'ad_astra:jet_suit_helmet',
        'modern_industrialization:quantum_upgrade'
    );
    // -- Quantum Chestplate -- //
    e.smithing(
        'modern_industrialization:quantum_chestplate',
        'modern_industrialization:gravichestplate',
        'modern_industrialization:quantum_upgrade'
    );
    // -- Quantum Leggings -- //
    e.smithing(
        'modern_industrialization:quantum_leggings',
        'ad_astra:jet_suit_pants',
        'modern_industrialization:quantum_upgrade'
    );
    // -- Quantum Boots -- //
    e.smithing(
        'modern_industrialization:quantum_boots',
        'ad_astra:jet_suit_boots',
        'modern_industrialization:quantum_upgrade'
    );
    // -- Quantum Sword -- //
    e.smithing(
        'modern_industrialization:quantum_sword',
        'techreborn:nanosaber',
        'modern_industrialization:quantum_upgrade'
    );
});

ServerEvents.tags('item', e => {
    const LV_WIRE = [
        'modern_industrialization:copper_cable',
        'modern_industrialization:tin_cable',
        'modern_industrialization:silver_cable'
    ];
    LV_WIRE.forEach(id => { e.add('kubejs:lv_wire', id) });

    const MV_WIRE = [
        'modern_industrialization:cupronickel_cable',
        'modern_industrialization:electrum_cable'
    ];
    MV_WIRE.forEach(id => { e.add('kubejs:mv_wire', id) });

    const HV_WIRE = [
        'modern_industrialization:aluminum_cable',
        'modern_industrialization:kanthal_cable'
    ]
    HV_WIRE.forEach(id => { e.add('kubejs:hv_wire', id) });

    const EV_WIRE = [
        'modern_industrialization:annealed_copper_cable',
        'modern_industrialization:platinum_cable'
    ]
    EV_WIRE.forEach(id => { e.add('kubejs:ev_wire', id) });

    const ENERGY_INPUT_HATCH = [
        'modern_industrialization:lv_energy_input_hatch',
        'modern_industrialization:mv_energy_input_hatch',
        'modern_industrialization:hv_energy_input_hatch',
        'modern_industrialization:ev_energy_input_hatch',
        'modern_industrialization:superconductor_energy_input_hatch'
    ];
    ENERGY_INPUT_HATCH.forEach(id => { e.add('kubejs:energy_input_hatch', id) });

    const ENERGY_OUTPUT_HATCH = [
        'modern_industrialization:lv_energy_output_hatch',
        'modern_industrialization:mv_energy_output_hatch',
        'modern_industrialization:hv_energy_output_hatch',
        'modern_industrialization:ev_energy_output_hatch',
        'modern_industrialization:superconductor_energy_output_hatch'
    ];
    ENERGY_OUTPUT_HATCH.forEach(id => { e.add('kubejs:energy_output_hatch', id) });

    const FLUID_INPUT_HATCH = [
        'modern_industrialization:bronze_fluid_input_hatch',
        'modern_industrialization:steel_fluid_input_hatch',
        'modern_industrialization:advanced_fluid_input_hatch',
        'modern_industrialization:turbo_fluid_input_hatch',
        'modern_industrialization:highly_advanced_fluid_input_hatch',
    ];
    FLUID_INPUT_HATCH.forEach(id => { e.add('kubejs:fluid_input_hatch', id) });

    const FLUID_OUTPUT_HATCH = [
        'modern_industrialization:bronze_fluid_output_hatch',
        'modern_industrialization:steel_fluid_output_hatch',
        'modern_industrialization:advanced_fluid_output_hatch',
        'modern_industrialization:turbo_fluid_output_hatch',
        'modern_industrialization:highly_advanced_fluid_output_hatch',
    ];
    FLUID_OUTPUT_HATCH.forEach(id => { e.add('kubejs:fluid_output_hatch', id) });

    const ITEM_INPUT_HATCH = [
        'modern_industrialization:bronze_item_input_hatch',
        'modern_industrialization:steel_item_input_hatch',
        'modern_industrialization:advanced_item_input_hatch',
        'modern_industrialization:turbo_item_input_hatch',
        'modern_industrialization:highly_advanced_item_input_hatch',
    ];
    ITEM_INPUT_HATCH.forEach(id => { e.add('kubejs:item_input_hatch', id) });

    const ITEM_OUTPUT_HATCH = [
        'modern_industrialization:bronze_item_output_hatch',
        'modern_industrialization:steel_item_output_hatch',
        'modern_industrialization:advanced_item_output_hatch',
        'modern_industrialization:turbo_item_output_hatch',
        'modern_industrialization:highly_advanced_item_output_hatch',
    ];
    ITEM_OUTPUT_HATCH.forEach(id => { e.add('kubejs:item_output_hatch', id) });

    const NUCLEAR_INPUT_HATCH = [
        'modern_industrialization:nuclear_fluid_hatch',
        'modern_industrialization:nuclear_item_hatch'
    ];
    NUCLEAR_INPUT_HATCH.forEach(id => { e.add('kubejs:nuclear_hatch', id) });

    const NUCLEAR_FUEL = [
        'modern_industrialization:uranium_fuel_rod',
        'modern_industrialization:uranium_fuel_rod_double',
        'modern_industrialization:uranium_fuel_rod_quad',
        'modern_industrialization:le_uranium_fuel_rod',
        'modern_industrialization:le_uranium_fuel_rod_double',
        'modern_industrialization:le_uranium_fuel_rod_quad',
        'modern_industrialization:he_uranium_fuel_rod',
        'modern_industrialization:he_uranium_fuel_rod_double',
        'modern_industrialization:he_uranium_fuel_rod_quad',
        'modern_industrialization:le_mox_fuel_rod',
        'modern_industrialization:le_mox_fuel_rod_double',
        'modern_industrialization:le_mox_fuel_rod_quad',
        'modern_industrialization:he_mox_fuel_rod',
        'modern_industrialization:he_mox_fuel_rod_double',
        'modern_industrialization:he_mox_fuel_rod_quad'
    ];
    NUCLEAR_FUEL.forEach(id => { e.add('kubejs:nuclear_fuel', id) });

    const DEPLETED_FUEL = [
        'modern_industrialization:uranium_fuel_rod_depleted',
        'modern_industrialization:le_uranium_fuel_rod_depleted',
        'modern_industrialization:he_uranium_fuel_rod_depleted',
        'modern_industrialization:le_mox_fuel_rod_depleted',
        'modern_industrialization:he_mox_fuel_rod_depleted'
    ];
    DEPLETED_FUEL.forEach(id => { e.add('kubejs:depleted_nuclear_fuel', id) });
});