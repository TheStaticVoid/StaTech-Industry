// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:extended_industrialization/canning_machine/${id}`;

    // -- CANNING MACHINE REMOVED RECIPES -- //
    let REMOVED_RECIPE = [
    //    ei(''),
    ];
    REMOVED_RECIPE.forEach(id => event.remove({id: id}));

    // -- SULFURIC ACID BOTTLE -- //
    canningMachine(
        event,
        st('sulfuric_acid_bottle'),
        8,
        200,
        [ { amount: 1, item: mc('glass_bottle') } ],
        [ { amount: 1, item: kj('sulfuric_acid_bottle') } ],
        [ { amount: 100, fluid: mi('sulfuric_acid') } ]
    );

});
