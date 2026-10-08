// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:extended_industrialization/canning_machine/${id}`;

    // -- CANNING MACHINE REMOVED RECIPES -- //
    const REMOVED_RECIPE = [];
    REMOVED_RECIPE.forEach((id) => event.remove({ id: id }));

    // -- SULFURIC ACID BOTTLE -- //
    canningMachine(
        event,
        st('sulfuric_acid_bottle'),
        8,
        200,
        [{ amount: 1, item: mc('glass_bottle') }],
        [{ amount: 1, item: kj('sulfuric_acid_bottle') }],
        [{ amount: 100, fluid: mi('sulfuric_acid') }]
    );

    // -- COOKING OIL BOTTLE -- //
    canningMachine(
        event,
        st('cooking_oil_bottling'),
        2,
        100,
        [{ amount: 1, item: mc('glass_bottle') }],
        [{ amount: 1, item: rd('cooking_oil') }],
        [{ amount: 250, fluid: kj('cooking_oil') }]
    );

    canningMachine(
        event,
        st('cooking_oil_unbottling'),
        2,
        100,
        [{ amount: 1, item: rd('cooking_oil') }],
        [{ amount: 1, item: mc('glass_bottle') }],
        null,
        [{ amount: 250, fluid: kj('cooking_oil') }]
    );

    // -- GRAVY -- //
    canningMachine(
        event,
        st('gravy_bucketing'),
        2,
        100,
        [{ amount: 1, item: mc('bucket') }],
        [{ amount: 1, item: kj('gravy_bucket') }],
        [{ amount: 1000, fluid: kj('gravy') }]
    );

    canningMachine(
        event,
        st('gravy_unbucketing'),
        2,
        100,
        [{ amount: 1, item: kj('gravy_bucket') }],
        [{ amount: 1, item: mc('bucket') }],
        null,
        [{ amount: 1000, fluid: kj('gravy') }]
    );

    canningMachine(
        event,
        st('gravy_canning'),
        2,
        100,
        [
            { amount: 1, item: ei('tin_can') },
            { amount: 1, item: kj('gravy_bucket') },
        ],
        [
            { amount: 1, item: ei('canned_food') },
            { amount: 1, item: mc('bucket') },
        ]
    );

    // -- STATECH ENERGY -- //
    canningMachine(
        event,
        st('statech_energy'),
        8,
        200,
        [
            { amount: 1, item: ei('tin_can') },
            { amount: 2, item: mi('battery_alloy_dust') },
        ],
        [{ amount: 1, item: kj('statech_energy') }],
        [{ amount: 100, fluid: mc('water') }]
    );

    // -- BEPSI -- //
    canningMachine(
        event,
        st('bepsi'),
        8,
        200,
        [{ amount: 1, item: ei('tin_can') }],
        [{ amount: 1, item: kj('bepsi') }],
        [{ amount: 100, fluid: mi('polyethylene') }]
    );

    // -- COKE COLA -- //
    canningMachine(
        event,
        st('coke_cola'),
        8,
        200,
        [
            { amount: 1, item: ei('tin_can') },
            { amount: 2, tag: 'c:dusts/coke' },
        ],
        [{ amount: 1, item: kj('coke_cola') }],
        [{ amount: 100, fluid: mc('water') }]
    );

    // -- GREG COLA -- //
    canningMachine(
        event,
        st('greg_cola'),
        8,
        200,
        [
            { amount: 1, item: ei('tin_can') },
            { amount: 2, item: mc('clay_ball') },
        ],
        [{ amount: 1, item: kj('greg_cola') }],
        [{ amount: 100, fluid: mi('polytetrafluoroethylene') }]
    );

    // -- CONCRETE BLOCK -- //
    canningMachine(
        event,
        st('speedy_concrete'),
        8,
        100,
        [{ amount: 1, item: mi('packer_block_template'), probability: 0 }],
        [{ amount: 2, item: kj('speedy_concrete') }],
        [{ amount: 500, fluid: mi('concrete') }]
    );

    // -- BATTERY CASING -- //
    canningMachine(
        event,
        st('battery_casing'),
        8,
        200,
        [
            { amount: 1, item: mi('battery_alloy_plate') },
            { amount: 4, item: mi('battery_alloy_curved_plate') },
        ],
        [{ amount: 2, item: kj('battery_casing') }],
        [{ amount: 100, fluid: mi('lithium') }]
    );
});
