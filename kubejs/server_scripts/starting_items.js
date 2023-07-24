// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

PlayerEvents.loggedIn(e => {
    if (!e.player.stages.has('starting_items')) {
        e.player.give(Item.of('ftbquests:book'));
        e.player.stages.add('starting_items');
    }
})