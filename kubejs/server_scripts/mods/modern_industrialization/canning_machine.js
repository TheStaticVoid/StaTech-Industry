// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:extended_industrialization/canning_machine/${id}`;

    // -- CANNING MACHINE REMOVED RECIPES -- //
    let REMOVED_RECIPE = [
        //    ei(''),
    ];
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
});
