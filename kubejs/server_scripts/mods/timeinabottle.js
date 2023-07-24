// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:timeinabottle/${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let sp = (id) => `spectrum:${id}`;
    let tb = (id) => `timeinabottle:${id}`;

    // Remove the default Time in a Bottle recipe
    e.remove({id: tb('time_in_a_bottle')});

    // -- TIME IN A BOTTLE -- // 
    e.custom({
        type: sp('pedestal'),
        time: 400,
        tier: 'simple',
        cyan: 0,
        magenta: 4,
        yellow: 0,
        white: 0,
        black: 0,
        experience: 5.0,
        pattern: [
            'GGG',
            'DCD',
            'ABA'
        ],
        key: {
            G: { item: mi('gold_curved_plate') },
            D: { item: mc('diamond') },
            C: { item: mc('clock') },
            A: { item: sp('amethyst_powder') },
            B: { item: mc('glass_bottle') }
        },
        result: {
            item: tb('time_in_a_bottle'),
            count: 1
        },
        required_advancement: [
            sp('build_basic_pedestal_structure')
        ]
    })
    .id(st('time_in_a_bottle'));
});