document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', function () {
        const articleId = this.id;
        let articleURL;
        
        switch (articleId) {
            case 'article1':
                articleURL = './Sample 1 - Medium Story.pdf';
                break;
            case 'article2':
                articleURL = './Sample 2 - Exam Essay.pdf';
                break;
            case 'article3':
                articleURL = './Sample 3 - Team Story.pdf';
                break;
        }

        window.open(articleURL, '_blank');
    });
});
