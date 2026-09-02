// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:travelanchors${id}`;

    // -- STAFF OF TRAVELING REMOVED RECIPES -- //
    const REMOVED_RECIPES = [ta('travel_anchor'), ta('travel_staff')];
    REMOVED_RECIPES.forEach((id) => event.remove({ id: id }));

    // -- TRAVEL ANCHOR -- //
    event
        .shaped(ta('travel_anchor'), ['LIL', 'IPI', 'LIL'], {
            L: '#c:large_plates/steel',
            I: '#c:plates/steel',
            P: '#c:ender_pearls',
        })
        .id(st('travel_anchor'));

    // -- TRAVEL STAFF -- //
    event
        .shaped(ta('travel_staff'), [' PE', ' RP', 'R  '], {
            R: '#c:rods/steel',
            E: '#c:gems/emerald',
            P: '#c:ender_pearls',
        })
        .id(st('travel_staff'));
});
