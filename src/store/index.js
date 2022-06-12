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
      },
      moderator:{
         id: 'oV56S66U5WfUYfNLXnnjBKQoGc33',
         name: 'Fons van Kesteren',
         img: `data:image/jpeg;base64,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`
      },
      customer:{
         id: '6oPbn65HvdaplGGftaSMWvccBgq2',
         name: 'Marije ten Brink',
         img : 'data:image/jpeg;base64,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'
      },
      isModerator: false
   },
   mutations: {
      increment(state) {
         state.count++
      },
      setModerator(state, val){
         state.isModerator = val
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
      },
      async addComment(){
         
      }
   }
})
