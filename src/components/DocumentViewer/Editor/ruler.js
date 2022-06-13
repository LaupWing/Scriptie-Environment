// plugin pravítko
export default function (editor) {
   let domHtml

   function refreshRuler() {
      try {
         domHtml = editor.contentDocument.querySelector('html')
      } catch (e) {
         return setTimeout(refreshRuler, 50)
      }

      let lastPageBreaks
      const dpi = 96
      const cm = dpi / 2.54;
      const a4px = cm * 29.7; // A4 height in px, -5.5 are my additional margins in my PDF print
      // ruler begins (in px)
      let startMargin = 45;

      // max size (in px) = document size + extra to be sure, idk, the height is too small for some reason
      let imgH = domHtml.offsetHeight + a4px * 5;

      let pageBreakHeight = 14; // height of the pagebreak line in tinyMce

      const pageBreaks = Array.from(domHtml.querySelectorAll('.mce-pagebreak'))
         .map(x => x.offsetTop)
         .sort()

      // if pageBreak is too close next page, then ignore it

      if (lastPageBreaks == pageBreaks) {
         return; // no change
      }
      lastPageBreaks = pageBreaks;

      let s = `
            <svg width="100%" height="${imgH}" xmlns="http://www.w3.org/2000/svg">
            <style>
                .pageNumber{
                    font-weight:bold;
                    font-size:19px;
                    font-family:verdana;
                }
            </style>
        `

      let pages = Math.ceil(imgH / a4px);

      let i, j, curY = startMargin;
      console.log(j)
      for (i = 0; i < pages; i++) {
         let blockH = a4px

         let isPageBreak = 0
         for (let j = 0; j < pageBreaks.length; j++) {
            if (pageBreaks[j] < curY + blockH) {
               blockH = pageBreaks[j] - curY
               isPageBreak = 1
               pageBreaks.splice(j, 1)
            }
         }
         s += `
                <line x1="0" y1="${curY}" x2="100%" y2="${curY}" stroke-width="1" stroke="red"/>
                <pattern id="ruler${i}" x="0" y="${curY}" width="37.79527559055118" height="37.79527559055118" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="0" x2="100%" y2="0" stroke-width="1" stroke="black"/>
                </pattern>
                <rect x="0" y="${curY}" width="100%" height="${blockH}" fill="url(#ruler${i})" />
                <text x="10" y="${curY + 19 + 5}" class="pageNumber" fill="black">${i + 1}.</text>
            `
         curY += blockH
         if (isPageBreak) {
            s += `<rect x="0" y="${curY}" width="100%" height="${pageBreakHeight}" fill="#ecf0f3" />`
            curY += pageBreakHeight
         }
      }

      s += '</svg>'
      domHtml.style.backgroundImage = `url("data:image/svg+xml;utf8,${encodeURIComponent(s)}")`
   }
   editor.on('NodeChange', refreshRuler)
   editor.on("init", refreshRuler)
}