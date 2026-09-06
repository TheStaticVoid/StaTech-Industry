// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

const BooleanProperty = Java.loadClass(
    'net.minecraft.world.level.block.state.properties.BooleanProperty'
);
const PLAYER_PLACED = BooleanProperty.create('player_placed');

StartupEvents.registry('block', (event) => {
    let createSample = (name) => {
        let id = name.toLowerCase().replace(' ', '_');
        event
            .create(id + '_ore_sample')
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
            });
    };

    createSample('Titanium');
    createSample('Uranium');
    createSample('Salt');
    createSample('Bauxite');
    createSample('Lead');
    createSample('Nickel');
    createSample('Platinum');
    createSample('Tin');
    createSample('Coal');
    createSample('Copper');
    createSample('Diamond');
    createSample('Emerald');
    createSample('Gold');
    createSample('Iron');
    createSample('Lapis');
    createSample('Nether Gold');
    createSample('Nether Quartz');
    createSample('Quartz');
    createSample('Redstone');
    createSample('Zinc');
});
