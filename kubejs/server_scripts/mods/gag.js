// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:gag/${id}`;

    // Remove the default Time in a Bottle recipe
    const GAG_REMOVED_RECIPES = [
        gag('time_sand_pouch'),
        gag('hearthstone'),
        gag('pigment_jar'),
        gag('pigment_jar_to_regular_bottle'),
        gag('pigment_jar_mixing'),
        gag('pigment_jar_leather_dying'),
        gag('pigment_jar_from_dye'),
        gag('pigment_jar_splitting'),
    ];
    GAG_REMOVED_RECIPES.forEach((id) => event.remove({ id: id }));
    event.remove({ output: gag('pigment_jar') });

    // -----------------------//
    // ---- ELECTROLYZER ---- //
    // -----------------------//

    // -- ENERGIZED HEARTHSTONE -- //
    electrolyzer(
        event,
        st('energized_hearthstone'),
        16,
        400,
        [{ amount: 1, item: gag('hearthstone') }],
        [{ amount: 1, item: gag('energized_hearthstone') }]
    );

    // -------------------//
    // ---- PEDESTAL ---- //
    // -------------------//

    // -- HEARTHSTONE -- //
    pedestal(
        event,
        st('hearthstone'),
        400,
        'basic',
        {
            'spectrum:cyan': 0,
            'spectrum:magenta': 8,
            'spectrum:yellow': 0,
            'spectrum:black': 0,
            'spectrum:white': 0,
        },
        5.0,
        ['GGG', 'BEB', ' B '],
        {
            G: { tag: 'c:glass_panes' },
            B: { item: mc('smooth_basalt') },
            E: { item: mc('ender_pearl') },
        },
        { id: gag('hearthstone'), count: 1 },
        sp('craft_using_pedestal')
    );

    // -- TIME IN A BOTTLE -- //
    pedestal(
        event,
        st('time_sand_pouch'),
        400,
        'simple',
        {
            'spectrum:cyan': 0,
            'spectrum:magenta': 4,
            'spectrum:yellow': 0,
            'spectrum:black': 0,
            'spectrum:white': 0,
        },
        5.0,
        ['GGG', 'DCD', 'ABA'],
        {
            G: { item: mi('gold_curved_plate') },
            D: { item: mc('diamond') },
            C: { item: mc('clock') },
            A: { item: sp('amethyst_powder') },
            B: { item: mc('glass_bottle') },
        },
        { id: gag('time_sand_pouch'), count: 1 },
        sp('build_basic_pedestal_structure')
    );
});
