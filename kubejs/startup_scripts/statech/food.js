// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

const $ServerPlayer = Java.loadClass('net.minecraft.server.level.ServerPlayer');

StartupEvents.registry('item', (event) => {
    event
        .create('concrete_bar')
        .rarity('Uncommon')
        .tag('c:foods')
        .tag(fd('snacks'))
        .tooltip('§6A tasty snack for a hard working industrialist')
        .food((f) => {
            f.nutrition(6).saturation(0.6).effect(fd('nourishment'), 600, 0, 1);
        });

    event
        .create('statech_energy')
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
        .tag('c:foods')
        .tag('c:drinks')
        .food((f) => {
            f.nutrition(3).saturation(0.2).effect('poison', 200, 0, 1);
        })
        .useAnimation('drink');

    event
        .create('concrete_and_clay_steak')
        .rarity('Epic')
        .tag('c:foods')
        .tag(fd('meals'))
        .tooltip('§3Part of a §obalanced§r§3 diet')
        .food((f) => {
            f.nutrition(14)
                .saturation(0.5)
                .effect('regeneration', 200, 0, 1)
                .effect(fd('nourishment'), 6000, 0, 1);
        });

    event
        .create('uranium_cereal')
        .rarity('Rare')
        .tag('c:foods')
        .tag(fd('meals'))
        .tooltip('§bTons of calories!')
        .maxStackSize(1)
        .food((f) => {
            f.nutrition(20)
                .saturation(0.5)
                .effect(fd('nourishment'), 6000, 0, 1);
        });

    event
        .create('pizza_dough')
        .tag('c:foods')
        .food((f) => {
            f.nutrition(2).saturation(0.4);
        });

    event.create('uncooked_pizza').tag('c:foods');
    event.create('pizza').tag('c:foods').tag('c:foods/pizza');

    event
        .create('pizza_slice')
        .tag('c:foods')
        .tag('c:foods/pizza')
        .tag(fd('snacks'))
        .food((f) => {
            f.nutrition(8)
                .saturation(0.6)
                .effect(fd('nourishment'), 1200, 0, 1);
        });

    event.create('concrete_pizza').tag('c:foods').tag('c:foods/pizza');

    event
        .create('concrete_pizza_slice')
        .tag('c:foods')
        .tag('c:foods/pizza')
        .tag(fd('snacks'))
        .food((f) => {
            f.nutrition(12)
                .saturation(0.5)
                .effect(fd('nourishment'), 1200, 0, 1);
        });

    event
        .create('bepsi')
        .tag('c:foods')
        .tag('c:drinks')
        .food((f) => {
            f.nutrition(6).saturation(0.4);
        })
        .useAnimation('drink');

    event
        .create('coke_cola')
        .tag('c:foods')
        .tag('c:drinks')
        .food((f) => {
            f.nutrition(10).saturation(0.5);
        })
        .useAnimation('drink');

    event
        .create('greg_cola')
        .tag('c:foods')
        .tag('c:drinks')
        .food((f) => {
            f.nutrition(6).saturation(0.5);
        })
        .finishUsing(
            /** @param {$ServerPlayer} entity*/
            (itemstack, level, entity) => {
                level.explode(
                    null,
                    null,
                    null,
                    [entity.getX(), entity.getY(), entity.getZ()],
                    3,
                    false,
                    'none'
                );
                itemstack.consume(1, entity);
                entity.addItem(Item.of(ei('tin_can')));
                return itemstack;
            }
        )
        .useAnimation('drink');

    event
        .create('bottle_cap')
        .rarity('Epic')
        .tooltip('§aSome far-off land might have')
        .tooltip('§aused this as currency');

    event
        .create('nuka_cola')
        .tag('c:foods')
        .tag('c:drinks')
        .food((f) => {
            f.nutrition(16).saturation(0.5);
        })
        .useAnimation('drink');

    event
        .create('missing_texture_cookie')
        .tag('c:foods')
        .tag('c:foods/cookie')
        .tag(fd('sweets'))
        .food((f) => {
            f.nutrition(30)
                .saturation(0.7)
                .effect(fd('nourishment'), 3600, 0, 1);
        });

    event
        .create('abs_building_brick')
        .tag('c:foods')
        .tag(fd('snacks'))
        .food((f) => {
            f.nutrition(8).saturation(0.6);
        });

    event
        .create('fruity_pebbles')
        .tag('c:foods')
        .tag(fd('meals'))
        .tooltip('§bTasty!')
        .maxStackSize(1)
        .food((f) => {
            f.nutrition(14)
                .saturation(0.75)
                .effect(fd('nourishment'), 1200, 0, 1);
        });

    event
        .create('poutine_basket')
        .tag('c:foods')
        .tag(fd('meals'))
        .tooltip('§bThank you Canada!')
        .maxStackSize(1)
        .food((f) => {
            f.nutrition(12)
                .saturation(0.5)
                .effect(fd('nourishment'), 6000, 0, 1);
        });

    event
        .create('fries')
        .tag('c:foods')
        .tag(fd('snacks'))
        .food((f) => {
            f.nutrition(4).saturation(0.25);
        });

    event
        .create('gravy_bucket')
        .tag('c:foods')
        .tag('c:drinks')
        .tag(fd('snacks'))
        .food((f) => {
            f.nutrition(1).saturation(0.25).effect('slowness', 300, 1, 1);
        })
        .useAnimation('drink');
});
