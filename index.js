const targetNode = document.body;

const config = { attributes: true, childList: true, subtree: true };

const callback = function(mutationsList, observer) {
  for (const mutation of mutationsList) {
    const containsArabic = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/;
    const markdown = document.querySelectorAll(".markdown");
    markdown.forEach((mark)=> {
      if(containsArabic.test(mark.childNodes[0].textContent)){
        mark.style.direction = "rtl";
        if(!mark.classList.contains("Arabic")){
          mark.classList.add("Arabic")
        }
        const lists = document.querySelectorAll("li");
        lists.forEach((list)=>{
          if(!list.classList.contains("Arabic_li")){
            list.classList.add("Arabic_li")
          }
        })
      }
    })
  };
};

const observer = new MutationObserver(callback);

observer.observe(targetNode, config);




