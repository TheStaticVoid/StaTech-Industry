// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

Ponder.registry((event) => {
    event.create('modern_industrialization:oil_drilling_rig').scene('oil_drilling_rig', 'The Oil Drilling Rig', 'kubejs:oil_drilling_rig', (scene, util) => {
        scene.setSceneOffsetY(-3.0);
        scene.scaleSceneView(0.65);
        
        // Base plate
        scene.world.showSection([0, 0, 0, 6, 0, 6], Facing.DOWN);

        // First three layers
        for (let y = 1; y < 5; y++) {
            for (let x = 0; x < 7; x++) {
                for (let z = 0; z < 7; z++) {
                    scene.world.showSection([x, y, z], Facing.DOWN);
                }
                scene.idle(3);
            }
            scene.idle(5);
        }

        scene
            .text(60, 'This makes up the base of the Drilling Rig', [3.0, 5.0, 3.0])
            .colored(PonderPalette.WHITE)
            .attachKeyFrame();
        scene.idle(60);

        // Last six layers
        for (let y = 5; y < 12; y++) {
            for (let x = 0; x < 7; x++) {
                for (let z = 0; z < 7; z++) {
                    scene.world.showSection([x, y, z], Facing.DOWN);
                }
                scene.idle(3);
            }
            scene.idle(2);
        }

        scene
            .text(120, 'Hatches can only go on the same level as the controller', [2.0, 6.0, 2.0])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(120);
    });
})