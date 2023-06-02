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
});