import ruler from '../ruler'
import css from './_css'

export default {
   selector: "textarea#paste-from-word",
   resize: false,
   branding: false,
   menubar: false,
   height: "auto",
   plugins: ["print preview", "help wordcount ruler"],
   toolbar: "print",
   content_style: css,
   setup(){
      window.tinymce.PluginManager.add('ruler', ruler)
   }
}