// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

StartupEvents.registry('item', (event) => {
    event.create('empty_can').displayName('Empty Can');

    event
        .create('concrete_bar')
        .displayName('Yummy Concrete Bar')
        .rarity('Uncommon')
        .tag('c:foods')
        .tooltip('§6A tasty snack for a hard working industrialist')
        .food((f) => {
            f.nutrition(6).saturation(0.6);
        });

    event
        .create('statech_energy')
        .displayName('StaTech Energy')
        .rarity('Rare')
        .tag('c:foods')
        .tag('c:drinks')
        .tooltip('§eUnleash the Greg')
        .food((f) => {
            f.nutrition(6)
                .saturation(0.4)
                .effect('speed', 60 * 20, 0, 1);
        })
        .useAnimation('drink');

    event
        .create('sulfuric_acid_bottle')
        .displayName('Bottle of Sulfuric Acid')
        .tag('c:foods')
        .tag('c:drinks')
        .food((f) => {
            f.nutrition(3).saturation(0.2).effect('poison', 200, 0, 1);
        })
        .useAnimation('drink');

    event
        .create('concrete_and_clay_steak')
        .displayName('Concrete Steak with Clay Sauce')
        .rarity('Epic')
        .tag('c:foods')
        .tooltip('§3Part of a §obalanced§r§3 diet')
        .food((f) => {
            f.nutrition(14).saturation(0.5).effect('regeneration', 200, 0, 1);
        });

    event
        .create('uranium_cereal')
        .displayName('Uranium Cereal')
        .rarity('Rare')
        .tag('c:foods')
        .tooltip('§bTons of calories!')
        .maxStackSize(1)
        .food((f) => {
            f.nutrition(20).saturation(0.5);
        });

    event
        .create('pizza_dough')
        .displayName('Pizza Dough')
        .tag('c:foods')
        .food((f) => {
            f.nutrition(2).saturation(0.4);
        });

    event.create('uncooked_pizza').displayName('Uncooked Pizza').tag('c:foods');
    event.create('pizza').displayName('Pizza').tag('c:foods');

    event
        .create('pizza_slice')
        .displayName('Pizza Slice')
        .tag('c:foods')
        .food((f) => {
            f.nutrition(8).saturation(0.6);
        });

    event.create('concrete_pizza').displayName('Concrete Pizza').tag('c:foods');

    event
        .create('concrete_pizza_slice')
        .displayName('Concrete Pizza Slice')
        .tag('c:foods')
        .food((f) => {
            f.nutrition(12).saturation(0.5);
        });

    event
        .create('bepsi')
        .displayName('Can of Bepsi')
        .tag('c:foods')
        .tag('c:drinks')
        .food((f) => {
            f.nutrition(6).saturation(0.4);
        })
        .useAnimation('drink');

    event
        .create('coke_cola')
        .displayName('Coke-a Coal-a')
        .tag('c:foods')
        .tag('c:drinks')
        .food((f) => {
            f.nutrition(10).saturation(0.5);
        })
        .useAnimation('drink');

    event
        .create('greg_cola')
        .displayName('Greg Cola')
        .tag('c:foods')
        .tag('c:drinks')
        .food((f) => {
            f.nutrition(6).saturation(0.5);
        })
        .useAnimation('drink');

    event
        .create('bottle_cap')
        .displayName('Bottle Cap')
        .rarity('Epic')
        .tooltip('§aSome far-off land might have')
        .tooltip('§aused this as currency');

    event
        .create('nuka_cola')
        .displayName('Nuka Cola')
        .tag('c:foods')
        .tag('c:drinks')
        .food((f) => {
            f.nutrition(16).saturation(0.5);
        })
        .useAnimation('drink');

    event
        .create('missing_texture_cookie')
        .displayName('Missing Texture Cookie')
        .tag('c:foods')
        .food((f) => {
            f.nutrition(30).saturation(0.7);
        });

    event
        .create('abs_building_brick')
        .displayName('Legally Nondescript ABS Building Brick')
        .tag('c:foods')
        .food((f) => {
            f.nutrition(8).saturation(0.6);
        });
});
