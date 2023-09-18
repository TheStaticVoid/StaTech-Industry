// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

StartupEvents.registry('item', e => {
    e.create('clear_ingot')
        .displayName('Clear Ingot')
        .rarity('Common');
    
    e.create('clear_helmet', 'helmet')
        .tier('clear')
        .tooltip('§3Works great in cosmetic armor slots');
    
    e.create('clear_chestplate', 'chestplate')
        .tier('clear')
        .tooltip('§3Works great in cosmetic armor slots');

    e.create('clear_leggings', 'leggings')
        .tier('clear')
        .tooltip('§3Works great in cosmetic armor slots');

    e.create('clear_boots', 'boots')
        .tier('clear')
        .tooltip('§3Works great in cosmetic armor slots');
});

StartupEvents.registry('block', e => {
    e.create('clear_glass')
        .displayName('Clear Glass')
        .tagBlock('mineable/pickaxe')
        .tagItem('c:glass')
        .tagItem('c:glass_blocks')
        .tagItem('c:colorless_glass')
        .material('glass')
        .hardness(0.3)
        .resistance(0.3)
        .defaultCutout();
});

ItemEvents.armorTierRegistry(event => {
    event.add('clear', tier => {
        tier.durabilityMultiplier = 5;
        tier.slotProtections = [1, 3, 2, 1];
        tier.enchantmentValue = 5;
        tier.equipSound = 'minecraft:item.armor.equip_iron';
        tier.repairIngredient = 'minecraft:glass';
        tier.toughness = 0.0;
        tier.knockbackResistance = 0.0;
    });
});