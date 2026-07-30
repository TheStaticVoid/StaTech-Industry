// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:waystones/${id}`;

    // -- WAYSTONES REMOVED RECIPES -- //
    const WAYSTONE_REMOVED_RECIPES = [
        wy('warp_stone'),
        wy('return_scroll'),
        wy('bound_scroll'),
        wy('warp_scroll'),
        wy('warp_dust'),
        wy('warp_plate'),
    ];
    WAYSTONE_REMOVED_RECIPES.forEach((id) => event.remove({ id: id }));

    // ------------------------//
    // ---- FUSION SHRINE ---- //
    // ------------------------//

    // -- WARP STONE -- //
    event
        .custom({
            type: sp('fusion_shrine'),
            time: 400,
            experience: 30.0,
            ingredients: [
                { item: wy('warp_dust'), count: 4 },
                { item: mc('ender_pearl'), count: 4 },
            ],
            result: {
                id: wy('warp_stone'),
            },
            required_advancement: sp('build_fusion_shrine'),
            world_conditions: [],
            start_crafting_effect: 'nothing',
            during_crafting_effects: [
                'visual_explosions_on_shrine',
                'nothing',
                'visual_explosions_on_shrine',
            ],
            finish_crafting_effect: 'lightning_on_shrine',
        })
        .id(st('warp_stone'));

    // -------------------//
    // ---- PEDESTAL ---- //
    // -------------------//

    // -- WARP PLATE -- //
    event
        .custom({
            type: sp('pedestal'),
            time: 400,
            tier: 'simple',
            colors: {
                'spectrum:cyan': 2,
                'spectrum:magenta': 2,
                'spectrum:yellow': 2,
                'spectrum:black': 0,
                'spectrum:white': 0,
            },
            experience: 10.0,
            pattern: ['SWS', 'WFW', 'SWS'],
            key: {
                W: { item: wy('warp_dust') },
                F: { item: mc('flint') },
                S: { item: mc('stone_bricks') },
            },
            result: {
                id: wy('warp_plate'),
                count: 2,
            },
            required_advancement: sp('build_basic_pedestal_structure'),
        })
        .id(st('warp_plate'));

    // -- RETURN SCROLL -- //
    event
        .custom({
            type: sp('pedestal'),
            time: 200,
            tier: 'simple',
            colors: {
                'spectrum:cyan': 1,
                'spectrum:magenta': 1,
                'spectrum:yellow': 1,
                'spectrum:black': 0,
                'spectrum:white': 0,
            },
            experience: 10.0,
            pattern: ['GDG', 'PPP'],
            key: {
                G: { tag: 'c:ingots/gold' },
                D: { item: wy('warp_dust') },
                P: { item: mc('paper') },
            },
            result: {
                id: wy('return_scroll'),
                count: 1,
            },
            required_advancement: sp('build_basic_pedestal_structure'),
        })
        .id(st('return_scroll'));

    // -- BOUND SCROLL -- //
    event
        .custom({
            type: sp('pedestal'),
            time: 200,
            tier: 'simple',
            colors: {
                'spectrum:cyan': 1,
                'spectrum:magenta': 1,
                'spectrum:yellow': 1,
                'spectrum:black': 0,
                'spectrum:white': 0,
            },
            experience: 10.0,
            pattern: ['DDD', 'GEG', 'PPP'],
            key: {
                D: { item: wy('warp_dust') },
                G: { tag: 'c:ingots/gold' },
                E: { item: mc('ender_pearl') },
                P: { item: mc('paper') },
            },
            result: {
                id: wy('bound_scroll'),
                count: 1,
            },
            required_advancement: sp('build_basic_pedestal_structure'),
        })
        .id(st('bound_scroll'));

    // -- WARP SCROLL -- //
    event
        .custom({
            type: sp('pedestal'),
            time: 200,
            tier: 'simple',
            colors: {
                'spectrum:cyan': 1,
                'spectrum:magenta': 1,
                'spectrum:yellow': 1,
                'spectrum:black': 0,
                'spectrum:white': 0,
            },
            experience: 10.0,
            pattern: ['GDG', 'GEG', 'PPP'],
            key: {
                G: { tag: 'c:ingots/gold' },
                D: { item: wy('warp_dust') },
                P: { item: mc('paper') },
                E: { item: mc('ender_pearl') },
            },
            result: {
                id: wy('warp_scroll'),
                count: 1,
            },
            required_advancement: sp('build_basic_pedestal_structure'),
        })
        .id(st('warp_scroll'));

    // -- WARP DUST -- //
    event
        .custom({
            type: sp('pedestal'),
            time: 200,
            tier: 'simple',
            colors: {
                'spectrum:cyan': 2,
                'spectrum:magenta': 2,
                'spectrum:yellow': 2,
                'spectrum:black': 0,
                'spectrum:white': 0,
            },
            experience: 10.0,
            pattern: ['EA'],
            key: {
                E: { item: 'ae2:ender_dust' },
                A: { item: sp('amethyst_powder') },
            },
            result: {
                id: wy('warp_dust'),
                count: 4,
            },
            required_advancement: sp('build_basic_pedestal_structure'),
        })
        .id(st('warp_dust'));
});
