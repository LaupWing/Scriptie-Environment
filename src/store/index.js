import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
   state: {
      count: 0
   },
   mutations: {
      increment(state) {
         state.count++
      }
   },
   actions:{
      async singleDraft(_, {user_id, type_id, handboek_id, content=true}){
         try{
            const snapshot = await handboekenRef(user_id, type_id)
               .doc(handboek_id)
               .get()
      
            const handboek = snapshot.data()
            let content_versions = handboek.content_versions
            if(content){
               content_versions = await combineVersionsWithStorage(
                  `handboeken_draft/${user_id}/${type_id}/${handboek_id}`,
                  handboek.content_versions
               )
            }
            return {
               ...handboek,
               content_versions
            }
         }catch(e){
            throw new Error(e.message)
         }
      }
   }
})
