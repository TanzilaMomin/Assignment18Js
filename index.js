const mainDiv=document.getElementById("main");

function generateLine(msg,pref){
const h3=document.createElement("h3");
h3.style.backgroundColor="cadetblue";
const h5=document.createElement("h5");
h3.innerText=msg;
h5.innerText=pref;

mainDiv.appendChild(h3);
mainDiv.appendChild(h5);
}
generateLine(`HTML:`,`- HTML is a Hyper Text Markup Language.HTML is a standard markup language for creating Web pages.  `)
generateLine(`CSS:`,`- CSS is the acronym of "Cascading Style Sheets."CSS is a computer language for laying out and structuring web pages(HTML or XML).`)
generateLine(`JavaScript:`,`- JavaScript(JS) is a cross platform,object-oriented programming language used by developers to make web pages interactive.`)
generateLine(`React.js:`,`- React is a JavaScript library developed by Facebook which,among other things,was to bulid Instagram.com`)
generateLine(`Node.js:`,`- Node js is a single-threaded,open-source,cross-platform runtime environment for building fast and scalable server-side and networking applications.`)
generateLine(`MongoDB:`,`- MongoDB is a bulit on a scale-out architecuture that has become popular with developers of all kinds for developing scalable application with evolving data schemas.`)
generateLine(`GitHub:`,`- GitHub is a code hosting platform for version control and collaboration.It lets you and others work together on project from anywhere.`)
