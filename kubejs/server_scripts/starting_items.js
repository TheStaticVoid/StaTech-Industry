// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

PlayerEvents.loggedIn(event => {
    if (!event.player.stages.has('starting_items')) {
        event.player.give(Item.of('ftbquests:book'));
        event.player.stages.add('starting_items');
    }
})