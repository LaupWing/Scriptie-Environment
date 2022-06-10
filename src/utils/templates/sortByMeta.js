export default (a, b) => {
   if (a.shortcode === b.shortcode) {
      if (a.version < b.version) {
         return -1
      }
      if (a.version > b.version) {
         return 1
      }
   }
   if (a.shortcode < b.shortcode) {
      return -1
   }
   if (a.shortcode > b.shortcode) {
      return 1
   }
   return 0
}