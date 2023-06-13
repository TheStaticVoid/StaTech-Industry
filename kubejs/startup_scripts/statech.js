StartupEvents.registry('item', e => {
    e.create('space_probe').displayName('Space Probe');
    e.create('statech_logo').displayName('StaTech Logo');
    e.create('bartman').displayName('Jon Bartman');
    e.create('magic_diamond')
        .displayName('Magic Diamond')
        .rarity('Epic')
        .tooltip('§dYour ticket to the Twilight Forest');

    e.create('coin_common')
        .displayName('Common StaTech Coin')
        .rarity('Common')
        .tooltip('§7Tier One Coin');

    e.create('coin_rare')
        .displayName('Rare StaTech Coin')
        .rarity('Uncommon')
        .tooltip('§aTier Two Coin');

    e.create('coin_legendary')
        .displayName('Legendary StaTech Coin')
        .rarity('Rare')
        .tooltip('§dTier Three Coin');

    e.create('coin_mythic')
        .displayName('Mythic StaTech Coin')
        .rarity('Epic')
        .tooltip('§cTier Four Coin');
    

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
    
    e.create('core_fragment')
        .displayName('Core Fragment')
        .rarity('Rare');
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