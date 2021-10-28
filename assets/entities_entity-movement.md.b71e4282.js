import{o as e,c as t,a as n}from"./404.md.d19efad2.js";const r='{"title":"Entity Movement","description":"","frontmatter":{"title":"Entity Movement"},"headers":[{"level":2,"title":"Movement Speed","slug":"movement-speed"},{"level":2,"title":"Movement Type","slug":"movement-type"},{"level":2,"title":"Movement Modifiers","slug":"movement-modifiers"},{"level":2,"title":"Navigation","slug":"navigation"},{"level":2,"title":"Navigation Abilities","slug":"navigation-abilities"},{"level":2,"title":"AI","slug":"ai"}],"relativePath":"entities/entity-movement.md","lastUpdated":1635441723612}',o={},a=n('<p>Entity movement is a confusing subject, with many pieces that must be done correctly, or your entity will not move. The following is required:</p><ul><li><a href="#movement-speed">Movement Speed</a></li><li><a href="#movement-type">Movement Type</a></li><li><a href="#movement-modifiers">Movement Modifiers</a></li><li><a href="#navigation">Navigation</a></li><li><a href="#navigation-abilities">Navigation Abilities</a></li><li><a href="#ai">AI</a></li></ul><h2 id="movement-speed"><a class="header-anchor" href="#movement-speed" aria-hidden="true">#</a> Movement Speed</h2><p>The first thing your entity needs is a speed component. This sets how quickly your entity will move through the world.</p><table><thead><tr><th>Component</th><th>Note</th></tr></thead><tbody><tr><td>minecraft:movement</td><td>Set movement speed on land.</td></tr><tr><td>minecraft:underwater_movement</td><td>Set movement speed in the water.</td></tr><tr><td>minecraft:flying_speed</td><td>Set the speed in the air.</td></tr></tbody></table><p>You should always include <code>minecraft:movement</code>. Add the other two as needed.</p><p>All vanilla swimming&quot; entities like Dolphin include <code>underwater_movement</code>. Only some flying entities have <code>flying_speed</code>. It is not known why this is the case.</p><h2 id="movement-type"><a class="header-anchor" href="#movement-type" aria-hidden="true">#</a> Movement Type</h2><p>Your entity will also need a movement type. Movement types set hard-coded behavior for <em>how</em> your entity will move through the world.</p><p>You may only include one movement type in your entity. Select the component that most closely matches your needs.</p><table><thead><tr><th>Component</th><th>Note</th></tr></thead><tbody><tr><td><a href="https://bedrock.dev/docs/stable/Entities#minecraft%3Amovement.amphibious" target="_blank" rel="noopener noreferrer">minecraft:movement.amphibious</a></td><td>This move control allows the mob to swim in the water and walk on land.</td></tr><tr><td><a href="https://bedrock.dev/docs/stable/Entities#minecraft%3Amovement.basic" target="_blank" rel="noopener noreferrer">minecraft:movement.basic</a></td><td>This component accents the movement of an entity.</td></tr><tr><td><a href="https://bedrock.dev/docs/stable/Entities#minecraft%3Amovement.fly" target="_blank" rel="noopener noreferrer">minecraft:movement.fly</a></td><td>This move control causes the mob to fly.</td></tr><tr><td><a href="https://bedrock.dev/docs/stable/Entities#minecraft%3Amovement.generic" target="_blank" rel="noopener noreferrer">minecraft:movement.generic</a></td><td>This move control allows a mob to fly, swim, climb, etc.</td></tr><tr><td><a href="https://bedrock.dev/docs/stable/Entities#minecraft%3Amovement.hover" target="_blank" rel="noopener noreferrer">minecraft:movement.hover</a></td><td>This move control causes the mob to hover.</td></tr><tr><td><a href="https://bedrock.dev/docs/stable/Entities#minecraft%3Amovement.jump" target="_blank" rel="noopener noreferrer">minecraft:movement.jump</a></td><td>Move control causes the mob to jump as it moves with a specified delay between jumps.</td></tr><tr><td><a href="https://bedrock.dev/docs/stable/Entities#minecraft%3Amovement.skip" target="_blank" rel="noopener noreferrer">minecraft:movement.skip</a></td><td>This move control causes the mob to hop as it moves.</td></tr><tr><td><a href="https://bedrock.dev/docs/stable/Entities#minecraft%3Amovement.sway" target="_blank" rel="noopener noreferrer">minecraft:movement.sway</a></td><td>This move control causes the mob to sway side to side, giving the impression it is swimming.</td></tr></tbody></table><h2 id="movement-modifiers"><a class="header-anchor" href="#movement-modifiers" aria-hidden="true">#</a> Movement Modifiers</h2><p>Movement modifiers provide additional information about how your entity will move through the world.</p><table><thead><tr><th>Component</th><th>Note</th></tr></thead><tbody><tr><td><a href="https://bedrock.dev/docs/stable/Entities#minecraft%3Awater_movement" target="_blank" rel="noopener noreferrer">minecraft:water_movement</a></td><td>Sets the friction the entity experiences in water.</td></tr><tr><td><a href="https://bedrock.dev/docs/stable/Entities#minecraft%3Arail_movement" target="_blank" rel="noopener noreferrer">minecraft:rail_movement</a></td><td>Sets that the entity can move on rails (only).</td></tr><tr><td><a href="https://bedrock.dev/docs/stable/Entities#minecraft%3Afriction_modifier" target="_blank" rel="noopener noreferrer">minecraft:friction_modifier</a></td><td>Sets the friction the entity experiences on land.</td></tr></tbody></table><h2 id="navigation"><a class="header-anchor" href="#navigation" aria-hidden="true">#</a> Navigation</h2><p>The next thing your entity needs is a navigation component. Navigation components have quite a few fields, like whether the entity can open doors or avoid sunlight. How you set these fields is generally more important than the navigation component you pick.</p><p>The reason there are so many navigation components is that each one gives a slightly different hard-coded behavior. Pick the navigation component whose name/description best matches the kind of navigation your entity will be doing.</p><p>You can only have one navigation component at any given time.</p><table><thead><tr><th>Component</th><th>Note</th></tr></thead><tbody><tr><td><a href="https://bedrock.dev/docs/stable/Entities#minecraft%3Anavigation.climb" target="_blank" rel="noopener noreferrer">minecraft:navigation.climb</a></td><td>Allows this entity to generate paths that include vertical walls like the vanilla Spiders do.</td></tr><tr><td><a href="https://bedrock.dev/docs/stable/Entities#minecraft%3Anavigation.float" target="_blank" rel="noopener noreferrer">minecraft:navigation.float</a></td><td>Allows this entity to generate paths by flying around the air like the regular Ghast.</td></tr><tr><td><a href="https://bedrock.dev/docs/stable/Entities#minecraft%3Anavigation.generic" target="_blank" rel="noopener noreferrer">minecraft:navigation.generic</a></td><td>Allows this entity to generate paths by walking, swimming, flying and climbing around, and jumping up and down a block.</td></tr><tr><td><a href="https://bedrock.dev/docs/stable/Entities#minecraft%3Anavigation.fly" target="_blank" rel="noopener noreferrer">minecraft:navigation.fly</a></td><td>Allows this entity to generate paths in the air as the vanilla Parrots do.</td></tr><tr><td><a href="https://bedrock.dev/docs/stable/Entities#minecraft%3Anavigation.swim" target="_blank" rel="noopener noreferrer">minecraft:navigation.swim</a></td><td>Allows this entity to generate paths that include water.</td></tr><tr><td><a href="https://bedrock.dev/docs/stable/Entities#minecraft%3Anavigation.walk" target="_blank" rel="noopener noreferrer">minecraft:navigation.walk</a></td><td>Allows this entity to generate paths by walking around and jumping up and down a block like regular mobs.</td></tr></tbody></table><h2 id="navigation-abilities"><a class="header-anchor" href="#navigation-abilities" aria-hidden="true">#</a> Navigation Abilities</h2><p>On top of the movement and the navigation component, there exist many additional components to augment the abilities of your entity as they move through the world.</p><table><thead><tr><th>Component</th><th>Note</th></tr></thead><tbody><tr><td><a href="https://bedrock.dev/docs/stable/Entities#minecraft%3Aannotation.break_door" target="_blank" rel="noopener noreferrer">minecraft:annotation.break_door</a></td><td>Allows entity to break doors. It must also be turned on in the navigation component.</td></tr><tr><td><a href="https://bedrock.dev/docs/stable/Entities#minecraft%3Aannotation.open_door" target="_blank" rel="noopener noreferrer">minecraft:annotation.open_door</a></td><td>Allows entity to open doors. It must also be turned on in the navigation component.</td></tr><tr><td><a href="https://bedrock.dev/docs/stable/Entities#minecraft%3Abuoyant" target="_blank" rel="noopener noreferrer">minecraft:buoyant</a></td><td>Specify which liquids the entity can float in.</td></tr><tr><td><a href="https://bedrock.dev/docs/stable/Entities#minecraft%3Acan_climb" target="_blank" rel="noopener noreferrer">minecraft:can_climb</a></td><td>Allows this entity to climb up ladders.</td></tr><tr><td><a href="https://bedrock.dev/docs/stable/Entities#minecraft%3Acan_fly" target="_blank" rel="noopener noreferrer">minecraft:can_fly</a></td><td>Marks the entity as being able to fly. The pathfinder won&#39;t be restricted to paths where a solid block is required underneath it.</td></tr><tr><td><a href="https://bedrock.dev/docs/stable/Entities#minecraft%3Acan_power_jump" target="_blank" rel="noopener noreferrer">minecraft:can_power_jump</a></td><td>Allows the entity to power jump like the horse does in vanilla.</td></tr><tr><td><a href="https://bedrock.dev/docs/stable/Entities#minecraft%3Afloats_in_liquid" target="_blank" rel="noopener noreferrer">minecraft:floats_in_liquid</a></td><td>Sets that this entity can float in liquid blocks.</td></tr></tbody></table><p>There are also components like <code>minecraft:preferred_path</code>, which will modify navigation based on block-based path-cost.</p><h2 id="ai"><a class="header-anchor" href="#ai" aria-hidden="true">#</a> AI</h2><p>The navigation component tells the entity <em>how</em> to generate paths, but it doesn&#39;t say <em>when</em> or <em>where</em> to generate directions. This is what the AI components are for.</p><p>AI components are prefixed with <code>behavior</code>.</p><p>There are too many AI components that generate paths to list in this document. A few will be provided as examples:</p><table><thead><tr><th>Component</th></tr></thead><tbody><tr><td><a href="https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.random_stroll" target="_blank" rel="noopener noreferrer">minecraft:behavior.random_stroll</a></td></tr><tr><td><a href="https://bedrock.dev/docs/stable/Entities#minecraft%3Abehavior.run_around_like_crazy" target="_blank" rel="noopener noreferrer">minecraft:behavior.run_around_like_crazy</a></td></tr></tbody></table>',28);o.render=function(n,r,o,i,d,s){return e(),t("div",null,[a])};export default o;export{r as __pageData};