// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes(event => {
    event.remove({mod: 'geocluster', not: {id: gc('prospectors_pick') }});
});