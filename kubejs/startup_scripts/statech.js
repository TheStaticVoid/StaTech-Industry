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

    e.create('diamond_lens')
        .displayName('Diamond Lens');

    e.create('concrete_bar')
        .displayName('Yummy Concrete Bar')
        .rarity('Rare')
        .tooltip('§6A tasty snack for a hard working industrialist')
        .food(f => {
            f
            .hunger(10)
            .saturation(0.6)
            .effect('regeneration', 200, 0, 1);
        });
    
    e.create('enderman_model')
        .displayName('Enderman Model')
        .rarity('Rare')
        .tooltip('§3Designates the output in the Mob Crusher');

    e.create('zombie_model')
        .displayName('Zombie Model')
        .rarity('Rare')
        .tooltip('§3Designates the output in the Mob Crusher');

    e.create('skeleton_model')
        .displayName('Skeleton Model')
        .rarity('Rare')
        .tooltip('§3Designates the output in the Mob Crusher');

    e.create('pig_model')
        .displayName('Pig Model')
        .rarity('Rare')
        .tooltip('§3Designates the output in the Mob Crusher');

    e.create('sheep_model')
        .displayName('Sheep Model')
        .rarity('Rare')
        .tooltip('§3Designates the output in the Mob Crusher');

    e.create('cow_model')
        .displayName('Cow Model')
        .rarity('Rare')
        .tooltip('§3Designates the output in the Mob Crusher');
    
    e.create('chicken_model')
        .displayName('Chicken Model')
        .rarity('Rare')
        .tooltip('§3Designates the output in the Mob Crusher');

    e.create('squid_model')
        .displayName('Squid Model')
        .rarity('Rare')
        .tooltip('§3Designates the output in the Mob Crusher');
    
    e.create('spider_model')
        .displayName('Spider Model')
        .rarity('Rare')
        .tooltip('§3Designates the output in the Mob Crusher');
    
    e.create('creeper_model')
        .displayName('Creeper Model')
        .rarity('Rare')
        .tooltip('§3Designates the output in the Mob Crusher');
    
    e.create('slime_model')
        .displayName('Slime Model')
        .rarity('Rare')
        .tooltip('§3Designates the output in the Mob Crusher');

    e.create('ghast_model')
        .displayName('Ghast Model')
        .rarity('Rare')
        .tooltip('§3Designates the output in the Mob Crusher');

    e.create('zombie_piglin_model')
        .displayName('Zombie Piglin Model')
        .rarity('Rare')
        .tooltip('§3Designates the output in the Mob Crusher');
    
    e.create('magma_cube_model')
        .displayName('Magma Cube Model')
        .rarity('Rare')
        .tooltip('§3Designates the output in the Mob Crusher');
    
    e.create('blaze_model')
        .displayName('Blaze Model')
        .rarity('Rare')
        .tooltip('§3Designates the output in the Mob Crusher');
    
    e.create('wither_skeleton_model')
        .displayName('Wither Skeleton Model')
        .rarity('Rare')
        .tooltip('§3Designates the output in the Mob Crusher');

    e.create('guardian_model')
        .displayName('Guardian Model')
        .rarity('Rare')
        .tooltip('§3Designates the output in the Mob Crusher');
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