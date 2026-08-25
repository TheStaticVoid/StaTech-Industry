// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:modern_industrialization/alloy_smelter/${id}`;

    // -- RED ALLOY INGOT -- //
    alloySmelter(
        event,
        st('red_alloy_ingot'),
        4,
        200,
        [
            { amount: 1, tag: 'morered:red_alloyable_ingots' },
            { amount: 4, tag: 'c:dusts/redstone' },
        ],
        [{ amount: 1, item: mr('red_alloy_ingot') }]
    );

    // -- BRASS INGOT -- //
    alloySmelter(
        event,
        st('brass_ingot'),
        4,
        200,
        [
            { amount: 1, tag: 'c:ingots/copper' },
            { amount: 1, tag: 'c:ingots/zinc' },
        ],
        [{ amount: 2, item: cr('brass_ingot') }]
    );

    // -- BRASS BLOCK -- //
    alloySmelter(
        event,
        st('brass_block'),
        4,
        200,
        [
            { amount: 1, tag: 'c:storage_blocks/copper' },
            { amount: 1, tag: 'c:storage_blocks/zinc' },
        ],
        [{ amount: 2, item: cr('brass_block') }]
    );
});
