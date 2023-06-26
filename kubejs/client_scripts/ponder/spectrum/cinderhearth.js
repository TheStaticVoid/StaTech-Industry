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
    let pcc = 'spectrum:polished_calcite_crest';

    event.create('spectrum:cinderhearth').scene('cinderhearth', 'The Cinderhearth Structure', 'kubejs:spectrum_cinderhearth', (scene, util) => {
        scene.setSceneOffsetY(-2.0);
        scene.scaleSceneView(0.7);

        // Show base plate
        scene.world.showSection([0, 0, 0, 6, 0, 5], Facing.DOWN);
        scene.idle(10);

        for (let y = 1; y < 5; y++) {
            for (let x = 0; x < 7; x++) {
                for (let z = 0; z < 6; z++) {
                    scene.world.showSection([x, y, z], Facing.DOWN);
                }
                scene.idle(3);
            }
            scene.idle(5);
        }
        
        scene
            .text(60, 'The completed structure', [3, 5, 3])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(80);

        replaceBlocks(scene, pc, 0, 1, 0, 6, 1, 5);

        replaceBlocks(scene, pc, 0, 2, 0, 6, 2, 5);
        replaceBlocks(scene, 'minecraft:lava', 2, 2, 2, 4, 2, 3);

        replaceBlocks(scene, pc, 0, 3, 0, 6, 3, 5);
        replaceBlocks(scene, pcc, 1, 3, 2, 1, 3, 3);
        replaceBlocks(scene, pcc, 5, 3, 2, 5, 3, 3);
        replaceBlocks(scene, 'minecraft:glass', 2, 3, 2, 4, 3, 3);
        replaceBlocks(scene, 'minecraft:air', 3, 3, 3);
        replaceBlocks(scene, pcc, 2, 3, 4);
        replaceBlocks(scene, pcc, 4, 3, 4);

        replaceBlocks(scene, cpc, 1, 4, 4, 5, 4, 4);

        scene.idle(10);
        scene
            .text(80, 'Alternate blocks can be used for the structure. Feel free to mix and match', [1, 3, 5])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(100);
    });
})