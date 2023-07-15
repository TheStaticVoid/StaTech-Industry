// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

Ponder.registry((event) => {
    event.create('modern_industrialization:large_tank').scene('large_tank', 'The Large Tank', 'kubejs:large_tank', (scene, util) => {
        // Small tank - base layer
        for (let x = 0; x < 7; x++) {
            for (let z = 0; z < 7; z++) {
                scene.world.showSection([x, 0, z], Facing.DOWN);
            }
        }

        // First Layer
        for (let x = 0; x < 7; x++) {
            for (let z = 0; z < 7; z++) {
                scene.world.showSection([x, 1, z], Facing.DOWN);
            }
            scene.idle(3);
        }
        scene.idle(10);

        // Second layer
        for (let x = 0; x < 7; x++) {
            for (let z = 0; z < 7; z++) {
                scene.world.showSection([x, 2, z], Facing.DOWN);
            }
            scene.idle(3);
        }

        scene
            .text(60, 'Fluid pipes connect directly to the controller block', [3.0, 3.0, 2.0])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(60);

        // Third layer
        for (let x = 0; x < 7; x++) {
            for (let z = 0; z < 7; z++) {
                scene.world.showSection([x, 3, z], Facing.DOWN);
            }
            scene.idle(3);
        }

        scene
            .text(60, 'This is the minimum size tank. You can adjust the size of the tank in the controller', [3.0, 3.0, 2.0])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame()
        scene.idle(60);

        // Delete
        scene.world.hideSection([0, 1, 0, 6, 5, 6], Facing.EAST);
        scene.idle(30);

        scene.setSceneOffsetY(-2.0);
        scene.scaleSceneView(0.7);

        scene.world.setBlocks([0, 1, 0, 6, 5, 6], 'minecraft:air', false)
        scene.world.setBlocks([0, 1, 0, 6, 1, 6], 'modern_industrialization:steel_machine_casing', false);
        scene.world.setBlocks([1, 1, 1, 5, 1, 5], 'minecraft:glass', false);

        for (let x = 0; x < 7; x++) {
            for (let z = 0; z < 7; z++) {
                scene.world.showSection([x, 1, z], Facing.DOWN);
            }
            scene.idle(3);
        }
        scene.idle(5);


        for (let y = 2; y < 7; y++) {
            scene.world.setBlocks([0, y, 0], 'modern_industrialization:steel_machine_casing', false);
            scene.world.setBlocks([6, y, 0], 'modern_industrialization:steel_machine_casing', false);
            scene.world.setBlocks([6, y, 6], 'modern_industrialization:steel_machine_casing', false);
            scene.world.setBlocks([0, y, 6], 'modern_industrialization:steel_machine_casing', false);
            scene.world.setBlocks([1, y, 0, 5, y, 0], 'minecraft:glass', false);
            scene.world.setBlocks([0, y, 1, 0, y, 5], 'minecraft:glass', false);
            scene.world.setBlocks([6, y, 1, 6, y, 5], 'minecraft:glass', false);
            scene.world.setBlocks([1, y, 6, 5, y, 6], 'minecraft:glass', false);
        }
        
        scene.world.setBlocks([3, 2, 0], 'modern_industrialization:large_tank', false);

        for (let y = 2; y < 7; y++) {
            for (let x = 0; x < 7; x++) { 
                for (let z = 0; z < 7; z++) {
                    scene.world.showSection([x, y, z], Facing.DOWN);
                }
                scene.idle(3);
            }
            scene.idle(5);
        }

        scene.world.setBlocks([0, 7, 0, 6, 7, 6], 'modern_industrialization:steel_machine_casing', false);
        scene.world.setBlocks([1, 7, 1, 5, 7, 5], 'minecraft:glass', false);
        for (let x = 0; x < 7; x++) {
            for (let z = 0; z < 7; z++) {
                scene.world.showSection([x, 7, z], Facing.DOWN);
            }
            scene.idle(3);
        }

        scene
            .text(60, 'This is the maximum size Large Tank. It can store almost 22,000 buckets of fluid.', [3.0, 3.0, 0.0])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame()
        scene.idle(60);
    });
});