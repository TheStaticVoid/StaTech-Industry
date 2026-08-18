// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY 2
// -----------------------------------------

ItemEvents.modifyTooltips(event => {
    const SHIFT_LABEL = Text.yellow('Hold SHIFT to view deposit info');

    const ORES_WITH_VEIN = [
        '#c:ores/iron'
    ];
    ORES_WITH_VEIN.forEach(id => {
        event.modify(id, {shift: false}, (tooltip) => tooltip.add(SHIFT_LABEL));
    });
});