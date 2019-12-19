require( "@babel/core" ).transform( "code", {
    "presets": ["@babel/preset-env", "@babel/preset-react"],
    "plugins": ["@babel/plugin-syntax-import-meta"]
} );
require("@babel/polyfill");


require( './server' );
