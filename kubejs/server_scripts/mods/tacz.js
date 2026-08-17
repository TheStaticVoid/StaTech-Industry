// -----------------------------------------
// CREATED BY GRONK FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------
ServerEvents.tags('item', (event) => {
    const EXPLOSIVES = [
        mc('tnt'),
        mi('industrial_tnt'),
        ae('tiny_tnt'),
        su('bomb'),
        su('bomb_blue'),
        nm('firebomb'),
        sp('pipe_bomb'),
    ];
    EXPLOSIVES.forEach((id) => {
        event.add('kubejs:explosives', id);
    });
});
ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:tacz/${id}`;

    // -- TACZ REMOVED RECIPES -- //
    const TACZ_REMOVED_RECIPES = [
        tz('gun_smith_table'),
        tz('attachment_workbench'),
        tz('ammo_workbench'),
    ];
    TACZ_REMOVED_RECIPES.forEach((id) => event.remove({ id: id }));

    //event.remove({ type: tz('gun_smith_table_crafting') });

    // --------------------//
    // ---- ASSEMBLER ---- //
    // --------------------//

    /**
     *   @param {MIItem} output MIItem object containing the namespaced output identifier and quantity produced
     *   @param {string} core Namespaced identifier of this ammo's core material
     *   @param {string} jacket Namespaced identifier of this ammo's jacket material
     *   @param {number} gunpowder Amount of gunpowder needed to craft this ammo
     *   @param {?number} ptfe Amount of PTFE needed to craft this ammo (optional)
     *   @param {?number} explosive Amount of items in the "#kubejs:explosives" tag needed to craft this ammo (optional)
     *
     * @example
     * ```javascript
     *  Ammo(Item.of(tz('ammo'), 16).set(mc('custom_data'), '{AmmoId:"tacz:9mm"}'), mi('lead_ingot), mi('copper_curved_plate'), 2);
     *  Ammo(Item.of(tz('ammo'), 16).set(mc('custom_data'), '{AmmoId:"tacz:9mm"}'), amount: 16)}, mi('lead_ingot), mi('copper_curved_plate'), 2, 10);
     *  Ammo(Item.of(tz('ammo'), 16).set(mc('custom_data'), '{AmmoId:"tacz:9mm"}'), amount: 16)}, mi('lead_ingot), mi('copper_curved_plate'), 2, 10, 5);
     * ```
     */
    function Ammo(output, core, jacket, gunpowder, ptfe, explosive) {
        return {
            output: output,
            core: core,
            jacket: jacket,
            gunpowder: gunpowder,
            ptfe: ptfe,
            explosive: explosive,
        };
    }

    const ammoIngredientList = [
        Ammo(
            Item.of(tz('ammo'), 24).set(
                mc('custom_data'),
                '{AmmoId:"tacz:9mm"}'
            ),
            mi('lead_nugget'),
            mi('copper_curved_plate'),
            1
        ),

        Ammo(
            Item.of(tz('ammo'), 48).set(
                mc('custom_data'),
                '{AmmoId:"tacz:22wmr"}'
            ),
            mi('lead_nugget'),
            mi('copper_curved_plate'),
            1
        ),

        Ammo(
            Item.of(tz('ammo'), 12).set(
                mc('custom_data'),
                '{AmmoId:"tacz:45acp"}'
            ),
            mi('lead_nugget'),
            mi('copper_curved_plate'),
            1
        ),

        Ammo(
            Item.of(tz('ammo'), 24).set(
                mc('custom_data'),
                '{AmmoId:"tacz:762x25"}'
            ),
            mi('lead_nugget'),
            mi('copper_curved_plate'),
            1
        ),

        Ammo(
            Item.of(tz('ammo'), 18).set(
                mc('custom_data'),
                '{AmmoId:"tacz:46x30"}'
            ),
            mi('lead_nugget'),
            mi('copper_curved_plate'),
            1
        ),

        Ammo(
            Item.of(tz('ammo'), 18).set(
                mc('custom_data'),
                '{AmmoId:"tacz:57x28"}'
            ),
            mi('lead_nugget'),
            cr('brass_sheet'),
            1
        ),

        Ammo(
            Item.of(tz('ammo'), 24).set(
                mc('custom_data'),
                '{AmmoId:"tacz:545x39"}'
            ),
            mi('lead_nugget'),
            mi('copper_curved_plate'),
            1
        ),

        Ammo(
            Item.of(tz('ammo'), 24).set(
                mc('custom_data'),
                '{AmmoId:"tacz:556x45"}'
            ),
            mi('lead_nugget'),
            mi('copper_curved_plate'),
            1
        ),

        Ammo(
            Item.of(tz('ammo'), 18).set(
                mc('custom_data'),
                '{AmmoId:"tacz:58x42"}'
            ),
            mi('lead_nugget'),
            mi('copper_curved_plate'),
            1
        ),

        Ammo(
            Item.of(tz('ammo'), 12).set(
                mc('custom_data'),
                '{AmmoId:"tacz:762x39"}'
            ),
            mi('lead_nugget'),
            mi('copper_curved_plate'),
            1
        ),

        Ammo(
            Item.of(tz('ammo'), 24).set(
                mc('custom_data'),
                '{AmmoId:"tacz:762x54"}'
            ),
            mi('lead_nugget'),
            mi('copper_curved_plate'),
            1
        ),

        Ammo(
            Item.of(tz('ammo'), 24).set(
                mc('custom_data'),
                '{AmmoId:"tacz:308"}'
            ),
            mi('lead_nugget'),
            cr('brass_sheet'),
            1
        ),

        Ammo(
            Item.of(tz('ammo'), 18).set(
                mc('custom_data'),
                '{AmmoId:"tacz:792x57"}'
            ),
            mi('lead_nugget'),
            mi('copper_curved_plate'),
            1
        ),

        Ammo(
            Item.of(tz('ammo'), 24).set(
                mc('custom_data'),
                '{AmmoId:"tacz:68x51fury"}'
            ),
            mi('lead_nugget'),
            mi('copper_curved_plate'),
            1
        ),

        Ammo(
            Item.of(tz('ammo'), 24).set(
                mc('custom_data'),
                '{AmmoId:"tacz:357mag"}'
            ),
            mi('lead_nugget'),
            mi('copper_curved_plate'),
            2
        ),

        Ammo(
            Item.of(tz('ammo'), 24).set(
                mc('custom_data'),
                '{AmmoId:"tacz:50ae"}'
            ),
            mi('steel_nugget'),
            cr('brass_sheet'),
            3
        ),

        Ammo(
            Item.of(tz('ammo'), 20).set(
                mc('custom_data'),
                '{AmmoId:"tacz:500mag"}'
            ),
            mi('steel_nugget'),
            cr('brass_sheet'),
            2
        ),

        Ammo(
            Item.of(tz('ammo'), 18).set(
                mc('custom_data'),
                '{AmmoId:"tacz:45_70"}'
            ),
            mi('steel_nugget'),
            cr('brass_sheet'),
            4
        ),

        Ammo(
            Item.of(tz('ammo'), 8).set(
                mc('custom_data'),
                '{AmmoId:"tacz:338"}'
            ),
            mi('steel_nugget'),
            cr('brass_sheet'),
            4,
            25
        ),

        Ammo(
            Item.of(tz('ammo'), 18).set(
                mc('custom_data'),
                '{AmmoId:"tacz:30_06"}'
            ),
            mi('lead_nugget'),
            mi('copper_curved_plate'),
            3
        ),

        Ammo(
            Item.of(tz('ammo'), 8).set(
                mc('custom_data'),
                '{AmmoId:"tacz:50bmg"}'
            ),
            mi('tungsten_nugget'),
            mi('cupronickel_plate'),
            16,
            100
        ),

        Ammo(
            Item.of(tz('ammo'), 18).set(
                mc('custom_data'),
                '{AmmoId:"tacz:12g"}'
            ),
            mi('lead_nugget'),
            mi('steel_nugget'),
            9,
            10
        ),

        Ammo(
            Item.of(tz('ammo'), 4).set(
                mc('custom_data'),
                '{AmmoId:"tacz:40mm"}'
            ),
            mi('lead_nugget'),
            mi('steel_plate'),
            null,
            25,
            4
        ),

        Ammo(
            Item.of(tz('ammo'), 4).set(
                mc('custom_data'),
                '{AmmoId:"tacz:rpg_rocket"}'
            ),
            ca('brass_rod'),
            mi('steel_plate'),
            null,
            100,
            8
        ),
    ];

    function makeAmmoRecipes(ammo) {
        const outputID = ammo.output
            .get(mc('custom_data'))
            .copyTag()
            .getString('AmmoId');

        const outputString = String(outputID).slice(5);

        if (ammo.ptfe != null && ammo.explosive != null) {
            event.recipes.modern_industrialization
                .assembler(8, 200)
                .itemIn('4x ' + ammo.core)
                .itemIn('2x ' + ammo.jacket)
                .itemIn(ammo.explosive + 'x ' + '#kubejs:explosives')
                .itemOut(ammo.output)
                .fluidIn(ammo.ptfe + 'x ' + mi('polytetrafluoroethylene'))
                .id(st(`assembler/ammo/${outputString}`));
        } else {
            event.recipes.modern_industrialization
                .assembler(8, 200)
                .itemIn('4x ' + ammo.core)
                .itemIn('2x ' + ammo.jacket)
                .itemIn(ammo.gunpowder + 'x ' + mc('gunpowder'))
                .itemOut(ammo.output)
                .id(st(`assembler/ammo/${outputString}`));
        }
    }

    ammoIngredientList.forEach((ammo) => makeAmmoRecipes(ammo));
});
