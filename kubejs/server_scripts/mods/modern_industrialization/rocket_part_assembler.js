// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) =>
        `statech:modern_industrialization/rocket_part_assembler/${id}`;

    // -- ENGINE FAN -- //
    rocketAssembler(
        event,
        st('engine_fan'),
        32,
        900,
        [
            { amount: 2, item: mi('stainless_steel_rotor') },
            { amount: 4, item: mi('steel_rod') },
            { amount: 1, item: mi('advanced_motor') },
        ],
        [{ amount: 1, item: kj('rocket_propeller') }],
        [{ amount: 100, fluid: mi('molten_enderium') }]
    );

    // -- ENGINE FRAME -- //
    rocketAssembler(
        event,
        st('engine_frame'),
        32,
        900,
        [
            { amount: 4, item: mi('steel_rod') },
            { amount: 2, item: mi('steel_large_plate') },
        ],
        [{ amount: 1, item: kj('engine_framebox') }],
        [{ amount: 100, fluid: mi('molten_enderium') }]
    );

    // -- ROCKET FIN -- //
    rocketAssembler(
        event,
        st('rocket_fin'),
        16,
        600,
        [
            { amount: 2, tag: 'c:plates/steel' },
            { amount: 3, item: mi('steel_curved_plate') },
        ],
        [{ amount: 1, item: kj('rocket_fin') }],
        [{ amount: 100, fluid: mi('molten_enderium') }]
    );

    // -- ROCKET NOSE CONE -- //
    rocketAssembler(
        event,
        st('rocket_nose_cone'),
        32,
        900,
        [
            { amount: 3, item: mi('steel_curved_plate') },
            { amount: 1, item: mi('redstone_tiny_dust') },
        ],
        [{ amount: 1, item: kj('rocket_cone') }],
        [{ amount: 100, fluid: mi('molten_enderium') }]
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
            { amount: 8, item: mi('steel_plate') },
            { amount: 1, tag: 'c:glass_blocks' },
        ],
        [{ amount: 1, item: kj('steel_fuel_tank') }],
        [{ amount: 250, fluid: mi('boosted_diesel') }]
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
            { amount: 8, item: mi('desh_plate') },
            { amount: 1, tag: 'c:glass_blocks' },
        ],
        [{ amount: 1, item: kj('desh_fuel_tank') }],
        [{ amount: 500, fluid: mi('boosted_diesel') }]
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
            { amount: 8, item: mi('ostrum_plate') },
            { amount: 1, tag: 'c:glass_blocks' },
        ],
        [{ amount: 1, item: kj('ostrum_fuel_tank') }],
        [{ amount: 750, fluid: mi('boosted_diesel') }]
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
            { amount: 8, item: mi('calorite_plate') },
            { amount: 1, tag: 'c:glass_blocks' },
        ],
        [{ amount: 1, item: kj('calorite_fuel_tank') }],
        [{ amount: 1000, fluid: mi('boosted_diesel') }]
    );

    // -- STEEL ENGINE -- //
    rocketAssembler(
        event,
        st('steel_engine'),
        32,
        900,
        [
            { amount: 3, tag: 'c:plates/steel' },
            { amount: 1, item: kj('engine_framebox') },
            { amount: 1, item: kj('rocket_propeller') },
        ],
        [{ amount: 1, item: kj('steel_engine') }],
        [{ amount: 100, fluid: mi('molten_enderium') }]
    );

    // -- DESH ENGINE -- //
    rocketAssembler(
        event,
        st('desh_engine'),
        32,
        1200,
        [
            { amount: 3, tag: 'c:plates/desh' },
            { amount: 1, item: kj('engine_framebox') },
            { amount: 1, item: kj('rocket_propeller') },
        ],
        [{ amount: 1, item: kj('desh_engine') }],
        [{ amount: 100, fluid: mi('molten_enderium') }]
    );

    // -- OSTRUM ENGINE -- //
    rocketAssembler(
        event,
        st('ostrum_engine'),
        32,
        1600,
        [
            { amount: 3, tag: 'c:plates/ostrum' },
            { amount: 1, item: kj('engine_framebox') },
            { amount: 1, item: kj('rocket_propeller') },
        ],
        [{ amount: 1, item: kj('ostrum_engine') }],
        [{ amount: 100, fluid: mi('molten_enderium') }]
    );

    // -- CALORITE ENGINE -- //
    rocketAssembler(
        event,
        st('calorite_engine'),
        32,
        2400,
        [
            { amount: 3, tag: 'c:plates/calorite' },
            { amount: 1, item: kj('engine_framebox') },
            { amount: 1, item: kj('rocket_propeller') },
        ],
        [{ amount: 1, item: kj('calorite_engine') }],
        [{ amount: 100, fluid: mi('molten_enderium') }]
    );
});
