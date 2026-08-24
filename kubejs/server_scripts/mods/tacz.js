// -----------------------------------------
// CREATED BY GRONK FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:tacz/${id}`;

    // -- TACZ REMOVED RECIPES -- //
    const TACZ_REMOVED_RECIPES = [
        tz('gun_smith_table'),
        tz('attachment_workbench'),
        tz('ammo_workbench'),
    ];
    TACZ_REMOVED_RECIPES.forEach((id) => event.remove({ id: id }));

    // ------------------------//
    // --- SHAPED CRAFTING --- //
    // ------------------------//

    // -- GUN SMITH TABLE -- //
    event
        .shaped(tz('gun_smith_table'), ['WLO', 'HFF', 'ACA'], {
            W: mi('wrench'),
            L: mi('large_motor'),
            O: '#c:obsidians',
            H: '#kubejs:hammer/regular',
            F: mi('forge_hammer'),
            A: mi('aluminum_large_plate'),
            C: mi('electronic_circuit'),
        })
        .id(st('gun_table'));

    // -- ATTACHMENT TABLE -- //
    event
        .shaped(
            Item.of(tz('workbench_c'), 1).set(
                mc('custom_data'),
                '{BlockId:"tacz:attachment_workbench"}'
            ),
            ['WLL', 'OFA', 'ACA'],
            {
                W: mi('wrench'),
                L: mi('piston'),
                O: '#c:obsidians',
                F: mi('forge_hammer'),
                A: mi('invar_large_plate'),
                C: mi('electronic_circuit'),
            }
        )
        .id(st('attachment_table'));

    // -- AMMO ASSEMBLY TABLE -- //
    event
        .shaped(
            Item.of(tz('workbench_a'), 1).set(
                mc('custom_data'),
                '{BlockId:"tacz:ammo_workbench"}'
            ),
            ['LWL', 'OFO', 'ACA'],
            {
                W: mi('wrench'),
                L: mi('piston'),
                O: '#c:obsidians',
                F: mi('forge_hammer'),
                A: mi('aluminum_large_plate'),
                C: mi('electronic_circuit'),
            }
        )
        .id(st('ammo_table'));
});
