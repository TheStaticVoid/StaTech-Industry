// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

StartupEvents.registry('item', e => {
    e.create('empty_can')
        .displayName('Empty Can');

    e.create('concrete_bar')
        .displayName('Yummy Concrete Bar')
        .rarity('Uncommon')
        .tooltip('§6A tasty snack for a hard working industrialist')
        .food(f => {
            f
            .hunger(6)
            .saturation(0.6);
        });
    
    e.create('statech_energy')
        .displayName('StaTech Energy')
        .rarity('Rare')
        .tooltip('§eUnleash the Greg')
        .food(f => {
            f
            .hunger(6)
            .saturation(0.4)
            .effect('speed', 60 * 20, 0, 1);
        })
        .useAnimation('drink');
    
    e.create('sulfuric_acid_bottle')
        .displayName('Bottle of Sulfuric Acid')
        .food(f => {
            f
            .hunger(3)
            .saturation(0.2)
            .effect('poison', 200, 0, 1);
        })
        .useAnimation('drink');

    e.create('concrete_and_clay_steak')
        .displayName('Concrete Steak with Clay Sauce')
        .rarity('Epic')
        .tooltip('§3Part of a §obalanced§r§3 diet')
        .food(f => {
            f
            .hunger(14)
            .saturation(0.5)
            .effect('regeneration', 200, 0, 1);
        });
    

    e.create('uranium_cereal')
        .displayName('Uranium Cereal')
        .rarity('Rare')
        .tooltip('§bTons of calories!')
        .maxStackSize(1)
        .food(f => {
            f
            .hunger(20)
            .saturation(0.5)
        });

    e.create('pizza_dough')
        .displayName('Pizza Dough')
        .food(f => {
            f
            .hunger(2)
            .saturation(0.4)
            .effect('hunger', 200, 0, 1)
        });
    
    e.create('uncooked_pizza').displayName('Uncooked Pizza');
    e.create('pizza').displayName('Pizza');

    e.create('pizza_slice')
        .displayName('Pizza Slice')
        .food(f => {
            f
            .hunger(8)
            .saturation(0.6);
        });
    e.create('pineapple_pizza_slice')
        .displayName('Pineapple Pizza Slice')
        .food(f => {
            f
            .hunger(10)
            .saturation(0.6);
        });
    
    e.create('concrete_pizza').displayName('Concrete Pizza');

    e.create('concrete_pizza_slice')
        .displayName('Concrete Pizza Slice')
        .food(f => {
            f
            .hunger(12)
            .saturation(0.5);
        });
    e.create('concrete_pineapple_pizza_slice')
        .displayName('Concrete Pineapple Pizza Slice')
        .food(f => {
            f
            .hunger(16)
            .saturation(0.6);
        });
    
    e.create('bepsi')
        .displayName('Can of Bepsi')
        .food(f => {
            f
            .hunger(6)
            .saturation(0.4)
        })
        .useAnimation('drink');
    
    e.create('coke_cola')
        .displayName('Coke-a Coal-a')
        .food(f => {
            f
            .hunger(10)
            .saturation(0.5)
        })
        .useAnimation('drink');
    
    e.create('greg_cola')
        .displayName('Greg Cola')
        .food(f => {
            f
            .hunger(6)
            .saturation(0.5)
        })
        .useAnimation('drink');
    

    e.create('bottle_cap')
        .displayName('Bottle Cap')
        .rarity('Epic')
        .tooltip('§aSome far-off land might have\nused this as currency');

    e.create('nuka_cola')
        .displayName('Nuka Cola')
        .food(f => {
            f
            .hunger(16)
            .saturation(0.5)
        })
        .useAnimation('drink');

    e.create('missing_texture_cookie')
        .displayName('Missing Texture Cookie')
        .food(f => {
            f
            .hunger(30)
            .saturation(0.7)
        });
});