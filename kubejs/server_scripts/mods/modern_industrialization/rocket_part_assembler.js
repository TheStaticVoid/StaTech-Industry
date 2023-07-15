// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:modern_industrialization/rocket_part_assembler/${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let ad = (id) => `ad_astra:${id}`;

    // -- CUSTOM RECIPE UTILITY FUNCTION -- //
    let rocketAssembler = (id, eu, duration, item_inputs, item_outputs, fluid_inputs) => {
        let newRecipe = {
            type: 'modern_industrialization:rocket_part_assembler',
            eu: eu,
            duration: duration,
            id: id
        }
        if (item_inputs != null)
            newRecipe['item_inputs'] = item_inputs;
        if (item_outputs) 
            newRecipe['item_outputs'] = item_outputs;
        if (fluid_inputs != null) 
            newRecipe['fluid_inputs'] = fluid_inputs;

        e.custom(newRecipe);
    }

    // -- ENGINE FAN -- //
    rocketAssembler(
        st('engine_fan'),
        32,
        900,
        [
            { amount: 2, item: mi('stainless_steel_rotor') },
            { amount: 4, item: mi('steel_rod') },
            { amount: 1, item: mi('advanced_motor') }
        ],
        [ { amount: 1, item: ad('engine_fan') } ],
        [ { amount: 100, fluid: mi('soldering_alloy') } ]
    );

    // -- ENGINE FRAME -- //
    rocketAssembler(
        st('engine_frame'),
        32,
        900,
        [
            { amount: 4, item: mi('steel_rod') },
            { amount: 2, item: mi('steel_large_plate') }
        ],
        [ { amount: 1, item: ad('engine_frame') } ],
        [ { amount: 100, fluid: mi('soldering_alloy') } ]
    );

    // -- ROCKET FIN -- //
    rocketAssembler(
        st('rocket_fin'),
        32, 
        900, 
        [
            { amount: 2, tag: 'c:steel_plates' },
            { amount: 3, item: mi('steel_curved_plate') }
        ],
        [ { amount: 1, item: ad('rocket_fin') } ],
        [ { amount: 100, fluid: mi('soldering_alloy') } ]
    );

    // -- ROCKET NOSE CONE -- //
    rocketAssembler(
        st('rocket_nose_cone'),
        32,
        900,
        [
            { amount: 3, item: mi('steel_curved_plate') },
            { amount: 1, item: 'techreborn:synthetic_redstone_crystal' }
        ],
        [ { amount: 1, item: ad('rocket_nose_cone') } ],
        [ { amount: 100, fluid: mi('soldering_alloy') } ]
    );

    // -- STEEL TANK -- //
    rocketAssembler(
        st('steel_tank'),
        32,
        900,
        [
            { amount: 4, item: mi('steel_ring') },
            { amount: 2, item: mi('advanced_pump') },
            { amount: 1, item: mi('steel_tank') }
        ],
        [ { amount: 1, item: ad('steel_tank') } ],
        [ { amount: 100, fluid: mi('soldering_alloy') } ]
    );

    // -- DESH TANK -- //
    rocketAssembler(
        st('desh_tank'),
        32,
        1200,
        [
            { amount: 4, item: mi('steel_ring') },
            { amount: 2, item: mi('advanced_pump') },
            { amount: 8, item: ad('desh_plate') },
            { amount: 1, tag: 'c:glass_blocks' }
        ],
        [ { amount: 1, item: ad('desh_tank') } ],
        [ { amount: 100, fluid: mi('soldering_alloy') } ]
    );

    // -- OSTRUM TANK -- //
    rocketAssembler(
        st('ostrum_tank'),
        32,
        1600,
        [
            { amount: 4, item: mi('steel_ring') },
            { amount: 2, item: mi('advanced_pump') },
            { amount: 8, item: ad('ostrum_plate') },
            { amount: 1, tag: 'c:glass_blocks' }
        ],
        [ { amount: 1, item: ad('ostrum_tank') } ],
        [ { amount: 100, fluid: mi('soldering_alloy') } ]
    );

    // -- CALORITE TANK -- //
    rocketAssembler(
        st('calorite_tank'),
        32,
        2400,
        [
            { amount: 4, item: mi('steel_ring') },
            { amount: 2, item: mi('advanced_pump') },
            { amount: 8, item: ad('calorite_plate') },
            { amount: 1, tag: 'c:glass_blocks' }
        ],
        [ { amount: 1, item: ad('calorite_tank') } ],
        [ { amount: 100, fluid: mi('soldering_alloy') } ]
    )

    // -- STEEL ENGINE -- //
    rocketAssembler(
        st('steel_engine'),
        32, 
        900,
        [
            { amount: 3, tag: 'c:steel_plates' },
            { amount: 1, item: ad('engine_frame') },
            { amount: 1, item: ad('engine_fan') }
        ],
        [ { amount: 1, item: ad('steel_engine') } ], 
        [ { amount: 100, fluid: mi('soldering_alloy') } ]
    );

    // -- DESH ENGINE -- //
    rocketAssembler(
        st('desh_engine'),
        32,
        1200,
        [
            { amount: 3, tag: 'c:desh_plates' },
            { amount: 1, item: ad('engine_frame') },
            { amount: 1, item: ad('engine_fan') }
        ],
        [ { amount: 1, item: ad('desh_engine') } ],
        [ { amount: 100, fluid: mi('soldering_alloy') } ]
    );

    // -- OSTRUM ENGINE -- //
    rocketAssembler(
        st('ostrum_engine'),
        32,
        1600,
        [
            { amount: 3, tag: 'c:ostrum_plates' },
            { amount: 1, item: ad('engine_frame') },
            { amount: 1, item: ad('engine_fan') }
        ],
        [ { amount: 1, item: ad('ostrum_engine') } ],
        [ { amount: 100, fluid: mi('soldering_alloy') } ]
    );

    // -- CALORITE ENGINE -- //
    rocketAssembler(
        st('calorite_engine'),
        32,
        2400,
        [
            { amount: 3, tag: 'c:calorite_plates' },
            { amount: 1, item: ad('engine_frame') },
            { amount: 1, item: ad('engine_fan') }
        ],
        [ { amount: 1, item: ad('calorite_engine') } ],
        [ { amount: 100, fluid: mi('soldering_alloy') } ]
    );
});