// <div id="biotext" style="display: block; top: 6px; left: 234px;">
// 			<p>put text here</p>
// 			</div>

// #biotext{
// 	display: none;
// 	position: absolute;
// 	background-color: #f2f2f2;
// 	opacity: 0.9;
// 	width: 400px;
// 	height: fit-content;
// 	padding: 25px;
// 	border-radius: 10px;
// 	left:0;
// 	top:0;
// }



// <!--      <div class="library-branches">
//       <h2>Library Branches</h2>       
//      </div> -->

// <li><a href="put HTML page name">Put text here</a> </li>

	// color: black;
	// font-family: tuppence,serif;
	// font-weight: 900;
	// font-style: normal;

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // change slideshow photo change time here
}
