// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

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
    let pcc = 'spectrum:polished_calcite_crest';

    event.create('spectrum:pedestal_onyx').scene('pedestal_tier2', 'The Spectrum Temple', 'kubejs:spectrum_pedestal_tier2', (scene, util) => {
        scene.setSceneOffsetY(-2.0);
        scene.scaleSceneView(0.6);

        // Show base plate
        scene.world.showSection([0, 0, 0, 14, 0, 14], Facing.DOWN);
        scene.idle(10);

        // Build the first layer
        for (let x = 0; x < 15; x++) {
            for (let z = 0; z < 15; z++) {
                scene.world.showSection([x, 1, z], Facing.DOWN);
            }
            scene.idle(3);
        }

        scene
            .text(60, 'The center block below the pedestal can be hollow', [7, 2, 7])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(80);

        // Build the rest
        for (let y = 2; y < 7; y++) {
            for (let x = 0; x < 15; x++) {
                for (let z = 0; z < 15; z++) {
                    scene.world.showSection([x, y, z], Facing.DOWN);
                }
                scene.idle(1);
            }
            scene.idle(3);
        }

        scene
            .text(60, 'The completed structure', [7, 3, 7])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(80);

        replaceBlocks(scene, pc, 0, 1, 0, 14, 1, 14);
        replaceBlocks(scene, 'spectrum:topaz_chiseled_calcite', 6, 1, 5);
        replaceBlocks(scene, 'spectrum:topaz_chiseled_calcite', 5, 1, 6);
        replaceBlocks(scene, 'spectrum:citrine_chiseled_calcite', 8, 1, 5);
        replaceBlocks(scene, 'spectrum:citrine_chiseled_calcite', 9, 1, 6);
        replaceBlocks(scene, 'spectrum:amethyst_chiseled_calcite', 9, 1, 8);
        replaceBlocks(scene, 'spectrum:amethyst_chiseled_calcite', 8, 1, 9);
        replaceBlocks(scene, 'spectrum:onyx_chiseled_calcite', 5, 1, 8);
        replaceBlocks(scene, 'spectrum:onyx_chiseled_calcite', 6, 1, 9);

        replaceBlocks(scene, pcp, 0, 2, 0, 14, 2, 14);
        replaceBlocks(scene, npc, 2, 2, 2);
        replaceBlocks(scene, npc, 12, 2, 2);
        replaceBlocks(scene, npc, 2, 2, 12);
        replaceBlocks(scene, npc, 12, 2, 12);
        replaceBlocks(scene, 'spectrum:pedestal_onyx', 7, 2, 7);

        replaceBlocks(scene, pcp, 0, 3, 0, 14, 3, 14);

        replaceBlocks(scene, 'spectrum:topaz_calcite_lamp', 5, 3, 2);
        replaceBlocks(scene, 'spectrum:topaz_calcite_lamp', 2, 3, 5);
        replaceBlocks(scene, 'spectrum:topaz_storage_block', 4, 3, 4);

        replaceBlocks(scene, 'spectrum:amethyst_calcite_lamp', 9, 3, 2);
        replaceBlocks(scene, 'spectrum:amethyst_calcite_lamp', 12, 3, 5);
        replaceBlocks(scene, 'spectrum:amethyst_storage_block', 10, 3, 4);

        replaceBlocks(scene, 'spectrum:citrine_calcite_lamp', 2, 3, 9);
        replaceBlocks(scene, 'spectrum:citrine_calcite_lamp', 5, 3, 12);
        replaceBlocks(scene, 'spectrum:citrine_storage_block', 4, 3, 10);

        replaceBlocks(scene, 'spectrum:onyx_calcite_lamp', 9, 3, 12);
        replaceBlocks(scene, 'spectrum:onyx_calcite_lamp', 12, 3, 9);
        replaceBlocks(scene, 'spectrum:onyx_storage_block', 10, 3, 10);

        replaceBlocks(scene, pcp, 0, 4, 0, 14, 4, 14);
        replaceBlocks(scene, cpc, 2, 4, 2);
        replaceBlocks(scene, cpc, 12, 4, 2);
        replaceBlocks(scene, cpc, 2, 4, 12);
        replaceBlocks(scene, cpc, 12, 4, 12);

        replaceBlocks(scene, pcp, 0, 5, 0, 14, 5, 14);

        replaceBlocks(scene, pcc, 0, 6, 0, 14, 6, 14);
        replaceBlocks(scene, 'spectrum:topaz_calcite_lamp', 5, 6, 2);
        replaceBlocks(scene, 'spectrum:topaz_calcite_lamp', 2, 6, 5);
        replaceBlocks(scene, 'spectrum:topaz_storage_block', 2, 6, 2);

        replaceBlocks(scene, 'spectrum:amethyst_calcite_lamp', 9, 6, 2);
        replaceBlocks(scene, 'spectrum:amethyst_calcite_lamp', 12, 6, 5);
        replaceBlocks(scene, 'spectrum:amethyst_storage_block', 12, 6, 2);

        replaceBlocks(scene, 'spectrum:citrine_calcite_lamp', 2, 6, 9);
        replaceBlocks(scene, 'spectrum:citrine_calcite_lamp', 5, 6, 12);
        replaceBlocks(scene, 'spectrum:citrine_storage_block', 2, 6, 12);

        replaceBlocks(scene, 'spectrum:onyx_calcite_lamp', 9, 6, 12);
        replaceBlocks(scene, 'spectrum:onyx_calcite_lamp', 12, 6, 9);
        replaceBlocks(scene, 'spectrum:onyx_storage_block', 12, 6, 12);
        

        scene.idle(10);
        scene
            .text(80, 'Alternate blocks can be used for the structure. Feel free to mix and match', [1, 2, 5])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame()
        scene.idle(100);
    });
});