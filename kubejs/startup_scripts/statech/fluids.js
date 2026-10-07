// -----------------------------------------
// CREATED BY GRONK FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

const $SoundEvents = Java.loadClass('net.minecraft.sounds.SoundEvents');
const $ParticleTypes = Java.loadClass(
    'net.minecraft.core.particles.ParticleTypes'
);

StartupEvents.registry('fluid', (event) => {
    // -- COOKING OIL -- //
    event
        .create(`kubejs:cooking_oil`)
        .tag('c:fluid/cooking_oil')
        .tint(0xf0e141)
        .noBlock()
        .noBucket()
        .type((type) =>
            type
                .renderType(3)
                .stillTexture('minecraft:block/water_still')
                .flowingTexture('minecraft:block/water_flow')
        );

    // -- GRAVY -- //
    event
        .create(`kubejs:gravy`)
        .tag('c:fluid/gravy')
        .noBlock()
        .noBucket()
        .type((type) =>
            type
                .renderType(3)
                .stillTexture('kubejs:block/gravy_still')
                .flowingTexture('kubejs:block/gravy_flow')
        );
});
