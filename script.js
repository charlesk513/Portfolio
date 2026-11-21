document.getElementById("year").textContent=new Date().getFullYear();
const viewer=document.getElementById("certificateViewer"), viewerImage=document.getElementById("viewerImage");
document.querySelectorAll(".recognition-grid img").forEach(img=>img.addEventListener("click",()=>{
 viewerImage.src=img.src;viewerImage.alt=img.alt;viewer.classList.add("active");viewer.setAttribute("aria-hidden","false");
}));
viewer.addEventListener("click",()=>{viewer.classList.remove("active");viewer.setAttribute("aria-hidden","true");viewerImage.src="";});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&viewer.classList.contains("active"))viewer.click();});
