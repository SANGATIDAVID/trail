import { useState, useEffect, useMemo } from "react";

const L=(s)=>`https://leetcode.com/problems/${s}/`;
const G=(s)=>`https://www.geeksforgeeks.org/${s}/`;
const C=(s)=>`https://www.codingninjas.com/studio/problems/${s}`;

const PROBLEMS = [
// ── BLIND 75 ─────────────────────────────────────────────────────────────
// Arrays
{id:1,title:"Two Sum",topic:"Arrays",difficulty:"Easy",sheet:"Blind75",companies:["Amazon","Google","Apple","Microsoft"],links:{leetcode:L("two-sum"),gfg:G("given-an-array-a-and-a-number-x-check-for-pair-in-a-with-sum-as-x"),cn:C("reading_6845742")}},
{id:2,title:"Best Time to Buy and Sell Stock",topic:"Arrays",difficulty:"Easy",sheet:"Blind75",companies:["Amazon","Microsoft","Goldman Sachs"],links:{leetcode:L("best-time-to-buy-and-sell-stock"),gfg:G("best-time-to-buy-and-sell-stock"),cn:C("stocks-are-profitable_893405")}},
{id:3,title:"Contains Duplicate",topic:"Arrays",difficulty:"Easy",sheet:"Blind75",companies:["Google","Amazon","Palantir"],links:{leetcode:L("contains-duplicate"),gfg:G("contains-duplicate"),cn:C("reading_6840368")}},
{id:4,title:"Product of Array Except Self",topic:"Arrays",difficulty:"Medium",sheet:"Blind75",companies:["Amazon","Microsoft","Google","Meta"],links:{leetcode:L("product-of-array-except-self"),gfg:G("a-product-array-puzzle"),cn:C("product-of-array-except-self_5153137")}},
{id:5,title:"Maximum Subarray",topic:"Arrays",difficulty:"Medium",sheet:"Blind75",companies:["Amazon","Google","Meta","Microsoft"],links:{leetcode:L("maximum-subarray"),gfg:G("largest-sum-contiguous-subarray"),cn:C("maximum-subarray-sum_630526")}},
{id:6,title:"Maximum Product Subarray",topic:"Arrays",difficulty:"Medium",sheet:"Blind75",companies:["Amazon","Google","Lyft"],links:{leetcode:L("maximum-product-subarray"),gfg:G("maximum-product-subarray"),cn:C("maximum-product-subarray_3609042")}},
{id:7,title:"Find Minimum in Rotated Sorted Array",topic:"Arrays",difficulty:"Medium",sheet:"Blind75",companies:["Amazon","Microsoft","Adobe"],links:{leetcode:L("find-minimum-in-rotated-sorted-array"),gfg:G("find-minimum-element-in-a-sorted-and-rotated-array"),cn:C("find-the-minimum-element-in-sorted-and-rotated-array_626574")}},
{id:8,title:"Search in Rotated Sorted Array",topic:"Arrays",difficulty:"Medium",sheet:"Blind75",companies:["Microsoft","Amazon","Google","Uber"],links:{leetcode:L("search-in-rotated-sorted-array"),gfg:G("search-an-element-in-a-sorted-and-pivoted-array"),cn:C("search-in-a-rotated-sorted-array_1082554")}},
{id:9,title:"3Sum",topic:"Arrays",difficulty:"Medium",sheet:"Blind75",companies:["Amazon","Google","Apple","Adobe"],links:{leetcode:L("3sum"),gfg:G("find-a-triplet-that-sum-to-a-given-value"),cn:C("three-sum_6922132")}},
{id:10,title:"Container With Most Water",topic:"Arrays",difficulty:"Medium",sheet:"Blind75",companies:["Amazon","Google","Meta","Bloomberg"],links:{leetcode:L("container-with-most-water"),gfg:G("container-with-most-water"),cn:C("container-with-most-water_1172247")}},
// Strings
{id:11,title:"Valid Anagram",topic:"Strings",difficulty:"Easy",sheet:"Blind75",companies:["Amazon","Google","Yahoo"],links:{leetcode:L("valid-anagram"),gfg:G("check-whether-two-strings-are-anagram-of-each-other"),cn:C("anagram_624174")}},
{id:12,title:"Valid Palindrome",topic:"Strings",difficulty:"Easy",sheet:"Blind75",companies:["Microsoft","Amazon","Facebook"],links:{leetcode:L("valid-palindrome"),gfg:G("c-program-check-given-string-palindrome"),cn:C("palindrome-string_624561")}},
{id:13,title:"Longest Substring Without Repeating Characters",topic:"Strings",difficulty:"Medium",sheet:"Blind75",companies:["Amazon","Google","Meta","Microsoft","Uber"],links:{leetcode:L("longest-substring-without-repeating-characters"),gfg:G("length-of-the-longest-substring-without-repeating-characters"),cn:C("longest-substring-without-repeating-characters_2181401")}},
{id:14,title:"Longest Repeating Character Replacement",topic:"Strings",difficulty:"Medium",sheet:"Blind75",companies:["Google","Amazon","Snapchat"],links:{leetcode:L("longest-repeating-character-replacement"),gfg:G("longest-repeating-character-replacement"),cn:C("character-replacement_1372589")}},
{id:15,title:"Minimum Window Substring",topic:"Strings",difficulty:"Hard",sheet:"Blind75",companies:["Amazon","Meta","Microsoft","LinkedIn"],links:{leetcode:L("minimum-window-substring"),gfg:G("find-the-smallest-window-in-a-string-containing-all-characters-of-another-string"),cn:C("minimum-window-substring_1215004")}},
{id:16,title:"Group Anagrams",topic:"Strings",difficulty:"Medium",sheet:"Blind75",companies:["Amazon","Google","Uber","Facebook"],links:{leetcode:L("group-anagrams"),gfg:G("given-a-sequence-of-words-print-all-anagrams-together"),cn:C("grouping-anagrams_630426")}},
{id:17,title:"Encode and Decode Strings",topic:"Strings",difficulty:"Medium",sheet:"Blind75",companies:["Google","Amazon","Microsoft"],links:{leetcode:"https://leetcode.com/problems/encode-and-decode-strings/",gfg:G("encode-and-decode-strings"),cn:C("encode-and-decode-strings_1547860")}},
{id:18,title:"Palindromic Substrings",topic:"Strings",difficulty:"Medium",sheet:"Blind75",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("palindromic-substrings"),gfg:G("count-palindrome-sub-strings-string"),cn:C("palindromic-substrings_1262347")}},
{id:19,title:"Longest Palindromic Substring",topic:"Strings",difficulty:"Medium",sheet:"Blind75",companies:["Amazon","Google","Microsoft","Apple"],links:{leetcode:L("longest-palindromic-substring"),gfg:G("longest-palindrome-in-a-string"),cn:C("longest-palindromic-substring_758900")}},
// Linked List
{id:20,title:"Reverse Linked List",topic:"Linked List",difficulty:"Easy",sheet:"Blind75",companies:["Amazon","Microsoft","Google","Adobe"],links:{leetcode:L("reverse-linked-list"),gfg:G("reverse-a-linked-list"),cn:C("reverse-linked-list_920513")}},
{id:21,title:"Merge Two Sorted Lists",topic:"Linked List",difficulty:"Easy",sheet:"Blind75",companies:["Amazon","Google","Apple","Microsoft"],links:{leetcode:L("merge-two-sorted-lists"),gfg:G("merge-two-sorted-linked-lists"),cn:C("merge-two-sorted-linked-lists_800332")}},
{id:22,title:"Linked List Cycle",topic:"Linked List",difficulty:"Easy",sheet:"Blind75",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("linked-list-cycle"),gfg:G("detect-loop-in-a-linked-list"),cn:C("detect-cycle_628974")}},
{id:23,title:"Reorder List",topic:"Linked List",difficulty:"Medium",sheet:"Blind75",companies:["Amazon","Google","TikTok"],links:{leetcode:L("reorder-list"),gfg:G("reorder-list"),cn:C("reorder-list_1268643")}},
{id:24,title:"Remove Nth Node From End of List",topic:"Linked List",difficulty:"Medium",sheet:"Blind75",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("remove-nth-node-from-end-of-list"),gfg:G("remove-nth-node-end-list"),cn:C("delete-kth-node-from-end_799380")}},
{id:25,title:"Merge K Sorted Lists",topic:"Linked List",difficulty:"Hard",sheet:"Blind75",companies:["Amazon","Google","Microsoft","Uber"],links:{leetcode:L("merge-k-sorted-lists"),gfg:G("merge-k-sorted-linked-lists"),cn:C("merge-k-sorted-lists_992772")}},
// Trees
{id:26,title:"Maximum Depth of Binary Tree",topic:"Trees",difficulty:"Easy",sheet:"Blind75",companies:["Amazon","Google","Meta"],links:{leetcode:L("maximum-depth-of-binary-tree"),gfg:G("find-the-maximum-depth-or-height-of-a-tree"),cn:C("maximum-depth-of-binary-tree_4609628")}},
{id:27,title:"Same Tree",topic:"Trees",difficulty:"Easy",sheet:"Blind75",companies:["Amazon","Microsoft","Bloomberg"],links:{leetcode:L("same-tree"),gfg:G("write-c-code-to-determine-if-two-trees-are-identical"),cn:C("identical-trees_799364")}},
{id:28,title:"Invert Binary Tree",topic:"Trees",difficulty:"Easy",sheet:"Blind75",companies:["Google","Amazon","Apple"],links:{leetcode:L("invert-binary-tree"),gfg:G("mirror-of-a-given-tree"),cn:C("mirror-binary-tree_696102")}},
{id:29,title:"Binary Tree Level Order Traversal",topic:"Trees",difficulty:"Medium",sheet:"Blind75",companies:["Amazon","Microsoft","Google","Meta"],links:{leetcode:L("binary-tree-level-order-traversal"),gfg:G("level-order-tree-traversal"),cn:C("level-order-traversal_796002")}},
{id:30,title:"Validate Binary Search Tree",topic:"Trees",difficulty:"Medium",sheet:"Blind75",companies:["Amazon","Google","Meta","Bloomberg"],links:{leetcode:L("validate-binary-search-tree"),gfg:G("a-program-to-check-if-a-binary-tree-is-bst-or-not"),cn:C("validate-bst_799483")}},
{id:31,title:"Lowest Common Ancestor of BST",topic:"Trees",difficulty:"Medium",sheet:"Blind75",companies:["Amazon","Microsoft","Apple","Google"],links:{leetcode:L("lowest-common-ancestor-of-a-binary-search-tree"),gfg:G("lowest-common-ancestor-in-a-binary-search-tree"),cn:C("lca-in-a-bst_981280")}},
{id:32,title:"Kth Smallest Element in BST",topic:"Trees",difficulty:"Medium",sheet:"Blind75",companies:["Amazon","Google","Uber"],links:{leetcode:L("kth-smallest-element-in-a-bst"),gfg:G("find-k-th-smallest-element-in-bst-order-statistics-in-bst"),cn:C("kth-smallest-node-in-bst_920441")}},
{id:33,title:"Binary Tree Maximum Path Sum",topic:"Trees",difficulty:"Hard",sheet:"Blind75",companies:["Amazon","Google","Meta","Microsoft"],links:{leetcode:L("binary-tree-maximum-path-sum"),gfg:G("find-maximum-path-sum-in-a-binary-tree"),cn:C("maximum-path-sum_1280418")}},
{id:34,title:"Construct Binary Tree from Preorder and Inorder",topic:"Trees",difficulty:"Medium",sheet:"Blind75",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("construct-binary-tree-from-preorder-and-inorder-traversal"),gfg:G("construct-tree-from-given-inorder-and-preorder-traversal"),cn:C("construct-binary-tree-from-inorder-and-preorder-traversal_920539")}},
{id:35,title:"Serialize and Deserialize Binary Tree",topic:"Trees",difficulty:"Hard",sheet:"Blind75",companies:["Amazon","Google","Meta","Microsoft"],links:{leetcode:L("serialize-and-deserialize-binary-tree"),gfg:G("serialize-and-deserialize-a-binary-tree"),cn:C("serialize-and-deserialize-binary-tree_920328")}},
// DP
{id:36,title:"Climbing Stairs",topic:"Dynamic Programming",difficulty:"Easy",sheet:"Blind75",companies:["Amazon","Google","Apple","Adobe"],links:{leetcode:L("climbing-stairs"),gfg:G("count-ways-reach-nth-stair"),cn:C("count-ways-to-reach-nth-stairs_798650")}},
{id:37,title:"House Robber",topic:"Dynamic Programming",difficulty:"Medium",sheet:"Blind75",companies:["Amazon","Google","Microsoft","Airbnb"],links:{leetcode:L("house-robber"),gfg:G("find-maximum-possible-stolen-value-houses"),cn:C("house-robber_839733")}},
{id:38,title:"House Robber II",topic:"Dynamic Programming",difficulty:"Medium",sheet:"Blind75",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("house-robber-ii"),gfg:G("house-robber-ii"),cn:C("house-robber-2_1172245")}},
{id:39,title:"Coin Change",topic:"Dynamic Programming",difficulty:"Medium",sheet:"Blind75",companies:["Amazon","Google","Meta","Goldman Sachs"],links:{leetcode:L("coin-change"),gfg:G("find-minimum-number-of-coins-that-make-a-change"),cn:C("minimum-number-of-coins_2163208")}},
{id:40,title:"Longest Common Subsequence",topic:"Dynamic Programming",difficulty:"Medium",sheet:"Blind75",companies:["Amazon","Google","Apple","Microsoft"],links:{leetcode:L("longest-common-subsequence"),gfg:G("longest-common-subsequence-dp-4"),cn:C("longest-common-subsequence_624879")}},
{id:41,title:"Word Break",topic:"Dynamic Programming",difficulty:"Medium",sheet:"Blind75",companies:["Amazon","Google","Microsoft","Meta"],links:{leetcode:L("word-break"),gfg:G("word-break-problem-dp-32"),cn:C("word-break_624708")}},
{id:42,title:"Longest Increasing Subsequence",topic:"Dynamic Programming",difficulty:"Medium",sheet:"Blind75",companies:["Amazon","Microsoft","Google","Bloomberg"],links:{leetcode:L("longest-increasing-subsequence"),gfg:G("longest-increasing-subsequence-dp-3"),cn:C("longest-increasing-subsequence_630459")}},
{id:43,title:"Combination Sum IV",topic:"Dynamic Programming",difficulty:"Medium",sheet:"Blind75",companies:["Amazon","Google","Snapchat"],links:{leetcode:L("combination-sum-iv"),gfg:G("count-of-numbers-up-to-n-possible-by-adding-given-array-elements"),cn:C("combination-sum-iv_1388544")}},
{id:44,title:"Unique Paths",topic:"Dynamic Programming",difficulty:"Medium",sheet:"Blind75",companies:["Amazon","Google","Microsoft","Bloomberg"],links:{leetcode:L("unique-paths"),gfg:G("count-possible-paths-top-left-bottom-right-nxm-matrix"),cn:C("unique-paths_1081470")}},
{id:45,title:"Jump Game",topic:"Dynamic Programming",difficulty:"Medium",sheet:"Blind75",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("jump-game"),gfg:G("jump-game"),cn:C("jump-game_839141")}},
{id:46,title:"Decode Ways",topic:"Dynamic Programming",difficulty:"Medium",sheet:"Blind75",companies:["Amazon","Meta","Microsoft"],links:{leetcode:L("decode-ways"),gfg:G("decode-ways"),cn:C("ways-to-decode_1214918")}},
// Graphs
{id:47,title:"Number of Islands",topic:"Graphs",difficulty:"Medium",sheet:"Blind75",companies:["Amazon","Google","Meta","Microsoft"],links:{leetcode:L("number-of-islands"),gfg:G("find-the-number-of-islands-using-dfs"),cn:C("number-of-islands_1062688")}},
{id:48,title:"Clone Graph",topic:"Graphs",difficulty:"Medium",sheet:"Blind75",companies:["Amazon","Google","Facebook"],links:{leetcode:L("clone-graph"),gfg:G("clone-an-undirected-graph"),cn:C("clone-a-graph_1119557")}},
{id:49,title:"Pacific Atlantic Water Flow",topic:"Graphs",difficulty:"Medium",sheet:"Blind75",companies:["Google","Amazon","Citadel"],links:{leetcode:L("pacific-atlantic-water-flow"),gfg:G("pacific-atlantic-water-flow"),cn:C("pacific-atlantic-water-flow_1214010")}},
{id:50,title:"Course Schedule",topic:"Graphs",difficulty:"Medium",sheet:"Blind75",companies:["Amazon","Google","Meta","Uber"],links:{leetcode:L("course-schedule"),gfg:G("detect-cycle-in-a-directed-graph"),cn:C("prerequisite-tasks_1062676")}},
{id:51,title:"Word Search",topic:"Graphs",difficulty:"Medium",sheet:"Blind75",companies:["Amazon","Google","Microsoft","Snapchat"],links:{leetcode:L("word-search"),gfg:G("search-a-word-in-a-2d-grid-of-characters"),cn:C("word-search_1172384")}},
{id:52,title:"Alien Dictionary",topic:"Graphs",difficulty:"Hard",sheet:"Blind75",companies:["Amazon","Google","Meta","Airbnb"],links:{leetcode:"https://leetcode.com/problems/alien-dictionary/",gfg:G("given-sorted-dictionary-find-precedence-characters"),cn:C("alien-dictionary_630423")}},
{id:53,title:"Graph Valid Tree",topic:"Graphs",difficulty:"Medium",sheet:"Blind75",companies:["Google","Amazon","LinkedIn"],links:{leetcode:"https://leetcode.com/problems/graph-valid-tree/",gfg:G("graph-valid-tree"),cn:C("graph-valid-tree_1376618")}},
// Intervals
{id:54,title:"Insert Interval",topic:"Arrays",difficulty:"Medium",sheet:"Blind75",companies:["Google","Amazon","LinkedIn"],links:{leetcode:L("insert-interval"),gfg:G("given-sorted-intervals-find-if-there-is-any-interval-that-completely-overlaps-with-given-interval"),cn:C("insert-interval_1372583")}},
{id:55,title:"Merge Intervals",topic:"Arrays",difficulty:"Medium",sheet:"Blind75",companies:["Google","Amazon","Microsoft","Facebook"],links:{leetcode:L("merge-intervals"),gfg:G("merging-intervals"),cn:C("merge-all-overlapping-intervals_6183562")}},
{id:56,title:"Meeting Rooms",topic:"Arrays",difficulty:"Easy",sheet:"Blind75",companies:["Amazon","Google","Microsoft"],links:{leetcode:"https://leetcode.com/problems/meeting-rooms/",gfg:G("check-if-any-two-intervals-overlap-among-a-given-set-of-intervals"),cn:C("attend-all-meetings_893055")}},
{id:57,title:"Meeting Rooms II",topic:"Arrays",difficulty:"Medium",sheet:"Blind75",companies:["Amazon","Google","Facebook","Snapchat"],links:{leetcode:"https://leetcode.com/problems/meeting-rooms-ii/",gfg:G("minimum-halls-required-for-college-given-schedule"),cn:C("meeting-rooms-ii_1047639")}},
// Stacks
{id:58,title:"Valid Parentheses",topic:"Stacks",difficulty:"Easy",sheet:"Blind75",companies:["Amazon","Google","Meta","Microsoft"],links:{leetcode:L("valid-parentheses"),gfg:G("check-for-balanced-parentheses-in-an-expression"),cn:C("valid-parenthesis_795104")}},
{id:59,title:"Min Stack",topic:"Stacks",difficulty:"Medium",sheet:"Blind75",companies:["Amazon","Google","Bloomberg"],links:{leetcode:L("min-stack"),gfg:G("design-a-stack-that-supports-getmin-in-o1-time-and-o1-extra-space"),cn:C("min-stack_3843990")}},
// Binary Search
{id:60,title:"Search a 2D Matrix",topic:"Binary Search",difficulty:"Medium",sheet:"Blind75",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("search-a-2d-matrix"),gfg:G("search-in-a-row-wise-and-column-wise-sorted-2d-array-using-divide-and-divide"),cn:C("search-in-a-2d-matrix_980531")}},
{id:61,title:"Median of Two Sorted Arrays",topic:"Binary Search",difficulty:"Hard",sheet:"Blind75",companies:["Google","Amazon","Apple","Goldman Sachs"],links:{leetcode:L("median-of-two-sorted-arrays"),gfg:G("median-of-two-sorted-arrays"),cn:C("median-of-two-sorted-arrays_985294")}},
// Hashing
{id:62,title:"Longest Consecutive Sequence",topic:"Hashing",difficulty:"Medium",sheet:"Blind75",companies:["Amazon","Google","Meta","Uber"],links:{leetcode:L("longest-consecutive-sequence"),gfg:G("longest-consecutive-subsequence"),cn:C("longest-consecutive-sequence_2510803")}},
{id:63,title:"Top K Frequent Elements",topic:"Hashing",difficulty:"Medium",sheet:"Blind75",companies:["Amazon","Google","Meta","Bloomberg"],links:{leetcode:L("top-k-frequent-elements"),gfg:G("find-the-k-most-frequent-words-from-a-file"),cn:C("k-most-frequent-elements_1281388")}},

// ── NEETCODE 150 (additional problems beyond Blind75) ─────────────────────
{id:64,title:"Two Sum II Input Array Is Sorted",topic:"Arrays",difficulty:"Medium",sheet:"NeetCode150",companies:["Amazon","Google"],links:{leetcode:L("two-sum-ii-input-array-is-sorted"),gfg:G("two-pointers-technique"),cn:C("two-sum_839653")}},
{id:65,title:"Trapping Rain Water",topic:"Arrays",difficulty:"Hard",sheet:"NeetCode150",companies:["Amazon","Google","Meta","Microsoft","Apple"],links:{leetcode:L("trapping-rain-water"),gfg:G("trapping-rain-water"),cn:C("trapping-rainwater_630519")}},
{id:66,title:"Sort Colors",topic:"Arrays",difficulty:"Medium",sheet:"NeetCode150",companies:["Amazon","Microsoft","Adobe"],links:{leetcode:L("sort-colors"),gfg:G("sort-an-array-of-0s-1s-and-2s"),cn:C("sort-an-array-of-0s-1s-and-2s_892977")}},
{id:67,title:"Next Permutation",topic:"Arrays",difficulty:"Medium",sheet:"NeetCode150",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("next-permutation"),gfg:G("next-permutation"),cn:C("next-permutation_893046")}},
{id:68,title:"Find Duplicate Number",topic:"Arrays",difficulty:"Medium",sheet:"NeetCode150",companies:["Amazon","Google","Adobe"],links:{leetcode:L("find-the-duplicate-number"),gfg:G("find-duplicates-in-on-time-and-constant-extra-space"),cn:C("find-duplicate-in-array_1112602")}},
{id:69,title:"Rotate Image",topic:"Arrays",difficulty:"Medium",sheet:"NeetCode150",companies:["Amazon","Microsoft","Google","Facebook"],links:{leetcode:L("rotate-image"),gfg:G("rotate-a-matrix-by-90-degree-in-clockwise-direction-without-using-any-extra-space"),cn:C("rotate-matrix_1457008")}},
{id:70,title:"Spiral Matrix",topic:"Arrays",difficulty:"Medium",sheet:"NeetCode150",companies:["Amazon","Microsoft","Google","Adobe"],links:{leetcode:L("spiral-matrix"),gfg:G("print-a-given-matrix-in-spiral-form"),cn:C("spiral-matrix_840698")}},
{id:71,title:"Set Matrix Zeroes",topic:"Arrays",difficulty:"Medium",sheet:"NeetCode150",companies:["Amazon","Microsoft","Google"],links:{leetcode:L("set-matrix-zeroes"),gfg:G("a-boolean-matrix-question"),cn:C("zero-matrix_1171418")}},
{id:72,title:"Subarray Sum Equals K",topic:"Hashing",difficulty:"Medium",sheet:"NeetCode150",companies:["Amazon","Google","Meta","Microsoft"],links:{leetcode:L("subarray-sum-equals-k"),gfg:G("find-the-length-of-largest-subarray-with-0-sum"),cn:C("subarray-with-given-sum_6922185")}},
{id:73,title:"Daily Temperatures",topic:"Stacks",difficulty:"Medium",sheet:"NeetCode150",companies:["Amazon","Google","Uber"],links:{leetcode:L("daily-temperatures"),gfg:G("next-greater-element"),cn:C("next-greater-element_799354")}},
{id:74,title:"Car Fleet",topic:"Stacks",difficulty:"Medium",sheet:"NeetCode150",companies:["Google","Amazon"],links:{leetcode:L("car-fleet"),gfg:G("car-fleet"),cn:C("car-fleet_1473742")}},
{id:75,title:"Largest Rectangle in Histogram",topic:"Stacks",difficulty:"Hard",sheet:"NeetCode150",companies:["Amazon","Google","Meta","Microsoft"],links:{leetcode:L("largest-rectangle-in-histogram"),gfg:G("largest-rectangle-under-histogram"),cn:C("largest-rectangle-in-a-histogram_1058825")}},
{id:76,title:"Binary Search",topic:"Binary Search",difficulty:"Easy",sheet:"NeetCode150",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("binary-search"),gfg:G("binary-search"),cn:C("binary-search_972")}},
{id:77,title:"Koko Eating Bananas",topic:"Binary Search",difficulty:"Medium",sheet:"NeetCode150",companies:["Amazon","Google","Facebook"],links:{leetcode:L("koko-eating-bananas"),gfg:G("koko-eating-bananas"),cn:C("koko-eating-bananas_1062599")}},
{id:78,title:"Time Based Key Value Store",topic:"Binary Search",difficulty:"Medium",sheet:"NeetCode150",companies:["Amazon","Google","Uber"],links:{leetcode:L("time-based-key-value-store"),gfg:G("time-based-key-value-store"),cn:C("time-based-key-value-store_1062607")}},
{id:79,title:"Find Median from Data Stream",topic:"Heaps",difficulty:"Hard",sheet:"NeetCode150",companies:["Amazon","Google","Meta","Microsoft"],links:{leetcode:L("find-median-from-data-stream"),gfg:G("median-of-stream-of-running-integers"),cn:C("find-median-from-data-stream_1329355")}},
{id:80,title:"Top K Frequent Words",topic:"Heaps",difficulty:"Medium",sheet:"NeetCode150",companies:["Amazon","Google","Bloomberg"],links:{leetcode:L("top-k-frequent-words"),gfg:G("find-the-k-most-frequent-words-from-a-file"),cn:C("top-k-frequent-words_1280492")}},
{id:81,title:"K Closest Points to Origin",topic:"Heaps",difficulty:"Medium",sheet:"NeetCode150",companies:["Amazon","Google","Facebook","Uber"],links:{leetcode:L("k-closest-points-to-origin"),gfg:G("find-k-closest-points-to-the-origin"),cn:C("k-closest-points-to-origin_1262383")}},
{id:82,title:"Task Scheduler",topic:"Heaps",difficulty:"Medium",sheet:"NeetCode150",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("task-scheduler"),gfg:G("task-scheduler"),cn:C("task-scheduler_1262409")}},
{id:83,title:"Design Twitter",topic:"Heaps",difficulty:"Medium",sheet:"NeetCode150",companies:["Amazon","Twitter","Google"],links:{leetcode:L("design-twitter"),gfg:G("design-twitter"),cn:C("design-twitter_1329353")}},
{id:84,title:"Rotting Oranges",topic:"Graphs",difficulty:"Medium",sheet:"NeetCode150",companies:["Amazon","Google","DoorDash"],links:{leetcode:L("rotting-oranges"),gfg:G("minimum-time-required-so-that-all-oranges-become-rotten"),cn:C("rotting-oranges_701655")}},
{id:85,title:"Walls and Gates",topic:"Graphs",difficulty:"Medium",sheet:"NeetCode150",companies:["Amazon","Google","Facebook"],links:{leetcode:"https://leetcode.com/problems/walls-and-gates/",gfg:G("shortest-distance-from-a-guard-in-a-bank"),cn:C("walls-and-gates_1092887")}},
{id:86,title:"Surrounded Regions",topic:"Graphs",difficulty:"Medium",sheet:"NeetCode150",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("surrounded-regions"),gfg:G("replace-0s-with-xs-where-os-are-surrounded-by-xs"),cn:C("surrounded-regions_630426")}},
{id:87,title:"Course Schedule II",topic:"Graphs",difficulty:"Medium",sheet:"NeetCode150",companies:["Amazon","Google","Meta"],links:{leetcode:L("course-schedule-ii"),gfg:G("topological-sorting"),cn:C("course-schedule-ii_1062613")}},
{id:88,title:"Redundant Connection",topic:"Graphs",difficulty:"Medium",sheet:"NeetCode150",companies:["Amazon","Google","LinkedIn"],links:{leetcode:L("redundant-connection"),gfg:G("detect-cycle-undirected-graph"),cn:C("redundant-connection_1062621")}},
{id:89,title:"Network Delay Time",topic:"Graphs",difficulty:"Medium",sheet:"NeetCode150",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("network-delay-time"),gfg:G("dijkstras-shortest-path-algorithm-greedy-algo-7"),cn:C("network-delay-time_1062625")}},
{id:90,title:"Swim in Rising Water",topic:"Graphs",difficulty:"Hard",sheet:"NeetCode150",companies:["Google","Amazon"],links:{leetcode:L("swim-in-rising-water"),gfg:G("swim-in-rising-water"),cn:C("swim-in-rising-water_1214018")}},
{id:91,title:"Cheapest Flights Within K Stops",topic:"Graphs",difficulty:"Medium",sheet:"NeetCode150",companies:["Amazon","Google","Uber","Airbnb"],links:{leetcode:L("cheapest-flights-within-k-stops"),gfg:G("cheapest-flights-within-k-stops"),cn:C("cheapest-flights-within-k-stops_1214016")}},
{id:92,title:"Number of Connected Components",topic:"Graphs",difficulty:"Medium",sheet:"NeetCode150",companies:["Amazon","Google","LinkedIn"],links:{leetcode:"https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/",gfg:G("connected-components-in-an-undirected-graph"),cn:C("number-of-connected-components_1062629")}},
{id:93,title:"Implement Trie",topic:"Tries",difficulty:"Medium",sheet:"NeetCode150",companies:["Amazon","Google","Microsoft","Meta"],links:{leetcode:L("implement-trie-prefix-tree"),gfg:G("trie-insert-and-search"),cn:C("implement-trie_1062679")}},
{id:94,title:"Design Add and Search Words",topic:"Tries",difficulty:"Medium",sheet:"NeetCode150",companies:["Amazon","Google","Facebook"],links:{leetcode:L("design-add-and-search-words-data-structure"),gfg:G("design-add-and-search-words-data-structure"),cn:C("design-add-and-search-words-data-structure_1062683")}},
{id:95,title:"Word Search II",topic:"Tries",difficulty:"Hard",sheet:"NeetCode150",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("word-search-ii"),gfg:G("word-search-ii"),cn:C("word-search-ii_1214020")}},
{id:96,title:"Subsets",topic:"Backtracking",difficulty:"Medium",sheet:"NeetCode150",companies:["Amazon","Google","Facebook","Bloomberg"],links:{leetcode:L("subsets"),gfg:G("power-set"),cn:C("subsets_796804")}},
{id:97,title:"Combination Sum",topic:"Backtracking",difficulty:"Medium",sheet:"NeetCode150",companies:["Amazon","Google","Microsoft","Adobe"],links:{leetcode:L("combination-sum"),gfg:G("combinational-sum"),cn:C("combination-sum-1_839565")}},
{id:98,title:"Combination Sum II",topic:"Backtracking",difficulty:"Medium",sheet:"NeetCode150",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("combination-sum-ii"),gfg:G("combinational-sum-ii"),cn:C("combination-sum-ii_1238828")}},
{id:99,title:"Permutations",topic:"Backtracking",difficulty:"Medium",sheet:"NeetCode150",companies:["Amazon","Google","Microsoft","Meta"],links:{leetcode:L("permutations"),gfg:G("write-a-c-program-to-print-all-permutations-of-a-given-string"),cn:C("permutations_839404")}},
{id:100,title:"Subsets II",topic:"Backtracking",difficulty:"Medium",sheet:"NeetCode150",companies:["Amazon","Google"],links:{leetcode:L("subsets-ii"),gfg:G("subsets-ii"),cn:C("subsets-ii_1262381")}},
{id:101,title:"N Queens",topic:"Backtracking",difficulty:"Hard",sheet:"NeetCode150",companies:["Amazon","Google","Microsoft","Uber"],links:{leetcode:L("n-queens"),gfg:G("n-queen-problem-backtracking-3"),cn:C("n-queens_1062670")}},
{id:102,title:"Palindrome Partitioning",topic:"Backtracking",difficulty:"Medium",sheet:"NeetCode150",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("palindrome-partitioning"),gfg:G("palindrome-partitioning-dp-17"),cn:C("palindrome-partitioning_799931")}},
{id:103,title:"Letter Combinations of Phone Number",topic:"Backtracking",difficulty:"Medium",sheet:"NeetCode150",companies:["Amazon","Google","Meta","Microsoft"],links:{leetcode:L("letter-combinations-of-a-phone-number"),gfg:G("letter-combinations-of-a-phone-number"),cn:C("letter-combinations-of-a-phone-number_1062601")}},
{id:104,title:"Word Search",topic:"Backtracking",difficulty:"Medium",sheet:"NeetCode150",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("word-search"),gfg:G("search-a-word-in-a-2d-grid-of-characters"),cn:C("word-search_1172384")}},
{id:105,title:"Partition Equal Subset Sum",topic:"Dynamic Programming",difficulty:"Medium",sheet:"NeetCode150",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("partition-equal-subset-sum"),gfg:G("partition-equal-subset-sum"),cn:C("partition-equal-subset-sum_892980")}},
{id:106,title:"Target Sum",topic:"Dynamic Programming",difficulty:"Medium",sheet:"NeetCode150",companies:["Amazon","Google","Meta"],links:{leetcode:L("target-sum"),gfg:G("target-sum"),cn:C("target-sum_1214028")}},
{id:107,title:"Coin Change II",topic:"Dynamic Programming",difficulty:"Medium",sheet:"NeetCode150",companies:["Amazon","Google","Meta"],links:{leetcode:L("coin-change-ii"),gfg:G("coin-change-dp-7"),cn:C("coin-change-2_1090024")}},
{id:108,title:"Edit Distance",topic:"Dynamic Programming",difficulty:"Medium",sheet:"NeetCode150",companies:["Amazon","Google","Microsoft","Meta"],links:{leetcode:L("edit-distance"),gfg:G("edit-distance-dp-5"),cn:C("edit-distance_226604")}},
{id:109,title:"Burst Balloons",topic:"Dynamic Programming",difficulty:"Hard",sheet:"NeetCode150",companies:["Google","Amazon","Microsoft"],links:{leetcode:L("burst-balloons"),gfg:G("burst-balloons"),cn:C("burst-balloons_1214036")}},
{id:110,title:"Regular Expression Matching",topic:"Dynamic Programming",difficulty:"Hard",sheet:"NeetCode150",companies:["Google","Amazon","Meta","Microsoft"],links:{leetcode:L("regular-expression-matching"),gfg:G("regular-expression-matching"),cn:C("regular-expression-matching_1214038")}},
{id:111,title:"Distinct Subsequences",topic:"Dynamic Programming",difficulty:"Hard",sheet:"NeetCode150",companies:["Google","Amazon"],links:{leetcode:L("distinct-subsequences"),gfg:G("count-distinct-subsequences"),cn:C("number-of-distinct-subsequences_1214040")}},
{id:112,title:"Interleaving String",topic:"Dynamic Programming",difficulty:"Medium",sheet:"NeetCode150",companies:["Google","Amazon","Meta"],links:{leetcode:L("interleaving-string"),gfg:G("find-if-a-string-is-interleaved-of-two-other-strings-dp-33"),cn:C("interleaving-strings_1214042")}},
{id:113,title:"Maximum Profit in Job Scheduling",topic:"Dynamic Programming",difficulty:"Hard",sheet:"NeetCode150",companies:["Google","Amazon","Airbnb"],links:{leetcode:L("maximum-profit-in-job-scheduling"),gfg:G("weighted-job-scheduling"),cn:C("maximum-profit-in-job-scheduling_1214044")}},
{id:114,title:"LRU Cache",topic:"Hashing",difficulty:"Medium",sheet:"NeetCode150",companies:["Amazon","Google","Meta","Microsoft","Uber"],links:{leetcode:L("lru-cache"),gfg:G("lru-cache-implementation"),cn:C("lru-cache_1062600")}},
{id:115,title:"Revert Nodes in K Group",topic:"Linked List",difficulty:"Hard",sheet:"NeetCode150",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("reverse-nodes-in-k-group"),gfg:G("reverse-a-linked-list-in-groups-of-given-size"),cn:C("reverse-list-in-k-groups_983644")}},
{id:116,title:"Copy List With Random Pointer",topic:"Linked List",difficulty:"Medium",sheet:"NeetCode150",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("copy-list-with-random-pointer"),gfg:G("clone-linked-list-next-arbit-pointer"),cn:C("clone-linked-list_1171427")}},
{id:117,title:"Add Two Numbers",topic:"Linked List",difficulty:"Medium",sheet:"NeetCode150",companies:["Amazon","Google","Meta","Bloomberg"],links:{leetcode:L("add-two-numbers"),gfg:G("add-two-numbers-represented-by-linked-lists"),cn:C("add-two-numbers-as-linked-list_1170520")}},
{id:118,title:"Find the Duplicate Number",topic:"Linked List",difficulty:"Medium",sheet:"NeetCode150",companies:["Amazon","Google","Adobe"],links:{leetcode:L("find-the-duplicate-number"),gfg:G("find-duplicates-in-on-time-and-constant-extra-space"),cn:C("find-duplicate-in-array_1112602")}},
{id:119,title:"Reverse Bits",topic:"Bit Manipulation",difficulty:"Easy",sheet:"NeetCode150",companies:["Amazon","Apple","Google"],links:{leetcode:L("reverse-bits"),gfg:G("reverse-bits-of-a-number"),cn:C("reverse-bits_1062639")}},
{id:120,title:"Number of 1 Bits",topic:"Bit Manipulation",difficulty:"Easy",sheet:"NeetCode150",companies:["Amazon","Apple","Microsoft"],links:{leetcode:L("number-of-1-bits"),gfg:G("count-set-bits-in-an-integer"),cn:C("number-of-1-bits_1062641")}},
{id:121,title:"Counting Bits",topic:"Bit Manipulation",difficulty:"Easy",sheet:"NeetCode150",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("counting-bits"),gfg:G("count-total-set-bits-in-all-numbers-from-1-to-n"),cn:C("counting-bits_1062643")}},
{id:122,title:"Missing Number",topic:"Bit Manipulation",difficulty:"Easy",sheet:"NeetCode150",companies:["Amazon","Google","Microsoft","Apple"],links:{leetcode:L("missing-number"),gfg:G("find-the-missing-number"),cn:C("missing-number_839609")}},
{id:123,title:"Sum of Two Integers",topic:"Bit Manipulation",difficulty:"Medium",sheet:"NeetCode150",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("sum-of-two-integers"),gfg:G("add-two-numbers-without-using-arithmetic-operators"),cn:C("sum-of-two-integers_1062645")}},
{id:124,title:"Reverse Integer",topic:"Bit Manipulation",difficulty:"Medium",sheet:"NeetCode150",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("reverse-integer"),gfg:G("reverse-digits-of-an-integer"),cn:C("reverse-integer_1062647")}},
{id:125,title:"Single Number",topic:"Bit Manipulation",difficulty:"Easy",sheet:"NeetCode150",companies:["Amazon","Google","Microsoft","Apple"],links:{leetcode:L("single-number"),gfg:G("find-the-element-that-appears-once"),cn:C("the-unique-element_1062649")}},
{id:126,title:"Power of Two",topic:"Bit Manipulation",difficulty:"Easy",sheet:"NeetCode150",companies:["Amazon","Google"],links:{leetcode:L("power-of-two"),gfg:G("program-to-find-whether-a-no-is-power-of-two"),cn:C("power-of-two_1062651")}},

// ── STRIVER A2Z (additional) ──────────────────────────────────────────────
{id:127,title:"Kadane's Algorithm",topic:"Arrays",difficulty:"Medium",sheet:"Striver A2Z",companies:["Amazon","Meta","Google","Microsoft"],links:{leetcode:L("maximum-subarray"),gfg:G("largest-sum-contiguous-subarray"),cn:C("maximum-subarray-sum_630526")}},
{id:128,title:"Pascal's Triangle",topic:"Arrays",difficulty:"Easy",sheet:"Striver A2Z",companies:["Amazon","Google","Apple"],links:{leetcode:L("pascals-triangle"),gfg:G("pascal-triangle"),cn:C("print-pascal-triangle_892741")}},
{id:129,title:"Majority Element",topic:"Arrays",difficulty:"Easy",sheet:"Striver A2Z",companies:["Amazon","Google","Microsoft","Adobe"],links:{leetcode:L("majority-element"),gfg:G("majority-element"),cn:C("majority-element_892787")}},
{id:130,title:"Majority Element II",topic:"Arrays",difficulty:"Medium",sheet:"Striver A2Z",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("majority-element-ii"),gfg:G("find-all-elements-in-array-that-appear-more-than-n-k-times"),cn:C("majority-element-ii_893027")}},
{id:131,title:"Stock Buy and Sell Multiple Transactions",topic:"Arrays",difficulty:"Medium",sheet:"Striver A2Z",companies:["Amazon","Google","Goldman Sachs"],links:{leetcode:L("best-time-to-buy-and-sell-stock-ii"),gfg:G("stock-buy-and-sell"),cn:C("buy-and-sell-stock_1071013")}},
{id:132,title:"Rearrange Array Elements by Sign",topic:"Arrays",difficulty:"Medium",sheet:"Striver A2Z",companies:["Amazon","Google"],links:{leetcode:L("rearrange-array-elements-by-sign"),gfg:G("rearrange-positive-and-negative-numbers"),cn:C("rearrange-array-elements-by-sign_6942650")}},
{id:133,title:"Leaders in an Array",topic:"Arrays",difficulty:"Easy",sheet:"Striver A2Z",companies:["Amazon","Google","Adobe"],links:{leetcode:"https://leetcode.com/problems/find-all-lonely-numbers-in-the-array/",gfg:G("leaders-in-an-array"),cn:C("leaders-in-an-array_873144")}},
{id:134,title:"Longest Subarray with Sum K",topic:"Arrays",difficulty:"Medium",sheet:"Striver A2Z",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("subarray-sum-equals-k"),gfg:G("longest-sub-array-with-sum-k"),cn:C("longest-subarray-with-sum-k_5713505")}},
{id:135,title:"Two Sum with Hashing",topic:"Hashing",difficulty:"Easy",sheet:"Striver A2Z",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("two-sum"),gfg:G("given-an-array-a-and-a-number-x-check-for-pair-in-a-with-sum-as-x"),cn:C("reading_6845742")}},
{id:136,title:"4Sum",topic:"Arrays",difficulty:"Medium",sheet:"Striver A2Z",companies:["Amazon","Google","Adobe"],links:{leetcode:L("4sum"),gfg:G("find-four-elements-that-sum-to-a-given-value-set-1"),cn:C("4-sum_1072322")}},
{id:137,title:"Count Inversions",topic:"Arrays",difficulty:"Medium",sheet:"Striver A2Z",companies:["Amazon","Microsoft","Google"],links:{leetcode:"https://leetcode.com/problems/count-of-smaller-numbers-after-self/",gfg:G("count-inversions"),cn:C("count-inversions_920290")}},
{id:138,title:"Reverse Pairs",topic:"Arrays",difficulty:"Hard",sheet:"Striver A2Z",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("reverse-pairs"),gfg:G("reverse-pairs"),cn:C("reverse-pairs_1112643")}},
{id:139,title:"Maximum Score from Subarray Minimums",topic:"Arrays",difficulty:"Medium",sheet:"Striver A2Z",companies:["Amazon","Google"],links:{leetcode:L("sum-of-subarray-minimums"),gfg:G("sum-of-subarray-minimums"),cn:C("sum-of-subarray-minimums_3171067")}},
{id:140,title:"Middle of Linked List",topic:"Linked List",difficulty:"Easy",sheet:"Striver A2Z",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("middle-of-the-linked-list"),gfg:G("finding-middle-element-in-a-linked-list"),cn:C("middle-of-linked-list_799287")}},
{id:141,title:"Delete Node in Linked List",topic:"Linked List",difficulty:"Easy",sheet:"Striver A2Z",companies:["Amazon","Microsoft"],links:{leetcode:L("delete-node-in-a-linked-list"),gfg:G("delete-a-node-in-single-link-list"),cn:C("delete-node_1105578")}},
{id:142,title:"Odd Even Linked List",topic:"Linked List",difficulty:"Medium",sheet:"Striver A2Z",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("odd-even-linked-list"),gfg:G("rearrange-a-linked-list-such-that-all-even-and-odd-positioned-nodes-are-together"),cn:C("odd-even-linked-list_1265204")}},
{id:143,title:"Palindrome Linked List",topic:"Linked List",difficulty:"Easy",sheet:"Striver A2Z",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("palindrome-linked-list"),gfg:G("check-if-linked-list-is-pallindrome"),cn:C("palindrome-linked-list_799352")}},
{id:144,title:"Flattening a Linked List",topic:"Linked List",difficulty:"Medium",sheet:"Striver A2Z",companies:["Amazon","Adobe","Flipkart"],links:{leetcode:"https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/",gfg:G("flattening-a-linked-list"),cn:C("flattening-a-linked-list_1115866")}},
{id:145,title:"Rotate Linked List",topic:"Linked List",difficulty:"Medium",sheet:"Striver A2Z",companies:["Amazon","Microsoft","Google"],links:{leetcode:L("rotate-list"),gfg:G("rotate-a-linked-list"),cn:C("rotate-linked-list_920454")}},
{id:146,title:"Clone Linked List with Random Pointer",topic:"Linked List",difficulty:"Medium",sheet:"Striver A2Z",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("copy-list-with-random-pointer"),gfg:G("clone-linked-list-next-arbit-pointer"),cn:C("clone-linked-list_1171427")}},
{id:147,title:"Preorder Traversal",topic:"Trees",difficulty:"Easy",sheet:"Striver A2Z",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("binary-tree-preorder-traversal"),gfg:G("tree-traversals-inorder-preorder-and-postorder"),cn:C("preorder-traversal_992217")}},
{id:148,title:"Inorder Traversal",topic:"Trees",difficulty:"Easy",sheet:"Striver A2Z",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("binary-tree-inorder-traversal"),gfg:G("inorder-traversal-of-binary-tree"),cn:C("inorder-traversal_1057645")}},
{id:149,title:"Postorder Traversal",topic:"Trees",difficulty:"Easy",sheet:"Striver A2Z",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("binary-tree-postorder-traversal"),gfg:G("postorder-traversal"),cn:C("postorder-traversal_2035933")}},
{id:150,title:"Height of Binary Tree",topic:"Trees",difficulty:"Easy",sheet:"Striver A2Z",companies:["Amazon","Google","Adobe"],links:{leetcode:L("maximum-depth-of-binary-tree"),gfg:G("height-of-binary-tree"),cn:C("height-of-binary-tree_4609628")}},
{id:151,title:"Diameter of Binary Tree",topic:"Trees",difficulty:"Easy",sheet:"Striver A2Z",companies:["Amazon","Google","Facebook"],links:{leetcode:L("diameter-of-binary-tree"),gfg:G("diameter-of-a-binary-tree"),cn:C("diameter-of-binary-tree_920552")}},
{id:152,title:"Balanced Binary Tree",topic:"Trees",difficulty:"Easy",sheet:"Striver A2Z",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("balanced-binary-tree"),gfg:G("how-to-determine-if-a-binary-tree-is-balanced"),cn:C("height-balanced-binary-tree_1062646")}},
{id:153,title:"Boundary Traversal of Binary Tree",topic:"Trees",difficulty:"Medium",sheet:"Striver A2Z",companies:["Amazon","Flipkart","Samsung"],links:{leetcode:"https://leetcode.com/problems/boundary-of-binary-tree/",gfg:G("boundary-traversal-of-binary-tree"),cn:C("boundary-traversal_790725")}},
{id:154,title:"Zigzag Level Order Traversal",topic:"Trees",difficulty:"Medium",sheet:"Striver A2Z",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("binary-tree-zigzag-level-order-traversal"),gfg:G("zigzag-tree-traversal"),cn:C("zig-zag-traversal_1062662")}},
{id:155,title:"Path Sum II",topic:"Trees",difficulty:"Medium",sheet:"Striver A2Z",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("path-sum-ii"),gfg:G("root-to-leaf-paths-sum"),cn:C("path-sum-ii_1262319")}},
{id:156,title:"Symmetric Tree",topic:"Trees",difficulty:"Easy",sheet:"Striver A2Z",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("symmetric-tree"),gfg:G("symmetric-tree-tree-which-is-mirror-image-of-itself"),cn:C("check-mirror-tree_1062664")}},
{id:157,title:"Flatten Binary Tree to Linked List",topic:"Trees",difficulty:"Medium",sheet:"Striver A2Z",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("flatten-binary-tree-to-linked-list"),gfg:G("flatten-bst-to-sorted-list"),cn:C("flatten-binary-tree-to-linked-list_1113615")}},
{id:158,title:"Morris Inorder Traversal",topic:"Trees",difficulty:"Medium",sheet:"Striver A2Z",companies:["Amazon","Google"],links:{leetcode:L("binary-tree-inorder-traversal"),gfg:G("morris-traversal-for-preorder"),cn:C("morris-inorder-traversal_1062666")}},
{id:159,title:"Flood Fill",topic:"Graphs",difficulty:"Easy",sheet:"Striver A2Z",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("flood-fill"),gfg:G("flood-fill-algorithm"),cn:C("flood-fill_3675514")}},
{id:160,title:"Detect Cycle in Undirected Graph",topic:"Graphs",difficulty:"Medium",sheet:"Striver A2Z",companies:["Amazon","Google","Microsoft"],links:{leetcode:"https://leetcode.com/problems/redundant-connection/",gfg:G("detect-cycle-undirected-graph"),cn:C("detect-cycle-in-an-undirected-graph_1062628")}},
{id:161,title:"Detect Cycle in Directed Graph",topic:"Graphs",difficulty:"Medium",sheet:"Striver A2Z",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("course-schedule"),gfg:G("detect-cycle-in-a-directed-graph"),cn:C("detect-cycle-in-a-directed-graph_1062626")}},
{id:162,title:"Topological Sort DFS",topic:"Graphs",difficulty:"Medium",sheet:"Striver A2Z",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("course-schedule-ii"),gfg:G("topological-sorting"),cn:C("topological-sort_982938")}},
{id:163,title:"Topological Sort BFS Kahns Algorithm",topic:"Graphs",difficulty:"Medium",sheet:"Striver A2Z",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("course-schedule-ii"),gfg:G("topological-sorting-by-bfs-kahns-algorithm"),cn:C("topological-sort_982938")}},
{id:164,title:"Dijkstra Algorithm",topic:"Graphs",difficulty:"Medium",sheet:"Striver A2Z",companies:["Amazon","Google","Microsoft","Uber"],links:{leetcode:L("network-delay-time"),gfg:G("dijkstras-shortest-path-algorithm-greedy-algo-7"),cn:C("dijkstras-shortest-path_920297")}},
{id:165,title:"Bellman Ford Algorithm",topic:"Graphs",difficulty:"Medium",sheet:"Striver A2Z",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance"),gfg:G("bellman-ford-algorithm-dp-23"),cn:C("bellman-ford_2041977")}},
{id:166,title:"Floyd Warshall Algorithm",topic:"Graphs",difficulty:"Hard",sheet:"Striver A2Z",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance"),gfg:G("floyd-warshall-algorithm-dp-16"),cn:C("floyd-warshall_2041979")}},
{id:167,title:"Minimum Spanning Tree Prims",topic:"Graphs",difficulty:"Medium",sheet:"Striver A2Z",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("min-cost-to-connect-all-points"),gfg:G("prims-mst-for-adjacency-list-representation-greedy-algo-6"),cn:C("minimum-spanning-tree_631769")}},
{id:168,title:"Minimum Spanning Tree Kruskal",topic:"Graphs",difficulty:"Medium",sheet:"Striver A2Z",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("min-cost-to-connect-all-points"),gfg:G("kruskals-minimum-spanning-tree-algorithm-greedy-algo-2"),cn:C("minimum-spanning-tree-kruskal_631771")}},
{id:169,title:"Strongly Connected Components Kosaraju",topic:"Graphs",difficulty:"Hard",sheet:"Striver A2Z",companies:["Amazon","Google"],links:{leetcode:L("number-of-strongly-connected-components"),gfg:G("strongly-connected-components"),cn:C("strongly-connected-components_1112621")}},
{id:170,title:"Bridges in Graph",topic:"Graphs",difficulty:"Hard",sheet:"Striver A2Z",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("critical-connections-in-a-network"),gfg:G("bridge-in-a-graph"),cn:C("bridges-in-graph_893027")}},
// Striver DP
{id:171,title:"Fibonacci Number",topic:"Dynamic Programming",difficulty:"Easy",sheet:"Striver A2Z",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("fibonacci-number"),gfg:G("program-for-nth-fibonacci-number"),cn:C("nth-fibonacci-number_74156")}},
{id:172,title:"Grid Unique Paths",topic:"Dynamic Programming",difficulty:"Medium",sheet:"Striver A2Z",companies:["Amazon","Google","Microsoft","Bloomberg"],links:{leetcode:L("unique-paths"),gfg:G("count-possible-paths-top-left-bottom-right-nxm-matrix"),cn:C("unique-paths_1081470")}},
{id:173,title:"Grid Unique Paths with Obstacles",topic:"Dynamic Programming",difficulty:"Medium",sheet:"Striver A2Z",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("unique-paths-ii"),gfg:G("unique-paths-in-a-grid-with-obstacles"),cn:C("maze-obstacles_977509")}},
{id:174,title:"Minimum Path Sum in Grid",topic:"Dynamic Programming",difficulty:"Medium",sheet:"Striver A2Z",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("minimum-path-sum"),gfg:G("minimum-cost-path"),cn:C("minimum-path-sum_ends")}},
{id:175,title:"0/1 Knapsack",topic:"Dynamic Programming",difficulty:"Medium",sheet:"Striver A2Z",companies:["Amazon","Microsoft","Google","Samsung"],links:{leetcode:L("partition-equal-subset-sum"),gfg:G("0-1-knapsack-problem-dp-10"),cn:C("0-1-knapsack_920542")}},
{id:176,title:"Subset Sum Problem",topic:"Dynamic Programming",difficulty:"Medium",sheet:"Striver A2Z",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("partition-equal-subset-sum"),gfg:G("subset-sum-problem"),cn:C("subset-sum-problem_3420290")}},
{id:177,title:"Rod Cutting Problem",topic:"Dynamic Programming",difficulty:"Medium",sheet:"Striver A2Z",companies:["Amazon","Microsoft","Adobe"],links:{leetcode:"https://leetcode.com/problems/minimum-cost-to-cut-a-stick/",gfg:G("rod-cutting-dp-13"),cn:C("rod-cutting_800289")}},
{id:178,title:"Matrix Chain Multiplication",topic:"Dynamic Programming",difficulty:"Hard",sheet:"Striver A2Z",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("burst-balloons"),gfg:G("matrix-chain-multiplication-dp-8"),cn:C("matrix-chain-multiplication_975344")}},
{id:179,title:"Longest Bitonic Subsequence",topic:"Dynamic Programming",difficulty:"Medium",sheet:"Striver A2Z",companies:["Amazon","Google"],links:{leetcode:L("longest-mountain-in-array"),gfg:G("longest-bitonic-subsequence"),cn:C("longest-bitonic-subsequence_1062783")}},
{id:180,title:"Count Palindromic Subsequences",topic:"Dynamic Programming",difficulty:"Hard",sheet:"Striver A2Z",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("count-different-palindromic-subsequences"),gfg:G("count-palindromic-subsequences"),cn:C("palindromic-subsequences_1062785")}},
// Striver Binary Search
{id:181,title:"Upper and Lower Bound",topic:"Binary Search",difficulty:"Easy",sheet:"Striver A2Z",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("search-insert-position"),gfg:G("find-first-and-last-occurrence-of-x"),cn:C("lower-bound_8165029")}},
{id:182,title:"Search Insert Position",topic:"Binary Search",difficulty:"Easy",sheet:"Striver A2Z",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("search-insert-position"),gfg:G("search-insert-position-of-k-in-a-sorted-array"),cn:C("search-insert-position_3433498")}},
{id:183,title:"Floor and Ceil in Sorted Array",topic:"Binary Search",difficulty:"Easy",sheet:"Striver A2Z",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("find-first-and-last-position-of-element-in-sorted-array"),gfg:G("ceil-the-floor"),cn:C("floor-and-ceil_3433500")}},
{id:184,title:"Allocate Minimum Pages",topic:"Binary Search",difficulty:"Hard",sheet:"Striver A2Z",companies:["Amazon","Google","Flipkart"],links:{leetcode:L("split-array-largest-sum"),gfg:G("allocate-minimum-number-of-pages"),cn:C("allocate-books_1090014")}},
{id:185,title:"Aggressive Cows",topic:"Binary Search",difficulty:"Hard",sheet:"Striver A2Z",companies:["Amazon","Google","Codeforces"],links:{leetcode:L("maximize-the-minimum-powered-city"),gfg:G("aggressive-cows"),cn:C("aggressive-cows_1082559")}},
// Striver Stacks and Queues
{id:186,title:"Next Greater Element",topic:"Stacks",difficulty:"Easy",sheet:"Striver A2Z",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("next-greater-element-i"),gfg:G("next-greater-element"),cn:C("next-greater-element_799354")}},
{id:187,title:"Next Smaller Element",topic:"Stacks",difficulty:"Easy",sheet:"Striver A2Z",companies:["Amazon","Google"],links:{leetcode:L("next-greater-element-ii"),gfg:G("next-smaller-element"),cn:C("next-smaller-element_1112652")}},
{id:188,title:"Sliding Window Maximum",topic:"Queues",difficulty:"Hard",sheet:"Striver A2Z",companies:["Amazon","Google","Microsoft","Meta"],links:{leetcode:L("sliding-window-maximum"),gfg:G("maximum-of-all-subarrays-of-size-k"),cn:C("sliding-window-maximum_980226")}},
{id:189,title:"Stock Span Problem",topic:"Stacks",difficulty:"Medium",sheet:"Striver A2Z",companies:["Amazon","Morgan Stanley","Adobe"],links:{leetcode:L("online-stock-span"),gfg:G("the-stock-span-problem"),cn:C("stock-span_3542305")}},
{id:190,title:"LFU Cache",topic:"Hashing",difficulty:"Hard",sheet:"Striver A2Z",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("lfu-cache"),gfg:G("lfu-cache-implementation"),cn:C("lfu-cache_1355050")}},

// ── LOVE BABBAR 450 (additional) ──────────────────────────────────────────
{id:191,title:"Reverse an Array",topic:"Arrays",difficulty:"Easy",sheet:"Love Babbar 450",companies:["Amazon","TCS","Infosys"],links:{leetcode:L("reverse-string"),gfg:G("write-a-program-to-reverse-an-array-or-string"),cn:C("reverse-array_1262298")}},
{id:192,title:"Find Maximum and Minimum",topic:"Arrays",difficulty:"Easy",sheet:"Love Babbar 450",companies:["Amazon","TCS"],links:{leetcode:L("find-the-k-th-largest-integer-in-the-array"),gfg:G("maximum-and-minimum-in-an-array"),cn:C("maximum-and-minimum_1262300")}},
{id:193,title:"Cyclically Rotate Array",topic:"Arrays",difficulty:"Easy",sheet:"Love Babbar 450",companies:["Amazon","Microsoft","TCS"],links:{leetcode:L("rotate-array"),gfg:G("c-program-cyclically-rotate-an-array-by-one"),cn:C("left-rotate-an-array-by-one-place_5026278")}},
{id:194,title:"Minimize the Heights",topic:"Arrays",difficulty:"Medium",sheet:"Love Babbar 450",companies:["Amazon","Google","Flipkart"],links:{leetcode:L("minimum-difference-between-highest-and-lowest-of-k-scores"),gfg:G("minimize-the-heights3"),cn:C("minimize-the-heights_4489294")}},
{id:195,title:"Move Negative Numbers to Left",topic:"Arrays",difficulty:"Easy",sheet:"Love Babbar 450",companies:["Amazon","Microsoft"],links:{leetcode:L("move-zeroes"),gfg:G("move-negative-numbers-to-left-and-positive-to-right"),cn:C("segregate-negatives-and-positives_1262304")}},
{id:196,title:"Union and Intersection of Arrays",topic:"Arrays",difficulty:"Easy",sheet:"Love Babbar 450",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("intersection-of-two-arrays"),gfg:G("union-and-intersection-of-two-sorted-arrays-2"),cn:C("intersection-of-two-arrays_1112602")}},
{id:197,title:"Rotate Array by K",topic:"Arrays",difficulty:"Medium",sheet:"Love Babbar 450",companies:["Amazon","Microsoft","Google"],links:{leetcode:L("rotate-array"),gfg:G("array-rotation"),cn:C("rotate-array_1262312")}},
{id:198,title:"Stock Buy Sell to Maximize Profit",topic:"Arrays",difficulty:"Medium",sheet:"Love Babbar 450",companies:["Amazon","Google","Goldman Sachs"],links:{leetcode:L("best-time-to-buy-and-sell-stock-iii"),gfg:G("stock-buy-and-sell"),cn:C("buy-and-sell-stock_1071013")}},
{id:199,title:"Equilibrium Point",topic:"Arrays",difficulty:"Easy",sheet:"Love Babbar 450",companies:["Amazon","Microsoft","Infosys"],links:{leetcode:L("find-pivot-index"),gfg:G("equilibrium-index-of-an-array"),cn:C("find-pivot-index_3431972")}},
{id:200,title:"Wave Array",topic:"Arrays",difficulty:"Easy",sheet:"Love Babbar 450",companies:["Adobe","Amazon","Microsoft"],links:{leetcode:L("wiggle-sort"),gfg:G("sort-array-wave-form-2"),cn:C("wave-sort_1094901")}},
{id:201,title:"Array Subset of Another Array",topic:"Arrays",difficulty:"Easy",sheet:"Love Babbar 450",companies:["Amazon","Microsoft"],links:{leetcode:L("is-subsequence"),gfg:G("array-subset-of-another-array"),cn:C("is-an-array-subset-of-another-array_1262316")}},
{id:202,title:"Triplet Sum in Array",topic:"Arrays",difficulty:"Medium",sheet:"Love Babbar 450",companies:["Amazon","Google","Accolite"],links:{leetcode:L("3sum"),gfg:G("find-a-triplet-that-sum-to-a-given-value"),cn:C("three-sum_6922132")}},
{id:203,title:"Chocolate Distribution",topic:"Arrays",difficulty:"Easy",sheet:"Love Babbar 450",companies:["Flipkart","Amazon"],links:{leetcode:L("minimum-difference-between-highest-and-lowest-of-k-scores"),gfg:G("chocolate-distribution-problem"),cn:C("chocolate-distribution-problem_3822612")}},
{id:204,title:"Smallest Positive Missing Number",topic:"Arrays",difficulty:"Medium",sheet:"Love Babbar 450",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("first-missing-positive"),gfg:G("find-the-smallest-positive-number-missing-from-an-unsorted-array"),cn:C("first-missing-positive_699919")}},
{id:205,title:"Reverse a String",topic:"Strings",difficulty:"Easy",sheet:"Love Babbar 450",companies:["Amazon","TCS","Infosys"],links:{leetcode:L("reverse-string"),gfg:G("reverse-a-string"),cn:C("reverse-the-string_758958")}},
{id:206,title:"Check String Palindrome",topic:"Strings",difficulty:"Easy",sheet:"Love Babbar 450",companies:["Amazon","Microsoft","TCS"],links:{leetcode:L("valid-palindrome"),gfg:G("c-program-check-given-string-palindrome"),cn:C("palindrome-string_624561")}},
{id:207,title:"Permutations of String",topic:"Strings",difficulty:"Medium",sheet:"Love Babbar 450",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("permutations-in-string"),gfg:G("write-a-c-program-to-print-all-permutations-of-a-given-string"),cn:C("string-permutations_1262328")}},
{id:208,title:"Longest Common Prefix",topic:"Strings",difficulty:"Easy",sheet:"Love Babbar 450",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("longest-common-prefix"),gfg:G("longest-common-prefix-using-word-by-word-matching"),cn:C("longest-common-prefix_2090383")}},
{id:209,title:"Count Occurrences of Anagrams",topic:"Strings",difficulty:"Medium",sheet:"Love Babbar 450",companies:["Amazon","Google"],links:{leetcode:L("find-all-anagrams-in-a-string"),gfg:G("count-occurrences-of-anagrams"),cn:C("count-occurrences-of-anagrams_1262330")}},
{id:210,title:"Implement strstr",topic:"Strings",difficulty:"Easy",sheet:"Love Babbar 450",companies:["Amazon","Microsoft","Google"],links:{leetcode:L("find-the-index-of-the-first-occurrence-in-a-string"),gfg:G("implement-strstr"),cn:C("strstr_1087589")}},
{id:211,title:"Roman Number to Integer",topic:"Strings",difficulty:"Easy",sheet:"Love Babbar 450",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("roman-to-integer"),gfg:G("roman-number-to-integer"),cn:C("roman-number-to-integer_1555659")}},
{id:212,title:"Integer to Roman",topic:"Strings",difficulty:"Medium",sheet:"Love Babbar 450",companies:["Amazon","Bloomberg","Google"],links:{leetcode:L("integer-to-roman"),gfg:G("converting-decimal-number-lying-between-1-to-3999-to-roman-numerals"),cn:C("integer-to-roman_1555661")}},
{id:213,title:"Longest Palindromic Subsequence",topic:"Strings",difficulty:"Medium",sheet:"Love Babbar 450",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("longest-palindromic-subsequence"),gfg:G("longest-palindromic-subsequence-dp-12"),cn:C("longest-palindromic-subsequence_1262336")}},
{id:214,title:"Detect Loop in Linked List",topic:"Linked List",difficulty:"Easy",sheet:"Love Babbar 450",companies:["Amazon","Microsoft","Google"],links:{leetcode:L("linked-list-cycle"),gfg:G("detect-loop-in-a-linked-list"),cn:C("detect-cycle_628974")}},
{id:215,title:"Remove Loop in Linked List",topic:"Linked List",difficulty:"Medium",sheet:"Love Babbar 450",companies:["Amazon","Microsoft"],links:{leetcode:L("linked-list-cycle-ii"),gfg:G("remove-loop-in-linked-list"),cn:C("remove-cycle_1262346")}},
{id:216,title:"N-th Node from End",topic:"Linked List",difficulty:"Easy",sheet:"Love Babbar 450",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("remove-nth-node-from-end-of-list"),gfg:G("nth-node-from-end-of-linked-list"),cn:C("nth-node-from-end_1262348")}},
{id:217,title:"Intersection of Two Linked Lists",topic:"Linked List",difficulty:"Easy",sheet:"Love Babbar 450",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("intersection-of-two-linked-lists"),gfg:G("write-a-function-to-get-the-intersection-point-of-two-linked-lists"),cn:C("intersection-of-two-linked-lists_1262350")}},
{id:218,title:"Merge Sort on Linked List",topic:"Linked List",difficulty:"Medium",sheet:"Love Babbar 450",companies:["Amazon","Microsoft","Google"],links:{leetcode:L("sort-list"),gfg:G("merge-sort-for-linked-list"),cn:C("sort-list_2107796")}},
{id:219,title:"Quicksort on Linked List",topic:"Linked List",difficulty:"Hard",sheet:"Love Babbar 450",companies:["Amazon","Microsoft"],links:{leetcode:L("sort-list"),gfg:G("quicksort-on-singly-linked-list"),cn:C("sort-list_2107796")}},
{id:220,title:"Pairwise Swap Nodes",topic:"Linked List",difficulty:"Medium",sheet:"Love Babbar 450",companies:["Amazon","Google"],links:{leetcode:L("swap-nodes-in-pairs"),gfg:G("pairwise-swap-elements-of-a-given-linked-list"),cn:C("swap-nodes-in-pairs_1262356")}},
{id:221,title:"Implement Stack using Queue",topic:"Stacks",difficulty:"Easy",sheet:"Love Babbar 450",companies:["Amazon","Microsoft","Google"],links:{leetcode:L("implement-stack-using-queues"),gfg:G("implement-stack-using-queue"),cn:C("implement-stack-using-single-queue_239072")}},
{id:222,title:"Implement Queue using Stack",topic:"Queues",difficulty:"Easy",sheet:"Love Babbar 450",companies:["Amazon","Microsoft","Google"],links:{leetcode:L("implement-queue-using-stacks"),gfg:G("queue-using-stacks"),cn:C("queue-using-stack_2099650")}},
{id:223,title:"K Stacks in Array",topic:"Stacks",difficulty:"Hard",sheet:"Love Babbar 450",companies:["Amazon","Google"],links:{leetcode:"https://leetcode.com/problems/design-circular-queue/",gfg:G("efficiently-implement-k-stacks-single-array"),cn:C("n-stacks-in-an-array_1112652")}},
{id:224,title:"Celebrity Problem",topic:"Stacks",difficulty:"Medium",sheet:"Love Babbar 450",companies:["Amazon","Adobe","Accolite"],links:{leetcode:"https://leetcode.com/problems/find-the-celebrity/",gfg:G("the-celebrity-problem"),cn:C("the-celebrity-problem_1062650")}},
{id:225,title:"Tower of Hanoi",topic:"Stacks",difficulty:"Medium",sheet:"Love Babbar 450",companies:["Amazon","Microsoft"],links:{leetcode:"https://leetcode.com/problems/tower-of-hanoi/",gfg:G("recursive-functions"),cn:C("tower-of-hanoi_992227")}},
{id:226,title:"Histogram Maximum Area",topic:"Stacks",difficulty:"Hard",sheet:"Love Babbar 450",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("largest-rectangle-in-histogram"),gfg:G("largest-rectangle-under-histogram"),cn:C("largest-rectangle-in-a-histogram_1058825")}},
{id:227,title:"BFS Graph Traversal",topic:"Graphs",difficulty:"Easy",sheet:"Love Babbar 450",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("number-of-islands"),gfg:G("breadth-first-traversal-for-a-graph"),cn:C("bfs-of-graph_973741")}},
{id:228,title:"DFS Graph Traversal",topic:"Graphs",difficulty:"Easy",sheet:"Love Babbar 450",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("number-of-islands"),gfg:G("depth-first-traversal-for-a-graph"),cn:C("dfs-of-graph_630462")}},
{id:229,title:"Transitive Closure of Graph",topic:"Graphs",difficulty:"Medium",sheet:"Love Babbar 450",companies:["Amazon","Microsoft"],links:{leetcode:L("course-schedule-iv"),gfg:G("transitive-closure-of-a-graph"),cn:C("transitive-closure-of-a-graph_1062630")}},
{id:230,title:"Isomorphic Graphs",topic:"Graphs",difficulty:"Medium",sheet:"Love Babbar 450",companies:["Amazon","Google"],links:{leetcode:L("isomorphic-strings"),gfg:G("check-if-two-graphs-are-isomorphic"),cn:C("isomorphic-strings_1112602")}},
{id:231,title:"Mother Vertex",topic:"Graphs",difficulty:"Medium",sheet:"Love Babbar 450",companies:["Amazon","Google"],links:{leetcode:"https://leetcode.com/problems/find-eventual-safe-states/",gfg:G("find-a-mother-vertex-in-a-graph"),cn:C("mother-vertex_1062632")}},
{id:232,title:"Binary Tree to DLL",topic:"Trees",difficulty:"Medium",sheet:"Love Babbar 450",companies:["Amazon","Microsoft","Flipkart"],links:{leetcode:"https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/",gfg:G("convert-given-binary-tree-to-doubly-linked-list"),cn:C("binary-tree-to-dll_1239267")}},
{id:233,title:"Check if Tree is Sum Tree",topic:"Trees",difficulty:"Easy",sheet:"Love Babbar 450",companies:["Amazon","Microsoft"],links:{leetcode:L("path-sum"),gfg:G("check-if-a-given-binary-tree-is-sumtree"),cn:C("sum-tree_1262362")}},
{id:234,title:"Check for BST",topic:"Trees",difficulty:"Easy",sheet:"Love Babbar 450",companies:["Amazon","Microsoft","Google"],links:{leetcode:L("validate-binary-search-tree"),gfg:G("a-program-to-check-if-a-binary-tree-is-bst-or-not"),cn:C("validate-bst_799483")}},
{id:235,title:"Print Left View of Tree",topic:"Trees",difficulty:"Easy",sheet:"Love Babbar 450",companies:["Amazon","Flipkart","Microsoft"],links:{leetcode:L("binary-tree-left-side-view"),gfg:G("print-left-view-binary-tree"),cn:C("left-view-of-binary-tree_1062634")}},
{id:236,title:"Print Right View of Tree",topic:"Trees",difficulty:"Easy",sheet:"Love Babbar 450",companies:["Amazon","Flipkart","Microsoft"],links:{leetcode:L("binary-tree-right-side-view"),gfg:G("print-right-view-of-a-binary-tree"),cn:C("right-view-of-binary-tree_1062636")}},
{id:237,title:"Print Top View of Tree",topic:"Trees",difficulty:"Medium",sheet:"Love Babbar 450",companies:["Amazon","Flipkart","Microsoft"],links:{leetcode:"https://leetcode.com/problems/n-ary-tree-level-order-traversal/",gfg:G("print-nodes-top-view-binary-tree"),cn:C("top-view-of-binary-tree_799401")}},
{id:238,title:"Print Bottom View of Tree",topic:"Trees",difficulty:"Medium",sheet:"Love Babbar 450",companies:["Amazon","Flipkart","Microsoft"],links:{leetcode:"https://leetcode.com/problems/n-ary-tree-level-order-traversal/",gfg:G("bottom-view-binary-tree"),cn:C("bottom-view-of-binary-tree_893010")}},
{id:239,title:"Remove BST Keys Outside Range",topic:"Trees",difficulty:"Medium",sheet:"Love Babbar 450",companies:["Amazon","Microsoft"],links:{leetcode:L("trim-a-binary-search-tree"),gfg:G("remove-bst-keys-outside-given-range"),cn:C("trim-a-binary-search-tree_1262368")}},
{id:240,title:"Vertical Order Traversal",topic:"Trees",difficulty:"Medium",sheet:"Love Babbar 450",companies:["Amazon","Flipkart","Microsoft"],links:{leetcode:L("vertical-order-traversal-of-a-binary-tree"),gfg:G("print-binary-tree-vertical-order-2"),cn:C("vertical-order-traversal_1263702")}},
{id:241,title:"Counting Sort",topic:"Arrays",difficulty:"Easy",sheet:"Love Babbar 450",companies:["Amazon","TCS"],links:{leetcode:L("sort-an-array"),gfg:G("counting-sort"),cn:C("counting-sort_1095084")}},
{id:242,title:"Bubble Sort",topic:"Arrays",difficulty:"Easy",sheet:"Love Babbar 450",companies:["Amazon","TCS","Infosys"],links:{leetcode:L("sort-an-array"),gfg:G("bubble-sort"),cn:C("bubble-sort_1062656")}},
{id:243,title:"Selection Sort",topic:"Arrays",difficulty:"Easy",sheet:"Love Babbar 450",companies:["Amazon","TCS","Infosys"],links:{leetcode:L("sort-an-array"),gfg:G("selection-sort"),cn:C("selection-sort_1062658")}},
{id:244,title:"Merge Sort",topic:"Arrays",difficulty:"Medium",sheet:"Love Babbar 450",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("sort-an-array"),gfg:G("merge-sort"),cn:C("merge-sort_920442")}},
{id:245,title:"Quick Sort",topic:"Arrays",difficulty:"Medium",sheet:"Love Babbar 450",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("sort-an-array"),gfg:G("quick-sort"),cn:C("quick-sort_983425")}},
{id:246,title:"Heap Sort",topic:"Heaps",difficulty:"Medium",sheet:"Love Babbar 450",companies:["Amazon","Google","Microsoft"],links:{leetcode:L("sort-an-array"),gfg:G("heap-sort"),cn:C("heap-sort_1062660")}},
{id:247,title:"N-th Fibonacci using DP",topic:"Dynamic Programming",difficulty:"Easy",sheet:"Love Babbar 450",companies:["Amazon","TCS","Infosys"],links:{leetcode:L("fibonacci-number"),gfg:G("program-for-nth-fibonacci-number"),cn:C("nth-fibonacci-number_74156")}},
{id:248,title:"Minimum Steps to Reach Target",topic:"Dynamic Programming",difficulty:"Medium",sheet:"Love Babbar 450",companies:["Amazon","Google"],links:{leetcode:L("jump-game-ii"),gfg:G("minimum-number-of-jumps-to-reach-end-of-a-given-array"),cn:C("minimum-number-of-jumps_699017")}},
{id:249,title:"Longest Repeating Subsequence",topic:"Dynamic Programming",difficulty:"Medium",sheet:"Love Babbar 450",companies:["Amazon","Microsoft","Google"],links:{leetcode:L("longest-common-subsequence"),gfg:G("longest-repeating-subsequence"),cn:C("longest-repeating-subsequence_1262372")}},
{id:250,title:"Coin Toss Problem",topic:"Dynamic Programming",difficulty:"Easy",sheet:"Love Babbar 450",companies:["Amazon","Microsoft"],links:{leetcode:L("coin-change"),gfg:G("coin-change-dp-7"),cn:C("minimum-number-of-coins_2163208")}},
];

const TOPICS = [...new Set(PROBLEMS.map(p => p.topic))].sort();
const COMPANIES = ["Amazon","Google","Microsoft","Meta","Apple","Adobe","Bloomberg","Uber","Flipkart","Goldman Sachs","Airbnb","LinkedIn","Twitter","Snapchat","TCS","Infosys"];

const NEXT_PROBLEM_MAP = {
  1:[9,72,62],3:[1,62,68],9:[10,5,72],13:[14,15,62],
  28:[37,39,36],36:[37,38,171],37:[39,107,175],47:[84,86,159],
  20:[26,151,152],26:[30,32,33],58:[59,73,186],
  76:[77,78,60],93:[94,95,103],96:[97,99,101],
};

const ROADMAP = [
  {level:"Beginner",color:"#00d4aa",topics:[
    {name:"Arrays",icon:"▦",desc:"Loops, two pointers, sliding window, prefix sums"},
    {name:"Strings",icon:"⌨",desc:"String manipulation, pattern matching, hashing"},
    {name:"Hashing",icon:"#",desc:"HashMaps, frequency counting, LRU cache"},
    {name:"Binary Search",icon:"⌖",desc:"Searching sorted arrays, binary search on answer"},
    {name:"Bit Manipulation",icon:"⊕",desc:"XOR tricks, bit masking, fast power"},
  ]},
  {level:"Intermediate",color:"#fbbf24",topics:[
    {name:"Linked List",icon:"⊙",desc:"Pointers, reversal, cycle detection, merging"},
    {name:"Stacks",icon:"⬆",desc:"Monotonic stacks, next greater element, brackets"},
    {name:"Queues",icon:"⬄",desc:"BFS, sliding window maximum, deque"},
    {name:"Trees",icon:"🌲",desc:"DFS/BFS on trees, BST operations, LCA"},
    {name:"Heaps",icon:"🔺",desc:"Priority queues, k-th element, top-k problems"},
    {name:"Tries",icon:"🔠",desc:"Prefix trees, word search, autocomplete"},
  ]},
  {level:"Advanced",color:"#f87171",topics:[
    {name:"Graphs",icon:"⬡",desc:"DFS, BFS, topological sort, Dijkstra, Union-Find"},
    {name:"Backtracking",icon:"↩",desc:"Subsets, permutations, N-Queens, Sudoku"},
    {name:"Dynamic Programming",icon:"◈",desc:"Memoization, tabulation, classic DP patterns"},
  ]},
];

const CRASH_SECTIONS = [
  {title:"Must-Know Arrays & Strings",ids:[1,5,10,13,15,65,62,63]},
  {title:"Trees & Graphs Essentials",ids:[26,29,33,47,50,87,164]},
  {title:"Dynamic Programming Core",ids:[36,37,39,40,42,175,108]},
  {title:"Linked Lists & Stacks",ids:[20,21,22,25,58,59,79]},
  {title:"Binary Search & Heaps",ids:[76,77,61,79,80,81,184]},
  {title:"Backtracking Must-Dos",ids:[96,97,99,101,103,102]},
];

const diffColor = d => d==="Easy"?"#4ade80":d==="Medium"?"#fbbf24":"#f87171";

function Badge({text,color}){
  return <span style={{background:`${color}18`,color,border:`1px solid ${color}40`,borderRadius:4,padding:"2px 8px",fontSize:11,fontWeight:600,letterSpacing:.5}}>{text}</span>;
}

function ProblemCard({problem,status,onStatus,bookmarked,onBookmark}){
  const [expanded,setExpanded]=useState(false);
  const nextIds=NEXT_PROBLEM_MAP[problem.id];
  const nextProblems=nextIds?PROBLEMS.filter(p=>nextIds.includes(p.id)):[];
  return(
    <div style={{background:"#12151e",border:"1px solid #1e2435",borderRadius:12,padding:"16px 18px",transition:"border-color .2s,transform .2s"}}
      onMouseEnter={e=>{e.currentTarget.style.borderColor="#2a3550";e.currentTarget.style.transform="translateY(-1px)"}}
      onMouseLeave={e=>{e.currentTarget.style.borderColor="#1e2435";e.currentTarget.style.transform="none"}}
    >
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:8}}>
        <div style={{flex:1}}>
          <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:8}}>
            <Badge text={problem.difficulty} color={diffColor(problem.difficulty)}/>
            <Badge text={problem.topic} color="#818cf8"/>
            <Badge text={problem.sheet} color="#38bdf8"/>
          </div>
          <div style={{fontWeight:700,fontSize:15,color:"#e2e8f0",marginBottom:6}}>{problem.title}</div>
          <div style={{fontSize:11,color:"#64748b",display:"flex",gap:4,flexWrap:"wrap"}}>
            {problem.companies.map(c=><span key={c} style={{background:"#1e2435",padding:"2px 7px",borderRadius:4}}>{c}</span>)}
          </div>
        </div>
        <div style={{display:"flex",gap:8,alignItems:"center",flexShrink:0}}>
          <button onClick={()=>onBookmark(problem.id)} style={{background:"none",border:"none",cursor:"pointer",fontSize:18,color:bookmarked?"#fbbf24":"#3a4259",transition:"color .2s"}}>{bookmarked?"★":"☆"}</button>
          <select value={status||"Not Started"} onChange={e=>onStatus(problem.id,e.target.value)}
            style={{background:"#1a1f2e",color:status==="Completed"?"#4ade80":status==="Revision"?"#fbbf24":"#64748b",border:"1px solid #2a3550",borderRadius:6,padding:"4px 8px",fontSize:12,cursor:"pointer"}}>
            <option>Not Started</option><option>Revision</option><option>Completed</option>
          </select>
        </div>
      </div>
      <div style={{display:"flex",gap:8,marginTop:12,flexWrap:"wrap",alignItems:"center"}}>
        <a href={problem.links.leetcode} target="_blank" rel="noreferrer" style={{background:"#ff6b0018",color:"#ff6b00",border:"1px solid #ff6b0040",padding:"5px 12px",borderRadius:6,fontSize:12,fontWeight:600,textDecoration:"none"}}>⚡ LeetCode</a>
        <a href={problem.links.gfg} target="_blank" rel="noreferrer" style={{background:"#2f8d4618",color:"#2f8d46",border:"1px solid #2f8d4640",padding:"5px 12px",borderRadius:6,fontSize:12,fontWeight:600,textDecoration:"none"}}>🌿 GFG</a>
        <a href={problem.links.cn} target="_blank" rel="noreferrer" style={{background:"#f0762018",color:"#f07620",border:"1px solid #f0762040",padding:"5px 12px",borderRadius:6,fontSize:12,fontWeight:600,textDecoration:"none"}}>🥷 Coding Ninjas</a>
        {nextProblems.length>0&&<button onClick={()=>setExpanded(!expanded)} style={{background:"#6366f118",color:"#818cf8",border:"1px solid #6366f140",padding:"5px 12px",borderRadius:6,fontSize:12,fontWeight:600,cursor:"pointer",marginLeft:"auto"}}>✨ Next {expanded?"▲":"▼"}</button>}
      </div>
      {expanded&&nextProblems.length>0&&(
        <div style={{marginTop:12,padding:12,background:"#0d1117",borderRadius:8,border:"1px solid #6366f130"}}>
          <div style={{fontSize:11,color:"#818cf8",fontWeight:700,marginBottom:8,letterSpacing:1}}>SUGGESTED NEXT</div>
          {nextProblems.map(np=>(
            <div key={np.id} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"6px 0",borderBottom:"1px solid #1a2030"}}>
              <span style={{color:"#c4c9d4",fontSize:13}}>{np.title}</span>
              <Badge text={np.difficulty} color={diffColor(np.difficulty)}/>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function StatsBar({problems,statuses}){
  const total=problems.length,done=problems.filter(p=>statuses[p.id]==="Completed").length,rev=problems.filter(p=>statuses[p.id]==="Revision").length,pct=total?Math.round(done/total*100):0;
  return(
    <div style={{background:"#12151e",border:"1px solid #1e2435",borderRadius:10,padding:"12px 18px",marginBottom:16,display:"flex",gap:24,alignItems:"center",flexWrap:"wrap"}}>
      <div>
        <div style={{fontSize:11,color:"#64748b",marginBottom:2}}>PROGRESS</div>
        <div style={{width:180,height:6,background:"#1e2435",borderRadius:99,overflow:"hidden"}}>
          <div style={{width:`${pct}%`,height:"100%",background:"linear-gradient(90deg,#6366f1,#22d3ee)",borderRadius:99,transition:"width .4s"}}/>
        </div>
        <div style={{fontSize:11,color:"#94a3b8",marginTop:3}}>{done}/{total} solved ({pct}%)</div>
      </div>
      <div style={{display:"flex",gap:16}}>
        {[{v:done,c:"#4ade80",l:"DONE"},{v:rev,c:"#fbbf24",l:"REVIEW"},{v:total-done-rev,c:"#94a3b8",l:"TODO"}].map(s=>(
          <div key={s.l} style={{textAlign:"center"}}><div style={{fontSize:20,fontWeight:800,color:s.c}}>{s.v}</div><div style={{fontSize:10,color:"#64748b"}}>{s.l}</div></div>
        ))}
      </div>
    </div>
  );
}

function ProblemsPage({title,problems,statuses,onStatus,bookmarks,onBookmark}){
  const [search,setSearch]=useState("");
  const [filterTopic,setFilterTopic]=useState("All");
  const [filterDiff,setFilterDiff]=useState("All");
  const [filterCompany,setFilterCompany]=useState("All");
  const filtered=useMemo(()=>problems.filter(p=>{
    if(search&&!p.title.toLowerCase().includes(search.toLowerCase()))return false;
    if(filterTopic!=="All"&&p.topic!==filterTopic)return false;
    if(filterDiff!=="All"&&p.difficulty!==filterDiff)return false;
    if(filterCompany!=="All"&&!p.companies.includes(filterCompany))return false;
    return true;
  }),[problems,search,filterTopic,filterDiff,filterCompany]);
  const sel={background:"#1a1f2e",color:"#94a3b8",border:"1px solid #2a3550",borderRadius:8,padding:"7px 12px",fontSize:13,cursor:"pointer"};
  return(
    <div>
      <h2 style={{color:"#e2e8f0",marginBottom:16,fontSize:22,fontWeight:800}}>{title}</h2>
      <StatsBar problems={problems} statuses={statuses}/>
      <div style={{display:"flex",gap:10,flexWrap:"wrap",marginBottom:16}}>
        <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="🔍  Search problems..." style={{...sel,flex:"1 1 200px",background:"#12151e",color:"#e2e8f0",outline:"none"}}/>
        <select value={filterTopic} onChange={e=>setFilterTopic(e.target.value)} style={sel}><option>All</option>{TOPICS.map(t=><option key={t}>{t}</option>)}</select>
        <select value={filterDiff} onChange={e=>setFilterDiff(e.target.value)} style={sel}><option>All</option><option>Easy</option><option>Medium</option><option>Hard</option></select>
        <select value={filterCompany} onChange={e=>setFilterCompany(e.target.value)} style={sel}><option>All</option>{COMPANIES.map(c=><option key={c}>{c}</option>)}</select>
      </div>
      <div style={{fontSize:13,color:"#64748b",marginBottom:12}}>{filtered.length} problems</div>
      <div style={{display:"flex",flexDirection:"column",gap:10}}>
        {filtered.map(p=><ProblemCard key={p.id} problem={p} status={statuses[p.id]} onStatus={onStatus} bookmarked={bookmarks.has(p.id)} onBookmark={onBookmark}/>)}
        {filtered.length===0&&<div style={{color:"#64748b",textAlign:"center",padding:40}}>No problems match your filters.</div>}
      </div>
    </div>
  );
}

function HomePage({setPage}){
  const cards=[
    {id:"striver",icon:"⚡",title:"Striver A2Z",sub:"Build Core DSA Concepts",color:"#6366f1",count:PROBLEMS.filter(p=>p.sheet==="Striver A2Z").length},
    {id:"babbar",icon:"💪",title:"Love Babbar 450",sub:"450 Problems to Master DSA",color:"#f472b6",count:PROBLEMS.filter(p=>p.sheet==="Love Babbar 450").length},
    {id:"blind75",icon:"👁",title:"Blind 75",sub:"Essential Interview Problems",color:"#22d3ee",count:PROBLEMS.filter(p=>p.sheet==="Blind75").length},
    {id:"neet150",icon:"🎯",title:"NeetCode 150",sub:"Advanced Interview Prep",color:"#a3e635",count:PROBLEMS.filter(p=>p.sheet==="NeetCode150").length},
    {id:"company",icon:"🏢",title:"Company Questions",sub:"Filter by FAANG & Top Companies",color:"#fbbf24",count:PROBLEMS.length},
    {id:"roadmap",icon:"🗺",title:"DSA Roadmap",sub:"Structured Learning Path",color:"#34d399"},
    {id:"crash",icon:"🔥",title:"Interview Crash Mode",sub:"Fast Revision Before Interview",color:"#f87171"},
    {id:"bookmarks",icon:"★",title:"Bookmarks",sub:"Your Saved Problems",color:"#fb923c"},
    {id:"tracker",icon:"📊",title:"Progress Tracker",sub:"Track Your Journey",color:"#818cf8"},
  ];
  const total=PROBLEMS.length;
  return(
    <div>
      <div style={{marginBottom:32}}>
        <div style={{fontSize:13,color:"#6366f1",fontWeight:700,letterSpacing:2,marginBottom:8}}>WELCOME TO</div>
        <h1 style={{fontSize:"clamp(28px,5vw,42px)",fontWeight:900,color:"#f1f5f9",margin:0,lineHeight:1.1}}>
          DSA <span style={{background:"linear-gradient(135deg,#6366f1,#22d3ee)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Navigator</span>
        </h1>
        <p style={{color:"#64748b",marginTop:8,fontSize:15}}>Your complete interview preparation command center — {total} problems across all major sheets</p>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))",gap:16}}>
        {cards.map(c=>(
          <div key={c.id} onClick={()=>setPage(c.id)}
            style={{background:"#12151e",border:`1px solid ${c.color}30`,borderRadius:14,padding:"22px 20px",cursor:"pointer",transition:"all .2s",position:"relative",overflow:"hidden"}}
            onMouseEnter={e=>{e.currentTarget.style.background=`${c.color}0d`;e.currentTarget.style.borderColor=`${c.color}60`;e.currentTarget.style.transform="translateY(-3px)"}}
            onMouseLeave={e=>{e.currentTarget.style.background="#12151e";e.currentTarget.style.borderColor=`${c.color}30`;e.currentTarget.style.transform="none"}}
          >
            <div style={{position:"absolute",top:14,right:16,fontSize:28,opacity:.3}}>{c.icon}</div>
            <div style={{fontSize:26,marginBottom:10}}>{c.icon}</div>
            <div style={{fontWeight:800,fontSize:16,color:"#e2e8f0",marginBottom:4}}>{c.title}</div>
            <div style={{fontSize:12,color:"#64748b"}}>{c.sub}</div>
            {c.count!=null&&<div style={{marginTop:12,display:"inline-block",background:`${c.color}18`,color:c.color,border:`1px solid ${c.color}40`,padding:"2px 10px",borderRadius:99,fontSize:12,fontWeight:700}}>{c.count} Problems</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

function RoadmapPage({statuses,bookmarks,onStatus,onBookmark}){
  const [activeTopic,setActiveTopic]=useState(null);
  const topicProblems=activeTopic?PROBLEMS.filter(p=>p.topic===activeTopic):[];
  return(
    <div>
      <h2 style={{color:"#e2e8f0",marginBottom:6,fontSize:22,fontWeight:800}}>DSA Roadmap</h2>
      <p style={{color:"#64748b",marginBottom:24,fontSize:14}}>Structured path to master DSA for interviews — click any topic to explore problems</p>
      {ROADMAP.map(level=>(
        <div key={level.level} style={{marginBottom:32}}>
          <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:16}}>
            <div style={{width:3,height:24,background:level.color,borderRadius:2}}/>
            <span style={{fontWeight:800,fontSize:16,color:level.color}}>{level.level}</span>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:12}}>
            {level.topics.map(t=>{
              const cnt=PROBLEMS.filter(p=>p.topic===t.name).length;
              const done=PROBLEMS.filter(p=>p.topic===t.name&&statuses[p.id]==="Completed").length;
              return(
                <div key={t.name} onClick={()=>setActiveTopic(activeTopic===t.name?null:t.name)}
                  style={{background:activeTopic===t.name?`${level.color}18`:"#12151e",border:`1px solid ${activeTopic===t.name?level.color:`${level.color}30`}`,borderRadius:10,padding:"16px",cursor:"pointer",transition:"all .2s"}}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor=level.color}}
                  onMouseLeave={e=>{e.currentTarget.style.borderColor=activeTopic===t.name?level.color:`${level.color}30`}}
                >
                  <div style={{fontSize:24,marginBottom:8}}>{t.icon}</div>
                  <div style={{fontWeight:700,color:"#e2e8f0",marginBottom:4}}>{t.name}</div>
                  <div style={{fontSize:11,color:"#64748b",marginBottom:10}}>{t.desc}</div>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <span style={{fontSize:11,color:level.color}}>{done}/{cnt} done</span>
                    <div style={{width:50,height:4,background:"#1e2435",borderRadius:99}}><div style={{width:`${cnt?done/cnt*100:0}%`,height:"100%",background:level.color,borderRadius:99}}/></div>
                  </div>
                </div>
              );
            })}
          </div>
          {activeTopic&&level.topics.some(t=>t.name===activeTopic)&&topicProblems.length>0&&(
            <div style={{marginTop:16,borderLeft:`3px solid ${level.color}`,paddingLeft:16}}>
              <div style={{display:"flex",flexDirection:"column",gap:8}}>
                {topicProblems.map(p=><ProblemCard key={p.id} problem={p} status={statuses[p.id]} onStatus={onStatus} bookmarked={bookmarks.has(p.id)} onBookmark={onBookmark}/>)}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function CrashPage({statuses,bookmarks,onStatus,onBookmark}){
  return(
    <div>
      <div style={{background:"linear-gradient(135deg,#f87171,#fb923c)",borderRadius:16,padding:"24px 28px",marginBottom:28}}>
        <div style={{fontSize:32,marginBottom:8}}>🔥</div>
        <h2 style={{color:"#fff",margin:0,fontSize:24,fontWeight:900}}>Interview Crash Mode</h2>
        <p style={{color:"rgba(255,255,255,.8)",margin:"6px 0 0",fontSize:14}}>Last-minute revision — the most critical problems from all sheets</p>
      </div>
      {CRASH_SECTIONS.map(sec=>{
        const probs=PROBLEMS.filter(p=>sec.ids.includes(p.id));
        return(
          <div key={sec.title} style={{marginBottom:28}}>
            <div style={{fontWeight:800,color:"#f87171",fontSize:15,marginBottom:12}}>
              <span style={{background:"#f8717120",padding:"3px 10px",borderRadius:6,border:"1px solid #f8717140"}}>{sec.title}</span>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:8}}>
              {probs.map(p=><ProblemCard key={p.id} problem={p} status={statuses[p.id]} onStatus={onStatus} bookmarked={bookmarks.has(p.id)} onBookmark={onBookmark}/>)}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function CompanyPage({statuses,bookmarks,onStatus,onBookmark}){
  const [activeCompany,setActiveCompany]=useState("Amazon");
  const probs=PROBLEMS.filter(p=>p.companies.includes(activeCompany));
  return(
    <div>
      <h2 style={{color:"#e2e8f0",marginBottom:6,fontSize:22,fontWeight:800}}>Company Questions</h2>
      <p style={{color:"#64748b",marginBottom:20,fontSize:14}}>Problems frequently asked by top companies</p>
      <div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:24}}>
        {COMPANIES.map(c=>(
          <button key={c} onClick={()=>setActiveCompany(c)} style={{background:activeCompany===c?"#6366f1":"#12151e",color:activeCompany===c?"#fff":"#94a3b8",border:`1px solid ${activeCompany===c?"#6366f1":"#2a3550"}`,borderRadius:8,padding:"7px 14px",cursor:"pointer",fontWeight:700,fontSize:12,transition:"all .2s"}}>{c}</button>
        ))}
      </div>
      <StatsBar problems={probs} statuses={statuses}/>
      <div style={{display:"flex",flexDirection:"column",gap:10}}>
        {probs.map(p=><ProblemCard key={p.id} problem={p} status={statuses[p.id]} onStatus={onStatus} bookmarked={bookmarks.has(p.id)} onBookmark={onBookmark}/>)}
      </div>
    </div>
  );
}

function BookmarksPage({statuses,bookmarks,onStatus,onBookmark}){
  const probs=PROBLEMS.filter(p=>bookmarks.has(p.id));
  return(
    <div>
      <h2 style={{color:"#e2e8f0",marginBottom:6,fontSize:22,fontWeight:800}}>Bookmarks</h2>
      <p style={{color:"#64748b",marginBottom:20,fontSize:14}}>{probs.length} saved problems</p>
      {probs.length===0
        ?<div style={{textAlign:"center",padding:60,color:"#3a4259"}}><div style={{fontSize:48,marginBottom:12}}>☆</div><div>No bookmarks yet. Star problems to save them here.</div></div>
        :<div style={{display:"flex",flexDirection:"column",gap:10}}>{probs.map(p=><ProblemCard key={p.id} problem={p} status={statuses[p.id]} onStatus={onStatus} bookmarked={bookmarks.has(p.id)} onBookmark={onBookmark}/>)}</div>
      }
    </div>
  );
}

function TrackerPage({statuses}){
  const byTopic=TOPICS.map(topic=>{
    const ps=PROBLEMS.filter(p=>p.topic===topic);
    return{topic,total:ps.length,done:ps.filter(p=>statuses[p.id]==="Completed").length,rev:ps.filter(p=>statuses[p.id]==="Revision").length};
  }).filter(r=>r.total>0);
  const overall={total:PROBLEMS.length,done:PROBLEMS.filter(p=>statuses[p.id]==="Completed").length,rev:PROBLEMS.filter(p=>statuses[p.id]==="Revision").length};
  const pct=Math.round(overall.done/overall.total*100);
  return(
    <div>
      <h2 style={{color:"#e2e8f0",marginBottom:20,fontSize:22,fontWeight:800}}>Progress Tracker</h2>
      <div style={{background:"#12151e",border:"1px solid #1e2435",borderRadius:16,padding:24,marginBottom:24}}>
        <div style={{display:"flex",gap:32,flexWrap:"wrap",marginBottom:20}}>
          {[{label:"Total Solved",val:overall.done,color:"#4ade80"},{label:"Under Review",val:overall.rev,color:"#fbbf24"},{label:"Not Started",val:overall.total-overall.done-overall.rev,color:"#64748b"},{label:"Completion",val:`${pct}%`,color:"#6366f1"}].map(s=>(
            <div key={s.label}><div style={{fontSize:32,fontWeight:900,color:s.color}}>{s.val}</div><div style={{fontSize:12,color:"#64748b"}}>{s.label}</div></div>
          ))}
        </div>
        <div style={{height:8,background:"#1e2435",borderRadius:99,overflow:"hidden"}}>
          <div style={{width:`${pct}%`,height:"100%",background:"linear-gradient(90deg,#6366f1,#22d3ee)",borderRadius:99}}/>
        </div>
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:10}}>
        {byTopic.map(r=>{
          const p=Math.round(r.done/r.total*100);
          return(
            <div key={r.topic} style={{background:"#12151e",border:"1px solid #1e2435",borderRadius:10,padding:"14px 18px"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
                <span style={{fontWeight:700,color:"#e2e8f0"}}>{r.topic}</span>
                <span style={{fontSize:12,color:"#64748b"}}>{r.done}/{r.total} ({p}%)</span>
              </div>
              <div style={{height:5,background:"#1e2435",borderRadius:99,overflow:"hidden"}}>
                <div style={{width:`${p}%`,height:"100%",background:"linear-gradient(90deg,#6366f1,#22d3ee)",borderRadius:99}}/>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const NAV=[
  {id:"home",icon:"⌂",label:"Home"},
  {id:"roadmap",icon:"🗺",label:"DSA Roadmap"},
  {id:"striver",icon:"⚡",label:"Striver A2Z"},
  {id:"babbar",icon:"💪",label:"Love Babbar 450"},
  {id:"blind75",icon:"👁",label:"Blind 75"},
  {id:"neet150",icon:"🎯",label:"NeetCode 150"},
  {id:"company",icon:"🏢",label:"Company Questions"},
  {id:"crash",icon:"🔥",label:"Crash Mode"},
  {id:"bookmarks",icon:"★",label:"Bookmarks"},
  {id:"tracker",icon:"📊",label:"Progress Tracker"},
];

export default function App(){
  const [page,setPage]=useState("home");
  const [statuses,setStatuses]=useState(()=>{try{return JSON.parse(localStorage.getItem("dsa_statuses")||"{}")}catch{return{}}});
  const [bookmarks,setBookmarks]=useState(()=>{try{return new Set(JSON.parse(localStorage.getItem("dsa_bookmarks")||"[]"))}catch{return new Set()}});
  const [sidebarOpen,setSidebarOpen]=useState(true);
  useEffect(()=>{localStorage.setItem("dsa_statuses",JSON.stringify(statuses))},[statuses]);
  useEffect(()=>{localStorage.setItem("dsa_bookmarks",JSON.stringify([...bookmarks]))},[bookmarks]);
  const handleStatus=(id,val)=>setStatuses(p=>({...p,[id]:val}));
  const handleBookmark=(id)=>setBookmarks(p=>{const s=new Set(p);s.has(id)?s.delete(id):s.add(id);return s;});
  const sheetMap={striver:"Striver A2Z",babbar:"Love Babbar 450",blind75:"Blind75",neet150:"NeetCode150"};
  const props={statuses,onStatus:handleStatus,bookmarks,onBookmark:handleBookmark};
  const renderPage=()=>{
    switch(page){
      case "home":return <HomePage setPage={setPage}/>;
      case "roadmap":return <RoadmapPage {...props}/>;
      case "crash":return <CrashPage {...props}/>;
      case "company":return <CompanyPage {...props}/>;
      case "bookmarks":return <BookmarksPage {...props}/>;
      case "tracker":return <TrackerPage statuses={statuses}/>;
      default:
        const sheet=sheetMap[page];
        if(sheet)return <ProblemsPage title={NAV.find(n=>n.id===page)?.label} problems={PROBLEMS.filter(p=>p.sheet===sheet)} {...props}/>;
        return <HomePage setPage={setPage}/>;
    }
  };
  return(
    <div style={{display:"flex",minHeight:"100vh",background:"#0a0d14",fontFamily:"'JetBrains Mono',monospace,system-ui",color:"#e2e8f0"}}>
      <div style={{width:sidebarOpen?220:64,transition:"width .25s",flexShrink:0,background:"#0d1018",borderRight:"1px solid #1a1f2e",display:"flex",flexDirection:"column",position:"sticky",top:0,height:"100vh",overflow:"hidden"}}>
        <div style={{padding:"20px 16px 16px",display:"flex",alignItems:"center",gap:10,borderBottom:"1px solid #1a1f2e"}}>
          <div style={{width:32,height:32,borderRadius:8,background:"linear-gradient(135deg,#6366f1,#22d3ee)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,flexShrink:0}}>◈</div>
          {sidebarOpen&&<span style={{fontWeight:900,fontSize:14,letterSpacing:1,color:"#e2e8f0",whiteSpace:"nowrap"}}>DSA NAVIGATOR</span>}
          <button onClick={()=>setSidebarOpen(!sidebarOpen)} style={{marginLeft:"auto",background:"none",border:"none",color:"#4a5568",cursor:"pointer",fontSize:16,flexShrink:0}}>{sidebarOpen?"◀":"▶"}</button>
        </div>
        <nav style={{flex:1,overflowY:"auto",padding:"10px 8px"}}>
          {NAV.map(n=>(
            <button key={n.id} onClick={()=>setPage(n.id)} style={{width:"100%",display:"flex",alignItems:"center",gap:10,padding:"9px 10px",borderRadius:8,border:"none",cursor:"pointer",background:page===n.id?"#6366f118":"none",color:page===n.id?"#818cf8":"#64748b",fontWeight:page===n.id?700:500,fontSize:13,textAlign:"left",transition:"all .15s",borderLeft:page===n.id?"2px solid #6366f1":"2px solid transparent",marginBottom:2,whiteSpace:"nowrap"}}
              onMouseEnter={e=>{if(page!==n.id){e.currentTarget.style.background="#ffffff08";e.currentTarget.style.color="#94a3b8"}}}
              onMouseLeave={e=>{if(page!==n.id){e.currentTarget.style.background="none";e.currentTarget.style.color="#64748b"}}}
            >
              <span style={{fontSize:16,flexShrink:0}}>{n.icon}</span>
              {sidebarOpen&&n.label}
            </button>
          ))}
        </nav>
        {sidebarOpen&&<div style={{padding:"12px 16px",borderTop:"1px solid #1a1f2e",fontSize:11,color:"#3a4259"}}>{PROBLEMS.filter(p=>statuses[p.id]==="Completed").length}/{PROBLEMS.length} Solved</div>}
      </div>
      <div style={{flex:1,overflow:"auto"}}>
        <div style={{maxWidth:900,margin:"0 auto",padding:"28px 20px"}}>{renderPage()}</div>
      </div>
    </div>
  );
}
