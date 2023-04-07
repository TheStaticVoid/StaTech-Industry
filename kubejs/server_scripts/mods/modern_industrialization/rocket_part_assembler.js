ServerEvents.recipes(e => {

    let mi = (id) => `modern_industrialization:${id}`;
    let astra = (id) => `ad_astra:${id}`;

    // helper function for assembler
    let rocketAssembler = (eu, duration, item_inputs, item_outputs, fluid_inputs) => {
        let newRecipe = {
            type: 'modern_industrialization:rocket_part_assembler',
            eu: eu,
            duration: duration
        }
        if (item_inputs != null)
            newRecipe['item_inputs'] = item_inputs;
        if (item_outputs) 
            newRecipe['item_outputs'] = item_outputs;
        if (fluid_inputs != null) 
            newRecipe['fluid_inputs'] = fluid_inputs;

        e.custom(newRecipe);
    }

    // -- STEEL TANK -- //
    rocketAssembler(
        128,
        900,
        [
            { amount: 4, item: mi('steel_ring') },
            { amount: 2, item: mi('advanced_pump') },
            { amount: 1, item: mi('steel_tank') }
        ],
        [
            { amount: 1, item: astra('steel_tank') }
        ],
        [
            { amount: 100, fluid: mi('soldering_alloy') }
        ]
    );

    // -- ENGINE FAN -- //
    rocketAssembler(
        128,
        900,
        [
            { amount: 2, item: mi('stainless_steel_rotor') },
            { amount: 4, item: mi('steel_rod') },
            { amount: 1, item: mi('advanced_motor') }
        ],
        [
            { amount: 1, item: astra('engine_fan') }
        ],
        [
            { amount: 100, fluid: mi('soldering_alloy') }
        ]
    );

    // -- ENGINE FRAME -- //
    rocketAssembler(
        128,
        900,
        [
            { amount: 4, item: mi('steel_rod') },
            { amount: 2, item: mi('steel_large_plate') }
        ],
        [
            { amount: 1, item: astra('engine_frame') }
        ],
        [
            { amount: 100, fluid: mi('soldering_alloy') }
        ]
    );

    // -- STEEL ENGINE -- //
    rocketAssembler(
        128, 
        900,
        [
            { amount: 3, tag: 'c:steel_plates' },
            { amount: 1, item: astra('engine_frame') },
            { amount: 1, item: astra('engine_fan') }
        ],
        [
            { amount: 1, item: astra('steel_engine') }
        ], 
        [
            { amount: 100, fluid: mi('soldering_alloy') }
        ]
    );

    // -- ROCKET FIN -- //
    rocketAssembler(
        128, 
        900, 
        [
            { amount: 2, tag: 'c:steel_plates' },
            { amount: 3, item: mi('steel_curved_plate') }
        ],
        [
            { amount: 1, item: astra('rocket_fin') }
        ],
        [
            { amount: 100, fluid: mi('soldering_alloy') }
        ]
    );

    // -- ROCKET NOSE CONE -- //
    rocketAssembler(
        128,
        900,
        [
            { amount: 3, item: mi('steel_curved_plate') },
            { amount: 1, item: 'techreborn:synthetic_redstone_crystal' }
        ],
        [
            { amount: 1, item: astra('rocket_nose_cone') }
        ],
        [
            { amount: 100, fluid: mi('soldering_alloy') }
        ]
    );
});