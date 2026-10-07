// -----------------------------------------
// CREATED BY GRONK FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:create/filling/${id}`;

    // -- CREATE FILLING REMOVED RECIPES -- //
    const REMOVED_RECIPES = [];
    REMOVED_RECIPES.forEach((id) => event.remove({ id: id }));

    // -- COOKING OIL -- //
    filling(
        event,
        st('cooking_oil'),
        [
            { item: mc('glass_bottle') },
            { type: 'neoforge:single', amount: 250, fluid: kj('cooking_oil') },
        ],
        [{ id: rd('cooking_oil') }]
    );

    // -- GRAVY -- //
    filling(
        event,
        st('gravy'),
        [
            { item: mc('bucket') },
            { type: 'neoforge:single', amount: 1000, fluid: kj('gravy') },
        ],
        [{ id: kj('gravy_bucket') }]
    );
});
