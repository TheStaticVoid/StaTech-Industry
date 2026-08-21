// -----------------------------------------
// CREATED BY DINO FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:modern_industrialization/matter_fabricator/${id}`;

    // -- ARTIFACT SYNTHESIS -- //
    matter_fabricator(
        event,
        st('artifact_synthesis'),
        32,
        1200,
        [{ amount: 1, item: kj('artifact_dust') }],
        [{ amount: 1, item: ar('mimic_spawn_egg') }]
    );


    const CHEAP_BLOCKS = Ingredient.of([
        '#minecraft:logs',
        '#c:stones',
        '#c:gravels',
        '#c:cobblestones',
        '#c:end_stones',
        '#minecraft:terracotta',
        '#minecraft:dirt',
        '#c:sands',
        '#c:sandstone/blocks',
        '#c:concrete_powders'
    ]).except('@spectrum').getStacks().toArray();
    CHEAP_BLOCKS.forEach((item) => {
        let namespace = item.id.split(':')[0];
        let itemName = item.id.split(':')[1];
        matter_fabricator(
            event,
            st(`${namespace}/${itemName}_from_uu`),
            32,
            400,
            [{ amount: 1, item: kj('uu_matter') }],
            [{ amount: 64, item: `${item.id}` }]
        );
    });

    const FOOD_STUFF = Ingredient.of([
        '#c:crops',
        '#c:foods/fruit',
        '#c:foods/egg',
        '#c:foods/raw_meat',
        '#c:foods/raw_fish',
    ]).except(['#c:foods/fruit/golden', '@spectrum', mc('chorus_fruit')]).getStacks().toArray();
    FOOD_STUFF.forEach((item) => {
        let namespace = item.id.split(':')[0];
        let itemName = item.id.split(':')[1];
        matter_fabricator(
            event,
            st(`${namespace}/${itemName}_from_uu`),
            32,
            400,
            [{ amount: 1, item: kj('uu_matter') }],
            [{ amount: 16, item: `${item.id}` }]
        );
    });

    const CHEAP_ORES_MATTER = [
        mi('tin_ore'),
        mc('copper_ore'),
        mc('iron_ore'),
        mc('coal_ore'),
        mi('lignite_coal_ore'),
        mc('lapis_ore'),
        mi('quartz_ore'),
        mc('nether_quartz_ore'),
    ];
    CHEAP_ORES_MATTER.forEach((item) => {
        let namespace = item.split(':')[0];
        let itemName = item.split(':')[1];
        matter_fabricator(
            event,
            st(`${itemName}_from_uu`),
            32,
            800,
            [{ amount: 1, item: kj('uu_matter') }],
            [{ amount: 8, item: `${item}` }]
        );
    });

    const MID_ORES_MATTER = [
        mi('antimony_ore'),
        mi('lead_ore'),
        mi('kernite_ore'),
        mi('fluorite_ore'),
        mi('nickel_ore'),
        mi('bauxite_ore'),
        mc('gold_ore'),
        mc('nether_gold_ore'),
        mc('redstone_ore'),
    ];
    MID_ORES_MATTER.forEach((item) => {
        let namespace = item.split(':')[0];
        let itemName = item.split(':')[1];
        matter_fabricator(
            event,
            st(`${itemName}_from_uu`),
            64,
            900,
            [{ amount: 2, item: kj('uu_matter') }],
            [{ amount: 4, item: `${item}` }]
        );
    });

    const HIGH_ORES_MATTER = [
        mi('ruby_ore'),
        mi('sapphire_ore'),
        mi('peridot_ore'),
        mi('monazite_ore'),
        mi('titanium_ore'),
        mi('tungsten_ore'),
        mi('platinum_ore'),
        mc('diamond_ore'),
        mc('emerald_ore'),
    ];
    HIGH_ORES_MATTER.forEach((item) => {
        let namespace = item.split(':')[0];
        let itemName = item.split(':')[1];
        matter_fabricator(
            event,
            st(`${itemName}_from_uu`),
            96,
            1200,
            [{ amount: 4, item: kj('uu_matter') }],
            [{ amount: 2, item: `${item}` }]
        );
    });

    const HIGHEST_ORES_MATTER = [
        mi('uranium_ore'),
        mi('iridium_ore'),
    ];
    HIGHEST_ORES_MATTER.forEach((item) => {
        let namespace = item.split(':')[0];
        let itemName = item.split(':')[1];
        matter_fabricator(
            event,
            st(`${itemName}_from_uu`),
            128,
            1800,
            [{ amount: 16, item: kj('uu_matter') }],
            [{ amount: 1, item: `${item}` }]
        );
    });
});
