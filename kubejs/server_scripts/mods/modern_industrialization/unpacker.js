// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:modern_industrialization/unpacker/${id}`;

    // -- UNPACKER REMOVED RECIPES -- //
    const REMOVED_RECIPE = [];
    REMOVED_RECIPE.forEach((id) => event.remove({ id: id }));

    // -- DECORATIVE COPPER BLOCK -- //
    unpacker(
        event,
        st('copper_from_decorative_waxed_copper_block'),
        4,
        600,
        [{ amount: 9, item: kj('decorative_waxed_copper_block') }],
        [{ amount: 9, item: mc('copper_ingot') }]
    );

    unpacker(
        event,
        st('copper_from_decorative_waxed_oxidized_copper'),
        4,
        600,
        [{ amount: 9, item: kj('decorative_waxed_oxidized_copper') }],
        [{ amount: 9, item: mc('copper_ingot') }]
    );

    // -- BRASS BLOCK TO INGOT -- //
    unpacker(
        event,
        st('brass_block_to_ingot'),
        2,
        200,
        [{ amount: 1, item: cr('brass_block') }],
        [{ amount: 9, item: cr('brass_ingot') }]
    );

    // -- BRASS INGOT TO NUGGET -- //
    unpacker(
        event,
        st('brass_ingot_to_nugget'),
        2,
        200,
        [{ amount: 1, item: cr('brass_ingot') }],
        [{ amount: 9, item: cr('brass_nugget') }]
    );
});
