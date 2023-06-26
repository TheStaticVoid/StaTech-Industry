Ponder.registry((event) => {

    let replaceBlocks = (scene, block, x1, y1, z1, x2, y2, z2) => {
        if (x2) {
            scene.world.replaceBlocks([x1, y1, z1, x2, y2, z2], block, true);
        } else {
            scene.world.replaceBlocks([x1, y1, z1], block, true);
        }
    }
    
    let pc = 'spectrum:polished_calcite';
    let npc = 'spectrum:notched_polished_calcite';
    let cpc = 'spectrum:chiseled_polished_calcite';
    let pcp = 'spectrum:polished_calcite_pillar';

    event.create('spectrum:pedestal_all_basic').scene('pedestal_tier1', 'The Pigment Pedestal Focus Structure', 'kubejs:spectrum_pedestal_tier1', (scene, util) => {
        scene.setSceneOffsetY(-2.0);
        scene.scaleSceneView(0.7);

        // Show base plate
        scene.world.showSection([0, 0, 0, 10, 0, 10], Facing.DOWN);
        scene.idle(10);

        // Build the first layer
        for (let x = 0; x < 11; x++) {
            for (let z = 0; z < 11; z++) {
                scene.world.showSection([x, 1, z], Facing.DOWN);
            }
            scene.idle(3);
        }

        scene
            .text(60, 'The center block below the pedestal can be hollow', [5.0, 2.0, 5.0])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(80);

        // build the rest
        for (let y = 2; y < 5; y++) {
            for (let x = 0; x < 11; x++) {
                for (let z = 0; z < 11; z++) {
                    scene.world.showSection([x, y, z], Facing.DOWN);
                }
                scene.idle(1);
            }
            scene.idle(3);
        }

        scene.idle(20);

        scene
            .text(120, 'The corner pillars are one block above the base plate', [0.0, 4.0, 0.0])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame()
        scene.idle(140);


        replaceBlocks(scene, pc, 0, 1, 0, 10, 1, 10);

        replaceBlocks(scene, npc, 0, 2, 0);
        replaceBlocks(scene, npc, 10, 2, 0);
        replaceBlocks(scene, npc, 0, 2, 10);
        replaceBlocks(scene, npc, 10, 2, 10);

        replaceBlocks(scene, pcp, 2, 2, 2);
        replaceBlocks(scene, pcp, 8, 2, 2);
        replaceBlocks(scene, pcp, 2, 2, 8);
        replaceBlocks(scene, pcp, 8, 2, 8);

        replaceBlocks(scene, pcp, 0, 3, 0);
        replaceBlocks(scene, pcp, 10, 3, 0);
        replaceBlocks(scene, pcp, 0, 3, 10);
        replaceBlocks(scene, pcp, 10, 3, 10);

        replaceBlocks(scene, 'spectrum:topaz_storage_block', 2, 3, 2);
        replaceBlocks(scene, 'spectrum:citrine_storage_block', 8, 3, 2);
        replaceBlocks(scene, 'spectrum:amethyst_storage_block', 2, 3, 8);
        replaceBlocks(scene, 'spectrum:onyx_storage_block', 8, 3, 8);

        replaceBlocks(scene, cpc, 0, 4, 0);
        replaceBlocks(scene, cpc, 10, 4, 0);
        replaceBlocks(scene, cpc, 0, 4, 10);
        replaceBlocks(scene, cpc, 10, 4, 10);
        scene.idle(10);

        scene
            .text(80, 'Alternate blocks can be used for the structure. Feel free to mix and match', [1, 2, 5])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame()
        scene.idle(100);
    });
});