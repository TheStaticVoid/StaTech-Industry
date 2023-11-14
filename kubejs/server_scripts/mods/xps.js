// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    let st = (id) => `statech:xps/${id}`;

    // Remove the default Soul Copper Blend recipe
    event.remove({ id: xp('soul_copper_blend') });

    // -- SOUL COPPER BLEND -- //
    event.custom({
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