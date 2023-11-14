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
    REMOVED_RECIPES.forEach(id => event.remove({id: id}));

    // -- BULK WASHING MI FLUID PIPES -- //
    createSplashing(
        event,
        st('fluid_pipe_cleaning'),
        [ { tag: mi('fluid_pipes') } ],
        [ { item: mi('fluid_pipe') } ]
    );

    // -- BULK WASHING MI ITEM PIPES -- //
    createSplashing(
        event,
        st('item_pipe_cleaning'),
        [ { tag: mi('item_pipes') } ],
        [ { item: mi('item_pipe') } ]
    );

    // -- BULK WASHING MI ME WIRES -- //
    createSplashing(
        event,
        st('me_wire_cleaning'),
        [ { tag: mi('me_wires') } ],
        [ { item: mi('me_wire') } ]
    );

    // -- BULK WASHING AE2 SMART CABLES -- //
    createSplashing(
        event,
        st('smart_cable_cleaning'),
        [ { tag: ae('smart_cable') } ],
        [ { item: ae('fluix_smart_cable') } ]
    );

    // -- BULK WASHING AE2 COVERED CABLES -- //
    createSplashing(
        event,
        st('covered_cable_cleaning'),
        [ { tag: ae('covered_cable') } ],
        [ { item: ae('fluix_covered_cable') } ]
    );

    // -- BULK WASHING AE2 GLASS CABLES -- // 
    createSplashing(
        event,
        st('glass_cable_cleaning'),
        [ { tag: ae('glass_cable') } ],
        [ { item: ae('fluix_glass_cable') } ]
    );

    // -- BULK WASHING AE2 DENSE COVERED CABLES -- //
    createSplashing(
        event,
        st('dense_cable_cleaning'),
        [ { tag: ae('covered_dense_cable') } ],
        [ { item: ae('fluix_covered_dense_cable') } ]
    );

    // -- BULK WASHING AE2 DENSE SMART CABLES -- // 
    createSplashing(
        event,
        st('smart_dense_cable_cleaning'),
        [ { tag: ae('smart_dense_cable') } ],
        [ { item: ae('fluix_smart_dense_cable') } ]
    );
});