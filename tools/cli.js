#!/usr/bin/env node

const fs = require('fs');

const template = `id:new_project

ob:

ctx:{
 dom:
 scp:
 bg:
}

ag:{
 a1:{ro:,ts:,sk:}
}

cn:{
 tkn:
 acc:
 lim:
}

st:{
 cur:
 prg:
 blk:
}

nx:{
 n1:
 n2:
}
`;

const command = process.argv[2];

if (command === "init") {
    fs.writeFileSync("csse-context.txt", template);
    console.log("✅ CSSE template created: csse-context.txt");
} else {
    console.log("Usage: csse init");
}