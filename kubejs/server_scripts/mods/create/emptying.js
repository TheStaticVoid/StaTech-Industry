// -----------------------------------------
// CREATED BY GRONK FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:create/emptying/${id}`;

    // -- CREATE EMPTYING REMOVED RECIPES -- //
    const REMOVED_RECIPES = [];
    REMOVED_RECIPES.forEach((id) => event.remove({ id: id }));

    // -- COOKING OIL -- //
    emptying(
        event,
        st('cooking_oil'),
        [{ item: rd('cooking_oil') }],
        [{ id: mc('glass_bottle') }, { amount: 250, id: kj('cooking_oil') }]
    );

    // -- GRAVY -- //
    emptying(
        event,
        st('gravy'),
        [{ item: kj('gravy_bucket') }],
        [{ id: mc('bucket') }, { amount: 1000, id: kj('gravy') }]
    );
});
