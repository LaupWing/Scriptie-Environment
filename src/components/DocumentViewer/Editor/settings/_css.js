export default `
@font-face {
   font-family: 'Calibri Light';
   font-style: normal;
   font-weight: normal;
   src: local('Calibri Light'), url('assets/fonts/calibril.woff') format('woff');
}

html{
   scroll-behavior: smooth;
}

body#tinymce{
   font-family: 'Calibri Light', 'Lato', Arial;
   width: 21cm; /* this should be 21 cm as the page size, but I have little space here in fiddle (15)*/
   min-height: 29.7cm; /* this should be 29.7 cm (A4 page) (24.2) */
   background: #fff;
   display: block;
   box-shadow: 0 2px 7px rgba(0,0,0,0.7);
   margin: 5px auto 20px auto;
   margin-top: 50px;
   padding: 1cm 1.10cm;
   box-sizing: border-box;
}
body#tinymce img.mce-pagebreak{
   cursor: default;
   cursor: grab;
   display: block;
   width: 100%;
   width: calc(100% + 2.2cm);
   margin-left: -1.1cm;
   margin-right: -1.1cm;
   height: 14px;
   margin-top: 20px;
   margin-bottom: 20px;
   page-break-before: always;
   border: 0;
   box-shadow: inset 0 5px 8px -6px rgba(0,0,0,1);
   border-bottom: 1px solid #555;
   background: #ecf0f3;
}
del{
   background: #ef4444;
   color: white;
   padding: 2px;
}
ins{
   background: #22c55e;
   color: white;
   padding: 2px;
}
header{
   display: none;
}
img, table{
   max-width: 100%;
}
body#tinymce img.mce-pagebreak:hover{
   opacity: .9;
}
body#tinymce img.mce-pagebreak{
   height: 10px;
   margin-left: 0;
   margin-right: 0;
}
td p {
   margin: 0;
}
article{
   border: solid 1px #ccc;
   padding: 5px;
}
h2 .version::after{
   content: '.';
}

@media print {
   article{
      border: none;
      padding: 0;
   }
   body#tinymce{
      box-shadow: none;
      margin: 0;
   }
   body#tinymce img.mce-pagebreak{
      margin: 0;
      opacity: 0;
      height: 0;
   }
}
/* width */
::-webkit-scrollbar {
   width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
   border-radius: 10px;
   background: #f1f1f1; 
}

/* Handle */
::-webkit-scrollbar-thumb {
   background: rgb(201, 200, 200); 
   border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
   background: rgb(180, 180, 180); 
}
`