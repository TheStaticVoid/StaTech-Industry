// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:modern_industrialization/pyrolyse_oven/${id}`;

    const REMOVED_RECIPE = [    
        io('pyrolyse_oven/charcoal_from_logs')
    ];
    REMOVED_RECIPE.forEach(id => event.remove({id: id}));    

    // -- LOGS TO CHARCOAL + WOOD TAR -- //
    pyrolyseOven(
        event,
        st('charcoal_cresote_from_logs'),
        8,
        300,
        [ { amount: 4, tag: mc('logs') } ],
        [ { amount: 6, item: mc('charcoal') } ],
        null,
        [ { amount: 250, fluid: mi('wood_tar') } ]
    );

    // -- DIBORANE TO PENTABORANE -- //
    pyrolyseOven(
        event,
        st('pentaborane'),
        32,
        800,
        null,
        null,
        [ { amount: 2500, fluid: mi('diborane') } ],
        [ { amount: 1000, fluid: mi('pentaborane') } ]
    );
});