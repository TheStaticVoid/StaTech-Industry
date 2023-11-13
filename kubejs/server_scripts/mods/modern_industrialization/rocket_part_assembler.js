// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    let st = (id) => `statech:modern_industrialization/rocket_part_assembler/${id}`;

    // -- ENGINE FAN -- //
    rocketAssembler(
        event,
        st('engine_fan'),
        32,
        900,
        [
            { amount: 2, item: mi('stainless_steel_rotor') },
            { amount: 4, item: mi('steel_rod') },
            { amount: 1, item: mi('advanced_motor') }
        ],
        [ { amount: 1, item: ad('engine_fan') } ],
        [ { amount: 100, fluid: mi('molten_enderium') } ]
    );

    // -- ENGINE FRAME -- //
    rocketAssembler(
        event,
        st('engine_frame'),
        32,
        900,
        [
            { amount: 4, item: mi('steel_rod') },
            { amount: 2, item: mi('steel_large_plate') }
        ],
        [ { amount: 1, item: ad('engine_frame') } ],
        [ { amount: 100, fluid: mi('molten_enderium') } ]
    );

    // -- ROCKET FIN -- //
    rocketAssembler(
        event,
        st('rocket_fin'),
        32, 
        900, 
        [
            { amount: 2, tag: 'c:steel_plates' },
            { amount: 3, item: mi('steel_curved_plate') }
        ],
        [ { amount: 1, item: ad('rocket_fin') } ],
        [ { amount: 100, fluid: mi('molten_enderium') } ]
    );

    // -- ROCKET NOSE CONE -- //
    rocketAssembler(
        event,
        st('rocket_nose_cone'),
        32,
        900,
        [
            { amount: 3, item: mi('steel_curved_plate') },
            { amount: 1, item: 'techreborn:synthetic_redstone_crystal' }
        ],
        [ { amount: 1, item: ad('rocket_nose_cone') } ],
        [ { amount: 100, fluid: mi('molten_enderium') } ]
    );

    // -- STEEL TANK -- //
    rocketAssembler(
        event,
        st('steel_tank'),
        32,
        900,
        [
            { amount: 4, item: mi('steel_ring') },
            { amount: 2, item: mi('advanced_pump') },
            { amount: 1, item: mi('steel_tank') }
        ],
        [ { amount: 1, item: ad('steel_tank') } ],
        [ { amount: 100, fluid: mi('molten_enderium') } ]
    );

    // -- DESH TANK -- //
    rocketAssembler(
        event,
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
        [ { amount: 100, fluid: mi('molten_enderium') } ]
    );

    // -- OSTRUM TANK -- //
    rocketAssembler(
        event,
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
        [ { amount: 100, fluid: mi('molten_enderium') } ]
    );

    // -- CALORITE TANK -- //
    rocketAssembler(
        event,
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
        [ { amount: 100, fluid: mi('molten_enderium') } ]
    )

    // -- STEEL ENGINE -- //
    rocketAssembler(
        event,
        st('steel_engine'),
        32, 
        900,
        [
            { amount: 3, tag: 'c:steel_plates' },
            { amount: 1, item: ad('engine_frame') },
            { amount: 1, item: ad('engine_fan') }
        ],
        [ { amount: 1, item: ad('steel_engine') } ], 
        [ { amount: 100, fluid: mi('molten_enderium') } ]
    );

    // -- DESH ENGINE -- //
    rocketAssembler(
        event,
        st('desh_engine'),
        32,
        1200,
        [
            { amount: 3, tag: 'c:desh_plates' },
            { amount: 1, item: ad('engine_frame') },
            { amount: 1, item: ad('engine_fan') }
        ],
        [ { amount: 1, item: ad('desh_engine') } ],
        [ { amount: 100, fluid: mi('molten_enderium') } ]
    );

    // -- OSTRUM ENGINE -- //
    rocketAssembler(
        event,
        st('ostrum_engine'),
        32,
        1600,
        [
            { amount: 3, tag: 'c:ostrum_plates' },
            { amount: 1, item: ad('engine_frame') },
            { amount: 1, item: ad('engine_fan') }
        ],
        [ { amount: 1, item: ad('ostrum_engine') } ],
        [ { amount: 100, fluid: mi('molten_enderium') } ]
    );

    // -- CALORITE ENGINE -- //
    rocketAssembler(
        event,
        st('calorite_engine'),
        32,
        2400,
        [
            { amount: 3, tag: 'c:calorite_plates' },
            { amount: 1, item: ad('engine_frame') },
            { amount: 1, item: ad('engine_fan') }
        ],
        [ { amount: 1, item: ad('calorite_engine') } ],
        [ { amount: 100, fluid: mi('molten_enderium') } ]
    );
});