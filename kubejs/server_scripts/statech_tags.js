// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.tags('item', e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let kj = (id) => `kubejs:${id}`;
    let mi = (id) => `modern_industrialization:${id}`;

    const COINS = [
        kj('coin_common'),
        kj('coin_rare'),
        kj('coin_legendary'),
        kj('coin_mythic')
    ];
    COINS.forEach(id => e.add(kj('statech_coins'), id));

    const CLEAR_ARMOR = [
        kj('clear_helmet'),
        kj('clear_chestplate'),
        kj('clear_leggings'),
        kj('clear_boots')
    ];
    CLEAR_ARMOR.forEach(id => e.add(kj('clear_armor'), id));

    const COMMON_INGOT_TAG = [
        mi('aluminum_ingot'),
        mi('annealed_copper_ingot'),
        mi('antimony_ingot'),
        mi('battery_alloy_ingot'), 
        mi('beryllium_ingot'),
        mi('blastproof_alloy_ingot'),
        mi('bronze_ingot'),
        mi('cadmium_ingot'),
        mi('chromium_ingot'),
        mi('cupronickel_ingot'),
        mi('electrum_ingot'),
        mi('he_mox_ingot'),
        mi('he_uranium_ingot'),
        mi('invar_ingot'),
        mi('iridium_ingot'),
        mi('kanthal_ingot'),
        mi('le_mox_ingot'),
        mi('le_uranium_ingot'),
        mi('lead_ingot'),
        mi('nickel_ingot'),
        mi('platinum_ingot'),
        mi('plutonium_ingot'),
        mi('silicon_ingot'),
        mi('silver_ingot'),
        mi('stainless_steel_ingot'),
        mi('steel_ingot'),
        mi('superconductor_ingot'),
        mi('tin_ingot'),
        mi('titanium_ingot'),
        mi('tungsten_ingot'),
        mi('uranium_ingot'),
        mi('uranium_235_ingot'),
        mi('uranium_238_ingot')
    ];
    COMMON_INGOT_TAG.forEach(id => { e.add('c:ingots', id) } );
})