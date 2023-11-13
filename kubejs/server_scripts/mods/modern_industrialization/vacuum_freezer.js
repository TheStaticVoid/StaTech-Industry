// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    let st = (id) => `statech:modern_industrialization/vacuum_freezer/${id}`;

    // -- POLYTETRAFLUOROETHYLENE INGOT -- //
    vacuumFreezer(
        event,
        st('ptfe_ingot'),
        32,
        200,
        null,
        [ { amount: 1, item: mi('polytetrafluoroethylene_ingot') } ],
        [ { amount: 100, fluid: mi('polytetrafluoroethylene')}]
    );

    // -- TUNGSTENSTEEL INGOT -- //
    vacuumFreezer(
        event,
        st('tungstensteel_ingot'),
        64,
        600,
        [ { amount: 1, item: tr('hot_tungstensteel_ingot') } ],
        [ { amount: 1, item: tr('tungstensteel_ingot') } ]
    );

    // -- CONCRETE BAR -- //
    vacuumFreezer(
        event,
        st('concrete_bar'),
        16,
        200,
        null,
        [ { amount: 1, item: kj('concrete_bar') } ],
        [ { amount: 100, fluid: mi('concrete') } ]
    );

    // -- NETHER STAR -- //
    vacuumFreezer(
        event,
        st('nether_star'),
        64,
        100,
        null,
        [ { amount: 1, item: mc('nether_star') } ],
        [ { amount: 500, fluid: mi('molten_nether_star') } ]
    );
});