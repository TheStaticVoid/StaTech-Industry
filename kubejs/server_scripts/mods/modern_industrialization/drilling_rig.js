// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    let st = (id) => `statech:modern_industrialization/drilling_rig/${id}`;

    // -- LAVA FROM GOLD DRILL -- //
    drillingRig(
        event,
        st('gold_drill'),
        16,
        200,
        [ { amount: 1, item: mi('gold_drill'), probability: 0.05 } ],
        [ { amount: 500, fluid: mc('lava') } ]
    );

    drillingRig(
        event,
        st('salt_water'),
        16,
        200,
        [ { amount: 1, item: mi('bronze_drill'), probability: 0.02 } ],
        [ { amount: 16000, fluid: mi('salt_water') } ]
    );
});