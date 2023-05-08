ServerEvents.recipes(e => {
    let sp = (id) => `spectrum:${id}`;
    let st = (id) => `statech:${id}`;
    let mc = (id) => `minecraft:${id}`;

    e.remove({ id: 'toolleveling:tool_leveling_table' });
    e.custom({
        id: st('tool_leveling_table'),
        type: sp('pedestal'),
        time: 1200,
        tier: 'advanced',
        cyan: 16,
        magenta: 16,
        yellow: 16,
        white: 0,
        black: 16,
        experience: 20.0,
        pattern: [
            ' G ',
            'GBG',
            'OEO'
        ],
        key: {
            G: { tag: 'c:gold_ingots' },
            B: { item: sp('bedrock_dust') },
            O: { item: mc('obsidian') },
            E: { item: mc('enchanting_table') }
        },
        result: {
            item: 'toolleveling:tool_leveling_table',
            count: 1,
        },
        required_advancement: [
            sp('midgame/break_decayed_bedrock')
        ]
    });
});