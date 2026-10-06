// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:create/deploying/${id}`;

    // -- CREATE DEPLOYING REMOVED RECIPES -- //
    const REMOVED_RECIPES = [];
    REMOVED_RECIPES.forEach((id) => event.remove({ id: id }));

    const OX_PHASES = ['', 'exposed_', 'weathered_', 'oxidized_'];

    OX_PHASES.forEach((phase) => {
        deploying(
            event,
            st(`waxed_${phase}copper_nub_from_${phase}copper_nub`),
            true,
            [
                { item: ap(`${phase}copper_nub`) },
                { item: mc('honeycomb_block') },
            ],
            [{ id: ap(`waxed_${phase}copper_nub`) }]
        );

        deploying(
            event,
            st(`${phase}copper_nub_from_waxed_${phase}copper_nub`),
            true,
            [{ item: ap(`waxed_${phase}copper_nub`) }, { tag: mc('axes') }],
            [{ id: ap(`${phase}copper_nub`) }]
        );
    });

    for (let i = OX_PHASES.length - 1; i > 0; i--) {
        deploying(
            event,
            st(`${OX_PHASES[i - 1]}copper_nub_from_${OX_PHASES[i]}copper_nub`),
            true,
            [{ item: ap(`${OX_PHASES[i]}copper_nub`) }, { tag: mc('axes') }],
            [{ id: ap(`${OX_PHASES[i - 1]}copper_nub`) }]
        );
    }

    // -- BULK WASHING MI ITEM PIPES -- //
    splashing(
        event,
        st('item_pipe_cleaning'),
        [{ tag: mi('item_pipes') }],
        [{ id: mi('item_pipe') }]
    );
});
