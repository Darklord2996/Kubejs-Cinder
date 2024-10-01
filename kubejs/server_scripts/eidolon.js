ServerEvents.recipes(event => {
    event.custom({
        "type": "eidolon:crucible",
        "steps": [
          {
            "items": [
              { "item": "minecraft:andesite" }
            ]
          },
          {
            "stirs": 1,
            "items": [
              { "tag": "kubejs:andesite_alloy_nuggets" }
            ]
          },
          {
            "stirs": 1,
            "items": [
              { "item": "minecraft:andesite" }
            ]
          },
          {
            "stirs": 1,
            "items": [
              { "tag": "kubejs:andesite_alloy_nuggets" }
            ]
          }
        ],
        "result": {
          "item": "create:andesite_alloy"
        }
      })
    event.custom({
        "type": "eidolon:crucible",
        "steps": [
          {
            "items": [
              { "item": "minecraft:andesite" }
            ]
          },
          {
            "stirs": 2,
            "items": [
              { "tag": "kubejs:andesite_alloy_nuggets" }
            ]
          },
          {
            "stirs": 2,
            "items": [
              { "item": "minecraft:andesite" }
            ]
          },
          {
            "stirs": 2,
            "items": [
              { "tag": "kubejs:andesite_alloy_nuggets" }
            ]
          }
        ],
        "result": {
          "item": "create:andesite_alloy",
          "count": 2
        }
      })
      event.custom({
        "type": "eidolon:crucible",
        "steps": [
          {
            "items": [
              { "item": "minecraft:raw_iron" }
            ]
          },
          {
            "stirs": 1,
            "items": [
              { "item": "create:raw_zinc" }
            ]
          },
          {
            "stirs": 1,
            "items": [
              { "item": "minecraft:raw_iron" }
            ]
          },
          {
            "stirs": 1,
            "items": [
              { "item": "create:raw_zinc" }
            ]
          }
        ],
        "result": {
          "item": "eidolon:raw_lead",
          "count": 4
        }
      })
      event.custom({
        "type": "eidolon:crucible",
        "steps": [
          {
            "items": [
              { "tag": "botania:petals" }
            ]
          },
          {
            "stirs": 1,
            "items": [
              { "item": "minecraft:cobblestone" }
            ]
          },
          {
            "stirs": 1,
            "items": [
              { "item": "minecraft:cobblestone" }
            ]
          },
          {
            "stirs": 1,
            "items": [
              { "item": "minecraft:cobblestone" }
            ]
          },
          {
            "stirs": 1,
            "items": [
              { "item": "minecraft:cobblestone" }
            ]
          }
        ],
        "result": {
          "item": "botania:apothecary_default",
          "count": 1
        }
      })
})
