// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.tags('item', e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let gc = (id) => `geocluster:${id}`;

    // ALUMINUM NOT INCLUDED BECAUSE HAHA FUNNY BRITISH SPELLING
    // REMOVED MANUALLY FROM REI
    const materials = [
        'zinc',
        'silver',
        'lead',
        'uranium',
        'tin',
        'platinum',
        'titanium',
        'nickel',
    ];

    // Tag all the materials
    materials.forEach(id => {
        e.add(`c:raw_${id}_ores`, gc(`raw_${id}`));
        e.add(`c:${id}_ores`, gc(`${id}_ore`));
        e.add(`c:${id}_ores`, gc(`deepslate_${id}_ore`));
    });
});