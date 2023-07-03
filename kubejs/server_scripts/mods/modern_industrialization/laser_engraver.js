ServerEvents.recipes(e => {
    let st = (id) => `statech:modern_industrialization/laser_engraver/${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let kjs = (id) => `kubejs:${id}`;

    let laserEngraver = (id, eu, duration, item_inputs, item_outputs) => {
        let newRecipe = {
            type: mi('laser_engraver'),
            eu: eu,
            duration: duration,
            id: id
        }

        if (item_inputs)    
            newRecipe['item_inputs'] = item_inputs;
        if (item_outputs)
            newRecipe['item_outputs'] = item_outputs;

        e.custom(newRecipe);
    }
    
    // -- PRINTED SILICON -- //
    laserEngraver(
        st('circuit_silicon'),
        32,
        200,
        [
            { amount: 1, item: 'ae2:silicon_press', probability: 0.0 },
            { amount: 1, item: 'ae2:silicon' }
        ],
        [
            { amount: 1, item: 'ae2:printed_silicon' }
        ]
    );
    laserEngraver(
        st('silicon_press_alt'),
        32,
        200,
        [
            { amount: 1, item: 'ae2:silicon_press', probability: 0.0 },
            { amount: 1, item: mi('silicon_ingot') }
        ],
        [
            { amount: 1, item: 'ae2:printed_silicon' }
        ]
    );

    // -- PRINTED CALCULATION CIRCUIT -- //
    laserEngraver(
        st('circuit_calculation'),
        32,
        200,
        [
            { amount: 1, item: 'ae2:calculation_processor_press', probability: 0.0 },
            { amount: 1, item: 'ae2:certus_quartz_crystal' }
        ],
        [ 
            { amount: 1, item: 'ae2:printed_calculation_processor' } 
        ]
    );

    // -- PRINTED ENGINEERING CIRCUIT -- //
    laserEngraver(
        st('circuit_engineering'),
        32,
        200,
        [
            { amount: 1, item: 'ae2:engineering_processor_press', probability: 0.0 },
            { amount: 1, item: mc('diamond') }
        ],
        [
            { amount: 1, item: 'ae2:printed_engineering_processor' }
        ]
    );

    // -- PRINTED LOGIC CIRCUIT -- //
    laserEngraver(
        st('circuit_logic'),
        32,
        200,
        [
            { amount: 1, item: 'ae2:logic_processor_press', probability: 0.0 },
            { amount: 1, item: mc('gold_ingot') }
        ],
        [
            { amount: 1, item: 'ae2:printed_logic_processor' }
        ]
    );

    // -- SILICON PRESS -- //
    laserEngraver(
        st('dupe_silicon_press'),
        32,
        200,
        [
            { amount: 1, item: 'ae2:silicon_press', probability: 0.0 },
            { amount: 1, item: mc('iron_block') }
        ],
        [
            { amount: 1, item: 'ae2:silicon_press' }
        ]
    );

    // -- CALCULATION PRESS -- //
    laserEngraver(
        st('dupe_calculation_press'),
        32,
        200,
        [
            { amount: 1, item: 'ae2:calculation_processor_press', probability: 0.0 },
            { amount: 1, item: mc('iron_block') }
        ],
        [
            { amount: 1, item: 'ae2:calculation_processor_press' }
        ]
    );

    // -- ENGINEERING PRESS -- //
    laserEngraver(
        st('dupe_engineering_press'),
        32,
        200,
        [
            { amount: 1, item: 'ae2:engineering_processor_press', probability: 0.0 },
            { amount: 1, item: mc('iron_block') }
        ],
        [
            { amount: 1, item: 'ae2:engineering_processor_press' }
        ]
    );

    // -- LOGIC PRESS -- //
    laserEngraver(
        st('dupe_logic_press'),
        32,
        200,
        [
            { amount: 1, item: 'ae2:logic_processor_press', probability: 0.0 },
            { amount: 1, item: mc('iron_block') }
        ],
        [
            { amount: 1, item: 'ae2:logic_processor_press' } 
        ]
    );
});