// -----------------------------------------
// CREATED BY DINO FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:modern_industrialization/matter_fabricator/${id}`;

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
            8,
            200,
            [{ amount: 1, item: kj('uu_matter') }],
            [{ amount: 16, item: `${item.id}` }]
        );
    });

/*     const LOW_TIER_MATTER = [
        mi('tin_ore'),
        mc('copper_ore'),
        mc('iron_ore'),
        mc('coal_ore'),
        mi('lignite_ore'),
    ];
    LOW_TIER_MATTER.forEach((item) => {
        matter_fabricator(
            event,
            st(`${item}_from_uu`),
            8,
            200,
            [{ amount: 1, item: kj('uu_matter') }],
            [{ amount: 1, item: `${item}` }]
        );
    });

    const MID_TIER_MATTER = [
    ];
    MID_TIER_MATTER.forEach((item) => {
        matter_fabricator(
            event,
            st(`${item}_from_uu`),
            8,
            200,
            [{ amount: 1, item: kj('uu_matter') }],
            [{ amount: 1, item: `${item}` }]
        );
    });

    const HARD_TIER_MATTER = [
    ];
    HARD_TIER_MATTER.forEach((item) => {
        matter_fabricator(
            event,
            st(`${item}_from_uu`),
            8,
            200,
            [{ amount: 1, item: kj('uu_matter') }],
            [{ amount: 1, item: `${item}` }]
        );
    });

    const HIGH_TIER_MATTER = [
    ];
    HIGH_TIER_MATTER.forEach((item) => {
        matter_fabricator(
            event,
            st(`${item}_from_uu`),
            8,
            200,
            [{ amount: 1, item: kj('uu_matter') }],
            [{ amount: 1, item: `${item}` }]
        );
    });

    const EXTREME_TIER_MATTER = [
    ];
    EXTREME_TIER_MATTER.forEach((item) => {
        matter_fabricator(
            event,
            st(`${item}_from_uu`),
            8,
            200,
            [{ amount: 1, item: kj('uu_matter') }],
            [{ amount: 1, item: `${item}` }]
        );
    }); */
});
