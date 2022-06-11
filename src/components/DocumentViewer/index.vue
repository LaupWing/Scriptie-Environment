<template>
   <div class="flex w-full flex-1 border-t border-border origin-top-left duration-500 min-h-0 relative flex-col">
      <div 
         class="flex-1 flex"
         v-if="loaded"
      >
         <main class="flex-1 flex flex-col">
            <app-header
               :title="handboek_draft.title"
            />
            <div class="flex-1 flex relative">
               <heading-menu
                  v-if="editor_items"
                  :editor_items="editor_items"
               />
               <editor
                  :content="content"
                  @set-menu-headings="editor_items = $event"
               />
            </div>
         </main>
      </div>
      <div 
         v-else
         class="flex-1 flex justify-center items-center"
      >
         <app-loading class="w-20"/>
      </div>
      <comment-section
         v-if="loaded"
         :comparisonDocument="handboek_draft"
      />
   </div>
</template>

<script>
import Editor from "./Editor"
import Header from "./Header"
import HeadingMenu from "./HeadingMenu"
import HtmlDiff from "htmldiff-js"
import { decode } from "html-entities"
import CommentSection from './CommentSection'

export default {
   name: "DocumentEditor",
   components: {
      Editor,
      "app-header": Header,
      HeadingMenu,
      CommentSection
   },
   props: {
      // currentDocument: {
      //    type: Object,
      //    required: true,
      // },
      // comparisonDocument: {
      //    type: Object
      // },
      // saving: {
      //    type: Boolean,
      // },
   },
   watch: {
      "document.current_version"() {
         this.setCurrentContent();
      },
   },
   computed: {
      content() {
         const findContent = this.handboek_live.content_versions.find((x) => {
            const { mayor, sub, minor } = this.handboek_live.current_version
            return x.mayor === mayor && x.minor === minor && sub === x.sub
         })
         const findComparinson = this.handboek_draft.content_versions.find((x) => {
            const { mayor, sub, minor } = this.handboek_live.current_version
            return x.mayor === mayor && x.minor === minor && sub === x.sub
         })
         const container_old = document.createElement('main')
         const container_new = document.createElement('main')
         container_old.innerHTML = findContent.content 
         container_new.innerHTML = findComparinson.content 

         return HtmlDiff.execute(
            decode(container_old.innerHTML),
            decode(container_new.innerHTML)
         )
      },
   },
   data() {
      return {
         current_content: null,
         sections: [],
         templates: [],
         defaults: [],
         loaded: false,
         editor_items: null,
         comment: '',
         handboek_draft: null,
         handboek_live: null
      };
   },
   methods: {
      setCurrentContent() {
         this.current_content = this.document.content_versions.find((x) => {
            const { mayor, sub, minor } = this.document.current_version
            return x.mayor === mayor && x.minor === minor && sub === x.sub
         }).content
         if (window.tinyMCE && window.tinyMCE.activeEditor) {
            window.tinyMCE.activeEditor.setContent(this.current_content)
         }
      },
      async fetchDocs(){
         this.loaded = false
         this.handboek_draft = await this.$store.dispatch('singleDraft')
         console.log(this.handboek_draft)
         this.handboek_live = await this.$store.dispatch('single')
         console.log(this.handboek_live)
         this.loaded = true
         const templates = await this.$store.dispatch('templates')
         console.log(templates)
      }
   },
   async created() {
      this.fetchDocs()
      // await this.$store.dispatch('handboeken/updateDraft', {
      //    connection: this.$route.query,
      //    updates:{
      //       comments:this.comparisonDocument.comments.map(x=>x.id !== this.$store.state.user.user.id ? {...x, seen: true} : x),
            
      //    }
      // })
      // setTimeout(()=>{
      //    this.$store.dispatch('updates/get_unread')
      // }, 1000)
      // this.setCurrentContent()
      // this.loaded = true
   },
};
</script>
<style scoped>
* >>> .tox .tox-menubar {
   background: var(--main-color);
}
* >>> .tox.tox-tinymce {
   flex: 1;
   border-color: var(--border-color);
}
* >>> .tox .tox-mbtn {
   color: var(--font-color);
}
* >>> .tox .tox-tbtn {
   color: var(--font-color);
   cursor: pointer;
}
* >>> .tox .tox-tbtn svg * {
   fill: var(--font-color);
}

* >>> .tox.tox-tinymce .tox-toolbar__primary {
   background: var(--main-color);
   border-bottom: 1px solid var(--border-color);
}
* >>> .tox .tox-toolbar__group:not(:last-of-type) {
   border-color: var(--border-color);
}
* >>> .tox .tox-statusbar {
   background: var(--main-color);
}
* >>> .tox .tox-statusbar .tox-statusbar__wordcount,
* >>> .tox .tox-statusbar .tox-statusbar__path-item {
   color: var(--font-color);
}
.saving {
   position: fixed;
   bottom: 25px;
   right: 30px;
   font-size: 1.5rem;
   animation: blink 2s infinite;
}
@keyframes blink {
   0% {
      opacity: 1;
   }
   50% {
      opacity: 0;
   }
   100% {
      opacity: 1;
   }
}
* >>> iframe {
   background: var(--background-color);
}
* >>> .tox.tox-tinymce .tox-edit-area {
   flex: initial;
   width: 100%;
}

* > .tox.tox-tinymce{
   border: none;
}
</style>