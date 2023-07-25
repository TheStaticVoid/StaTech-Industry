// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.tags('item', e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:promenade/${id}`;
    let pr = (id) => `promenade:${id}`;

    const STRIPPED_LOGS = [
        pr('stripped_dark_amaranth_stem'),
        pr('stripped_cherry_oak_log'),
        pr('stripped_palm_log')
    ];

    const STRIPPED_WOOD = [
        pr('stripped_dark_amaranth_hyphae'),
        pr('stripped_cherry_oak_wood'),
        pr('stripped_palm_wood')
    ];

    STRIPPED_LOGS.forEach(id => e.add('c:stripped_logs', id));
    STRIPPED_WOOD.forEach(id => e.add('c:stripped_wood', id));
});