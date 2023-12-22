// function changeParagraphColor(paragraphs) {
//     paragraphs.forEach(paragraph => {
//         const pattern = /[\u0621-\u064A\u0660-\u0669].*$/ 
//         console.log(paragraph)
//         paragraph.style.direction = "rtl"
//     })
//   }
  
//   const observer = new MutationObserver(mutationsList => {
//     mutationsList.forEach(mutation => {
//       if (mutation.type === 'childList') {
//         const newParagraphs = Array.from(mutation.addedNodes)
//           .filter(node => node.nodeName.toLowerCase() === 'div');
        
//         changeParagraphColor(newParagraphs);
//       }
//     });
//   });
  
//   observer.observe(document.body, { childList: true, subtree: true });
  
//   const existingParagraphs = document.querySelectorAll('p');
//   changeParagraphColor(existingParagraphs);

window.onload = () => {
    document.querySelectorAll(".markdown").forEach((e)=> {
        console.log(e)
    })
}