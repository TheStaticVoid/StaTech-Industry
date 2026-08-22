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

    // --------------------//
    // ---- ASSEMBLER ---- //
    // --------------------//

   });
