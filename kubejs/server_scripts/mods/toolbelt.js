// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:toolbelt/${id}`;

    // -- TOOL BELT REMOVED RECIPES -- //
    const TOOLBELT_REMOVED_RECIPES = [tb('belt'), tb('pouch')];
    TOOLBELT_REMOVED_RECIPES.forEach((id) => event.remove({ id: id }));

    // ------------------------//
    // --- SHAPED CRAFTING --- //
    // ------------------------//

    // -- TOOL BELT -- //
    event
        .shaped(tb('belt'), ['SLS', 'LBL', 'PCP'], {
            S: mc('string'),
            B: '#c:barrels',
            L: mc('leather'),
            P: '#c:plates/steel',
            C: fd('canvas'),
        })
        .id(st('tool_belt'));

    // -- BELT POUCH -- //
    event
        .shaped(tb('pouch'), ['SCS', 'LUL', 'SCS'], {
            S: mc('string'),
            L: mc('leather'),
            U: kj('diamond_upgrade_smithing_template'),
            C: fd('canvas'),
        })
        .id(st('pouch'));

    // -----------------------------------//
    // --- TOOL BELT UPGRADE SMITHING --- //
    // -----------------------------------//

    for (let i = 2; i <= 8; i++) {
        event
            .smithing(
                Item.of(tb('belt'), { 'toolbelt:belt_size': i + 1 }),
                tb('pouch'),
                Item.of(tb('belt'), { 'toolbelt:belt_size': i }),
                mi('steel_plate')
            )
            .id(st(`belt_upgrade_${i - 1}`));
    }
});
