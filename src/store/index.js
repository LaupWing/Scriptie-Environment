import Vue from 'vue'
import Vuex from 'vuex'
import { combineVersionsWithStorage, handboekenRef, getCollection } from './utils'

Vue.use(Vuex)

export default new Vuex.Store({
   state: {
      count: 0,
      document: {
         handboek_id: "4UBna1XLOuHvdAYFDy5M",
         type_id: "8K5TcBd1x3QXADLO3Ktb",
         user_id: "6oPbn65HvdaplGGftaSMWvccBgq2"
      }
   },
   mutations: {
      increment(state) {
         state.count++
      }
   },
   actions:{
      async single({rootState}){
         const {user_id, type_id, handboek_id} = rootState.document
         try{
            const snapshot = await handboekenRef(user_id, type_id)
               .doc(handboek_id)
               .get()
      
            const handboek = snapshot.data()
            let content_versions = handboek.content_versions
            content_versions = await combineVersionsWithStorage(
               `handboeken_live/${user_id}/${type_id}/${handboek_id}`,
               handboek.content_versions
            )
            
            return {
               ...handboek,
               content_versions
            }
         }catch(e){
            throw new Error(e.message)
         }
      },
      async singleDraft({rootState}){
         const {user_id, type_id, handboek_id} = rootState.document
         try{
            const snapshot = await handboekenRef(user_id, type_id)
               .doc(handboek_id)
               .get()
      
            const handboek = snapshot.data()
            let content_versions = handboek.content_versions
            content_versions = await combineVersionsWithStorage(
               `handboeken_draft/${user_id}/${type_id}/${handboek_id}`,
               handboek.content_versions
            )
            
            return {
               ...handboek,
               content_versions
            }
         }catch(e){
            throw new Error(e.message)
         }
      },
      async templates(){
         try {
            const snapshot = await getCollection('templates').get()
   
            return snapshot.docs.map(doc => (
               {
                  ...doc.data(),
                  id: doc.id
               }
            ))
         } catch (e) {
            throw new Error(e.message)
         }
      }
   }
})
