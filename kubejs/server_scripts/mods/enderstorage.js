// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:enderstorage/${id}`;

    // -- ENDER STORAGE REMOVED RECIPES -- //
    const ENDERSTORAGE_REMOVED_RECIPES = [
        es('ender_chest'),
        es('ender_tank'),
        es('ender_pouch'),
    ];
    ENDERSTORAGE_REMOVED_RECIPES.forEach((id) => event.remove({ id: id }));

    // --------------------//
    // ---- ASSEMBLER ---- //
    // --------------------//

    // -- ENDER CHEST -- //
    assembler(
        event,
        st('ender_chest'),
        8,
        200,
        [
            { amount: 1, item: mi('configurable_chest') },
            { amount: 1, item: mc('ender_eye') },
            { amount: 1, tag: 'c:wools/white' },
            { amount: 2, item: mc('obsidian') },
        ],
        [{ amount: 1, item: es('ender_chest') }],
        [{ amount: 500, fluid: ei('blazing_essence') }]
    );

    // -- ENDER TANK -- //
    assembler(
        event,
        st('ender_tank'),
        8,
        200,
        [
            { amount: 1, item: mi('configurable_tank') },
            { amount: 1, item: mc('ender_eye') },
            { amount: 1, tag: 'c:wools/white' },
            { amount: 2, item: mc('obsidian') },
        ],
        [{ amount: 1, item: es('ender_tank') }],
        [{ amount: 500, fluid: ei('blazing_essence') }]
    );

    // -- ENDER POUCH -- //
    assembler(
        event,
        st('ender_pouch'),
        8,
        200,
        [
            { amount: 1, item: es('ender_chest') },
            { amount: 1, item: mc('ender_eye') },
            { amount: 3, item: mc('leather') },
        ],
        [{ amount: 1, item: es('ender_pouch') }],
        [{ amount: 125, fluid: ei('blazing_essence') }]
    );
});
