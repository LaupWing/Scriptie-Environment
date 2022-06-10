import firebase from 'firebase'

export function handboekenRef(user_id, type_id) {
   return getDocument('handboeken_draft', user_id)
      .collection('types_documents')
      .doc(type_id)
      .collection('documents')
}

export function getDocument(collection, id){
   return firebase
      .firestore()
      .collection(collection)
      .doc(id)
}

export const getDirectoryFiles = async (path) => {
   const ref = firebase
      .storage()
      .ref()
   const listRef = ref.child(path)
   const proxies = await listRef.listAll()
   return proxies
}

export const getTxtFileContent = async (path) => {
   const ref = firebase
      .storage()
      .ref()
   const fileRef = ref.child(`${path}.txt`)
   try {
      const url = await fileRef.getDownloadURL()
      const res = await fetch(url)
      const txt = await res.text()

      return txt
   } catch (e) {
      throw new Error(e.message)
   }
}

export const combineVersionsWithStorage = async (path, versions) => {
   const files = await getDirectoryFiles(path)
   const filtered = files.items.filter(x => {
      if (x.name.includes('_') && x.name.includes('.txt')) {
         const [mayor, sub, minor] = x.name.replace('.txt', '').split('_')
         const exists = versions.find(y => {
            if (
               y.mayor == mayor &&
               y.sub == sub &&
               y.minor == minor
            ) {
               return x
            }
         })
         if (exists) return x
      }
   })
   const proxies = filtered.map(async x => {
      const fileName = x.name.replace('.txt', '')
      const content = await getTxtFileContent(`${path}/${fileName}`)
      const [mayor, sub, minor] = fileName.split('_')
      return {
         mayor: Number(mayor),
         minor: Number(minor),
         sub: Number(sub),
         content
      }
   })

   const versionsWithContent = await Promise.all(proxies)
   return versionsWithContent
}