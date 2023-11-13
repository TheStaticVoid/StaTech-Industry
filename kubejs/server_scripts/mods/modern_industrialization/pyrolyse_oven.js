// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    let st = (id) => `statech:modern_industrialization/pyrolyse_oven/${id}`;

    // -- LOGS TO CHARCOAL + WOOD TAR -- //
    pyrolyseOven(
        event,
        st('charcoal_cresote_from_logs'),
        16,
        600,
        [ { amount: 16, tag: mc('logs') } ],
        [ { amount: 24, item: mc('charcoal') } ],
        [ { amount: 8000, fluid: mi('steam') } ],
        [ { amount: 1000, fluid: mi('wood_tar') } ]
    );

    // -- COAL TO COKE + CREOSOTE -- //
    pyrolyseOven(
        event,
        st('coke_benzene_from_coal'),
        16,
        600,
        [ { amount: 16, item: mc('coal') } ],
        [ { amount: 20, item: mi('coke') } ],
        [ { amount: 8000, fluid: mi('steam') } ],
        [ { amount: 1000, fluid: mi('creosote') } ]
    );

    // -- COAL DUST TO COKE DUST + CREOSOTE -- //
    pyrolyseOven(
        event,
        st('coke_dust_benzene_from_coal_dusts'),
        16,
        600,
        [ { amount: 16, tag: 'c:coal_dusts' } ],
        [ { amount: 20, item: mi('coke_dust') } ],
        [ { amount: 8000, fluid: mi('steam') } ],
        [ { amount: 1000, fluid: mi('creosote') } ]
    );
});