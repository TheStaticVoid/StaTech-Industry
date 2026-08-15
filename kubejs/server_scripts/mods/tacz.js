// -----------------------------------------
// CREATED BY GRONK FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

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

    // ---------------------//
    // ------ SHAPED ------ //
    // ---------------------//

    // --------------------//
    // ---- ASSEMBLER ---- //
    // --------------------//

    /**
     *   @param {MIItem} output MIItem object containing the namespaced output identifier and quantity produced
     *   @param {string} core Namespaced identifier of this ammo's core material
     *   @param {string} jacket Namespaced identifier of this ammo's jacket material
     *   @param {number} gunpowder Amount of gunpowder needed to craft this ammo
     *   @param {?number} ptfe Amount of PTFE needed to craft this ammo (optional)
     *
     * @example
     * ```javascript
     *  Ammo(Item.of(tz('ammo'), 16).set(mc('custom_data'), '{AmmoId:"tacz:9mm"}'), mi('lead_ingot), mi('copper_curved_plate'));
     *  Ammo(Item.of(tz('ammo'), 16).set(mc('custom_data'), '{AmmoId:"tacz:9mm"}'), amount: 16)}, mi('lead_ingot), mi('copper_curved_plate'), 10);
     * ```
     */
    function Ammo(output, core, jacket, gunpowder, ptfe) {
        return {
            output: output,
            core: core,
            jacket: jacket,
            gunpowder: gunpowder,
            ptfe: ptfe,
        };
    }

    // prettier-ignore
    const ammoIngredientList = [
        Ammo(
            Item.of(tz('ammo'), 24).set(mc('custom_data'), '{AmmoId:"tacz:9mm"}'),
            mi('lead_nugget'),
            mi('copper_curved_plate'),
            1
        ),
    ];

    function makeAmmoRecipes(ammo) {
        const outputID = ammo.output
            .get(mc('custom_data'))
            .copyTag()
            .getString('AmmoId');

        const outputString = String(outputID).slice(5);

        if (ammo.ptfe !== undefined) {
            event.recipes.modern_industrialization
                .assembler(8, 200)
                .itemIn('4x ' + ammo.core)
                .itemIn('2x ' + ammo.jacket)
                .itemIn(ammo.gunpowder + 'x ' + mc('gunpowder'))
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
