ServerEvents.recipes(e => {
    // -- CUPRONICKEL HEATING COIL -- //
    e.custom({
        type: 'modern_industrialization:assembler',
        duration: 400,
        eu: 4,
        item_inputs: [
            {
                amount: 4,
                item: 'modern_industrialization:cupronickel_wire'
            }
        ],
        item_outputs: [
            {
                amount: 1,
                item: 'techreborn:cupronickel_heating_coil'
            }
        ]
    });
    
    // -- KANTHAL HEATING COIL -- //
    e.custom({
        type: 'modern_industrialization:assembler',
        duration: 400,
        eu: 48,
        item_inputs: [
            {
                amount: 4,
                item: 'modern_industrialization:kanthal_wire'
            }
        ],
        item_outputs: [
            {
                amount: 1,
                item: 'techreborn:kanthal_heating_coil'
            }
        ]
    });

    // -- AUTO CRAFTING TABLE -- //
    e.custom({
        type: 'modern_industrialization:assembler',
        duration: 600,
        eu: 16,
        item_inputs: [
            {
                amount: 4,
                item: 'modern_industrialization:analog_circuit'
            },
            {
                amount: 2,
                tag: 'c:workbench'
            },
            {
                amount: 2,
                item: 'modern_industrialization:robot_arm'
            },
            {
                amount: 2,
                item: 'modern_industrialization:motor'
            }
        ],
        item_outputs: [
            {
                amount: 1,
                item: 'techreborn:auto_crafting_table'
            }
        ]
    });
});