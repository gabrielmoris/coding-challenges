# Explanation

[Link to challenge](./index.ts)

Imagine you have a bunch of little blocks, like building blocks, and they have different heights. These blocks represent the heights of something like hills or buildings. Some blocks are taller, and some are shorter.

Now, you want to figure out how much rainwater can get trapped between these blocks if it rains. When it rains, the water can get caught between the blocks if there's a "pit" where the shorter blocks are surrounded by taller blocks on both sides.

To do this, you take two friends, one at the left end and one at the right end of your blocks. They both have buckets, and they want to collect rainwater. They start moving towards each other, one step at a time, and they look at the blocks they pass.

Here's what they do:

If the **block on the left is shorter than the block on the right**, the left friend checks if the left block is taller than all the blocks he has seen so far. If it is, he remembers that height.

If the **left block isn't taller than what he has seen before**, it means there's a pit where the water can get trapped. The left friend takes his bucket and fills it with the amount of water that fits between the left block and the tallest block he's seen. Then, he moves one step to the right.

If the **block on the right is shorter than the block on the left**, the right friend does the same thing. He checks if the right block is taller than all the blocks he has seen so far. If it is, he remembers that height.

If the **right block isn't taller than what he has seen before**, it means there's a pit where the water can get trapped. The right friend takes his bucket and fills it with the amount of water that fits between the right block and the tallest block he's seen. Then, he moves one step to the left.

They keep doing this until they meet in the middle, and they collect water in their buckets when they find pits.

Once they've gone through all the blocks, they tell you how much water they've collected in their buckets. That's the amount of rainwater that can get trapped between the blocks.

It's like two little friends with buckets walking and collecting rainwater in the gaps between the blocks of different heights. That's what the code is doing, but instead of little friends and buckets, it uses computer instructions to figure out how much rainwater can get trapped.
