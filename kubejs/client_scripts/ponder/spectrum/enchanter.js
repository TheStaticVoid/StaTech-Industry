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
    let cb = 'spectrum:item_bowl_calcite';
    let npc = 'spectrum:notched_polished_calcite';
    let cpc = 'spectrum:chiseled_polished_calcite';
    let pcp = 'spectrum:polished_calcite_pillar';
    let lq = 'spectrum:liquid_crystal';

    event.create('spectrum:enchanter').scene('enchanter', 'The Enchanter Structure', 'kubejs:spectrum_enchanter', (scene, util) => {
        scene.setSceneOffsetY(-2.0);
        scene.scaleSceneView(0.7);

        // Show base plate
        scene.world.showSection([0, 0, 0, 12, 0, 12], Facing.DOWN);
        scene.idle(10);

        for (let x = 0; x < 13; x++) {
            for (let z = 0; z < 13; z++) {
                scene.world.showSection([x, 1, z], Facing.DOWN);
            }
            scene.idle(3);
        }

        scene
            .text(60, 'The Liquid Crystal in the pools can be flowing. It does not have to be all source blocks', [2.0, 3.0, 2.0])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(80);

        for (let y = 2; y < 6; y++) {
            for (let x = 0; x < 13; x++) {
                for (let z = 0; z < 13; z++) {
                    scene.world.showSection([x, y, z], Facing.DOWN);
                }
                scene.idle(3);
            }
            scene.idle(5);
        }

        scene
            .text(60, 'The completed structure', [6, 5, 6])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(80);

        replaceBlocks(scene, pc, 0, 1, 0, 12, 1, 12);

        replaceBlocks(scene, lq, 2, 1, 2, 4, 1, 4);
        replaceBlocks(scene, lq, 8, 1, 2, 10, 1, 4);
        replaceBlocks(scene, lq, 2, 1, 8, 4, 1, 10);
        replaceBlocks(scene, lq, 8, 1, 8, 10, 1, 10);

        replaceBlocks(scene, pc, 3, 1, 3);
        replaceBlocks(scene, pc, 3, 1, 9);
        replaceBlocks(scene, pc, 9, 1, 3);
        replaceBlocks(scene, pc, 9, 1, 9);

        replaceBlocks(scene, pc, 0, 2, 0, 12, 2, 12);

        replaceBlocks(scene, pcs, 5, 2, 2, 7, 2, 2);
        replaceBlocks(scene, pcs, 2, 2, 5, 2, 2, 7);
        replaceBlocks(scene, pcs, 5, 2, 10, 7, 2, 10);
        replaceBlocks(scene, pcs, 10, 2, 5, 10, 2, 7);

        replaceBlocks(scene, pcp, 2, 2, 2, 4, 2, 4);
        replaceBlocks(scene, pcp, 9, 2, 2, 11, 2, 4);
        replaceBlocks(scene, pcp, 2, 2, 9, 4, 2, 11);
        replaceBlocks(scene, pcp, 9, 2, 9, 11, 2, 11);

        replaceBlocks(scene, pcs, 4, 3, 4, 8, 3, 8);
        replaceBlocks(scene, pc, 5, 3, 5, 7, 3, 7);

        replaceBlocks(scene, 'spectrum:topaz_calcite_lamp', 3, 3, 1);
        replaceBlocks(scene, 'spectrum:topaz_calcite_lamp', 1, 3, 3);
        replaceBlocks(scene, 'spectrum:topaz_storage_block', 3, 3, 3);

        replaceBlocks(scene, 'spectrum:citrine_calcite_lamp', 9, 3, 1);
        replaceBlocks(scene, 'spectrum:citrine_calcite_lamp', 11, 3, 3);
        replaceBlocks(scene, 'spectrum:citrine_storage_block', 9, 3, 3)

        replaceBlocks(scene, 'spectrum:amethyst_calcite_lamp', 1, 3, 9);
        replaceBlocks(scene, 'spectrum:amethyst_calcite_lamp', 3, 3, 11);
        replaceBlocks(scene, 'spectrum:amethyst_storage_block', 3, 3, 9);

        replaceBlocks(scene, 'spectrum:onyx_calcite_lamp', 9, 3, 11);
        replaceBlocks(scene, 'spectrum:onyx_calcite_lamp', 11, 3, 9);
        replaceBlocks(scene, 'spectrum:onyx_storage_block', 9, 3, 9);

        replaceBlocks(scene, cb, 0, 4, 0, 12, 4, 12)
        replaceBlocks(scene, 'spectrum:enchanter', 6, 4, 6);

        
        scene.idle(10);
        scene
            .text(80, 'Alternate blocks can be used for the structure. Feel free to mix and match', [1, 3, 5])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(100);    
    });
});