// -----------------------------------------
// CREATED BY STATIC AND DINO FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:computercraft/${id}`;

    // -- COMPUTERCRAFT REMOVED RECIPES -- //
    const COMPUTERCRAFT_REMOVED_RECIPES = [
        // cc('computer_normal'),
        // cc('turtle_normal'),
        // cc('pocket_computer_normal'),
        // cc('wireless_modem_normal'),
        // cc('monitor_normal'),
        // cc('cable'),
        // cc('wired_modem'),
        // cc('redstone_relay'),
        // cc('speaker'),
        // cc('printer'),
        // cc('disk_drive'),
        // cc('computer_advanced'),
        // cc('turtle_advanced'),
        // cc('pocket_computer_advanced'),
        // cc('wireless_modem_advanced'),
        // cc('monitor_advanced'),
        // cc('computer_advanced_upgrade'),
        // cc('turtle_advanced_upgrade'),
        // cc('pocket_computer_advanced_upgrade'),
        // cc('wireless_modem_advanced_upgrade'),
        // cc('monitor_advanced_upgrade')
    ];
    COMPUTERCRAFT_REMOVED_RECIPES.forEach(id => event.remove({ id: id }));

    // ---------------------//
    // ------ SHAPED ------ //
    // ---------------------//



    // ---------------------//
    // ---- ASSEMBLER ---- //
    // ---------------------//


    // -- REDSTONE CIRCUIT BOARD -- //
    // assembler(
    //     event,
    //     st('redstone_circuit_board'),
    //     8,
    //     200,
    //     [
    //         { amount: 1, item: mi('analog_circuit') },
    //         { amount: 4, item: mi('steel_plate') },
    //         { amount: 9, item: mr('red_alloy_wire') }
    //     ],
    //     [{ amount: 1, item: lbr('redstone_circuit_board') }],
    //     [{ amount: 500, fluid: mi('molten_redstone') }],
    // );
});
