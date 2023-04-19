ServerEvents.recipes(e => {

    let mi = (id) => `modern_industrialization:${id}`;
    let tr = (id) => `techreborn:${id}`;
    let astra = (id) => `ad_astra:${id}`;
    let mc = (id) => `minecraft:${id}`;

    const REMOVED_RECIPE = [
        mi('compat/ae2/logic_processor'),
        mi('compat/ae2/calculation_processor'),
        mi('compat/ae2/engineering_processor'),        
        mi('electric_age/component/assembler/qbit'),
        mi('assembler_generated/electric_age/component/craft/ultradense_metal_ball')
    ];
    REMOVED_RECIPE.forEach(id => e.remove({id: id}));

    let assembler = (eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs) => {
        let newRecipe = {
            type: mi('assembler'),
            eu: eu,
            duration: duration
        }

        if (item_inputs)
            newRecipe['item_inputs'] = item_inputs;
        if (item_outputs)
            newRecipe['item_outputs'] = item_outputs;
        if (fluid_inputs)
            newRecipe['fluid_inputs'] = fluid_inputs;
        if (fluid_outputs)
            newRecipe['fluid_outputs'] = fluid_outputs;

        e.custom(newRecipe);
    }

    // -- CUPRONICKEL HEATING COIL -- //
    assembler(
        4,
        400,
        [
            { amount: 4, item: mi('cupronickel_wire') }
        ],
        [
            { amount: 1, item: tr('cupronickel_heating_coil') }
        ],
        null,
        null
    );
    
    // -- KANTHAL HEATING COIL -- //
    assembler(
        48,
        400,
        [
            { amount: 4, item: mi('kanthal_wire') }
        ],
        [
            { amount: 1, item: tr('kanthal_heating_coil') }
        ],
        null,
        null
    );

    // -- AUTO CRAFTING TABLE -- //
    assembler(
        16,
        600,
        [
            { amount: 4, item: mi('analog_circuit') },
            { amount: 2, tag: 'c:workbench' },
            { amount: 2, item: mi('robot_arm') },
            { amount: 2, item: mi('motor') }
        ],
        [
            { amount: 1, item: tr('auto_crafting_table') }
        ],
        null,
        null
    );

    // -- LITHIUM BATTERY -- //
    assembler(
        16,
        300,
        [
            { amount: 1, item: tr('red_cell_battery') },
            { amount: 4, tag: 'c:aluminum_plates' }
        ],
        [
            { amount: 1, item: tr('lithium_ion_battery') }
        ],
        [
            { amount: 500, fluid: mi('lithium') }
        ],
        null
    );

    // -- LITHIUM BATPACK -- //
    assembler(
        16,
        300,
        [
            { amount: 1, item: tr('lithium_ion_battery') },
            { amount: 1, item: tr('lithium_ion_battery') },
            { amount: 1, item: tr('lithium_ion_battery') },
            { amount: 1, item: tr('lithium_ion_battery') },
            { amount: 1, item: tr('lithium_ion_battery') },
            { amount: 1, item: tr('lithium_ion_battery') },
            { amount: 1, tag: 'c:aluminum_plates' }
        ],
        [
            { amount: 1, item: tr('lithium_ion_batpack') }
        ],
        [
            { amount: 1000, fluid: mi('acrylic_glue') }
        ],
        null
    );

    // -- ENERGY CRYSTAL -- //
    assembler(
        80,
        300,
        [
            { amount: 2, tag: 'c:stainless_steel_plates' },
            { amount: 2, item: tr('synthetic_redstone_crystal') },
            { amount: 2, item: mi('digital_circuit') }
        ],
        [
            { amount: 1, item: tr('energy_crystal') }
        ],
        [
            { amount: 500, fluid: mi('polyethylene') }
        ],
        null
    );

    // -- LAPOTRON CRYSTAL -- //
    assembler(
        128,
        400,
        [
            { amount: 4, item: tr('lazurite_plate') },
            { amount: 2, item: mi('digital_circuit') },
            { amount: 2, item: mi('titanium_plate') },
            { amount: 1, item: tr('energy_crystal') }
        ],
        [
            { amount: 1, item: tr('lapotron_crystal') }
        ],
        [
            { amount: 500, fluid: mi('polyethylene') }
        ],
        null
    );

    // -- QBIT -- //
    assembler(
        20,
        200,
        [
            { amount: 2, item: mi('arithmetic_logic_unit') },
            { amount: 2, tag: 'c:carbon_plates' },
            { amount: 2, tag: 'c:tungstensteel_plates' },
            { amount: 6, item: mi('superconductor_wire') }
        ],
        [
            { amount: 1, item: mi('qbit') }
        ],
        [
            { amount: 250, fluid: mi('cryofluid') },
            { amount: 50, fluid: mi('tritium') }
        ],
        null
    );

    // -- TUNGSTENSTEEL TANK -- //
    assembler(
        16,
        100,
        [
            { amount: 8, tag: 'c:tungstensteel_plates' },
            { amount: 1, tag: 'c:glass_blocks' }
        ],
        [
            { amount: 1, item: mi('tungstensteel_tank') }
        ],
        null,
        null
    );

    // -- TUNGSTENSTEEL BARREL -- //
    assembler(
        16,
        100,
        [
            { amount: 1, tag: 'c:wooden_barrels' },
            { amount: 8, tag: 'c:tungstensteel_plates' }
        ],
        [
            { amount: 1, item: mi('tungstensteel_barrel') }
        ],
        null,
        null
    );

    // -- ULTRADENSE METAL BALL -- //
    assembler(
        512,
        600,
        [
            { amount: 4, item: mi('tungstensteel_large_plate') },
            { amount: 4, tag: 'c:lead_plates' },
            { amount: 1, tag: 'c:iridium_alloy_plates' }
        ],
        [
            { amount: 1, item: mi('ultradense_metal_ball') }
        ],
        [
            { amount: 1000, fluid: mi('neutronium') }
        ],
        null
    );

    // -- CALORITE MACHINE CASING -- //
    assembler(
        16,
        200,
        [
            { amount: 8, tag: 'c:calorite_plates' },
            { amount: 1, tag: 'c:calorite_gears' }
        ],
        [
            { amount: 1, item: mi('calorite_machine_casing') }
        ],
        null,
        null
    );

    // -- CALORITE MACHINE PIPE CASING -- //
    assembler(
        16,
        200,
        [
            { amount: 1, item: mi('calorite_machine_casing') },
            { amount: 6, item: mi('calorite_curved_plate')}
        ],
        [
            { amount: 1, item: mi('calorite_machine_casing_pipe')}
        ],
        null,
        null
    );

    // -- INDUSTRIAL CIRCUIT -- //
    assembler(
        48,
        300,
        [
            { amount: 1, item: tr('advanced_circuit') },
            { amount: 2, tag: 'c:tungsten_plates' }
        ],
        [
            { amount: 1, item:  tr('industrial_circuit') }
        ],
        null,
        null
    );

    // -- DATA STORAGE CORE -- //
    assembler(
        20,
        200,
        [
            { amount: 1, item: tr('advanced_circuit') },
            { amount: 1, tag: 'c:emerald_plates' }
        ],
        [
            { amount: 1, item: tr('data_storage_core') }
        ],
        null,
        null
    );
    assembler(
        20,
        200,
        [
            { amount: 1, item: tr('advanced_circuit') },
            { amount: 2, tag: 'c:peridot_plates' }
        ],
        [
            { amount: 1, item: tr('data_storage_core') } 
        ],
        null,
        null
    )

    // -- SPACE HELMET -- //
    assembler(
        16,
        300,
        [
            { amount: 4, tag: 'c:steel_ingots' },
            { amount: 1, tag: mc('glass_panes') },
            { amount: 1, tag: mc('wool') }
        ],
        [
            { amount: 1, item: astra('space_helmet') }
        ],
        null,
        null
    );

    // -- SPACE SUIT -- // 
    assembler(
        16,
        300,
        [
            { amount: 4, tag: 'c:steel_ingots' }, 
            { amount: 1, item: astra('oxygen_gear') },
            { amount: 2, item: astra('oxygen_tank') },
            { amount: 2, tag: mc('wool') }
        ],
        [
            { amount: 1, item: astra('space_suit') }
        ],
        null,
        null
    );

    // -- SPACE PANTS -- //
    assembler(
        16,
        300,
        [
            { amount: 5, tag: 'c:steel_ingots' },
            { amount: 2, tag: mc('wool') }
        ],
        [
            { amount: 1, item: astra('space_pants') }
        ],
        null,
        null
    ) 

    // -- SPACE BOOTS -- //
    assembler(
        16,
        300,
        [
            { amount: 2, tag: 'c:steel_ingots' },
            { amount: 2, tag: mc('wool') }
        ],
        [
            { amount: 1, item: astra('space_boots') }
        ]
    );

    // -------------------------
    // ENDGAME RECIPES
    // -------------------------

    // -- CREATIVE STORAGE UNIT -- //
    assembler(
        32000,
        2400,
        [
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('superconductor_storage_unit') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') }
        ],
        [
            { amount: 1, item: mi('creative_storage_unit') }
        ],
        [
            { amount: 16000, fluid: mi('uu_matter') },
            { amount: 16000, fluid: mi('neutronium') }
        ],
        null
    );

    // -- CREATIVE BARREL -- //
    assembler(
        32000,
        2400,
        [
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('quantum_barrel') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') }
        ],
        [
            { amount: 1, item: mi('creative_barrel') }
        ],
        [
            { amount: 16000, fluid: mi('uu_matter') },
            { amount: 16000, fluid: mi('neutronium') }
        ],
        null
    );

    // -- CREATIVE TANK -- //
    assembler(
        32000,
        2400,
        [
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('quantum_tank') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') }
        ],
        [
            { amount: 1, item: mi('creative_tank') }
        ],
        [
            { amount: 16000, fluid: mi('uu_matter') },
            { amount: 16000, fluid: mi('neutronium') }
        ],
        null
    );

    // -- CREATIVE MOTOR -- //
    assembler(
        32000,
        2400,
        [
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('plasma_turbine') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') }
        ],
        [
            { amount: 1, item: 'create:creative_motor' }
        ],
        [
            { amount: 16000, fluid: mi('uu_matter') },
            { amount: 16000, fluid: mi('neutronium') }
        ],
        null
    );

    // -- CREATIVE WORLDSHAPER -- //
    assembler(
        32000,
        2400,
        [
            { amount: 1, item: mi('quantum_helmet') },
            { amount: 64, item: mi('creative_tank') },
            { amount: 1, item: mi('quantum_chestplate') },
            { amount: 64, item: mi('creative_storage_unit') },
            { amount: 1, item: mi('quantum_sword') },
            { amount: 64, item: 'create:creative_motor' },
            { amount: 1, item: mi('quantum_leggings') },
            { amount: 64, item: mi('creative_barrel') },
            { amount: 1, item: mi('quantum_boots') }
        ],
        [
            { amount: 1, item: 'create:handheld_worldshaper' }
        ],
        [
            { amount: 16000, fluid: mi('uu_matter') },
            { amount: 16000, fluid: mi('neutronium') }
        ],
        null
    );
});