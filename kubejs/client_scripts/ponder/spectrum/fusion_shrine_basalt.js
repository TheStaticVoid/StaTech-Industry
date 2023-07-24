// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

Ponder.registry((event) => {

    let replaceBlocks = (scene, block, x1, y1, z1, x2, y2, z2) => {
        if (x2) {
            scene.world.replaceBlocks([x1, y1, z1, x2, y2, z2], block, true)
        } else {
            scene.world.replaceBlocks([x1, y1, z1], block, true);
        }
    }

    let pc = 'spectrum:polished_calcite';
    let pcs = 'spectrum:polished_calcite_slab';
    let npc = 'spectrum:notched_polished_calcite';
    let cpc = 'spectrum:chiseled_polished_calcite';
    let pcp = 'spectrum:polished_calcite_pillar';

    event.create('spectrum:fusion_shrine_basalt').scene('fusion_shrine', 'The Fusion Shrine Structure', 'kubejs:spectrum_fusion_shrine', (scene, util) => {
        scene.setSceneOffsetY(-2.0);
        scene.scaleSceneView(0.7);

        // Show base plate
        scene.world.showSection([0, 0, 0, 10, 0, 10], Facing.DOWN);
        scene.idle(10);

        // Build the structure
        for (let y = 1; y < 6; y++) {
            for (let x = 0; x < 11; x++) {
                for (let z = 0; z < 11; z++) {
                    scene.world.showSection([x, y, z], Facing.DOWN);
                }
                scene.idle(3);
            }
            if (y > 2) {
                scene.idle(1);
            } else {
            scene.idle(5);
            }            
        }

        scene.idle(20);

        scene
            .text(60, 'The completed structure', [5, 3, 5])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(80);

        scene
            .text(60, 'Note the slabs surrounding the base of the shrine itself', [6, 2, 4])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(80);

        replaceBlocks(scene, pc, 0, 1, 0, 10, 1, 10);
        replaceBlocks(scene, pcs, 4, 1, 4, 6, 1, 6);
        replaceBlocks(scene, pc, 5, 1, 5);

        replaceBlocks(scene, cpc, 3, 1, 3);
        replaceBlocks(scene, cpc, 7, 1, 3);
        replaceBlocks(scene, cpc, 3, 1, 7);
        replaceBlocks(scene, cpc, 7, 1, 7);

        replaceBlocks(scene, pc, 0, 2, 0, 10, 2, 10);
        replaceBlocks(scene, 'spectrum:fusion_shrine_calcite', 5, 2, 5);

        replaceBlocks(scene, pcp, 2, 2, 2);
        replaceBlocks(scene, pcp, 8, 2, 2);
        replaceBlocks(scene, pcp, 2, 2, 8);
        replaceBlocks(scene, pcp, 8, 2, 8);

        replaceBlocks(scene, pcp, 0, 3, 0, 10, 3, 10);

        replaceBlocks(scene, 'spectrum:topaz_storage_block', 2, 4, 2);
        replaceBlocks(scene, 'spectrum:citrine_storage_block', 2, 4, 8);
        replaceBlocks(scene, 'spectrum:amethyst_storage_block', 8, 4, 2);
        replaceBlocks(scene, 'spectrum:onyx_storage_block', 8, 4, 8);

        replaceBlocks(scene, pcs, 0, 5, 0, 10, 5, 10);
        scene.idle(10);
        
        scene
            .text(80, 'Alternate blocks can be used for the structure. Feel free to mix and match', [1, 3, 5])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame()
        scene.idle(100);
    });
});