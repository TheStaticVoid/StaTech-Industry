// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

Ponder.registry((event) => {
    event.create('modern_industrialization:nuclear_reactor').scene('nuclear_reactor', 'The Nuclear Reactor', 'kubejs:nuclear_reactor', (scene, util) => {
        // Show base plate
        scene.world.showSection([0, 0, 0, 6, 0, 6], Facing.DOWN);

        // First two layers
        for (let y = 1; y < 3; y++) {
            for (let x = 0; x < 6; x++) {
                for (let z = 0; z < 6; z++) {
                    scene.world.showSection([x, y, z], Facing.DOWN);
                }
                scene.idle(3);
            }
            scene.idle(5);
        }

        scene
            .text(60, 'The internals of the multiblock are Nuclear Alloy Pipe Machine Casings', [3.0, 3.0, 4.0])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(60);

        // Rest of the layers
        for (let y = 3; y < 6; y++) {
            for (let x = 0; x < 7; x++) {
                for (let z = 0; z < 7; z++) {
                    scene.world.showSection([x, y, z], Facing.DOWN);
                }
                scene.idle(3);
            }
            scene.idle(5);
        }

        scene
            .text(120, 'Nuclear Fluid and Item Hatches go on the top layer of the multiblock', [3.0, 6.0, 3.0])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame();
        
        scene.idle(140);
        scene
            .text(120, 'The size of the reactor can be changed in the controller. Use your MI wrench to help build it.', [3.0, 3.0, 1.0])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(140);
    });
});