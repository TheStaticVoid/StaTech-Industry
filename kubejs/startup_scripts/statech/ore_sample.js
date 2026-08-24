// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

const BooleanProperty = Java.loadClass(
    'net.minecraft.world.level.block.state.properties.BooleanProperty'
);
const PLAYER_PLACED = BooleanProperty.create('player_placed');

StartupEvents.registry('block', (event) => {
    createSample(event, 'Titanium');
    createSample(event, 'Uranium');
    createSample(event, 'Salt');
    createSample(event, 'Bauxite');
    createSample(event, 'Lead');
    createSample(event, 'Nickel');
    createSample(event, 'Platinum');
    createSample(event, 'Tin');
    createSample(event, 'Coal');
    createSample(event, 'Copper');
    createSample(event, 'Diamond');
    createSample(event, 'Emerald');
    createSample(event, 'Gold');
    createSample(event, 'Iron');
    createSample(event, 'Lapis');
    createSample(event, 'Nether Gold');
    createSample(event, 'Nether Quartz');
    createSample(event, 'Quartz');
    createSample(event, 'Redstone');
    createSample(event, 'Zinc');
});

let createSample = (event, name) => {
    let id = name.toLowerCase().replace(' ', '_');
    event
        .create(id + '_ore_sample')
        .displayName(name + ' Ore Sample')
        .soundType('tuff')
        .hardness(0.1)
        .fullBlock(false)
        .waterlogged()
        .notSolid()
        .opaque(false)
        .box(1.0, 0.0, 1.0, 13.0, 3.0, 13.0)
        .property(PLAYER_PLACED)
        .defaultState((state) => {
            state.set(PLAYER_PLACED, false);
            state.set(BlockProperties.WATERLOGGED, false);
        })
        .placementState((state) => {
            const player = state.player;
            state.set(PLAYER_PLACED, player != null);

            state.waterlogged();

            // state.set(
            //     BlockProperties.WATERLOGGED,
            //     fluid.isSource() && fluid.type === 'minecraft:water'
            // );
        });
};
