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
        .tooltip('§6A tasty snack for a hard working industrialist')
        .food((f) => {
            f.nutrition(6).saturation(0.6);
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
        .tooltip('§3Part of a §obalanced§r§3 diet')
        .food((f) => {
            f.nutrition(14).saturation(0.5).effect('regeneration', 200, 0, 1);
        });

    event
        .create('uranium_cereal')
        .rarity('Rare')
        .tag('c:foods')
        .tooltip('§bTons of calories!')
        .maxStackSize(1)
        .food((f) => {
            f.nutrition(20).saturation(0.5);
        });

    event
        .create('pizza_dough')
        .tag('c:foods')
        .food((f) => {
            f.nutrition(2).saturation(0.4);
        });

    event
        .create('uncooked_pizza')
        .tag('c:foods');
    event
        .create('pizza')
        .tag('c:foods');

    event
        .create('pizza_slice')
        .tag('c:foods')
        .food((f) => {
            f.nutrition(8).saturation(0.6);
        });

    event
        .create('concrete_pizza')
        .tag('c:foods');

    event
        .create('concrete_pizza_slice')
        .tag('c:foods')
        .food((f) => {
            f.nutrition(12).saturation(0.5);
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
        .food((f) => {
            f.nutrition(30).saturation(0.7);
        });

    event
        .create('abs_building_brick')
        .tag('c:foods')
        .food((f) => {
            f.nutrition(8).saturation(0.6);
        });

    event
        .create('fruity_pebbles')
        .displayName('Fruity Pebbles')
        .tag('c:foods')
        .tooltip('§bTasty!')
        .maxStackSize(1)
        .food((f) => {
            f.nutrition(8).saturation(0.5);
        });
});
