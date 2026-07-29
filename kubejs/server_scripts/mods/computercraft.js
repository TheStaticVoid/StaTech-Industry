// -----------------------------------------
// CREATED BY STATIC AND DINO FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:computercraft/${id}`;

    // -- COMPUTERCRAFT REMOVED RECIPES -- //
    const COMPUTERCRAFT_REMOVED_RECIPES = [
        cc('computer_normal'),
        cc('turtle_normal'),
        cc('pocket_computer_normal'),
        cc('wireless_modem_normal'),
        cc('monitor_normal'),
        cc('cable'),
        cc('wired_modem'),
        cc('redstone_relay'),
        cc('speaker'),
        cc('printer'),
        cc('disk_drive'),
        cc('computer_advanced'),
        cc('turtle_advanced'),
        cc('pocket_computer_advanced'),
        cc('wireless_modem_advanced'),
        cc('monitor_advanced'),
        cc('computer_advanced_upgrade'),
        cc('turtle_advanced_upgrade'),
        cc('pocket_computer_advanced_upgrade'),
    ];
    COMPUTERCRAFT_REMOVED_RECIPES.forEach(id => event.remove({ id: id }));

    // ---------------------//
    // ------ SHAPED ------ //
    // ---------------------//

    // -- NORMAL COMPUTER -- //
    event.shaped(cc('computer_normal'), [
        'RRR',
        'SCS',
        'SGS'
    ], {
        S: mi('steel_plate'),
        C: lbr('redstone_circuit_board'),
        R: mr('red_alloy_ingot'),
        G: '#c:glass_panes'
    }).id(st('computer_normal'));

    // -- NORMAL TURTLE -- //
    event.shaped(cc('turtle_normal'), [
        'SRS',
        'SCS',
        'STS'
    ], {
        S: mi('steel_plate'),
        C: cc('computer_normal'),
        R: mr('red_alloy_ingot'),
        T: '#c:chests/wooden'
    }).id(st('turtle_normal'));

    // -- NORMAL POCKET COMPUTER -- //
    event.shaped(cc('pocket_computer_normal'), [
        'SC ',
        'RG '
    ], {
        S: mi('steel_plate'),
        C: cc('computer_normal'),
        R: mr('red_alloy_ingot'),
        G: mc('golden_apple')
    }).id(st('pocket_computer_normal'));

    // -- NORMAL WIRELESS MODEM -- //
    event.shaped(cc('wireless_modem_normal'), [
        'SRS',
        'RER',
        'SRS'
    ], {
        S: mi('steel_plate'),
        E: mc('ender_eye'),
        R: mr('red_alloy_ingot')
    }).id(st('wireless_modem_normal'));

    // -- NETWORK CABLE RUBBER SHEET SHAPED -- //
    event.shaped('3x ' + cc('cable'), [
        'RRR',
        'WWW',
        'RRR'
    ], {
        W: mr('red_alloy_wire'),
        R: mi('rubber_sheet')
    }).id(st('cable_shaped'));

    // -- WIRED MODEM -- //
    event.shaped(cc('wired_modem'), [
        'SSS',
        'SRS',
        'SSS'
    ], {
        S: mi('steel_plate'),
        R: mr('red_alloy_wire')
    }).id(st('wired_modem'));

    // -- REDSTONE RELAY -- //
    event.shaped(cc('redstone_relay'), [
        'SRS',
        'RMR',
        'SRS'
    ], {
        S: mi('steel_plate'),
        R: mr('red_alloy_wire'),
        M: cc('wired_modem')
    }).id(st('redstone_relay'));

    // -- NORMAL MONITOR -- //
    event.shaped(cc('monitor_normal'), [
        'SRS',
        'SGS',
        'SSS'
    ], {
        S: mi('steel_plate'),
        R: lbr('redstone_circuit_board'),
        G: '#c:glass_panes'
    }).id(st('monitor_normal'));

    // -- SPEAKER -- //
    event.shaped(cc('speaker'), [
        'SSS',
        'SNS',
        'SRS'
    ], {
        S: mi('steel_plate'),
        R: mr('red_alloy_ingot'),
        N: mc('note_block')
    }).id(st('speaker'));

    // -- PRINTER -- //
    event.shaped(cc('printer'), [
        'SSS',
        'SDS',
        'SRS'
    ], {
        S: mi('steel_plate'),
        R: mr('red_alloy_ingot'),
        D: '#c:dyes'
    }).id(st('printer'));


    // -- DISK DRIVE -- //
    event.shaped(cc('disk_drive'), [
        'SSS',
        'SDS',
        'SRS'
    ], {
        S: mi('steel_plate'),
        R: mr('red_alloy_ingot'),
        D: lbr('redstone_circuit_board')
    }).id(st('disk_drive'));

    // -- ADVANCED COMPUTER -- //
    event.shaped(cc('computer_advanced'), [
        'EEE',
        'ECE',
        'ARA'
    ], {
        E: mi('electrum_plate'),
        C: cc('computer_normal'),
        R: mi('electronic_circuit'),
        A: mi('aluminum_plate')
    }).id(st('computer_advanced'));

    // -- ADVANCED TURTLE -- //
    event.shaped(cc('turtle_advanced'), [
        'EBE',
        'ECE',
        'ARA'
    ], {
        E: mi('electrum_plate'),
        C: cc('turtle_normal'),
        R: mi('electronic_circuit'),
        A: mi('aluminum_plate'),
        B: mi('electrum_block')
    }).id(st('turtle_advanced'));

    // -- ADVANCED POCKET COMPUTER -- //
    event.shaped(cc('pocket_computer_advanced'), [
        'ERE',
        'ECE',
        'A A'
    ], {
        E: mi('electrum_plate'),
        C: cc('computer_normal'),
        R: mi('electronic_circuit'),
        A: mi('aluminum_plate')
    }).id(st('pocket_computer_advanced'));

    // -- ADVANCED WIRELESS MODEM -- //
    event.shaped(cc('wireless_modem_advanced'), [
        'SAS',
        'SRS',
        'SSS'
    ], {
        S: mi('electrum_plate'),
        R: cc('wireless_modem_normal'),
        A: mi('aluminum_plate')
    }).id(st('wireless_modem_advanced'));

    // -- ADVANCED MONITOR -- //
    event.shaped(cc('monitor_advanced'), [
        'SSS',
        'AAA',
        'SMS'
    ], {
        S: mi('electrum_plate'),
        A: mi('aluminum_plate'),
        M: cc('monitor_normal')
    }).id(st('advanced_monitor'));


    // ---------------------//
    // ---- ASSEMBLER ---- //
    // ---------------------//


    // -- NETWORK CABLE SYNTHETIC RUBBER -- //
    assembler(
        event,
        st('cable_synth_rubber'),
        2,
        100,
        [{ amount: 3, item: mr('red_alloy_wire') }],
        [{ amount: 3, item: cc('cable') }],
        [{ amount: 30, fluid: mi('synthetic_rubber') }],
    );

    // -- NETWORK CABLE SBR -- //
    assembler(
        event,
        st('cable_sbr'),
        2,
        100,
        [{ amount: 3, item: mr('red_alloy_wire') }],
        [{ amount: 3, item: cc('cable') }],
        [{ amount: 6, fluid: mi('styrene_butadiene_rubber') }],
    );


    // ---------------------//
    // ------ PACKER ------ //
    // ---------------------//

    // -- NETWORK CABLE RUBBER SHEET -- //
    packer(
        event,
        st('cable_rubber_sheet'),
        2,
        100,
        [
            { amount: 3, item: mr('red_alloy_wire') },
            { amount: 6, item: mi('rubber_sheet') }
        ],
        [{ amount: 3, item: cc('cable') }]
    );
});
