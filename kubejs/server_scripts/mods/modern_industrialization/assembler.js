// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:modern_industrialization/assembler/${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let tr = (id) => `techreborn:${id}`;
    let ad = (id) => `ad_astra:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let kj = (id) => `kubejs:${id}`;
    let ae = (id) => `ae2:${id}`;

    // -- ASSEMBLER REMOVED RECIPES -- //
    const REMOVED_RECIPE = [    
        mi('electric_age/component/assembler/qbit'),
        mi('assembler_generated/electric_age/component/craft/ultradense_metal_ball'),
        mi('assembler_generated/steam_age/bronze/furnace'),
        mi('assembler_generated/steam_age/bronze/boiler'),
        mi('assembler_generated/electric_age/component/craft/op_amp')
    ];
    REMOVED_RECIPE.forEach(id => e.remove({id: id}));

    // -- CUSTOM RECIPE UTILITY FUNCTION -- //
    let assembler = (id, eu, duration, item_inputs, item_outputs, fluid_inputs, fluid_outputs) => {
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

        e.custom(newRecipe).id(id);
    }

    // -- OP AMP -- //
    assembler(
        st('op_amp'),
        8,
        200,
        [
            { amount: 4, item: mi('resistor') },
            { amount: 4, item: mi('transistor') },
            { amount: 1, item: mi('diode') }
        ],
        [ { amount: 1, item: mi('op_amp') } ],
        [ { amount: 50, fluid: mi('polytetrafluoroethylene') } ]
    );

    // -- BASIC CARD -- //
    assembler(
        st('basic_card'),
        8,
        200,
        [ 
            { amount: 3, tag: 'c:stainless_steel_ingots' },
            { amount: 2, tag: 'c:gold_ingots' },
            { amount: 1, item: ae('calculation_processor') }
        ],
        [ { amount: 2, item: ae('basic_card') } ],
        [ { amount: 100, fluid: mi('molten_redstone') } ]
    );

    // -- BRONZE BOILER -- //
    assembler(
        st('bronze_boiler'),
        8,
        200,
        [
            { amount: 4, tag: 'c:bronze_plates' },
            { amount: 1, item: mi('bronze_tank') },
            { amount: 1, item: mi('bronze_machine_casing') },
            { amount: 3, item: mi('fire_clay_bricks') }
        ],
        [ { amount: 1, item: mi('bronze_boiler') } ]
    );

    // -- BRONZE FURNACE -- /
    assembler(
        st('bronze_furnace'),
        8,
        200,
        [
            { amount: 7, tag: 'c:bronze_plates' },
            { amount: 1, item: mi('bronze_machine_casing') },
            { amount: 1, item: mc('furnace') }
        ],
        [ { amount: 1, item: mi('bronze_furnace') } ]
    );
  
    // -- SPACE PROBE -- //
    assembler(
        st('space_probe'),
        32,
        200,
        [
            { amount: 2, item: astra('rocket_fin') },
            { amount: 2, item: mi('enderium_gear') },
            { amount: 1, item: mi('desh_drill') },
            { amount: 1, item: mi('processing_unit') },
            { amount: 1, item: astra('desh_engine') },
            { amount: 1, item: mi('titanium_tank') },
            { amount: 1, item: mi('titanium_tank') }
        ],
        [ { amount: 4, item: kj('space_probe') } ]
    );

    // -- CUPRONICKEL HEATING COIL -- //
    assembler(
        st('cupronickel_heating_coil'),
        4,
        400,
        [
            { amount: 4, item: mi('cupronickel_wire') },
            { amount: 1, item: mi('copper_ring') }
        ],
        [
            { amount: 1, item: tr('cupronickel_heating_coil') }
        ]
    );

    // -- ZINC DRILL -- //
    assembler(
        st('zinc_drill'),
        8,
        200,
        [ 
            { amount: 1, item: mi('zinc_drill_head') },
            { amount: 2, item: mi('iron_gear') },
            { amount: 1, item: 'create:electron_tube' },
            { amount: 1, tag: 'c:bronze_plates' }
        ],
        [ { amount: 4, item: mi('zinc_drill') } ]
    );

    // -- DESH DRILL -- //
    assembler(
        st('desh_drill'),
        16,
        200,
        [
            { amount: 1, item: mi('desh_drill_head') },
            { amount: 2, tag: 'modern_industrialization:item_pipes' },
            { amount: 2, tag: 'c:enderium_gears' },
            { amount: 2, item: mi('large_advanced_motor') },
            { amount: 1, item: mi('processing_unit') },
            { amount: 1, item: mi('annealed_copper_wire') }
        ],
        [ { amount: 4, item: mi('desh_drill') } ]
    );

    // -- AUTO CRAFTING TABLE -- //
    assembler(
        st('auto_crafting_table'),
        16,
        600,
        [
            { amount: 4, item: mi('analog_circuit') },
            { amount: 2, tag: 'c:workbench' },
            { amount: 2, item: mi('robot_arm') },
            { amount: 2, item: mi('motor') }
        ],
        [ { amount: 1, item: tr('auto_crafting_table') } ]
    );

    // -- LITHIUM BATTERY -- //
    assembler(
        st('lithium_ion_battery'),
        16,
        300,
        [
            { amount: 1, item: tr('red_cell_battery') },
            { amount: 4, tag: 'c:aluminum_plates' }
        ],
        [ { amount: 1, item: tr('lithium_ion_battery') } ],
        [ { amount: 500, fluid: mi('lithium') } ]
    );

    // -- LITHIUM BATPACK -- //
    assembler(
        st('lithium_ion_batpack'),
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
        [ { amount: 1, item: tr('lithium_ion_batpack') } ],
        [ { amount: 1000, fluid: mi('acrylic_glue') } ]
    );

    // -- ENERGY CRYSTAL -- //
    assembler(
        st('energy_crystal'),
        80,
        300,
        [
            { amount: 2, tag: 'c:stainless_steel_plates' },
            { amount: 2, item: tr('synthetic_redstone_crystal') },
            { amount: 2, item: mi('digital_circuit') }
        ],
        [ { amount: 1, item: tr('energy_crystal') } ],
        [ { amount: 500, fluid: mi('polyethylene') } ]
    );

    // -- LAPOTRON CRYSTAL -- //
    assembler(
        st('lapotron_crystal'),
        128,
        400,
        [
            { amount: 4, item: tr('lazurite_plate') },
            { amount: 2, item: mi('digital_circuit') },
            { amount: 2, item: mi('titanium_plate') },
            { amount: 1, item: tr('energy_crystal') }
        ],
        [ { amount: 1, item: tr('lapotron_crystal') } ],
        [ { amount: 500, fluid: mi('polyethylene') } ]
    );

    // -- QBIT -- //
    assembler(
        st('qbit'),
        20,
        200,
        [
            { amount: 2, item: mi('arithmetic_logic_unit') },
            { amount: 2, tag: 'c:carbon_plates' },
            { amount: 2, tag: 'c:tungstensteel_plates' },
            { amount: 6, item: mi('superconductor_wire') }
        ],
        [ { amount: 1, item: mi('qbit') } ],
        [
            { amount: 250, fluid: mi('cryofluid') },
            { amount: 50, fluid: mi('tritium') }
        ]
    );

    // // -- ULTRADENSE METAL BALL -- //
    // assembler(
    //     st('ultradense_metal_ball'),
    //     512,
    //     600,
    //     [
    //         { amount: 4, item: mi('tungstensteel_large_plate') },
    //         { amount: 4, tag: 'c:lead_plates' },
    //         { amount: 1, tag: 'c:iridium_alloy_plates' }
    //     ],
    //     [ { amount: 1, item: mi('ultradense_metal_ball') } ],
    //     [ { amount: 1000, fluid: mi('neutronium') } ]
    // );

    // -- CALORITE MACHINE CASING -- //
    assembler(
        st('calorite_machine_casing'),
        16,
        200,
        [
            { amount: 8, tag: 'c:calorite_plates' },
            { amount: 1, tag: 'c:calorite_gears' }
        ],
        [ { amount: 1, item: mi('calorite_machine_casing') } ]
    );

    // -- CALORITE MACHINE PIPE CASING -- //
    assembler(
        st('calorite_machine_casing_pipe'),
        16,
        200,
        [
            { amount: 1, item: mi('calorite_machine_casing') },
            { amount: 6, item: mi('calorite_curved_plate')}
        ],
        [ { amount: 1, item: mi('calorite_machine_casing_pipe')} ]
    );

    // -- INDUSTRIAL CIRCUIT -- //
    assembler(
        st('industrial_circuit'),
        48,
        300,
        [
            { amount: 1, item: tr('advanced_circuit') },
            { amount: 2, tag: 'c:tungsten_plates' }
        ],
        [ { amount: 1, item:  tr('industrial_circuit') } ]
    );

    // -- DATA STORAGE CORE -- //
    assembler(
        st('data_storage_core'),
        20,
        200,
        [
            { amount: 1, item: tr('advanced_circuit') },
            { amount: 1, tag: 'c:emerald_plates' }
        ],
        [ { amount: 1, item: tr('data_storage_core') } ]
    );
    assembler(
        st('data_storage_core_alt'),
        20,
        200,
        [
            { amount: 1, item: tr('advanced_circuit') },
            { amount: 2, tag: 'c:peridot_plates' }
        ],
        [ { amount: 1, item: tr('data_storage_core') } ]
    );

    // -- REDSTONE REPEATER -- //
    assembler(
        st('repeater'),
        8,
        100,
        [ { amount: 3, tag: 'c:stone' } ],
        [ { amount: 1, item: mc('repeater') } ],
        [ { amount: 200, fluid: mi('molten_redstone') } ]
    );

    // -- REDSTONE COMPARATOR -- //
    assembler(
        st('comparator'),
        8,
        100, 
        [
            { amount: 1, item: mc('quartz') },
            { amount: 3, tag: 'c:stone' }
        ],
        [ { amount: 1, item: mc('comparator') } ],
        [ { amount: 200, fluid: mi('molten_redstone') } ]
    );

    // -- REDSTONE TORCH -- //
    assembler(
        st('redstone_torch'),
        8,
        100,
        [ { amount: 1, tag: 'c:wood_sticks' } ],
        [ { amount: 1, item: mc('redstone_torch') } ],
        [ { amount: 50, fluid: mi('molten_redstone') } ]
    );

    // -- STANDARD HANDGUN CARTRIDGE -- //
    assembler(
        st('standard_handgun_cartridge'),
        8,
        200,
        [
            { amount: 1, tag: 'c:lead_ingots' },
            { amount: 1, item: mc('gunpowder') },
            { amount: 2, tag: 'c:brass_ingots' }
        ],
        [ { amount: 8, item: 'anim_guns:standard_handgun_cartridge' } ]
    );

    // -- HEAVY HANDGUN CARTRIDGE -- //
    assembler(
        st('heavy_handgun_cartridge'),
        8,
        200,
        [
            { amount: 1, tag: 'c:lead_ingots' },
            { amount: 1, item: mc('gunpowder') },
            { amount: 2, item: 'anim_guns:hardened_iron_ingot' }
        ],
        [ { amount: 8, item: 'anim_guns:heavy_handgun_cartridge' } ]
    );

    // -- STANDARD RIFLE CARTRIDGE -- //
    assembler(
        st('standard_rifle_cartridge'),
        8, 
        200,
        [
            { amount: 2, tag: 'c:lead_ingots' },
            { amount: 2, item: mc('gunpowder') },
            { amount: 4, tag: 'c:brass_ingots' }
        ],
        [ { amount: 8, item: 'anim_guns:standard_rifle_cartridge' } ]
    );

    // -- HEAVY RIFLE CARTRIDGE -- //
    assembler(
        st('heavy_rifle_cartridge'),
        8,
        200,
        [
            { amount: 2, tag: 'c:lead_ingots' },
            { amount: 2, item: mc('gunpowder') },
            { amount: 4, item: 'anim_guns:hardened_iron_ingot' }
        ], 
        [ { amount: 8, item: 'anim_guns:heavy_rifle_cartridge' } ]
    );

    // -- SHOTGUN SHELL -- //
    assembler(
        st('shotgun_shell'),
        8,
        200,
        [
            { amount: 18, tag: 'c:iron_nuggets' },
            { amount: 2, item: mc('gunpowder') },
            { amount: 2, item: mc('paper') },
            { amount: 1, item: 'anim_guns:plastic' }
        ],
        [ { amount: 8, item: 'anim_guns:shotgun_shell' } ]
    );

    // -- SPACE HELMET -- //
    assembler(
        st('space_helmet'),
        16,
        300,
        [
            { amount: 4, tag: 'c:steel_ingots' },
            { amount: 1, tag: mc('glass_panes') },
            { amount: 1, tag: mc('wool') }
        ],
        [ { amount: 1, item: ad('space_helmet') } ]
    );

    // -- SPACE SUIT -- // 
    assembler(
        st('space_suit'),
        16,
        300,
        [
            { amount: 4, tag: 'c:steel_ingots' }, 
            { amount: 1, item: ad('oxygen_gear') },
            { amount: 1, item: ad('oxygen_tank') },
            { amount: 1, item: ad('oxygen_tank') },
            { amount: 2, tag: mc('wool') }
        ],
        [ { amount: 1, item: ad('space_suit') } ]
    );

    // -- SPACE PANTS -- //
    assembler(
        st('space_pants'),
        16,
        300,
        [
            { amount: 5, tag: 'c:steel_ingots' },
            { amount: 2, tag: mc('wool') }
        ],
        [ { amount: 1, item: ad('space_pants') } ]
    ) 

    // -- SPACE BOOTS -- //
    assembler(
        st('space_boots'),
        16,
        300,
        [
            { amount: 2, tag: 'c:steel_ingots' },
            { amount: 2, tag: mc('wool') }
        ],
        [ { amount: 1, item: ad('space_boots') } ]
    );

    // -------------------------
    // ENDGAME RECIPES
    // -------------------------

    // -- CREATIVE STORAGE UNIT -- //
    assembler(
        st('creative_storage_unit'),
        32000,
        2400,
        [
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
            { amount: 1, item: mi('superconductor_storage_unit') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') }
        ],
        [ { amount: 1, item: mi('creative_storage_unit') } ],
        [
            { amount: 8000, fluid: mi('uu_matter') },
            { amount: 8000, fluid: mi('neutronium') }
        ]
    );

    // -- CREATIVE BARREL -- //
    assembler(
        st('creative_barrel'),
        32000,
        2400,
        [
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
            { amount: 1, item: mi('quantum_barrel') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') }
        ],
        [ { amount: 1, item: mi('creative_barrel') } ],
        [
            { amount: 8000, fluid: mi('uu_matter') },
            { amount: 8000, fluid: mi('neutronium') }
        ]
    );

    // -- CREATIVE TANK -- //
    assembler(
        st('creative_tank'),
        32000,
        2400,
        [
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
            { amount: 1, item: mi('quantum_tank') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') }
        ],
        [ { amount: 1, item: mi('creative_tank') } ],
        [
            { amount: 8000, fluid: mi('uu_matter') },
            { amount: 8000, fluid: mi('neutronium') }
        ]
    );

    // -- CREATIVE MOTOR -- //
    assembler(
        st('creative_motor'),
        32000,
        2400,
        [
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
            { amount: 1, item: mi('plasma_turbine') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') },
            { amount: 64, item: mi('singularity') }
        ],
        [ { amount: 1, item: 'create:creative_motor' } ],
        [
            { amount: 8000, fluid: mi('uu_matter') },
            { amount: 8000, fluid: mi('neutronium') }
        ]
    );

    // -- CREATIVE WORLDSHAPER -- //
    assembler(
        st('handheld_worldshaper'),
        32000,
        2400,
        [
            { amount: 1, item: mi('quantum_helmet') },
            { amount: 1, item: mi('creative_tank') },
            { amount: 1, item: mi('quantum_chestplate') },
            { amount: 1, item: mi('creative_storage_unit') },
            { amount: 1, item: mi('quantum_sword') },
            { amount: 1, item: 'create:creative_motor' },
            { amount: 1, item: mi('quantum_leggings') },
            { amount: 1, item: mi('creative_barrel') },
            { amount: 1, item: mi('quantum_boots') }
        ],
        [ { amount: 1, item: 'create:handheld_worldshaper' } ],
        [
            { amount: 16000, fluid: mi('uu_matter') },
            { amount: 16000, fluid: mi('neutronium') }
        ]
    );
});