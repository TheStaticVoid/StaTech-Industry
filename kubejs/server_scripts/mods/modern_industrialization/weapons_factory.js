// -----------------------------------------
// CREATED BY GRONK FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

ServerEvents.recipes((event) => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- //
    let st = (id) => `statech:modern_industrialization/weapons_factory/${id}`;

    /**
     *   @param {ItemStack} output ItemStack object containing the namespaced output identifier and quantity produced
     *   @param {string} baseMetal Namespaced identifier of this attachment's base material
     *   @param {ItemStack} augmentOne ItemStack object containing the namespaced augment identifier and quantity required
     *   @param {?ItemStack} augmentTwo ItemStack object containing the namespaced augment identifier and quantity required (optional)
     *   @param {?ItemStack} augmentThree ItemStack object containing the namespaced augment identifier and quantity required (optional)
     *   @param {?number} ptfe Amount of PTFE needed to craft this attachment (optional)
     *
     * @example
     * ```javascript
     *  Attachment(Item.of(tz('attachment')).set(mc('custom_data'), '{AttachmentId:"tacz:sight_acro_pistol"}'), mi('steel_plate), '2x ' + mc('redstone'));
     *  Attachment(Item.of(tz('attachment')).set(mc('custom_data'), '{AttachmentId:"tacz:sight_acro_pistol"}'), mi('steel_plate), '2x ' + mc('redstone'), '4x ' + mc('leather'));
     *  Attachment(Item.of(tz('attachment')).set(mc('custom_data'), '{AttachmentId:"tacz:sight_acro_pistol"}'), mi('steel_plate), '2x ' + mc('redstone'), '4x ' + mc('leather'), '2x #c:glass_panes');
     *  Attachment(Item.of(tz('attachment')).set(mc('custom_data'), '{AttachmentId:"tacz:sight_acro_pistol"}'), mi('steel_plate), '2x ' + mc('redstone'), '4x ' + mc('leather'), '2x #c:glass_panes', 100);
     * ```
     */
    let Attachment = (
        output,
        baseMetal,
        augmentOne,
        augmentTwo,
        augmentThree,
        ptfe
    ) => {
        let newAttachment = {
            output: output,
            baseMetal: baseMetal,
            augmentOne: augmentOne,
        };
        if (augmentTwo) newAttachment['augmentTwo'] = augmentTwo;
        if (augmentThree) newAttachment['augmentThree'] = augmentThree;
        if (ptfe) newAttachment['ptfe'] = ptfe;
        return newAttachment;
    };

    const attachmentIngredientList = [
        Attachment(
            Item.of(tz('attachment'), 1).set(
                mc('custom_data'),
                '{AttachmentId:"tacz:sight_acro_pistol"}'
            ),
            mi('steel_plate'),
            '2x ' + mc('redstone'),
            '2x #c:glass_panes',
            '4x ' + mc('leather')
        ),
    ];

    function makeAttachmentRecipes(attachment) {
        const outputID = attachment.output
            .get(mc('custom_data'))
            .copyTag()
            .getString('AttachmentId');

        const outputString = String(outputID).slice(5);
        console.log(outputString);

        if (attachment.ptfe !== undefined) {
            event.recipes.modern_industrialization
                .weapons_factory(32, 400)
                .itemIn('4x ' + attachment.baseMetal)
                .itemIn(attachment.augmentOne)
                .itemIn(attachment.augmentTwo)
                .itemIn(attachment.augmentThree)
                .itemOut(attachment.output)
                .fluidIn(attachment.ptfe + 'x ' + mi('polytetrafluoroethylene'))
                .id(st(`assembler/attachment/${outputString}`));
        } else {
            event.recipes.modern_industrialization
                .weapons_factory(32, 400)
                .itemIn('4x ' + attachment.baseMetal)
                .itemIn(attachment.augmentOne)
                .itemIn(attachment.augmentTwo)
                .itemIn(attachment.augmentThree)
                .itemOut(attachment.output)
                .id(st(`assembler/attachment/${outputString}`));
        }
    }

    attachmentIngredientList.forEach((attachment) =>
        makeAttachmentRecipes(attachment)
    );
});
