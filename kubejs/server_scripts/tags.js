ServerEvents.tags("item", event => {
    event.add("kubejs:andesite_alloy_nuggets", "minecraft:iron_nugget")
    event.add("kubejs:andesite_alloy_nuggets", "create:zinc_nugget")


    event.add("minecraft:swords", /.*:*staff/)

    event.add("bloodmagic:orbs", /bloodmagic:.+bloodorb/)

    
})

ServerEvents.tags("entity_type", event => {
    event.removeAll("create:blaze_burner_capturable")
    
    
})
