/// <reference path="fourslash.ts" />

// @Filename: /src/b.ts
////not read

// @Filename: /src/dir/x.ts
////not read

// @Filename: /src/a.ts
////import {} from "./[|/*0*/|]";
////import {} from "./[|/*1*/|]";

// @Filename: /tsconfig.json
////{
////    "compilerOptions": {
////        "baseUrl": ".",
////        "paths": {
////            "foo/*": ["src/*"]
////        }
////    }
////}

goTo.marker("0");
verify.completionListContains("dir", undefined, undefined, "directory");
verify.completionListContains("b", undefined, undefined, "script");

goTo.marker("1");
verify.completionListContains("dir", undefined, undefined, "directory");
verify.completionListContains("b", undefined, undefined, "script");

