// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

Ponder.tags((event) => {
    let kj = (id) => `kubejs:${id}`;
    let sp = (id) => `spectrum:${id}`;

    event.createTag(kj('spectrum'), sp('paintbrush'), 'Spectrum', 'Ponder scenes for multiblock structures', [
        sp('pedestal_all_basic'),
        sp('fusion_shrine_basalt'),
        sp('enchanter'),
        sp('spirit_instiller'),
        sp('cinderhearth'),
        sp('pedestal_onyx')
    ]);
});