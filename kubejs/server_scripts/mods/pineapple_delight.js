// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    let st = (id) => `statech:pineapple_delight/${id}`;

    // -- PINEAPPLE DELIGHT REMOVED RECIPES -- //
    const REMOVED_RECIPES = [
        pd('cut/pineapple_pie_side'),
        pd('cut/pineapple_side')
    ];
    REMOVED_RECIPES.forEach(id => event.remove( {id: id} ));

    // -- PINEAPPLE PIE SIDE -- //
    event.custom({
        type: fd('cutting'),
        ingredients: [
            {
                item: pd('pineapple_pie')
            }
        ],
        tool: {
            type: fd('tool'),
            tag: 'c:tools/knives'
        },
        result: [
            {
                item: pd('pineapple_pie_side'),
                count: 4
            }
        ]
    })
    .id(st('pineapple_pie_side'));

    // -- PINEAPPLE SIDE -- //
    event.custom({
        type: fd('cutting'),
        ingredients: [
            {
                item: pd('pineapple')
            }
        ],
        tool: {
            type: fd('tool'),
            tag: 'c:tools/knives'
        },
        result: [
            {
                item: pd('pineapple_side'),
                count: 2
            },
            {
                item: pd('pineapple_crop')
            }
        ]
    })
    .id(st('pinapple_side'));
});