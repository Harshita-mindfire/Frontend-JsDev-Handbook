---
id: fzsp4607gkl9txg1i27arw2
title: Styles
desc: ''
updated: 1650477945981
created: 1650477942624
---


/* Any graph node */
node {
    background-color: #AC2065;
    color: #AC2065;
    font-family: cursive;
 }

/* Any graph edge */
edge {
   width: 1;
   line-color :#5CBAC5;
   target-distance-from-node: 6;
   source-distance-from-node: 6;
   source-endpoint: outside-to-line-or-label;
   target-endpoint: outside-to-line-or-label;
}

/* Any selected node */
:selected {
   shape-rendering: diamond;
   background-color: coral;
   color: coral;
}
/** AC2065 **/
/* Any parent nodes (local note graph only) */
.parent {
   color: #27AC2C;
   background-color: #27AC2C;
}

/* Any link connection edge */
.links {
   curve-style: unbundled-bezier;
}

/* Any hierarchy connection edge */
.hierarchy {
   curve-style: segments;
}