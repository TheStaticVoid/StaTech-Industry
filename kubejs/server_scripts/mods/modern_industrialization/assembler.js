ServerEvents.recipes(e => {

    let mi = (id) => `modern_industrialization:${id}`;
    let tr = (id) => `techreborn:${id}`;

    let assembler = (eu, duration, item_inputs, fluid_inputs, fluid_outputs, item_outputs) => {
        let newRecipe = {
            type: 'modern_industrialization:assembler',
            eu: eu,
            duration: duration
        }

        if (item_inputs != null)
            newRecipe['item_inputs'] = item_inputs;
        if (fluid_inputs != null)
            newRecipe['fluid_inputs'] = fluid_inputs;
        if (item_outputs != null)
            newRecipe['item_outputs'] = item_outputs;
        if (fluid_outputs != null)
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
        null,
        null,
        [
            { amount: 1, item: tr('cupronickel_heating_coil') }
        ]
    );
    
    // -- KANTHAL HEATING COIL -- //
    assembler(
        48,
        400,
        [
            { amount: 4, item: mi('kanthal_wire') }
        ],
        null,
        null,
        [
            { amount: 1, item: tr('kanthal_heating_coil') }
        ]
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
        null,
        null,
        [
            { amount: 1, item: tr('auto_crafting_table') }
        ]
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
            { amount: 500, fluid: mi('lithium') }
        ],
        null,
        [
            { amount: 1, item: tr('lithium_ion_battery') }
        ]
    );
});