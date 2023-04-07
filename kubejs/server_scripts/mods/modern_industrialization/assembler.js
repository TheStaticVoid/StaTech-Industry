ServerEvents.recipes(e => {

    const REMOVED_RECIPE = [
        'modern_industrialization:compat/ae2/logic_processor',
        'modern_industrialization:compat/ae2/calculation_processor',
        'modern_industrialization:compat/ae2/engineering_processor'
    ];
    REMOVED_RECIPE.forEach(id => e.remove({id: id}));

    let mi = (id) => `modern_industrialization:${id}`;
    let tr = (id) => `techreborn:${id}`;
    let astra = (id) => `ad_astra:${id}`;
    let mc = (id) => `minecraft:${id}`;

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
            { amount: 5, tag: 'c:stee_plates' },
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
});