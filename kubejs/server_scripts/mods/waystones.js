ServerEvents.recipes(e => {
    let st = (id) => `statech:waystones/${id}`;
    let sp = (id) => `spectrum:${id}`;
    let tr = (id) => `techreborn:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let ws = (id) => `waystones:${id}`;
    const WAYSTONE_REMOVED_RECIPES = [
        ws('warp_stone'),
        ws('return_scroll'),
        ws('bound_scroll'),
        ws('warp_scroll'),
        ws('warp_dust'),
        ws('warp_plate')
    ];
    WAYSTONE_REMOVED_RECIPES.forEach(id => e.remove({id: id}));

    // -- WARP STONE -- //
    e.custom({
        id: st('warp_stone'),
        type: sp('fusion_shrine'),
        time: 400,
        experience: 30.0,
        ingredients: [
            { item: ws('warp_dust'), count: 4 },
            { item: mc('ender_pearl'), count: 4 },
            { item: sp('onyx_shard') }
        ],
        result: {
            item: ws('warp_stone')
        },
        required_advancement: sp('build_fusion_shrine'),
        world_conditions: [],
        start_crafting_effect: 'nothing',
        during_crafting_effects: [
            'visual_explosions_on_shrine',
            'nothing',
            'visual_explosions_on_shrine'
        ],
        finish_crafting_effect: 'lightning_on_shrine'
    });

    // -- WARP PLATE -- //
    e.custom({
        id: st('warp_plate'),
        type: sp('pedestal'),
        time: 400,
        tier: 'simple',
        cyan: 2,
        magenta: 2,
        yellow: 2,
        white: 0,
        black: 0,
        experience: 10.0,
        pattern: [
            'SWS',
            'WFW',
            'SWS'
        ],
        key: {
            W: { item: ws('warp_dust') },
            F: { item: mc('flint') },
            S: { item: mc('stone_bricks') }
        },
        result: {
            item: ws('warp_plate'),
            count: 2
        },
        required_advancement: [
            sp('build_basic_pedestal_structure')
        ]
    });

    // -- RETURN SCROLL -- //
    e.custom({
        id: st('return_scroll'),
        type: sp('pedestal'),
        time: 200,
        tier: 'simple',
        cyan: 1,
        magenta: 1,
        yellow: 1,
        white: 0,
        black: 0,
        experience: 10.0,
        pattern: [
            'GDG',
            'PPP'
        ],
        key: {
            G: { tag: 'c:gold_ingots' },
            D: { item: ws('warp_dust') },
            P: { item: mc('paper') }
        },
        result: {
            item: ws('return_scroll'),
            count: 1
        },
        required_advancement: [
            sp('build_basic_pedestal_structure')
        ]
    });

    // -- BOUND SCROLL -- //
    e.custom({
        id: st('bound_scroll'),
        type: sp('pedestal'),
        time: 200,
        tier: 'simple',
        cyan: 1,
        magenta: 1,
        yellow: 1,
        white: 0,
        black: 0,
        experience: 10.0,
        pattern: [
            'DDD',
            'GEG',
            'PPP'
        ],
        key: {
            D: { item: ws('warp_dust') },
            G: { tag: 'c:gold_ingots' },
            E: { item: mc('ender_pearl') },
            P: { item: mc('paper') }
        },
        result: {
            item: ws('bound_scroll'),
            count: 1
        },
        required_advancement: [
            sp('build_basic_pedestal_structure')
        ]
    });

    // -- WARP SCROLL -- //
    e.custom({
        id: st('warp_scroll'),
        type: sp('pedestal'),
        time: 200,
        tier: 'simple',
        cyan: 1,
        magenta: 1,
        yellow: 1,
        white: 0,
        black: 0,
        experience: 10.0,
        pattern: [
            'GDG',
            'GEG',
            'PPP'
        ],
        key: {
            G: { tag: 'c:gold_ingots' },
            D: { item: ws('warp_dust') },
            P: { item: mc('paper') },
            E: { item: mc('ender_pearl') }
        },
        result: {
            item: ws('warp_scroll'),
            count: 1
        },
        required_advancement: [
            sp('build_basic_pedestal_structure')
        ]
    });

    // -- WARP DUST -- //
    e.custom({
        id: st('warp_dust'),
        type: sp('pedestal'),
        time: 200,
        tier: 'simple',
        cyan: 2,
        magenta: 2,
        yellow: 2,
        white: 0,
        black: 0,
        experience: 10.0,
        pattern: [
            'EA'
        ],
        key: {
            E: {
                tag: 'c:ender_pearl_dusts'
            },
            A: {
                item: sp('amethyst_powder')
            }
        },
        result: {
            item: ws('warp_dust'),
            count: 4
        },
        required_advancement: [
            sp('build_basic_pedestal_structure')
        ]
    });
});