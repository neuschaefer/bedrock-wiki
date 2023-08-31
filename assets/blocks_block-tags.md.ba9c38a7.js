import{_ as t,c as o,a as l,w as p,b as s,d as a,e,r,o as c}from"./404.md.5ed00bb0.js";const S=JSON.parse('{"title":"Block Tags","description":"","frontmatter":{"title":"Block Tags","category":"Documentation","tags":["experimental"],"mentions":["SirLich","yanasakana","aexer0e","SmokeyStack","MedicalJewel105","Luthorius","Chikorita-Lover","victorsigma","TheItsNameless"]},"headers":[{"level":2,"title":"Application","slug":"application","link":"#application","children":[]},{"level":2,"title":"Testing for Tags","slug":"testing-for-tags","link":"#testing-for-tags","children":[]},{"level":2,"title":"Lists of Block Tags","slug":"lists-of-block-tags","link":"#lists-of-block-tags","children":[{"level":3,"title":"Vanilla Tags","slug":"vanilla-tags","link":"#vanilla-tags","children":[]},{"level":3,"title":"Vanilla Block Tags","slug":"vanilla-block-tags","link":"#vanilla-block-tags","children":[]}]}],"relativePath":"blocks/block-tags.md"}'),i={name:"blocks/block-tags.md"},d=s("p",null,[a("Block Tags are used for various block properties. They can be called when testing for block arguments in commands. Some tags are prefixed with "),s("code",null,"can_be"),a(", or "),s("code",null,"can_hurt"),a(". One would expect these to have a boolean response.")],-1),D=s("h2",{id:"application",tabindex:"-1"},[a("Application "),s("a",{class:"header-anchor",href:"#application","aria-hidden":"true"},"#")],-1),F=s("p",null,"Block tags can be applied exactly as items, as seen below:",-1),y=e(`<div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">format_version</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1.20.10</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">minecraft:block</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">description</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">identifier</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">wiki:tree_stump</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">components</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">tag:wood</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">tag:my_lovely_tag</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">tag:wiki:very_useless</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="testing-for-tags" tabindex="-1">Testing for Tags <a class="header-anchor" href="#testing-for-tags" aria-hidden="true">#</a></h2><p>Tags can be queried with:</p><ul><li><code>q.all_tags</code></li><li><code>q.any_tag</code></li><li><code>q.block_has_all_tags</code></li><li><code>q.block_has_any_tag</code></li><li><code>q.block_neighbor_has_all_tags</code></li><li><code>q.block_neighbor_has_any_tag</code></li><li><code>q.relative_block_has_all_tags</code></li><li><code>q.relative_block_has_any_tag</code></li></ul><p>Example of an item querying a block&#39;s tags:</p>`,5),u=e(`<div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">format_version</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1.16.100</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">minecraft:item</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">description</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">identifier</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">wiki:pickaxe</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">category</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">equipment</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">components</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">minecraft:digger</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">use_efficiency</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">destroy_speeds</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#916B53;">speed</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#916B53;">block</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#89DDFF;">&quot;</span><span style="color:#82AAFF;">tags</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">q.any_tag(&#39;wiki_tag&#39;, &#39;stone&#39;, &#39;metal&#39;)</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="lists-of-block-tags" tabindex="-1">Lists of Block Tags <a class="header-anchor" href="#lists-of-block-tags" aria-hidden="true">#</a></h2><h3 id="vanilla-tags" tabindex="-1">Vanilla Tags <a class="header-anchor" href="#vanilla-tags" aria-hidden="true">#</a></h3><p>Vanilla tags can be applied to custom blocks, and some vanilla blocks are tagged internally. This kind of tag doesn&#39;t give blocks vanilla features. The only usage of it is to tag blocks to make them have the same tags as the vanilla blocks for queries or tests.</p><table><thead><tr><th>Tag</th><th>Vanilla Usage</th></tr></thead><tbody><tr><td>wood</td><td>Oak Trapdoor, Spruce Trapdoor, Birch Trapdoor, Jungle Trapdoor, Acacia Trapdoor, Dark Oak Trapdoor, Oak Door, Spruce Door, Birch Door, Jungle Door, Acacia Door, Dark Oak Door, Oak Fence, Spruce Fence, Birch Fence, Jungle Fence, Acacia Fence, Dark Oak Fence, Oak Fence Gate, Spruce Fence Gate, Birch Fence Gate, Jungle Fence Gate, Acacia Fence Gate, Dark Oak Fence Gate, Oak Log, Spruce Log, Birch Log, Jungle Log, Acacia Log, Dark Oak Log, Oak Planks, Spruce Planks, Birch Planks, Jungle Planks, Acacia Planks, Dark Oak Planks, Oak Slab, Spruce Slab, Birch Slab, Jungle Slab, Acacia Slab, Dark Oak Slab, Oak Stairs, Spruce Stairs, Birch Stairs, Jungle Stairs, Acacia Stairs, Dark Oak Stairs, Oak Sign, Spruce Sign, Birch Sign, Jungle Sign, Acacia Sign, Dark Oak Sign, Oak Pressure Plate, Spruce Pressure Plate, Birch Pressure Plate, Jungle Pressure Plate, Acacia Pressure Plate, Dark Oak Pressure Plate, Smithing Table, Fletching Table, Barrel, Beehive, Bee Nest, Ladder</td></tr><tr><td>pumpkin</td><td>Pumpkin, Carved Pumpkin, Jack o&#39;Lantern</td></tr><tr><td>plant</td><td>Tall Grass, Large Fern, Sunflower, Lilac, Rose Bush, Peony, Oak Sapling, Oak Sapling, Spruce Sapling, Birch Sapling, Jungle Sapling, Acacia Sapling, Dark Oak Sapling</td></tr><tr><td>stone</td><td>Stone, Cobblestone, Mossy Cobblestone, Dripstone Block, Bricks, Cobblestone Stairs, Smooth Stone Slab, Sandstone Slab, Cobblestone Slab, Brick Slab, Stone Bricks Slab, Quartz Slab, Nether Brick Slab, Cobblestone Wall, Mossy Cobblestone Wall, Stone Brick Wall, Mossy Stone Brick Wall, Andesite Wall, Diorite Wall, Granite Wall, Sandstone Wall, Red Sandstone Wall, Brick Wall, Prismarine Wall, Nether Brick Wall, Red Nether Brick Wall, End Stone Brick Wall, Andesite, Granite, Polished Andesite, Polished Granite, Polished Diorite, Diorite</td></tr><tr><td>metal</td><td>Block of Gold, Block of Iron, Cauldron, Iron Bars</td></tr><tr><td>diamond_pick_diggable</td><td>Obsidian, Coal Ore, Deepslate Coal Ore, Deepslate Diamond Ore, Deepslate Emerald Ore, Deepslate Gold Ore, Deepslate Iron Ore, Deepslate Redstone Ore, Diamond Ore, Emerald Ore, Gold ore, Iron Ore, Lapis Lazuli Ore, Redstone Ore, Block of Raw Iron, Block of Raw Gold</td></tr><tr><td>gold_pick_diggable</td><td></td></tr><tr><td>iron_pick_diggable</td><td>Coal Ore, Deepslate Coal Ore, Deepslate Diamond Ore, Deepslate Emerald Ore, Deepslate Gold Ore, Deepslate Iron Ore, Deepslate Redstone Ore, Diamond Ore, Emerald Ore, Gold ore, Iron Ore, Lapis Lazuli Ore, Redstone Ore, Block of Raw Iron, Block of Raw Gold</td></tr><tr><td>stone_pick_diggable</td><td></td></tr><tr><td>wood_pick_diggable</td><td></td></tr><tr><td>dirt</td><td>Farmland</td></tr><tr><td>sand</td><td>Red Sand, Sand</td></tr><tr><td>gravel</td><td>Gravel</td></tr><tr><td>grass</td><td>Grass Block, Dirt, Coarse Dirt, Dirt Path</td></tr><tr><td>snow</td><td>Snow</td></tr><tr><td>rail</td><td>Rail, Powered Rail, Detector Rail, Activator Rail</td></tr><tr><td>water</td><td>Water</td></tr><tr><td>mob_spawner</td><td>Spawner</td></tr><tr><td>lush_plants_replaceable</td><td></td></tr><tr><td>azalea_log_replaceable</td><td></td></tr><tr><td>not_feature_replaceable</td><td>chest, bedrock, end portal frame, mob spawner</td></tr><tr><td>text_sign</td><td>All kinds of signs</td></tr><tr><td>minecraft:crop</td><td>Beetroot, Carrot, Potato, Wheat</td></tr><tr><td>fertilize_area</td><td>All types of Flowers, except Tall Flowers &amp; Wither Rose; Crimson Nylium, Warped Nylium, Grass, Moss</td></tr></tbody></table><h3 id="vanilla-block-tags" tabindex="-1">Vanilla Block Tags <a class="header-anchor" href="#vanilla-block-tags" aria-hidden="true">#</a></h3><p>Vanilla block tags are tags built specifically for blocks. They can give some vanilla features to the blocks which are tagged with them.</p><table><thead><tr><th>Tag</th><th>Vanilla Usage</th><th>Description</th></tr></thead><tbody><tr><td>acacia</td><td>Acacia Log</td><td></td></tr><tr><td>birch</td><td>Birch Log</td><td></td></tr><tr><td>dark_oak</td><td>Dark Oak Log</td><td></td></tr><tr><td>jungle</td><td>Jungle Log</td><td></td></tr><tr><td>log</td><td>Oak Log, Spruce Log, Birch Log, Jungle Log, Acacia Log, Dark Oak Log</td><td>A log block.</td></tr><tr><td>oak</td><td>Oak Log</td><td></td></tr><tr><td>spruce</td><td>Spruce Log</td><td></td></tr></tbody></table>`,8);function b(g,C,k,A,h,m){const n=r("CodeHeader");return c(),o("div",null,[d,D,F,l(n),y,l(n,null,{default:p(()=>[a("BP/items/wiki_pickaxe.json")]),_:1}),u])}const q=t(i,[["render",b]]);export{S as __pageData,q as default};