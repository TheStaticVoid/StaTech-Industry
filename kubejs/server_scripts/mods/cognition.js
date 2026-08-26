// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:cognition/${id}`;

    // -- COGNITION REMOVED RECIPES -- //
    const REMOVED_RECIPES = [
        xp('cognitive_flux'),
        xp('cognitive_alloy'),
        xp('metamorpher/transformation/netherite_ingot_metamorphosis')
    ];
    REMOVED_RECIPES.forEach((id) => event.remove({ id: id }));

    // ------------------------//
    // ---- ALLOY SMELTER ---- //
    // ------------------------//

    // -- COGNITIVE ALLOY INGOT -- //
    alloySmelter(
        event,
        st('cognitive_alloy'),
        4,
        200,
        [
            { amount: 1, tag: 'c:ingots/copper' },
            { amount: 4, item: xp('cognitive_amalgam') },
        ],
        [{ amount: 1, item: xp('cognitive_alloy') }]
    );

    // ----------------//
    // ---- MIXER ---- //
    // ----------------//

    // -- COGNITIVE FLUX -- //
    mixer(
        event,
        st('cognitive_flux'),
        2,
        100,
        [
            { amount: 1, tag: 'c:dusts/lapis' },
            { amount: 1, tag: 'c:dusts/quartz' },
            { amount: 1, tag: 'minecraft:soul_fire_base_blocks' },
        ],
        [{ amount: 4, item: xp('cognitive_flux') }]
    );

    // -- LIQUID EXPERIENCE -- //
    mixer(
        event,
        st('xp_fluid'),
        8,
        50,
        [{ amount: 4, item: cr('experience_nugget') }],
        null,
        null,
        [{ amount: 120, fluid: xp('cognitium_source') }]
    );
});
