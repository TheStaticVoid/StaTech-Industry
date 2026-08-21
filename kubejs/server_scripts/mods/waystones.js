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
        wy('blank_scroll'),
        wy('portal_scroll'),
        wy('warp_scroll'),
        wy('warp_dust'),
        wy('warp_plate'),
        wy('twinbound_feather'),
        wy('epitaph')
    ];
    WAYSTONE_REMOVED_RECIPES.forEach((id) => event.remove({ id: id }));

    // ------------------------//
    // ---- FUSION SHRINE ---- //
    // ------------------------//

    // -- WARP STONE -- //
    fusion_shrine(
        event,
        sp('warp_stone'),
        400,
        30,
        [
            { item: wy('warp_dust'), count: 4 },
            { item: mc('ender_pearl'), count: 4 }
        ],
        { id: wy('warp_stone') },
        null,
        null,
        'nothing',
        [
            'visual_explosions_on_shrine',
            'nothing',
            'visual_explosions_on_shrine'
        ],
        'lightning_on_shrine',
        sp('unlocks/blocks/fusion_shrine')
    );

    // -------------------//
    // ---- PEDESTAL ---- //
    // -------------------//

    // -- WARP PLATE -- //
    pedestal(
        event,
        st('warp_plate'),
        400,
        'simple',
        {
            'spectrum:cyan': 2,
            'spectrum:magenta': 2,
            'spectrum:yellow': 2,
            'spectrum:black': 0,
            'spectrum:white': 0,
        },
        10,
        ['SWS', 'WFW', 'SWS'],
        {
            S: { item: mc('stone_bricks') },
            W: { item: wy('warp_dust') },
            F: { item: mc('flint') }
        },
        { id: wy('warp_plate'), count: 2 },
        sp('build_basic_pedestal_structure')
    );

    // -- RETURN SCROLL -- //
    pedestal(
        event,
        st('return_scroll'),
        200,
        'simple',
        {
            'spectrum:cyan': 1,
            'spectrum:magenta': 1,
            'spectrum:yellow': 1,
            'spectrum:black': 0,
            'spectrum:white': 0,
        },
        10,
        ['GDG', 'PPP'],
        {
            G: { tag: 'c:ingots/gold' },
            D: { item: wy('warp_dust') },
            P: { item: mc('paper') }
        },
        { id: wy('return_scroll'), count: 1 },
        sp('build_basic_pedestal_structure')
    );

    // -- BLANK SCROLL -- //
    pedestal(
        event,
        st('blank_scroll'),
        200,
        'simple',
        {
            'spectrum:cyan': 1,
            'spectrum:magenta': 1,
            'spectrum:yellow': 1,
            'spectrum:black': 0,
            'spectrum:white': 0,
        },
        10,
        ['DDD', 'GEG', 'PPP'],
        {
            D: { item: wy('warp_dust') },
            G: { tag: 'c:ingots/gold' },
            E: { item: mc('ender_pearl') },
            P: { item: mc('paper') },
        },
        { id: wy('blank_scroll'), count: 3 },
        sp('build_basic_pedestal_structure')
    );

    // -- WARP SCROLL -- //
    pedestal(
        event,
        st('warp_scroll'),
        200,
        'simple',
        {
            'spectrum:cyan': 1,
            'spectrum:magenta': 1,
            'spectrum:yellow': 1,
            'spectrum:black': 0,
            'spectrum:white': 0,
        },
        10,
        ['GDG', 'GEG', 'PPP'],
        {
            G: { tag: 'c:ingots/gold' },
            D: { item: wy('warp_dust') },
            P: { item: mc('paper') },
            E: { item: mc('ender_pearl') },
        },
        { id: wy('warp_scroll'), count: 1 },
        sp('build_basic_pedestal_structure')
    );

    // -- PORTAL SCROLL -- //
    pedestal(
        event,
        st('portal_scroll'),
        200,
        'simple',
        {
            'spectrum:cyan': 1,
            'spectrum:magenta': 1,
            'spectrum:yellow': 1,
            'spectrum:black': 0,
            'spectrum:white': 0,
        },
        10,
        ['ADA', 'AEA', 'PPP'],
        {
            A: { item: mc('amethyst_shard') },
            D: { item: wy('warp_dust') },
            P: { item: mc('paper') },
            E: { item: mc('ender_pearl') },
        },
        { id: wy('portal_scroll'), count: 1 },
        sp('build_basic_pedestal_structure')
    );

    // -- WARP DUST -- //
    pedestal(
        event,
        st('warp_dust'),
        200,
        'simple',
        {
            'spectrum:cyan': 2,
            'spectrum:magenta': 2,
            'spectrum:yellow': 2,
            'spectrum:black': 0,
            'spectrum:white': 0,
        },
        10,
        ['EA'],
        {
            E: { item: 'ae2:ender_dust' },
            A: { item: sp('amethyst_powder') },
        },
        { id: wy('warp_dust'), count: 4 },
        sp('build_basic_pedestal_structure')
    );

    // -- TWINBOUND FEATHER -- //
    pedestal(
        event,
        st('twinbound_feather'),
        200,
        'simple',
        {
            'spectrum:cyan': 1,
            'spectrum:magenta': 1,
            'spectrum:yellow': 1,
            'spectrum:black': 0,
            'spectrum:white': 0,
        },
        10,
        ['AIA', 'GFG', 'AIA'],
        {
            A: { item: mc('amethyst_shard') },
            I: { item: mc('ink_sac') },
            G: { tag: 'c:ingots/gold' },
            F: { item: mc('feather') }
        },
        { id: wy('twinbound_feather'), count: 1 },
        sp('build_basic_pedestal_structure')
    );

    // -- EPITAPH -- //
    pedestal(
        event,
        st('epitaph'),
        200,
        'simple',
        {
            'spectrum:cyan': 1,
            'spectrum:magenta': 1,
            'spectrum:yellow': 1,
            'spectrum:black': 0,
            'spectrum:white': 0,
        },
        10,
        ['GGG','ADA','GGG'],
        {
            G: { tag: 'c:ingots/gold' },
            A: { item: mc('amethyst_shard') },
            D: { item: mc('deepslate') }
        },
        { id: wy('epitaph'), count: 1 },
        sp('build_basic_pedestal_structure')
    );
});
