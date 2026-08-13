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
     *   @param {?number} ptfe Amount of PTFE needed to craft this ammo (optional)
     *
     * @example
     * ```javascript
     *  Ammo({(item: tz('9mm'), amount: 16)}, mi('lead_ingot), mi('copper_curved_plate'));
     *  Ammo({(item: tz('9mm'), amount: 16)}, mi('lead_ingot), mi('copper_curved_plate'), 10);
     * ```
     */
    function Ammo(output, core, jacket, ptfe) {
        return {
            output: output,
            core: core,
            jacket: jacket,
            ptfe: ptfe,
        };
    }

    // prettier-ignore
    /*     const ammoIngredientList = [
        Ammo(
            { item: Item.of(tz('ammo'), ), amount: 16 },
            mi('lead_ingot'),
            mi('copper_curved_plate')
        ),
    ]; */

    function makeAmmoRecipes(ammo) {
        const outputID = ammo.output.item;

        if (ammo.ptfe != null) {
            assembler(
                event,
                st(`assembler/ammo/${outputID.slice(5, outputID.length)}`),
                8,
                200,
                [
                    { item: ammo.core, amount: 2 },
                    { item: ammo.jacket, amount: 4 },
                ],
                [ammo.output],
                [{ amount: ammo.ptfe, fluid: mi('polytetrafluoroethylene') }]
            );
        } else {
            assembler(
                event,
                st(`assembler/ammo/${outputID.slice(5, outputID.length)}`),
                8,
                200,
                [
                    { item: ammo.core, amount: 2 },
                    { item: ammo.jacket, amount: 4 },
                ],
                [ammo.output]
            );
        }
    }

    //ammoIngredientList.forEach((ammo) => makeAmmoRecipes(ammo));
});
