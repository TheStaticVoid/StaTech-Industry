// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

PlayerEvents.loggedIn((event) => {
    if (!event.player.stages.has('starting_items')) {
        event.player.tell(
            Text.blue(
                'Welcome to StaTech Industry 2.0! For more information\nabout UI Customization and other pack information,\nplease read the "Welcome!" quests in the questbook.'
            )
        );
        event.player.give(Item.of('ftbquests:book'));
        event.player.stages.add('starting_items');
    }
});
