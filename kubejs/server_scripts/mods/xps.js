ServerEvents.recipes(e => {
    e.remove({ id: 'xps:soul_copper_blend' });
    e.custom({
        type: 'create:mixing',
        ingredients: [
            { item: 'minecraft:raw_copper' },
            { item: 'minecraft:soul_sand' }
        ],
        results: [
            {
                item: 'xps:soul_copper_blend',
                count: 2
            }
        ]
    })
    .id('statech:xps/soul_copper_blend');
});