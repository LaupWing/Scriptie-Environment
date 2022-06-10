import Vue from 'vue'

export default (requireComponent)=>{
   requireComponent.keys().forEach(fileName => {
      const componentConfig = requireComponent(fileName)
      const componentName = fileName
         .replace('.vue', '')
         .split(/\.?\//)
         .filter(x=>x && x !== 'index')
         .map(x=>x.match(/[A-Z][a-z]+/g).join('-'))
         .join('-')
         .toLowerCase()
      Vue.component(
         componentName, 
         componentConfig.default || componentConfig
      )
   })
}