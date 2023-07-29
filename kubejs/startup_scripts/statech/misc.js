// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

StartupEvents.registry('item', e => {
    e.create('space_probe').displayName('Space Probe');
    
    e.create('statech_logo').displayName('StaTech Logo');

    e.create('voice_chat').displayName('Voice Chat');

    e.create('bartman').displayName('Jon Bartman');

    e.create('magic_diamond')
        .displayName('Magic Diamond')
        .rarity('Epic')
        .tooltip('§dYour ticket to the Twilight Forest');
        
    e.create('core_fragment')
        .displayName('Core Fragment')
        .rarity('Rare');
});