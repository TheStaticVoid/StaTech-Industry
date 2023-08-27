// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

Ponder.registry((event) => {
    event.create('modern_industrialization:large_tank').scene('large_tank', 'The Large Tank', 'kubejs:large_tank', (scene, util) => {
        let size = structureSize(7, 12, 7);
        showBasePlate(scene, size.width, size.depth);

        // First two layers
        buildUpToYRegular(scene, size.width, size.depth, 2);
        addText(scene, 60, 'The fluid pipes connect directly to the controller block', PonderPalette.WHITE, [3.0, 3.0, 2.0]);

        // Third layer
        buildUpSlice(scene, size.width, size.depth, 3, 3, 3);
        addText(scene, 60, 'This is the minimum size tank. You can adjust the size of the tank in the controller', PonderPalette.WHITE, [3.0, 3.0, 2.0]);

        // Delete
        scene.world.hideSection([0, 1, 0, 6, 5, 6], Facing.EAST);
        scene.idle(30);

        scene.setSceneOffsetY(-2.0);
        scene.scaleSceneView(0.7);

        scene.world.setBlocks([0, 1, 0, 6, 5, 6], 'minecraft:air', false)
        scene.world.setBlocks([0, 1, 0, 6, 1, 6], 'modern_industrialization:steel_machine_casing', false);
        scene.world.setBlocks([1, 1, 1, 5, 1, 5], 'minecraft:glass', false);

        buildUpToYRegular(scene, size.width, size.depth, 1);
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
        buildUpSlice(scene, size.width, size.depth, 2, 7, 3);
        scene.world.setBlocks([0, 7, 0, 6, 7, 6], 'modern_industrialization:steel_machine_casing', false);
        scene.world.setBlocks([1, 7, 1, 5, 7, 5], 'minecraft:glass', false);
        buildUpSlice(scene, size.width, size.depth, 7, 7, 3);
        addText(scene, 60, 'This is the maximum size Large Tank. It can store almost 22,000 buckets of fluid.', PonderPalette.WHITE, [3.0, 3.0, 0.0]);
    });
});