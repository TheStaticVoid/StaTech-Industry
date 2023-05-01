ServerEvents.recipes(e => {
    let st = (id) => `statech:inmis/${id}`;
    const INMIS_DELETED_RECIPES = [
        'inmis:withered_backpack',
        'inmis:plated_backpack',
        'inmis:gilded_backpack',
        'inmis:bejeweled_backpack',
        'inmis:endless_backpack',
        'inmis:blazing_backpack'
    ];
    INMIS_DELETED_RECIPES.forEach(id => e.remove({id: id}));

    // -- PLATED BACKPACK -- //
    e.shaped('inmis:plated_backpack', [
        'RIR',
        'IBI',
        'RIR'
    ],
    {
        I: '#c:iron_plates',
        R: '#c:refined_iron_plates',
        B: 'inmis:frayed_backpack'
    })
    .id(st('plated_backpack'));

    // -- GILDED BACKPACK -- //
    e.shaped('inmis:gilded_backpack', [
        'EGE',
        'GBG',
        'EGE'
    ],
    {
        E: '#c:electrum_plates',
        G: '#c:gold_plates',
        B: 'inmis:plated_backpack'
    })
    .id(st('gilded_backpack'));

    // -- BEJEWELED BACKPACK -- //
    e.shaped('inmis:bejeweled_backpack', [
        'DED',
        'EBE',
        'DED'
    ],
    {
        D: '#c:diamond_plates',
        E: '#c:emerald_plates',
        B: 'inmis:gilded_backpack'
    })
    .id(st('bejeweled_backpack'));

    // -- BLAZING BACKPACK -- //
    e.shaped('inmis:blazing_backpack', [
        'NON',
        'OBO',
        'NON'
    ],
    {
        N: '#c:netherite_ingots',
        O: '#c:ostrum_plates',
        B: 'inmis:bejeweled_backpack'
    })
    .id(st('blazing_backpack'));

    // -- WITHERED BACKPACK -- // 
    e.shaped('inmis:withered_backpack', [
        'ANA',
        'NBN',
        'ANA'
    ],
    {
        A: '#c:blastproof_alloy_plates',
        N: 'minecraft:nether_star',
        B: 'inmis:blazing_backpack'
    })
    .id(st('withered_backpack'));

    // -- ENDLESS BACKPACK -- //
    e.shaped('inmis:endless_backpack', [
        'IHI',
        'EBE',
        'IEI'
    ],
    {
        I: '#c:iridium_plates',
        H: 'minecraft:dragon_head',
        B: 'inmis:withered_backpack',
        E: '#c:endstone_dusts'
    })
    .id(st('endless_backpack'));
});