// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:xps/${id}`;
    let xp = (id) => `xps:${id}`;
    let cr = (id) => `create:${id}`;
    let mc = (id) => `minecraft:${id}`;

    // Remove the default Soul Copper Blend recipe
    e.remove({ id: xp('soul_copper_blend') });

    // -- SOUL COPPER BLEND -- //
    e.custom({
        type: cr('mixing'),
        ingredients: [
            { item: mc('raw_copper') },
            { item: mc('soul_sand') }
        ],
        results: [
            {
                item: xp('soul_copper_blend'),
                count: 2
            }
        ]
    })
    .id(st('soul_copper_blend'));
});