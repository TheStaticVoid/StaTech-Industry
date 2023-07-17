// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let st = (id) => `statech:wirelesschargers/${id}`;
    let wc = (id) => `wirelesschargers:${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let mc = (id) => `minecraft:${id}`;

    // -- WIRELESS CHARGERS REMOVED RECIPES -- //
    const REMOVED_RECIPES = [
        wc('basic_wireless_block_charger'),
        wc('advanced_wireless_block_charger'),
        wc('basic_wireless_player_charger'),
        wc('advanced_wireless_block_charger')
    ];
    REMOVED_RECIPES.forEach(id => e.remove({ id: id }));

    // -- BASIC WIRELESS BLOCK CHARGER -- //
    e.shaped(wc('basic_wireless_block_charger'), [
        'PCP',
        'CHC',
        'SES'
    ],
    {
        C: mi('copper_cable'),
        H: mi('advanced_machine_hull'),
        S: mi('steel_large_plate'),
        E: mi('electronic_circuit'),
        P: mc('ender_pearl')
    })
    .id(st('basic_wireless_block_charger'));

    // -- BASIC WIRELESS PLAYER CHARGER -- //
    e.shaped(wc('basic_wireless_player_charger'), [
        'PCP',
        'CHC',
        'SES'
    ],
    {
        C: mi('electrum_cable'),
        H: mi('advanced_machine_hull'),
        S: mi('steel_large_plate'),
        E: mi('electronic_circuit'),
        P: mc('ender_pearl')
    })
    .id(st('basic_wireless_player_charger'));

    // -- ADVANCED WIRELESS BLOCK CHARGER -- //
    e.smithing(
        wc('advanced_wireless_block_charger'), 
        wc('basic_wireless_block_charger'),
        '3x ' + mi('annealed_copper_cable')   
    )
    .id(st('advanced_wireless_block_charger'));

    // -- ADVANCED WIRELESS PLAYER CHARGER -- //
    e.smithing(
        wc('advanced_wireless_player_charger'),
        wc('basic_wireless_player_charger'),
        '3x ' + mi('kanthal_cable')
    )
    .id(st('advanced_wireless_player_charger'));
});