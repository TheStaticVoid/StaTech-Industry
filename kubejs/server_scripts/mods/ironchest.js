// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:ironchest/${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let ic = (id) => `ironchest:${id}`;

    let IRONCHEST_REMOVED_RECIPES = [
        ic('chests/vanilla_copper_chest'),
        ic('chests/vanilla_iron_chest'),
        ic('chests/copper_iron_chest'),
        ic('chests/iron_gold_chest'),
        ic('chests/gold_diamond_chest'),
        ic('upgrades/wood_to_copper_chest_upgrade'),
        ic('upgrades/wood_to_iron_chest_upgrade'),
        ic('upgrades/copper_to_iron_chest_upgrade'),
        ic('upgrades/iron_to_gold_chest_upgrade'),
        ic('upgrades/gold_to_diamond_chest_upgrade')
    ];
    IRONCHEST_REMOVED_RECIPES.forEach(id => e.remove({id :id}));

    // -- COPPER CHEST -- //
    e.shaped(ic('copper_chest'), [
        'PPP',
        'PCP',
        'PPP'
    ],
    {
        P: '#c:plates/copper',
        C: '#c:chests/wooden'
    }).id('copper_chest');

    // -- IRON CHEST -- //
    e.shaped(ic('iron_chest'), [
        'PPP',
        'PCP',
        'PPP'
    ],
    {
        P: '#c:plates/iron',
        C: ic('copper_chest')
    }).id('iron_chest');

    // -- GOLD CHEST -- //
    e.shaped(ic('gold_chest'), [
        'PPP',
        'PCP',
        'PPP'
    ],
    {
        P: '#c:plates/gold',
        C: ic('iron_chest')
    }).id(st('gold_chest'));

    // -- DIAMOND CHEST -- //
    e.shaped(ic('diamond_chest'), [
        'PPP',
        'PCP',
        'PPP'
    ],
    {
        P: '#c:gems/diamond',
        C: ic('gold_chest')
    }).id(st('diamond_chest'));

    // -- WOOD TO COPPER -- //
    e.shaped(ic('wood_to_copper_chest_upgrade'), [
        'PPP',
        'PWP',
        'PPP'
    ],
    {
        P: '#c:plates/copper',
        W: '#' + mc('planks')
    }).id(st('wood_to_copper_chest_upgrade'));

    // -- WOOD TO IRON -- //
    e.shaped(ic('wood_to_iron_chest_upgrade'), [
        'PPP',
        'PBP',
        'PPP'
    ],
    {
        P: '#c:plates/iron',
        B: '#c:storage_blocks/copper'
    }).id(st('wood_to_iron_chest_upgrade'));

    // -- COPPER TO IRON -- //
    e.shaped(ic('copper_to_iron_chest_upgrade'), [
        'PPP',
        'PCP',
        'PPP'
    ],
    {
        P: '#c:plates/iron',
        C: '#c:plates/copper'
    }).id(st('copper_to_iron_chest_upgrade'));
    
    // -- IRON TO GOLD -- //
    e.shaped(ic('iron_to_gold_chest_upgrade'), [
        'PPP',
        'PIP',
        'PPP'
    ],
    {
        P: '#c:plates/gold',
        I: '#c:plates/iron'
    }).id(st('iron_to_gold_chest_upgrade'));
    
    // -- GOLD TO DIAMOND -- //
    e.shaped(ic('gold_to_diamond_chest_upgrade'), [
        'DDD',
        'DGD',
        'DDD'
    ],
    {
        D: '#c:gems/diamond',
        G: '#c:plates/gold'
    }).id(st('gold_to_diamond_chest_upgrade'));
});