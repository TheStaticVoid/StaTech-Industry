ServerEvents.recipes(e => {
    let st = (id) => `statech:${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let sp = (id) => `spectrum:${id}`;

    e.remove({id: 'timeinabottle:time_in_a_bottle'});
    e.custom({
        id: st('time_in_a_bottle'),
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
            G: {
                item: mi('gold_curved_plate')
            },
            D: {
                item: mc('diamond')
            },
            C: {
                item: mc('clock')
            },
            A: {
                item: sp('amethyst_powder')
            },
            B: {
                item: mc('glass_bottle')
            }
        },
        result: {
            item: 'timeinabottle:time_in_a_bottle',
            count: 1
        },
        required_advancement: [
            sp('build_basic_pedestal_structure')
        ]
    });
});