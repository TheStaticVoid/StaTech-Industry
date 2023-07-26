// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let gc = (id) => `geocluster:${id}`;
    e.remove({mod: 'geocluster', not: {id: gc('prospectors_pick') }});
});