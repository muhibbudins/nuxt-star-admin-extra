module.exports = {
  skipInterpolation: '**/**/*.vue',
  helpers: {
    escape: function(value) {
      return value.replace(/'/g, '&apos;');
    }
  },
  prompts: {
    name: {
      'type': 'string',
      'required': true,
      'message': 'Project name :'
    },
    description: {
      'type': 'string',
      'required': false,
      'message': 'Project description :',
      'default': 'Admin Template base on Vue StarAdmin with improved on design and served using Nuxt.js'
    },
    author: {
      'type': 'string',
      'required': true,
      'message': 'Project author :'
    }
  },
  completeMessage: '{{#inPlace}}To get started:\n\n  npm install # Or yarn\n  npm run dev{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install # Or yarn\n  npm run dev{{/inPlace}}'
};