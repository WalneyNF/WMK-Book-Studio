import { mkdir, copyFile, rm } from "node:fs/promises";
import { join } from "node:path";
await rm("dist",{recursive:true,force:true});
await mkdir("dist/assets",{recursive:true});
for(const filename of ["index.html","styles.css","app.js","roadmap.html"]) await copyFile(filename,join("dist",filename));
await copyFile("assets/logo.svg","dist/assets/logo.svg");
console.log("WMK Book Studio: assets offline preparados em dist/");
