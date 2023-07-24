// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

Ponder.registry((event) => {
    event.create('modern_industrialization:advanced_large_steam_boiler').scene('advanced_large_steam_boiler', 'The Advanced Large Steam Boiler', 'kubejs:advanced_large_steam_boiler', (scene, util) => {
        // Bottom layer
        for (let x = 0; x < 5; x++) {
            for (let z = 0; z < 5; z++) {
                scene.world.showSection([x, 0, z], Facing.DOWN);
            }
        }

        for (let y = 1; y < 6; y++) {
            for (let x = 0; x < 5; x++) {
                for (let z = 0; z < 5; z++) {
                    scene.world.showSection([x, y, z], Facing.DOWN);
                }
                scene.idle(3);
            }
            scene.idle(5);
        }

        scene
            .text(120, 'The only difference is the addition of one layer and the controller being moved up a block', [2.0, 4.0, 2.0])
            .colored(PonderPalette.BLUE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(120);
    })
})