// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ClientEvents.highPriorityAssets(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let mi = (id) => `modern_industrialization:${id}`;
    
    // -- RENAME UTILITY FUNCTION -- //
    let rename = (item, newName) => e.addLang(Item.of(item).item.getDescriptionId(), newName);

    rename(mi('quantum_helmet'), 'Infinity Helmet');
    rename(mi('quantum_chestplate'), 'Infinity Chestplate');
    rename(mi('quantum_leggings'), 'Infinity Leggings');
    rename(mi('quantum_boots'), 'Infinity Boots');
    rename(mi('quantum_sword'), 'Infinity Sword');
});