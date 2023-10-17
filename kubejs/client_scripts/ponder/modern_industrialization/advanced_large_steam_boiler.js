// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

Ponder.registry((event) => {
    event.create('modern_industrialization:advanced_large_steam_boiler').scene('advanced_large_steam_boiler', 'The Advanced Large Steam Boiler', 'kubejs:advanced_large_steam_boiler', (scene, util) => {
        let size = structureSize(5, 7, 5);
        showBasePlate(scene, size.width, size.depth);
        buildUpToYRegular(scene, size.width, size.depth, size.height);
        addText(scene, 120, 'The only difference is the addition of one layer and the controller being moved up a block', PonderPalette.BLUE, [2.0, 4.0, 2.0]);
    });
});