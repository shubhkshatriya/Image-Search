const accessKey = 'RvlCU50FklnipjqJJrxYIDXVZPW2oaROC5f91vaMFb0';
const searchForm = document.getElementById('search-form');
const searchBox = document.getElementById('searchbox');
const searchResult = document.getElementById('search-result');
const showMoreBtn = document.getElementById('show-more-btn');


 let keyWord ='';
 let page = 1;


 async function searchImage(){
    keyWord = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyWord}&client_id=${accessKey}&per_page=12`;
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;
    console.log(results);    
    if(page === 1)
    {
        searchResult.innerHTML = '';
    }               
    results.map((result) =>{
        const image = document.createElement('img');
        image.src= result.urls.small;
        const imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target='_blank';
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    });
    showMoreBtn.style.display='block';
 }


 searchForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    page=1;
    searchImage();
 })

 showMoreBtn.addEventListener('click', ()=>{
    page++;
    searchImage();
 })