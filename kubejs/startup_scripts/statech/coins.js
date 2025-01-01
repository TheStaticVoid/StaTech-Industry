// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

StartupEvents.registry('item', e => {
    e.create('coin_common')
        .displayName('StaTech Coin [§7T1§r]')
        .rarity('Common');
    
    e.create('coin_rare')
        .displayName('StaTech Coin [§aT2§r]')
        .rarity('Uncommon');
    
    e.create('coin_legendary')
        .displayName('StaTech Coin [§dT3§r]')
        .rarity('Rare')
    
    e.create('coin_mythic')
        .displayName('StaTech Coin [§cT4§r]')
        .rarity('Epic');
}); 