import globals from "globals";


export default [
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: globals.browser },
  rules:{
    semi:['error','always'],
    // quotes:['error','single'],
    'max-lines':[
      'error',
			{ max: 13, skipBlankLines: true, skipComments: true },
    ]
  }
},
];