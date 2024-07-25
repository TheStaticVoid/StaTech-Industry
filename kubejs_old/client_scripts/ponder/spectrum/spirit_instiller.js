// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

Ponder.registry((event) => {
    let pc = 'spectrum:polished_basalt';
    let pcs = 'spectrum:polished_basalt_slab';
    let cb = 'spectrum:item_bowl_basalt';
    let npc = 'spectrum:notched_polished_basalt';
    let cpc = 'spectrum:chiseled_polished_basalt';
    let pcp = 'spectrum:polished_basalt_pillar';
    let instiller = 'spectrum:spirit_instiller';
    let tcb = 'spectrum:topaz_chiseled_basalt';
    let acb = 'spectrum:amethyst_chiseled_basalt';

    event.create('spectrum:spirit_instiller').scene('spirit_instiller', 'The Spirit Instiller Structure', 'kubejs:spectrum_spirit_instiller', (scene, util) => {
        scene.setSceneOffsetY(-2.0);
        scene.scaleSceneView(0.7);
        let size = structureSize(11, 5, 11);
        showBasePlate(scene, size.width, size.depth);
        
        buildUpToYRegular(scene, size.width, size.depth, 4);
        addText(scene, 60, 'The completed structure', PonderPalette.WHITE, [5.0, 3.0, 7.0]);

        replaceBlocks(scene, pc, [0, 1, 0], [10, 1, 10]);
        replaceBlocks(scene, pcs, [4, 1, 2], [6, 1, 2]);
        replaceBlocks(scene, pcp, [1, 1, 3]);
        replaceBlocks(scene, pcp, [9, 1, 3]);
        replaceBlocks(scene, pcp, [2, 1, 9]);
        replaceBlocks(scene, pcp, [8, 1, 9]);
        replaceBlocks(scene, pcs, [0, 2, 0], [10, 2, 10]);
        replaceBlocks(scene, instiller, [5, 2, 7]);
        replaceBlocks(scene, pcp, [2, 2, 9]);
        replaceBlocks(scene, pcp, [8, 2, 9]);
        replaceBlocks(scene, cpc, [3, 2, 7]);
        replaceBlocks(scene, cpc, [7, 2, 7]);
        replaceBlocks(scene, tcb, [1, 2, 3]);
        replaceBlocks(scene, acb, [9, 2, 3]);
        replaceBlocks(scene, npc, [2, 3, 9]);
        replaceBlocks(scene, npc, [8, 3, 9]);
        replaceBlocks(scene, cb, [3, 3, 7]);
        replaceBlocks(scene, cb, [7, 3, 7]);

        scene.idle(10);
        addText(scene, 80, 'Alternate blocks can be used for the structure. Feel free to mix and match', PonderPalette.WHITE, [1.0, 3.0, 5.0]);
    });
});