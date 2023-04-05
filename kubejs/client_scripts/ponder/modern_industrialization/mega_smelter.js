Ponder.registry((event) => {
    event.create('modern_industrialization:mega_smelter').scene('mega_smelter', 'The Mega Smelter', 'kubejs:mega_smelter', (scene, util) => {
        // Show base plate
        scene.world.showSection([0, 0, 0, 4, 0, 4], Facing.DOWN);
        scene.idle(10);

        // Build first two layers
        for (let y = 1; y < 3; y++) {
            for (let x = 0; x < 5; x++) {
                for (let z = 0; z < 5; z++) {
                    scene.world.showSection([x, y, z], Facing.DOWN);
                }
                scene.idle(3);
            }
            scene.idle(5);
        }

        scene   
            .text(60, 'The center is hollow', [2.0, 3.0, 2.0])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(80);

        // Build last layer
        for (let x = 0; x < 5; x++) {
            for (let z = 0; z < 5; z++) {
                scene.world.showSection([x, 3, z], Facing.DOWN);
            }
            scene.idle(3);
        }

        scene
            .text(120, 'The Input/Output Hatches can replace any of the Heatproof Machine Casings', [1.0, 2.0, 1.0])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(140);
    }); 
});