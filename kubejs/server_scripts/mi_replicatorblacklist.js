// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

// This list is a modified version from the AOF6 modpack
ServerEvents.tags('item', e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let mi = (id) => `modern_industrialization:${id}`;

    const ITEMS = [
        

    ];

    ITEMS.forEach(id => e.add(mi('replicator_blacklist'), id));
});
