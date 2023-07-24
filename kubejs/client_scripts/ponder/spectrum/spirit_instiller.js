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

    let pc = 'spectrum:polished_basalt';
    let pcs = 'spectrum:polished_basalt_slab';
    let cb = 'spectrum:item_bowl_basalt';
    let npc = 'spectrum:notched_polished_basalt';
    let cpc = 'spectrum:chiseled_polished_basalt';
    let pcp = 'spectrum:polished_basalt_pillar';

    event.create('spectrum:spirit_instiller').scene('spirit_instiller', 'The Spirit Instiller Structure', 'kubejs:spectrum_spirit_instiller', (scene, util) => {
        scene.setSceneOffsetY(-2.0);
        scene.scaleSceneView(0.7);

        // Show base plate
        scene.world.showSection([0, 0, 0, 10, 0, 10], Facing.DOWN);
        scene.idle(10);

        for (let y = 1; y < 4; y++) {
            for (let x = 0; x < 11; x++) {
                for (let z = 0; z < 10; z++) {
                    scene.world.showSection([x, y, z], Facing.DOWN);
                }
                scene.idle(3);
            }
            scene.idle(5);
        }

        scene
            .text(60, 'The completed structure', [5, 3, 7])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(80);

        replaceBlocks(scene, pc, 0, 1, 0, 10, 1, 10);
        replaceBlocks(scene, pcs, 4, 1, 2, 6, 1, 2);

        replaceBlocks(scene, pcp, 1, 1, 3);
        replaceBlocks(scene, pcp, 9, 1, 3);
        replaceBlocks(scene, pcp, 2, 1, 9);
        replaceBlocks(scene, pcp, 8, 1, 9);

        replaceBlocks(scene, pcs, 0, 2, 0, 10, 2, 10);
        replaceBlocks(scene, 'spectrum:spirit_instiller', 5, 2, 7);

        replaceBlocks(scene, pcp, 2, 2, 9);
        replaceBlocks(scene, pcp, 8, 2, 9);

        replaceBlocks(scene, cpc, 3, 2, 7);
        replaceBlocks(scene, cpc, 7, 2, 7);

        replaceBlocks(scene, 'spectrum:topaz_chiseled_basalt', 1, 2, 3);
        replaceBlocks(scene, 'spectrum:amethyst_chiseled_basalt', 9, 2, 3);

        replaceBlocks(scene, npc, 2, 3, 9);
        replaceBlocks(scene, npc, 8, 3, 9);
        
        replaceBlocks(scene, cb, 3, 3, 7);
        replaceBlocks(scene, cb, 7, 3, 7);

        scene.idle(10);
        scene
            .text(80, 'Alternate blocks can be used for the structure. Feel free to mix and match', [1, 3, 5])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()
            .attachKeyFrame();
        scene.idle(100); 
    });
});