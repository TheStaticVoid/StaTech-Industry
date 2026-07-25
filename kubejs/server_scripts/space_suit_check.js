// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

/* let tickCounter = 0;

PlayerEvents.tick(event => {
    if (!event.player.isCreative() && event.player.level.dimension == 'statech:space') {
        if (tickCounter % 100 == 0) {
            tickCounter = 0;

            let spaceSuitId = kj('personal_space_shield');
            let hasSuit = false;

            event.player.inventory.allItems.forEach(item => {
                if (item.id == spaceSuitId) hasSuit = true;
            });

            if (!hasSuit) {
                event.player.tell('§cYou should really wear a space suit...');
                event.player.potionEffects.add('minecraft:wither', 100, 0, true, true);
            }
        }

        tickCounter++;
    }
}); */