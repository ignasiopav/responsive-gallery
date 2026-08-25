const gallery = document.querySelector('#gallery');
const filterButtons = document.querySelectorAll('.filter-button');
const loadMoreButton = document.querySelector('#load-more');

const categories = {
    nature: ['nature', 'landscape', 'forest'],
    city: ['city', 'architecture', 'street'],
    animals: ['animal', 'dog', 'cat'],
    architecture: ['architecture', 'building', 'modern']
};

const INITIAL_ITEMS = 10;
const FILTER_ITEMS = 6;
const ALL_LOAD_MORE_ITEMS = 10;
const FILTER_LOAD_MORE_ITEMS = 6;

let images = [];
let currentCategory = 'all';
let visibleItems = INITIAL_ITEMS;


function createImage(category) {
    const keywords = categories[category];

    const keyword = keywords[
        Math.floor(Math.random() * keywords.length)
    ];

    const lock = Date.now() + Math.random();

    return {
        id: crypto.randomUUID(),
        category: category,
        title: `${category.charAt(0).toUpperCase() + category.slice(1)} photo`,
        image: `https://loremflickr.com/900/700/${keyword}?lock=${lock}`
    };
}


function createInitialImages() {
    images = [];

    Object.keys(categories).forEach(category => {
        for (let i = 0; i < 10; i++) {
            images.push(createImage(category));
        }
    });

    images = shuffleImages(images);
}

function shuffleImages(array) {
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(
            Math.random() * (i + 1)
        );

        [shuffled[i], shuffled[randomIndex]] = [
            shuffled[randomIndex],
            shuffled[i]
        ];
    }

    return shuffled;
}

function getFilteredImages() {
    if (currentCategory === 'all') {
        return images;
    }

    return images.filter(image => {
        return image.category === currentCategory;
    });
}


function renderGallery() {
    const filteredImages = getFilteredImages();

    const visibleImages = filteredImages.slice(
        0,
        visibleItems
    );

    gallery.innerHTML = visibleImages
        .map(image => createGalleryCard(image))
        .join('');

    updateLoadMoreButton(filteredImages.length);
}


function createGalleryCard(image) {
    return `
        <article class="gallery-card">

            <img
                src="${image.image}"
                alt="${image.title}"
                loading="lazy"
            >

            <div class="gallery-card-content">

                <span>${image.category}</span>

                <h2>${image.title}</h2>

                <p>
                    Explore this ${image.category} image.
                </p>

            </div>

        </article>
    `;
}


function updateLoadMoreButton(totalItems) {
    if (visibleItems >= totalItems) {
        loadMoreButton.style.display = 'none';
        return;
    }

    loadMoreButton.style.display = 'block';
}


function handleFilter(category) {
    currentCategory = category;

    if (category === 'all') {
        visibleItems = INITIAL_ITEMS;
    } else {
        visibleItems = FILTER_ITEMS;
    }

    filterButtons.forEach(button => {
        button.classList.remove('active');
    });

    const activeButton = document.querySelector(
        `[data-category="${category}"]`
    );

    activeButton.classList.add('active');

    renderGallery();
}


function loadMore() {
    loadMoreButton.disabled = true;

    loadMoreButton.innerHTML = `
        <span class="load-more-spinner"></span>
        Loading...
    `;

    setTimeout(() => {
        if (currentCategory === 'all') {
            loadMoreAll();
        } else {
            loadMoreCategory();
        }

        renderGallery();

        loadMoreButton.disabled = false;

        loadMoreButton.textContent = 'Load more';
    }, 700);
}

function loadMoreAll() {
    const categoriesList = Object.keys(categories);

    for (let i = 0; i < ALL_LOAD_MORE_ITEMS; i++) {
        const randomCategory =
            categoriesList[
                Math.floor(Math.random() * categoriesList.length)
            ];

        images.push(createImage(randomCategory));
    }

    images = shuffleImages(images);

    visibleItems += ALL_LOAD_MORE_ITEMS;
}

function loadMoreCategory() {
    for (let i = 0; i < FILTER_LOAD_MORE_ITEMS; i++) {
        images.push(createImage(currentCategory));
    }

    visibleItems += FILTER_LOAD_MORE_ITEMS;
}


filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.category;

        handleFilter(category);
    });
});


loadMoreButton.addEventListener('click', loadMore);


createInitialImages();
renderGallery();