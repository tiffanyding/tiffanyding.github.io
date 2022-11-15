/* ------------------------------------------------------------------------------
	Page-specific Image Loading Functions
-------------------------------------------------------------------------------*/

// --------- NATURE ----------

function loadBirdsPhotos() {
    getAllImagesScrollingWrapper("birds", 7)
    getAllImagesModal("birds", 7)
}

function loadFlowersPhotos() {
    getAllImagesScrollingWrapper("nature/flowers", 10)
    getAllImagesModal("nature/flowers", 10)
}

function loadTreesPhotos() {
    getAllImagesScrollingWrapper("nature/trees", 6)
    getAllImagesModal("nature/trees", 6)
}

function loadWaterPhotos() {
    getAllImagesScrollingWrapper("nature/water", 12)
    getAllImagesModal("nature/water", 12)
}

function loadSkyscapesPhotos() {
    getAllImagesScrollingWrapper("skyscapes", 30)
    getAllImagesModal("skyscapes", 30)
}

function loadNatureOtherPhotos() {
    getAllImagesScrollingWrapper("nature", 42)
    getAllImagesModal("nature", 42)
}

// --------- PEOPLE ----------

function loadPeoplePhotos() {
    getAllImagesScrollingWrapper("people", 10)
    getAllImagesModal("people", 10)
}

// --------- PLACES ----------

function loadChina2017Photos() {
    getAllImagesScrollingWrapper("china/china2017", 36)
    getAllImagesModal("china/china2017", 36)
}

function loadChina2018Photos() {
    getAllImagesScrollingWrapper("china/china2018", 65)
    getAllImagesModal("china/china2018", 65)
}

function loadTaiwanPhotos() {
    getAllImagesScrollingWrapper("taiwan", 20)
    getAllImagesModal("taiwan", 20)
}

function loadJapanPhotos() {
    getAllImagesScrollingWrapper("japan", 9)
    getAllImagesModal("japan", 9)
}

function loadSingaporePhotos() {
    getAllImagesScrollingWrapper("singapore", 11)
    getAllImagesModal("singapore", 11)
}

function loadBayAreaPhotos() {
    getAllImagesScrollingWrapper("california/bay_area", 16)
    getAllImagesModal("california/bay_area", 16)
}

function loadKingsCanyonPhotos() {
    getAllImagesScrollingWrapper("california/kings_canyon", 23)
    getAllImagesModal("california/kings_canyon", 23)
}

function loadCaliforniaLandscapesPhotos() {
    getAllImagesScrollingWrapper("california/landscapes", 8)
    getAllImagesModal("california/landscapes", 8)
}

function loadYosemitePhotos() {
    getAllImagesScrollingWrapper("california/yosemite", 24)
    getAllImagesModal("california/yosemite", 24)
}

function loadNYCPhotos() {
    getAllImagesScrollingWrapper("nyc", 13)
    getAllImagesModal("nyc", 13)
}

function loadProvidencePhotos() {
    getAllImagesScrollingWrapper("providence", 7)
    getAllImagesModal("providence", 7)
}

function loadCitiesOtherPhotos() {
    getAllImagesScrollingWrapper("cities_other", 5)
    getAllImagesModal("cities_other", 5)
}

// --------- BUILDINGS ----------

function loadBuildingsOutsidePhotos() {
    getAllImagesScrollingWrapper("buildings_outside", 10)
    getAllImagesModal("buildings_outside", 10)
}

function loadBuildingsInsidePhotos() {
    getAllImagesScrollingWrapper("buildings_inside", 19)
    getAllImagesModal("buildings_inside", 19)
}

// --------- CONCEPTS ----------

function loadAbstractionPhotos() {
    getAllImagesScrollingWrapper("abstraction", 13)
    getAllImagesModal("abstraction", 13)
}

function loadColorsPhotos() {
    getAllImagesScrollingWrapper("colors", 7)
    getAllImagesModal("colors", 7)
}

function loadGeometryPhotos() {
    getAllImagesScrollingWrapper("geometry", 15)
    getAllImagesModal("geometry", 15)
}

function loadNostalgiaPhotos() {
    getAllImagesScrollingWrapper("nostalgia", 27)
    getAllImagesModal("nostalgia", 27)
}

function loadMirrorsPhotos() {
    getAllImagesScrollingWrapper("mirrors", 8)
    getAllImagesModal("mirrors", 8)
}

function loadAVisitorPhotos() {
    getAllImagesScrollingWrapper("a_visitor", 11)
    getAllImagesModal("a_visitor", 11)
}

function loadEtcPhotos() {
    getAllImagesScrollingWrapper("etc", 4)
    getAllImagesModal("etc", 4)
}

function loadUCStrikePhotos() {
    getAllImagesScrollingWrapper("uc_strike", 20)
    getAllImagesModal("uc_strike", 20)
}

/* ------------------------------------------------------------------------------
	General Image Loading Functions
-------------------------------------------------------------------------------*/

function getAllImagesScrollingWrapper(folder, numImages){
    str = ""
    for (i = 1; i <= numImages; i++) {
        str += `<div class="card"><img src="photos/${folder}/${i}.jpg" onclick="openModal();currentSlide(${i})" alt="image" class="hover-shadow cursor"></div>`
    }

    document.getElementById("scrolling-wrapper").innerHTML = str
}

function getAllImagesModal(folder, numImages){
    str = ""
    for (i = 1; i <= numImages; i++) {
        str += `<div class="mySlides"><img src="photos/${folder}/${i}.jpg" ></div>\n`
    }

    str += `<span class="close cursor" onclick="closeModal()">&times;</span>
    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
    <a class="next" onclick="plusSlides(1)">&#10095;</a>

    <div class="caption-container">
      <p id="caption"></p>
    </div>`

    document.getElementById("modal-content").innerHTML = str
}


/* ------------------------------------------------------------------------------
	Image Viewer
-------------------------------------------------------------------------------*/
function openModal() {
    document.getElementById('myModal').style.display = "block";
}

function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {
    slideIndex = 1
    }
    if (n < 1) {
    slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    // dots[slideIndex - 1].className += " active";
    captionText.innerHTML = slideIndex + "/" + slides.length;
}
