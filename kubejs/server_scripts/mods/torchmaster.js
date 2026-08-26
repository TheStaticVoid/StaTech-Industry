// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:torchmaster/${id}`;

    // -- TORCHMASTER REMOVED RECIPES -- //
    const TORCHMASTER_REMOVED_RECIPES = [
        tm('megatorch'),
        tm('feral_flare_lantern'),
        tm('dreadlamp'),
    ];
    TORCHMASTER_REMOVED_RECIPES.forEach((id) => event.remove({ id: id }));

    // -- MEGA TORCH -- //
    event
        .shaped(tm('megatorch'), ['TTT', 'DLD', 'SLS'], {
            T: mc('torch'),
            D: mc('diamond'),
            L: '#minecraft:logs',
            S: '#c:large_plates/steel',
        })
        .id(st('megatorch'));

    // -- FERAL FLARE LANTERN -- //
    event
        .shaped(tm('feral_flare_lantern'), [' P ', 'GDG', ' P '], {
            P: '#c:plates/gold',
            G: '#c:glass_blocks',
            D: mc('glowstone_dust'),
        })
        .id(st('feral_flare_lantern'));

    // -- DREAD LAMP -- //
    event
        .shaped(tm('dreadlamp'), ['OOO', 'GSG', 'OTO'], {
            O: mc('obsidian'),
            G: '#c:glass_panes',
            S: mc('glowstone'),
            T: tm('megatorch'),
        })
        .id(st('dread_lamp'));
});
