// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

StartupEvents.registry('item', e => {
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
});