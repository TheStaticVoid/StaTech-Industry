// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:create/splashing/${id}`;

    // -- CREATE SPLASHING REMOVED RECIPES -- //
    const REMOVED_RECIPES = [
        cr('splashing/modern_industrialization/crushed_raw_uranium'),
        cr('splashing/modern_industrialization/crushed_raw_platinum')
    ];
    REMOVED_RECIPES.forEach(id => event.remove({ id: id }));

    // -- CUSTOM RECIPE UTILITY FUNCTION -- //
    let splashing = (id, item_inputs, item_outputs) => {
        let newRecipe = {
            type: cr('splashing')
        }

        if (item_inputs)
            newRecipe['ingredients'] = item_inputs;
        if (item_outputs)
            newRecipe['results'] = item_outputs;

        event.custom(newRecipe).id(id);
    }

    // -- BULK WASHING MI FLUID PIPES -- //
    splashing(
        st('fluid_pipe_cleaning'),
        [{ tag: mi('fluid_pipes') }],
        [{ id: mi('fluid_pipe') }]
    );

    // -- BULK WASHING MI ITEM PIPES -- //
    splashing(
        st('item_pipe_cleaning'),
        [{ tag: mi('item_pipes') }],
        [{ id: mi('item_pipe') }]
    );

    // -- BULK WASHING MI ME WIRES -- //
    splashing(
        st('me_wire_cleaning'),
        [{ tag: mi('me_wires') }],
        [{ id: mi('me_wire') }]
    );

    // -- BULK WASHING AE2 SMART CABLES -- //
    splashing(
        st('smart_cable_cleaning'),
        [{ tag: ae('smart_cable') }],
        [{ id: ae('fluix_smart_cable') }]
    );

    // -- BULK WASHING AE2 COVERED CABLES -- //
    splashing(
        st('covered_cable_cleaning'),
        [{ tag: ae('covered_cable') }],
        [{ id: ae('fluix_covered_cable') }]
    );

    // -- BULK WASHING AE2 GLASS CABLES -- //
    splashing(
        st('glass_cable_cleaning'),
        [{ tag: ae('glass_cable') }],
        [{ id: ae('fluix_glass_cable') }]
    );

    // -- BULK WASHING AE2 DENSE COVERED CABLES -- //
    splashing(
        st('dense_cable_cleaning'),
        [{ tag: ae('covered_dense_cable') }],
        [{ id: ae('fluix_covered_dense_cable') }]
    );

    // -- BULK WASHING AE2 DENSE SMART CABLES -- //
    splashing(
        st('smart_dense_cable_cleaning'),
        [{ tag: ae('smart_dense_cable') }],
        [{ id: ae('fluix_smart_dense_cable') }]
    );
});
