// eslint-disable-next-line no-undef
module.exports = {
	'env':{
		'browser': true,
		'es2021': true,
		'vue/setup-compiler-macros': true
  },
	'extends':[
		'eslint:recommended',
		'plugin:vue/vue3-essential'
	],
	'parserOptions':{
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins':[
		'vue'
	],
	'rules':{
		'no-unused-vars': 'off',
		'vue/no-mutating-props': 'off',
		'vue/multi-word-component-names': 'off',
		'quotes': ['error', 'single']
	}
}
