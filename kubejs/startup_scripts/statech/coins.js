// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

StartupEvents.registry('item', (event) => {
    event
        .create('coin_common')
        .rarity('Common')
        .tooltip('§7Tier One Coin');

    event
        .create('coin_rare')
        .rarity('Uncommon')
        .tooltip('§aTier Two Coin');

    event
        .create('coin_legendary')
        .rarity('Rare')
        .tooltip('§dTier Three Coin');

    event
        .create('coin_mythic')
        .rarity('Epic')
        .tooltip('§cTier Four Coin');
});
