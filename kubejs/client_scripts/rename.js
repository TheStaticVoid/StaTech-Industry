ClientEvents.highPriorityAssets(e => {
    let rename = (item, newName) => e.addLang(Item.of(item).item.getDescriptionId(), newName);
    let mi = (id) => `modern_industrialization:${id}`;

    rename(mi('quantum_helmet'), 'Infinity Helmet');
    rename(mi('quantum_chestplate'), 'Infinity Chestplate');
    rename(mi('quantum_leggings'), 'Infinity Leggings');
    rename(mi('quantum_boots'), 'Infinity Boots');
    rename(mi('quantum_sword'), 'Infinity Sword');
});