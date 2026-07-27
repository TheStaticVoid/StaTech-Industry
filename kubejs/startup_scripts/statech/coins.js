// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

StartupEvents.registry('item', event => {
    event.create('coin_common')
        .displayName('Common StaTech Coin')
        .rarity('Common')
        .tooltip('§7Tier One Coin');

    event.create('coin_rare')
        .displayName('Rare StaTech Coin')
        .rarity('Uncommon')
        .tooltip('§aTier Two Coin');

    event.create('coin_legendary')
        .displayName('Legendary StaTech Coin')
        .rarity('Rare')
        .tooltip('§dTier Three Coin');

    event.create('coin_mythic')
        .displayName('Mythic StaTech Coin')
        .rarity('Epic')
        .tooltip('§cTier Four Coin');
});
