// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:modern_industrialization/compressor/${id}`;

    // -- COMPRESSOR REMOVED RECIPES -- //
    const DELETED_RECIPE = [
        mi('materials/diamond/compressor/main'),
        mi('materials/emerald/compressor/main'),
        mi('vanilla_recipes/compressor/paper_with_sugarcane'),
    ];
    DELETED_RECIPE.forEach((id) => event.remove({ id: id }));

    // -- PIZZA DOUGH -- //
    compressor(
        event,
        st('pizza_dough'),
        2,
        200,
        [{ amount: 1, tag: 'c:foods/dough' }],
        [{ amount: 1, item: kj('pizza_dough') }]
    );

    // -- DIAMOND PLATE -- //
    compressor(
        event,
        st('diamond_plate'),
        48,
        400,
        [{ amount: 1, item: mc('diamond') }],
        [{ amount: 1, item: mi('diamond_plate') }]
    );

    // -- EMERALD PLATE -- //
    compressor(
        event,
        st('emerald_plate'),
        48,
        400,
        [{ amount: 1, item: mc('emerald') }],
        [{ amount: 1, item: mi('emerald_plate') }]
    );

    // -- BRICKS -- //
    compressor(
        event,
        st('bricks'),
        2,
        300,
        [{ amount: 4, item: mc('brick') }],
        [{ amount: 1, item: mc('bricks') }]
    );

    // -- FIRE CLAY BRICKS -- //
    compressor(
        event,
        st('fire_clay_bricks'),
        2,
        300,
        [{ amount: 4, item: mi('fire_clay_brick') }],
        [{ amount: 1, item: mi('fire_clay_bricks') }]
    );

    // -- STONE -- //
    compressor(
        event,
        st('stone'),
        2,
        200,
        [{ amount: 4, item: mi('stone_dust') }],
        [{ amount: 1, item: mc('stone') }]
    );

    // -- BRASS SHEET -- //
    compressor(
        event,
        st('brass_sheet'),
        2,
        100,
        [{ amount: 1, item: cr('brass_ingot') }],
        [{ amount: 1, item: cr('brass_sheet') }]
    );

    // -- PAPER -- //
    compressor(
        event,
        st('paper'),
        2,
        100,
        [{ amount: 1, item: mc('sugar_cane') }],
        [{ amount: 1, item: mc('paper') }]
    );
});
