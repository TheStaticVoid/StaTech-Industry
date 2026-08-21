// -----------------------------------------
// CREATED BY DINO FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:phantoms_utilities/${id}`;

    // -- SIMPLE MAGNETS REMOVED REICPES -- //
    const PHANTOMS_UTILITIES_REMOVED_RECIPES = [];
    PHANTOMS_UTILITIES_REMOVED_RECIPES.forEach((id) => event.remove({ id: id }));

    // -- SPRAY CAN -- //
    event.replaceInput(
        [{ output: 'phantoms_utilities:spray_can' }],
        mc('iron_ingot'),
        mi('aluminum_curved_plate')
    );
});
