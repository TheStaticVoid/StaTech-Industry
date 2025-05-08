// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    let st = (id) => `statech:modern_industrialization/compressor/${id}`;

    // -- COMPRESSOR REMOVED RECIPES -- //
    const DELETED_RECIPE = [

    ];
    DELETED_RECIPE.forEach(id => e.remove({id: id}));

    // -- BRICKS -- //
    compressor(
        e,
        st('bricks'),
        2,
        300,
        [ { amount: 4, item: mc('brick') } ],
        [ { amount: 1, item: mc('bricks') } ]
    );
});